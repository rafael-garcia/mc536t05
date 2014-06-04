var util = require("util");
var lastfm = require("./LastfmSearcher");
var mbrainz = require("./MusicBrainzSearcher");
var Pais = require("./entity/pais");
var Cidade = require("./entity/cidade");
var Artista = require("./entity/artista");
var dao = require('./dao');
var dbaccess = require('./dbaccess');

var mbrainzFunction = function(mbid, nomeCorrigido, nomeAntigo, json, type) {
    var pais, nomePais, cidade, nomeCidade, mbContent;

    try {
        mbContent = JSON.parse(json);
        if (type === "LIST") {
            if (mbContent.artist.length > 0) {
                mbContent = mbContent.artist[0]; // sempre o mais relevante
                mbid = mbContent.id;
            } else {
                return; // não encontrado
            }
        } 

        nomePais = mbContent.area ? mbContent.area.name : null;
        pais = new Pais(nomePais);
        
        // FIXME: nao vai funcionar pq no banco temos um NOTNULL. nesse caso, ignorar cidade para o artista
        nomeCidade = mbContent["begin_area"] ? mbContent["begin_area"].name : 
            (mbContent["begin-area"] ? mbContent["begin-area"].name :  null);
        cidade = new Cidade(nomeCidade);

        nomeCorrigido = mbContent.name;
        
        extracaoDadosPassoPais(mbid, nomeCorrigido, nomeAntigo, pais, cidade);

    } catch(ex) {
        console.log(ex);
        console.log("***-- MusicBrainz --***");
        console.log("pais", pais);
        console.log("cidade", cidade);
        console.log("nomeArtistico", nomeCorrigido);
        console.log("***-- MusicBrainz --***");
    }
};

var extracaoDadosPassoArtista = function(artistaProcurado) {
    try {
        dao.searchArtistaByNome(artistaProcurado.nomeArtistico, function(err, resultArr) {
            if (err) {
                throw err;
            }

            if (resultArr.length === 1) {
                var artistaBanco = resultArr[0];
                
                if (artistaProcurado.diff(artistaBanco)) {
                    dao.updateArtistaByNome(artistaProcurado, artistaBanco,
                        function(err, result) {
                            if (result) {
                                console.log("SUCESSO update artista:", result, "\n"); 
                            } else {
                                console.log("ERRO update artista:", err, "\n"); 
                            }
                        });
                } else {
                    console.log("artista já existe na base e é idêntico\n"); 
                }
            } else {
                dao.searchArtistaById(artistaProcurado.mbid, function(err, resultArr) {
                    if (err) {
                        throw err;
                    }

                    if (resultArr.length === 1) {
                        console.log("artista já existente na base e é idêntico");
                    } else {
                        dao.insertArtista(artistaProcurado, function(err, result) {
                            if (result) {
                                console.log("SUCESSO insert artista:", result);
                            } else {
                                console.log("ERRO insert artista:", err);
                            }
                        });
                    }
                });
            }
        });
    } catch (ex) {
        console.log(ex, "artistaProcurado:", artistaProcurado, "\n");
    }
};

var extracaoDadosPassoCidade = function(mbid, nomeCorrigido, nomeAntigo, cidadeProcurada) {
    var artistaProcurado;
    try {
        if (!cidadeProcurada.nome) {
            console.log("cidade SEM dados. ignorando\n");
            artistaProcurado = new Artista(mbid, nomeCorrigido, nomeAntigo, cidadeProcurada);
            extracaoDadosPassoArtista(artistaProcurado);
            return;
        }

        dao.searchCidade(cidadeProcurada, function(err, resultArr) {
            var cidadeBanco, artistaProcurado;

            if (err) {
                throw err;
            }
            
            if (resultArr.length === 1) {
                cidadeBanco = resultArr[0];
                artistaProcurado = new Artista(mbid, nomeCorrigido, nomeAntigo, cidadeBanco);
                extracaoDadosPassoArtista(artistaProcurado);
            } else {
                dao.insertCidade(cidadeProcurada, function(err, result) {
                    var artistaProcurado;
                    if (!result) {
                        throw util.format("extracaoDadosPassoCidade (%s / %s / %s) -> dao.insertCidade : erro INSERT cidade ## %s", mbid, nomeCorrigido, cidadeProcurada, err);
                    }
                    artistaProcurado = new Artista(mbid, nomeCorrigido, nomeAntigo, cidadeProcurada);
                    extracaoDadosPassoArtista(artistaProcurado);
                });
            }
        });
    } catch (ex) {
        console.log(ex);
    }
};

var extracaoDadosPassoPais = function(mbid, nomeCorrigido, nomeAntigo, paisProcurado, cidadeProcurada) {
    var cidadeNovoPais;
    try {
        if (!paisProcurado.nome) {
            console.log("extracaoDadosPassoPais pais SEM dados. ignorando\n");
            cidadeNovoPais = new Cidade(cidadeProcurada.nome);
            console.log("cidadeNovoPais:", cidadeNovoPais, "\n");
            extracaoDadosPassoCidade(mbid, nomeCorrigido, nomeAntigo, cidadeNovoPais);
            return;
        }
        
        dao.searchPais(paisProcurado, function(err, resultArr) {
            var paisBanco, cidadeCombinandoPais;
            
            if (err) {
                throw err;
            }

            if (resultArr.length === 1) {
                paisBanco = resultArr[0];
                cidadeCombinandoPais = new Cidade(cidadeProcurada.nome, paisBanco);
                extracaoDadosPassoCidade(mbid, nomeCorrigido, nomeAntigo, cidadeCombinandoPais);
            } else {
                dao.insertPais(paisProcurado, function(err, result) {
                    var cidadeNovoPais;
                    if (!result) {
                        throw util.format("extracaoDadosPassoPais (%s / %s / %s) -> dao.insertPais : erro INSERT pais ## %s", mbid, nomeCorrigido, paisProcurado, err);
                    }
                    paisProcurado.id = result.insertId;

                    cidadeNovoPais = new Cidade(cidadeProcurada.nome, paisProcurado);
                    extracaoDadosPassoCidade(mbid, nomeCorrigido, nomeAntigo, cidadeNovoPais);
                });
            }
        });
    } catch (ex) {
        console.log(ex);
    }
};

// parte "pública" / acessível para quem chamar require
module.exports = {
    processarResultado: function(result, nomeCorrigido, nomeAntigo) {
        var content, mbid;

        try {
            if (!result) {
                throw util.format("processarResultado (%s): erro extração LASTFM", nomeCorrigido);
            }            
            if (!result.body) {
                throw util.format("processarResultado (%s) -> result.body: LASTFM vazio", nomeCorrigido);
            }
            
            content = JSON.parse(result.body);
            mbid = content.artist.mbid;

            if (mbid) {
                mbrainz.getArtistInfo(mbid, function(err, result) {
                    if (!result) {
                        throw util.format("processarResultado (%s) -> mbrainz.getArtistInfo erro extração básica MBRAINZ", nomeCorrigido);
                    }
                    if (!result.body) {
                        throw util.format("processarResultado (%s) -> mbrainz.getArtistInfo -> result.body MBRAINZ vazio");
                    }

                    mbrainzFunction(mbid, nomeCorrigido, nomeAntigo, result.body, "DIRECT");
                });
            } else {
                mbrainz.getArtistByName(nomeCorrigido, function(err, result) {
                    if (!result) {
                        throw util.format("processarResultado (%s) -> mbrainz.getArtistByName erro extração MBRAINZ direta", nomeCorrigido);
                    }
                    if (!result.body) {
                        throw util.format("processarResultado (%s) -> mbrainz.getArtistByName -> result.body MBRAINZ vazio");
                    }

                    mbrainzFunction(mbid, nomeCorrigido, nomeAntigo, result.body, "LIST");
                });
            }
        } catch (ex) {
            console.log(ex);
        }
    }
}
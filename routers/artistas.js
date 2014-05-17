var express = require('express');
var router = express.Router();
var lastfm = require("../LastfmSearcher");
var mbrainz = require("../MusicBrainzSearcher");
var Pais = require("../entity/pais");
var Cidade = require("../entity/cidade");
var Artista = require("../entity/artista");
var dao = require('../dao');
var dbaccess = require('../dbaccess');

var extracaoDadosPassoArtista = function(artistaProcurado) {
    console.log("111111. extracaoDadosPassoArtista\n");
    dao.searchArtista(artistaProcurado, function(err, resultArr) {
        if (err) {
            console.log("ABORTANDO: erro insert artista:", err);
            return;
        }
        console.log("artistaProcurado:", artistaProcurado, "\n"); 

        if (resultArr.length === 1) {
            var artistaBanco = resultArr[0];
            console.log("artistaBanco:", artistaBanco, "\n"); 
            
            if (artistaProcurado.diff(artistaBanco)) {
                console.log("artistas diferem!!!"); 
                
                dao.updateArtistaById(artistaProcurado, artistaBanco.mbid, 
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
            console.log("artista ainda não existente. gravando...", artistaProcurado, "\n"); 

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

var extracaoDadosPassoCidade = function(mbid, nomeArtistico, cidadeProcurada) {
    console.log("222222. extracaoDadosPassoCidade\n"); 

    if (!cidadeProcurada.nome) {
        console.log("cidade SEM dados. ignorando\n");
        var artistaProcurado = new Artista(mbid, nomeArtistico, cidadeProcurada);
        extracaoDadosPassoArtista(artistaProcurado);
        return;
    }

    dao.searchCidade(cidadeProcurada, function(err, resultArr) {
        if (err) {
            console.log("ABORTANDO: erro insert cidade:", err);
            return;
        }
        
        if (resultArr.length === 1) {
            var cidadeBanco = resultArr[0];
            console.log("cidadeBanco:", cidadeBanco, "\n"); 
            var artistaProcurado = new Artista(mbid, nomeArtistico, cidadeBanco);
            extracaoDadosPassoArtista(artistaProcurado);

        } else {
            console.log("cidade ainda não existente. gravando...", cidadeProcurada); 

            dao.insertCidade(cidadeProcurada, function(err, result) {
                if (result) {
                    console.log("SUCESSO insert cidade:", result, "\n"); 

                    var artistaProcurado = new Artista(mbid, nomeArtistico, cidadeProcurada);
                    extracaoDadosPassoArtista(artistaProcurado);
                } else {
                    console.log("ERRO insert cidade:", err, "\n");
                }
            });
        }
    });  
}

var extracaoDadosPassoPais = function(mbid, nomeArtistico, paisProcurado, cidadeProcurada) {
    console.log("333333. extracaoDadosPassoPais\n");

    if (!paisProcurado.nome) {
        console.log("pais SEM dados. ignorando\n");
        var cidadeNovoPais = new Cidade(cidadeProcurada.nome);
        console.log("cidadeNovoPais:", cidadeNovoPais, "\n");
        extracaoDadosPassoCidade(mbid, nomeArtistico, cidadeNovoPais);
        return;
    }
    
    dao.searchPais(paisProcurado, function(err, resultArr) {
        if (err) {
            console.log("ABORTANDO: erro insert pais:", err, "\n");
            return;
        }

        if (resultArr.length === 1) {
            var paisBanco = resultArr[0];
            console.log("paisBanco:", paisBanco, "\n"); 
            var cidadeCombinandoPais = new Cidade(cidadeProcurada.nome, paisBanco);
            console.log("cidadeCombinandoPais:", cidadeCombinandoPais, "\n"); 
                extracaoDadosPassoCidade(mbid, nomeArtistico, cidadeCombinandoPais);
        } else {
            console.log("pais ainda não existente. gravando...", paisProcurado, "\n"); 

            dao.insertPais(paisProcurado, function(err, result) {
                if (result) {
                    console.log("SUCESSO insert pais:", result, "\n");

                    paisProcurado.id = result.insertId;

                    var cidadeNovoPais = new Cidade(cidadeProcurada.nome, result);
                    console.log("cidadeNovoPais:", cidadeNovoPais, "\n");
                    extracaoDadosPassoCidade(mbid, nomeArtistico, cidadeNovoPais);
                } else {
                    console.log("ERRO insert pais:", err, "\n");
                }
            });
        }
    });
}

router.get('/', function(req, res) {
    dao.listArtista(function(err, rows, fields) {
        res.render('artistas/index', {
            artistas: rows
        });
    });
});

var mbrainzFunction = function(mbid, nomeArtistico, json, type) {
    var pais, nomePais, cidade, nomeCidade, nomeArtistico, mbContent = JSON.parse(json);
    console.log(mbContent);

    if (type === "LIST") {
        if (mbContent.artist.length > 0) {
            mbContent = mbContent.artist[0]; // sempre o mais relevante
            mbid = mbContent.id;
            // console.log("\nmbContent LIST:", mbContent, "\n");
            // console.log("\nmbContent -> begin_area:", mbContent["begin_area"], "\n");
            // console.log("\nmbContent -> 'begin_area':", mbContent["'begin_area'"], "\n");
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

    nomeArtistico = mbContent.name;

    console.log("***-- MusicBrainz --***");
    console.log("pais", pais);
    console.log("cidade", cidade);
    console.log("nomeArtistico", nomeArtistico);
    console.log("***-- MusicBrainz --***");

    extracaoDadosPassoPais(mbid, nomeArtistico, pais, cidade);
};

var processarResultado = function(result, nomeArtistico) {
    if (result) {
        if (result.body) {
            console.log("result.body", result.body);

            var content = JSON.parse(result.body);
            var mbid = content.artist.mbid;

            if (mbid) {
                mbrainz.getArtistInfo(mbid, function(err, result) {
                    if (result) {
                        if (result.body) {
                            console.log("MBRAINZ result.body", result.body);
                            mbrainzFunction(mbid, nomeArtistico, result.body, "DIRECT");
                        } else {
                            console.log("result.body MBRAINZ **vazio**");    
                        }
                    } else {
                        console.log("erro extração MBRAINZ");
                    }
                });
            } else {
                mbrainz.getArtistByName(nomeArtistico, function(err, result) {
                    if (result) {
                        if (result.body) {
                            console.log("buscando DIRETAMENTE no MBRAINZ:", nomeArtistico, "\n"); 
                            console.log("result.body MBRAINZ-search", result.body);
                            mbrainzFunction(mbid, nomeArtistico, result.body, "LIST");
                        } else {
                            console.log("buscando DIRETAMENTE no MBRAINZ:", nomeArtistico, "\n"); 
                            console.log("result.body MBRAINZ-search **vazio**");    
                        }
                    } else {
                        console.log("buscando DIRETAMENTE no MBRAINZ:", nomeArtistico, "\n"); 
                        console.log("erro extração MBRAINZ");
                    }
                });
            }
        } else {
            console.log("result.body LASTFM **vazio**");    
        }
    } else {
        console.log("erro extração LASTFM");
    }
};

router.get('/extrair/:artista', function(req, res) {
    var nomeArtistico = req.params.artista;
    lastfm.getArtistInfo(nomeArtistico, function(err, result) {
        processarResultado(result, nomeArtistico);
    });
});

router.get('/extrair', function(req, res) {
    var query = 'SELECT nome_artistico FROM artista';
    dbaccess.query(query, function(err, rows) {
        var artistas = rows.map(function(row) {
            return row['nome_artistico'];
        });
        lastfm.on('artistInfo', function(err, result, nomeArtistico) {
            processarResultado(result, nomeArtistico);
        });
        lastfm.getArtistInfoByBatch(artistas);
    });
});

router.post('/', function(req, res) {
    var query = 'INSERT INTO artista (nome_artistico) VALUES (?)';
    var params = [req.body.nomeArtistico];
    dbaccess.query(query, params, function(err, result) {
        res.redirect('/artistas');
    });
});

router.get('/criar', function(req, res) {
    res.render('artistas/form');
});

router.post('/:nomeArtistico', function(req, res) {
    var query = 'UPDATE artista SET nome_artistico = ? WHERE nome_artistico = ?';
    var params = [req.body.nomeArtistico, req.params.nomeArtistico];
    dbaccess.query(query, params, function(err, result) {
        res.redirect('/artistas');
    });
});

router.get('/editar/:nomeArtistico', function(req, res) {
    var query = 'SELECT * FROM artista WHERE nome_artistico = ?';
    var params = [req.params.nomeArtistico];
    dbaccess.query(query, params, function(err, result) {
        res.render('artistas/form', result[0]);
    });
});

router['delete']('/:nomeArtistico', function(req, res) {
    var query = 'DELETE FROM artista WHERE nome_artistico = ?';
    var params = [req.params.nomeArtistico];
    dbaccess.query(query, params, function(err, result) {
        res.send(result);
    });
});

module.exports = router;
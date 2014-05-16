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
    dao.searchArtista(artistaProcurado, function(err, resultArr) {
        if (err) {
            console.log("ABORTANDO: erro insert artista:", err);
            return;
        }

        if (resultArr.length === 1) {
            var artistaBanco = resultArr[0];
            console.log("artistaBanco:", artistaBanco); 
            
            if (artistaProcurado.diff(artistaBanco)) {
                console.log("artistas diferem"); 
                
                dao.updateArtistaById(artistaProcurado, artistaBanco.mbid, 
                    function(err, result) {
                        if (result) {
                            console.log("sucesso update artista:", result); 
                        } else {
                            console.log("erro update artista:", err); 
                        }
                    });
            } else {
                console.log("artista já existe na base e é idêntico"); 
            }
        } else {
            console.log("artista ainda não existente. gravando...", artistaProcurado); 

            dao.insertArtista(artistaProcurado, function(err, result) {
                if (result) {
                    console.log("sucesso insert artista:", result); 
                } else {
                    console.log("EITA insert artista:", err); 
                }
            });
        }
    });
}

var extracaoDadosPassoCidade = function(mbid, nomeArtistico, cidadeProcurada) {
    console.log("extracaoDadosPassoCidade"); 
    dao.searchCidade(cidadeProcurada, function(err, resultArr) {
        if (err) {
            console.log("ABORTANDO: erro insert cidade:", err);
            return;
        }
        
        if (resultArr.length === 1) {
            var cidadeBanco = resultArr[0];
            console.log("cidadeBanco:", cidadeBanco); 
            var artistaProcurado = new Artista(mbid, nomeArtistico, cidadeBanco.nome);
            extracaoDadosPassoArtista(artistaProcurado);

        } else {
            console.log("cidade ainda não existente. gravando...", cidadeProcurada); 

            dao.insertCidade(cidadeProcurada, function(err, result) {
                if (result) {
                    console.log("sucesso insert cidade:", result); 

                    var artistaProcurado = new Artista(mbid, nomeArtistico, cidadeProcurada.nome);
                    extracaoDadosPassoArtista(artistaProcurado);
                } else {
                    console.log("erro insert cidade:", err);
                }
            });
        }
    });  
}

var extracaoDadosPassoPais = function(mbid, nomeArtistico, paisProcurado, cidadeProcurada) {
    console.log("extracaoDadosPassoPais"); 
    
    dao.searchPais(paisProcurado, function(err, resultArr) {
        if (err) {
            console.log("ABORTANDO: erro insert pais:", err);
            return;
        }

        if (resultArr.length === 1) {
            var paisBanco = resultArr[0];
            console.log("paisBanco:", paisBanco); 
            var cidadeCombinandoPais = new Cidade(cidadeProcurada.nome, paisBanco);
                (mbid, nomeArtistico, cidadeCombinandoPais);
        } else {
            console.log("pais ainda não existente. gravando...", paisProcurado); 

            dao.insertPais(paisProcurado, function(err, result) {
                if (result) {
                    console.log("sucesso insert pais:", result);

                    var cidadeNovoPais = new Cidade(cidadeProcurada.nome, result);
                    console.log("cidadeNovoPais:", cidadeNovoPais);
                    extracaoDadosPassoCidade(mbid, nomeArtistico, cidadeNovoPais);
                } else {
                    console.log("erro insert pais:", err);
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

var mbrainzFunction = function(json) {
    var pais, nomePais, cidade, nomeCidade, nomeArtistico, mbContent = JSON.parse(json);
    console.log(mbContent);


    if (mbContent.area) {
        nomePais = mbContent.area.name;
    }

    pais = new Pais(nomePais);
    
    // FIXME: nao vai funcionar pq no banco temos um NOTNULL. nesse caso, ignorar cidade para o artista
    nomeCidade = mbContent["begin_area"] ? mbContent["begin_area"].name : null;
    cidade = new Cidade(nomeCidade);

    nomeArtistico = mbContent.name; 

    console.log(pais);
    console.log(cidade);
    console.log(nomeArtistico);

    extracaoDadosPassoPais(mbid, nomeArtistico, pais, cidade);
}

router.get('/extrair/:artista', function(req, res) {
    var artistName = req.params.artista;
    lastfm.getArtistInfo(artistName, function(err, result) {
        if (result) {
            if (result.body) {
                console.log("result.body", result.body);

                var content = JSON.parse(result.body);
                var mbid = content.artist.mbid;

                if (mbid) {
                    mbrainz.getArtistInfo(mbid, function(err, result) {
                        if (result) {
                            if (result.body) {
                                console.log("result.body", result.body);
                                
                                mbrainzFunction(result.body);

                            } else {
                                console.log("result.body mbrainz **vazio**");    
                            }
                        } else {
                            console.log("erro extração MBRAINZ");
                        }
                    });
                } else {
                    mbrainz.getArtistByName(artistName, function(err, result) {
                        if (result) {
                            if (result.body) {
                                console.log("result.body MBRAINZ 1st:", result.body);
                                
                                mbrainzFunction(result.body);

                            } else {
                                console.log("result.body mbrainz **vazio**");    
                            }
                        } else {
                            console.log("erro extração MBRAINZ");
                        }
                    });
                }
            } else {
                console.log("result.body lastfm **vazio**");    
            }
        } else {
            console.log("erro extração LASTFM");
        }
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
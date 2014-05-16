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
    dao.searchArtistaById(artistaProcurado, function(err, artistaBanco) {
        if (artistaBanco) {
            if (artistaProcurado.diff(artistaBanco())) {
                dao.updateArtistaById(artistaProcurado, artistaBanco.mbid, 
                    function(err, result) {
                        if (result) {
                            console.log("sucesso update artista:", result); 
                        }
                    });
            } else {
                console.log("artista já existe na base e é idêntico"); 
            }
        } else {
            console.log("artista ainda não existente. gravando..."); 

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
    dao.searchCidade(cidadeProcurada, function(err, cidadeBanco) {
        if (cidadeBanco) {
            var artistaProcurado = new Artista(mbid, nomeArtistico, cidadeBanco.nome);
            extracaoDadosPassoArtista(artistaProcurado);

        } else {
            console.log("possivel erro insert cidade:", err);
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
    
    dao.searchPais(paisProcurado, function(err, paisBanco) {
        if (paisBanco) {
            var cidadeCombinandoPais = new Cidade(cidadeProcurada.nome, paisBanco);
            extracaoDadosPassoCidade(mbid, nomeArtistico, cidadeCombinandoPais);
        } else {
            console.log("possivel erro insert pais:", err);
            dao.insertPais(paisProcurado, function(err, result) {
                if (result) {
                    console.log("sucesso insert pais:", result);

                    var cidadeNovoPais = new Cidade(cidadeProcurada.nome, result);
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

router.get('/extrair/:artista', function(req, res) {
    lastfm.getArtistInfo(req.params.artista, function(err, result) {
        var content = JSON.parse(result.body);
        var mbid = content.artist.mbid;
        
        mbrainz.getArtistInfo(mbid, function(err, result) {
            var mbContent = JSON.parse(result.body);
            console.log(mbContent);

            var nomePais = mbContent.area.name;
            var pais = new Pais(nomePais);
            
            var nomeCidade = mbContent["begin_area"].name;
            var cidade = new Cidade(nomeCidade);

            var nomeArtistico = mbContent.name;

            console.log(pais);
            console.log(cidade);
            console.log(nomeArtistico);

            extracaoDadosPassoPais(mbid, nomeArtistico, pais, cidade);

            var query = 'UPDATE artista SET pais_id = ? WHERE nome_artistico = ?';
            var params = [req.body.nomeArtistico, req.params.nomeArtistico];
        });
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
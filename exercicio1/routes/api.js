// require da base de dados
const express = require('express');
const router = express.Router();
var Publicacao = require('../controllers/publicacoes');

router.get('/pubs', function(req, res) {
  const type = req.query.type
  const year = req.query.year
  const autor = req.query.autor
  if(type==null && year==null && autor==null){
    Publicacao.listar_fst()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
  }
  if(type!= null && year==null && autor==null){
      //query do type
      Publicacao.listar_type(type)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))

  }
  if(type!=null && year!=null && autor==null){
      //query com os 2
      Publicacao.listar_type_year(type,year)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
      
  }

  if(autor!=null && type==null && year==null){
      console.log(autor)
    Publicacao.listar_autor(autor)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
  }
    
})

router.get('/types', function(req, res) {
    Publicacao.tipos()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
})

router.get('/autores', function(req, res) {
    Publicacao.listar_autores()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
  })

router.get('/:id', function(req, res) {
    Publicacao.consultar(req.params.id)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
  })




module.exports = router;
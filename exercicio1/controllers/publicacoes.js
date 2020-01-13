var Publicacoes = require('../models/publicacoes')

// Devolve a lista de alunos
module.exports.listar_fst = () => {
    return Publicacoes
        .find({},{ id: 1, title: 1,year:1,type:1,_id:0})
        .exec()
}

module.exports.consultar = id => {
    return Publicacoes
        .findOne({id: id})
        .exec()
}

module.exports.tipos = () => {
    return Publicacoes
        .find({},{_id:0, type:1})
        .distinct('type')
        .exec()
}

module.exports.listar_type = type => {
    return Publicacoes
        .find({type:type})
        .exec()
}

module.exports.listar_type_year = (type,year) => {
    return Publicacoes
        .find({type:type,year:year})
        .exec()
}

module.exports.listar_autores = () => {
    return Publicacoes
        .aggregate([{$unwind: "$authors"},{$group: {_id: "$authors"}},{$sort: {_id: 1}}])
        .exec()
}

module.exports.listaAutores = () =>{
    return Pub
            .aggregate([{$unwind: "$authors"},{$group: {_id: "$authors"}},{$sort: {_id: 1}}])
            .exec()
}

module.exports.listar_autor = (autor) => {
    return Publicacoes
        .find({authors:autor})
        .exec()
}



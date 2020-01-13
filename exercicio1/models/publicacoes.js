const mongoose = require('mongoose')

var publicacoesSchema = new mongoose.Schema({
    type: String,
    id: String,
    authors:[{
        type: String
    }],
    editors:[{
        type: String
    }],
    title: String,
    chapter:String,
    pages:String,
    publisher:String,
    year:String,
    month:String,
    doi:String
})

module.exports = mongoose.model('publicacoes', publicacoesSchema)
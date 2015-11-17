var mongoose = require('mongoose');

var ArtistaSchema = mongoose.Schema({
	nome: String,
	genero: String
});

module.exports = mongoose.model('Artista', ArtistaSchema);


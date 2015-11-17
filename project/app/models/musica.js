var mongoose = require('mongoose');

var MusicaSchema = mongoose.Schema({
	nome: String,
	genero: String,
	cantor: String,
	album: String
});

module.exports = mongoose.model('Musica', MusicaSchema);
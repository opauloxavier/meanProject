var mongoose = require('mongoose');

var AlbumSchema = mongoose.Schema({
	nome: String,
	cantor: String,
	ano: String
});

module.exports = mongoose.model('Album', AlbumSchema);
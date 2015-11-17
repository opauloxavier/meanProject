var mongoose = require('mongoose');

var GeneroSchema = mongoose.Schema({
	nome: String
});

module.exports = mongoose.model('Genero', GeneroSchema);
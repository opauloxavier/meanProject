var User = require('./models/user');
var Musica = require('./models/musica');
var Artista = require('./models/artista');
var Album = require('./models/album');
var Genero = require('./models/genero');

module.exports = function(app){

	app.get('/api/users', function(req, res){

		User.find(function(err, users){

			if(err)
				res.send(err);

			res.json(users);
		});
	});

	app.get('/api/musicas', function(req, res){

		Musica.find(function(err, musicas){

			if(err)
				res.send(err);

			res.json(musicas);
		});
	});

	app.get('/api/musicas/:nomeCantor', function(req, res){

		Musica.find({'cantor': req.params.nomeCantor}, function(err, musicasCantor){

			if(err)
				res.send(err);

			res.json(musicasCantor);
		});
	});

	app.get('/api/artistas', function(req, res){

		Artista.find(function(err, artistas){

			if(err)
				res.send(err);

			res.json(artistas);
		});
	});

	app.get('/api/artistas/:nomeCantor', function(req, res){

		Artista.findOne({'nome': req.params.nomeCantor}, function(err, Cantor){

			if(err)
				res.send(err);

			res.json(Cantor);
		});
	});

	app.get('/api/albums', function(req, res){

		Album.find(function(err, albums){

			if(err)
				res.send(err);

			res.json(albums);
		});
	});


	app.get('/api/albums/:nomeCantor', function(req, res){

		Album.find({'cantor': req.params.nomeCantor}, function(err, albumsCantor){

			if(err)
				res.send(err);

			res.json(albumsCantor);
		});

	});


	app.get('/api/generos', function(req, res){

		Genero.find(function(err, generos){

			if(err)
				res.send(err);

			res.json(generos);
		});
	});


	app.post('/api/users', function(req, res){

		var user = new User();
		user.name = req.body.nome;
		user.username = req.body.usuario;
		user.email = req.body.email;
		user.password = req.body.senha;

		user.save(function(err){
		
			if(err)
				res.send(err);

			res.redirect('/');
			//res.json({message: 'Usuário Criado'});
		});
	});

	app.post('/api/musicas', function(req, res){

		var musica = new Musica();
		
		musica.nome = req.body.nomeMusica;
		musica.genero = req.body.genero;
		musica.cantor = req.body.nomeCantor;
		musica.album = req.body.album;

		musica.save(function(err){
		
			if(err)
				res.send(err);

			res.redirect('/');
		});
	});

	app.post('/api/artistas', function(req, res){

		var artista = new Artista();
		
		artista.nome = req.body.nome;
		artista.genero = req.body.genero;

		artista.save(function(err){
		
			if(err)
				res.send(err);

			res.redirect('/');
		});
	});

	app.post('/api/albums', function(req, res){

		var album = new Album();
		
		album.nome = req.body.nome;
		album.cantor = req.body.cantor;
		album.ano = req.body.ano;

		album.save(function(err){
		
			if(err)
				res.send(err);

			res.redirect('/');
		});
	});


	app.post('/api/generos', function(req, res){

		var genero = new Genero();
		
		genero.nome = req.body.nome;

		genero.save(function(err){
		
			if(err)
				res.send(err);

			res.redirect('/');
		});
	});

	app.post('/login',function(req,res){
		User.findOne({email : req.body.email}, function(err, user){
			if(!user){
				 res.redirect("/login");
			}

			else{
				if (req.body.senha === user.password) {
					req.session.user = user;
					req.session.logged = true;
					res.redirect("/");
        			
     			}
     			else
     				res.redirect("/login");
			}

		});
	});

	app.get('/api/logged', function(req, res){

		if(req.session.logged){
			res.json({username:req.session.user.username,name:req.session.user.name,logged:true});
		}
		else{
			res.json({name:"Visitante",logged:false});
		}

	});

	app.get('/api/logout', function(req, res){

		req.session.destroy();
		res.redirect("/");

	});

	app.get('/api/users/:user_id', function(req, res){

		User.findById(req.params.user_id, function(err, user){

			if(err)
				res.send(err);

			res.json(user);
		});
	});

	app.get('/api/musicas/:musica_id', function(req, res){

		Musica.findById(req.params.musica_id, function(err, user){

			if(err)
				res.send(err);

			res.json(user);
		});
	});

	app.get('/api/albums/:album_id', function(req, res){

		Album.findById(req.params.album_id, function(err, user){

			if(err)
				res.send(err);

			res.json(user);
		});
	});

	app.get('/api/artistas/:artista_id', function(req, res){

		Artista.findById(req.params.artista_id, function(err, user){

			if(err)
				res.send(err);

			res.json(user);
		});
	});

	app.get('/api/generos/:generos_id', function(req, res){

		Genero.findById(req.params.generos_id, function(err, user){

			if(err)
				res.send(err);

			res.json(user);
		});

	});




	app.put('/api/users/:user_id', function(req, res){

		User.findById(req.params.user_id, function(err, user){

			if(err)
				res.send(err);

			user.name = req.body.name;
			user.username = req.body.username;
			user.email = req.body.email;
			user.password = req.body.password;

			user.save(function(err){
				if(err)
					res.send(err);

				res.json({message: 'Usuário Atualizado'});
			});
		});
	});

	app.delete('/api/users/:user_id', function(req, res){

		User.remove({_id: req.params.user_id}, function(err, user){

			if(err)
				res.send(err);

			res.json({message: 'Usuário deletado com sucesso!'})
		});
	});

	app.get('*', function(req, res){

		res.sendfile('./public/views/index.html');
	});

};
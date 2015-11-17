// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', []).controller('MainController', function($http,$scope) {

    $scope.tagline = 'To the moon and back!';   


	$http.get("/api/artistas").success(function(response){
			$scope.Artistas = response;
	});

	$http.get("/api/musicas").success(function(response){
			$scope.Musicas = response;
	});

	$http.get("/api/generos").success(function(response){
			$scope.Generos = response;
	});

});

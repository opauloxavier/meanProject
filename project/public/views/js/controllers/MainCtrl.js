// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', []).controller('MainController', function($http,$scope,$rootScope,$route) {

	$rootScope.getLogged = function(){
		$http.get("/api/logged").success(function(response){
			$rootScope.user=response;

			if($rootScope.user.logged)
				$rootScope.logged=true;

			else
				$rootScope.logged=false;

		});
	}

	$rootScope.logout = function(){
		$http.get("/api/logout").success(function(response){
			$route.reload();
		});	
	}  

	$rootScope.getLogged();

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

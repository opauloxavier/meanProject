// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // nerds page that will use the NerdController
        .when('/cadastro', {
            templateUrl: 'views/cadastro.html',
            controller: 'MainController'
        })

        .when('/login', {
            templateUrl: 'views/entrar.html',
            controller: 'MainController'
        })

         .when('/artistas', {
            templateUrl: 'views/artistas.html',
            controller: 'MainController'
        })

         .when('/sobre', {
            templateUrl: 'views/sobre.html',
            controller: 'MainController'
        })

          .when('/detalheArtista/:nomeCantor', {
            templateUrl: 'views/detalhe.html',
            controller: 'ArtistaController'
        })

          .when('/inserir/:nomeCantor', {
            templateUrl: 'views/inserir.html',
            controller: 'InserirController'
        })
        ;

    $locationProvider.html5Mode(true);

}]);

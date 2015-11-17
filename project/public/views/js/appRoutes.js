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
            controller: 'NerdController'
        })

        .when('/entrar', {
            templateUrl: 'views/entrar.html',
            controller: 'NerdController'
        })

         .when('/artistas', {
            templateUrl: 'views/artistas.html',
            controller: 'MainController'
        })

         .when('/sobre', {
            templateUrl: 'views/sobre.html',
            controller: 'NerdController'
        })

          .when('/detalheArtista', {
            templateUrl: 'views/detalhe.html',
            controller: 'NerdController'
        })
        ;

    $locationProvider.html5Mode(true);

}]);

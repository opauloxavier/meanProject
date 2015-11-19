angular.module('sampleApp', ['ngRoute', 'appRoutes', 'MainCtrl', 'InserirCtrl','ArtistaCtrl']).config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);



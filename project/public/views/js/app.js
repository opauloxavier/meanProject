angular.module('sampleApp', ['SessionService','ngRoute', 'appRoutes', 'MainCtrl', 'InserirCtrl','ArtistaCtrl']).config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);



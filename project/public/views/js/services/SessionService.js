angular.module('SessionService', []).factory('Session', ['$http', function($http) {

    return {
        getLogged : function() {
            return $http.get("/api/logged/").data;
        },

        setLogged : function(user) {

          if(user.logged)
                return true;

            else
                return false;
        }

    }       

}]);
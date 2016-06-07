(function () {
    var app = angular.module('buscar', []);

    app.factory('RESTful', ['$http', function ($http) {
        var response = {};
        response.getDatos = function () {
            return $http.get('api/datitos');
        };
        response.postDatos = function (datitos) {
            return $http.post('api/datitos', datitos);
        };
        response.getDato = function (id) {
            var uri = 'api/datitos/' + id;
            return $http.get(uri);
        };
        response.putDato = function (id, datitos) {
            var uri = 'api/datitos/' + id;
            return $http.put(uri, datitos);
            //return $http.put(id,datos);
        };
        response.getRaro = function () {
            return $http.get('js/controladores/datitos.json');
        };
        return response;
        }]);



    app.controller('mioControl', ['$scope', 'RESTful', function ($scope, RESTful) {

        /*+++++++++++++++++++++++
         * 
         ++++++++++++++++++++++*/
        cargarRaro();

        function cargarRaro() {
            RESTful.getRaro()
                .success(function (datosCargados) {
                    console.log('------' + datosCargados);
                    $scope.datos = datosCargados;
                });
        };
    }]);
})();
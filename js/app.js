'use strict';

angular
.module('audienciasV2',[
  'ngMessages',
  'ngResource',
  'ngRoute',
  'ngCookies'
])
.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl:'vistas/acceso.html',
    controller: 'AccesoCtrl',
    controllerAs: 'acceso'
  })
  .when('/agendando',{
    templateUrl: 'vistas/agendando.html',
    controller: 'AgendandoCtrl',
    controllerAs: 'agendando'
  })
  .otherwise({
    redirectTo:'/'
  });
});

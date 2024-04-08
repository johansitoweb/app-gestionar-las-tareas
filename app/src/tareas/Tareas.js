(function(){
  var app = angular.module('tareas', []);

  app.controller('TareasController', function(){


  });

  app.directive('listaTareas', function(){
    return{
      restrict: 'E',
      templateUrl: 'src/tareas/view/tareas.html',
      controllerAs: 'vm',
      scope: {
        tareas: "="
      },

      controller: function($filter){

        this.tareaNueva = {};
        this.hoy = $filter('date')(new Date(), 'yyyy-MM-dd');

        this.anadeTarea = function(listaTareas){
          this.tareaNueva.date = this.hoy;
          listaTareas.push(this.tareaNueva);
          this.tareaNueva = {};
        };
      }
    };
  });

})();
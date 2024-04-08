(function(){
  'use strict';

  angular.module('users')
         .service('userService', ['$q', UserService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function UserService($q){
    var users = [
      {
        name: 'Manson',
        avatar: 'svg-1',
        content: 'Me gusta programar, pero me gusta más aun echar horas',
        tareas:[
          {
            date: "2016-05-26",
            title: "pasar por parámetro la lista de tareas a la directiva lista-tareas",
            resuelta: true,
            position: 1
          },
          {date: "2016-05-15",
            title: "subir tarea a la lista de hoy -> fijar fecha de hoy y listo",
            resuelta: false,
            position: 1
          },
          {date: "2016-05-15",
            title: "enganchar con firebase",
            resuelta: false,
            position: 1
          },
          {date: "2016-05-14",
            title: "Desarrollar nuevo servicio InformaVistoService",
            resuelta: true,
            position: 1
          },
          {date: "2016-05-14",
            title: "Enviar solicitud de test de seguridad, entorno ya disponible",
            resuelta: true,
            position: 1
          },
          {date: "2016-05-13",
            title: "Revisión requisitos usuario InformaVistoService",
            resuelta: false,
            position: 1
          }
        ]
      },
      {
        name: 'Viscaralascasca',
        avatar: 'svg-2',
        content: 'Suelo jugar al rol sin parar, y a veces hago commits',
        tareas:[
          {
            date: "2016-05-15",
            title: "Programar comportamientos en la pantalla de comunicaciones",
            resuelta: false,
            position: 1
          },
          {date: "2016-05-15",
            title: "Abrir incidencia por dependencia de host en el api cuando consultamos comunicaciones",
            resuelta: true,
            position: 1
          },
          {date: "2016-05-15",
            title: "Reparto de tareas pantalla de comunicaciones",
            resuelta: true,
            position: 1
          },
          {date: "2016-05-13",
            title: "Reunión de planificación próximo sprint",
            resuelta: false,
            position: 1
          },
          {date: "2016-05-12",
            title: "Incidencia al consultar el número de mensajes sin leer.",
            resuelta: true,
            position: 1
          },
          {date: "2016-05-09",
            title: "Desarrollo front pantalla de comunicaciones",
            resuelta: true,
            position: 1
          }
        ]
      }
    ];

    // Promise-based API
    return {
      loadAllUsers : function() {
        // Simulate async nature of real remote calls
        return $q.when(users);
      }
    };
  }

})();

((app)=>{
  'use strict'
  app.component('agenda', {
    templateUrl:'js/components/agenda/agenda.html',
    controller:function(){
      angular.extend(this, {
        date:new Date()

      })
    }
  })
})(angular.module('app.agenda'))

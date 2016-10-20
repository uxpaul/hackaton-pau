((app)=> {
  'use strict'
  app.component('bonplan', {
    templateUrl:'js/components/bonplan/bonplan.html',
    controller:function(){
      angular.extend(this, {
        date:new Date()

      })
    }
  })
})(angular.module('app.bonplan'))

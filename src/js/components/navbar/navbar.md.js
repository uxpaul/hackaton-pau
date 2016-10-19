((app)=>{
  'use strict'
  app.config(['$stateProvider', ($stateProvider) => {
    $stateProvider.state('app.navbar', {
      url:'/',
      template:'<navbar/>'
    })
  }])
})(angular.module('app.navbar', []))

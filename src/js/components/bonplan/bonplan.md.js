((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.bonplan', {
            url: '/bonplan',
            template: '<bonplan />'
        })
    }])
})(angular.module('app.bonplan', []))

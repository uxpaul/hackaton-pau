((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.agenda', {
            url: '/agenda',
            template: '<agenda />'
        })
    }])
})(angular.module('app.agenda', []))

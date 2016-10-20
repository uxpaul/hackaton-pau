((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.quiz', {
            url: '/quiz',
            template: '<quiz />'
        })
    }])
})(angular.module('app.quiz', []))

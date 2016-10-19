((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.quiz', {
            url: '/',
            template: '<quiz />'
        })
    }])
})(angular.module('app.quiz', []))

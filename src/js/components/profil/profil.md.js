((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.profil', {
            url: '/profile',
            template: '<profil />'
        })
    }])
})(angular.module('app.profil', []))

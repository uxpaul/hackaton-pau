((app) => {

    app.component('navbar', {
        templateUrl: 'js/components/navbar/navbar.html',
        controller: function($location, $scope) {
            $scope.$watch(function() {
                return $location.path()
            }, function(path) {
                $scope.current = path;
            });
            
            angular.extend(this, {
                $onInit() {
                    $scope.current = $location.path()
                }
            })
        }
    })
})(angular.module('app.navbar'))

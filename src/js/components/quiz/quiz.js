((app) => {
    'use strict'
    app.component('quiz', {
        templateUrl: 'js/components/quiz.html',
        controller: function() {
          angular.extend(this,{
            quiz(){
              


            }
          })
        }
    })
})(angular.module('app.quiz'))

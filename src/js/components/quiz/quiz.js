((app) => {
    'use strict'
    app.component('quiz', {
        templateUrl: 'js/components/quiz/quiz.html',
        controller: function() {
            angular.extend(this, {
                quizzes : [
                  {title:"Quiz 1",
<<<<<<< HEAD
            },
              {title:"Quiz 3"
            },
              {title:"Quiz 2"
=======

                },
                  {title:"Quiz 3"
                },
                  {title:"Quiz 2"
>>>>>>> 66aa42421afc8a7fe5a59d66c6dd8f491903486a

            }],
            transforms: [],
            startIndex : 0,
            $onInit() {
                this.transforms = [{
                    x: 0,
                    z: 0,
                    scale: 1,
                    opacity: 1
                }, {
                    x: '-55%',
                    z: '-50px',
                    scale: 0.8,
                    opacity: 0.8
                }, {
                    x: '55%',
                    z: '-50px',
                    scale: 0.8,
                    opacity: 0.8
                }];
            },
            nextTransform(x) {
                if (x >= this.cards.length - 1) {
                    x = 0;
                } else {
                    x++;
                }
<<<<<<< HEAD
                return x;
            },
            //ng-click
            next() {
                this.cards = document.getElementsByClassName('card')
                for (let i = 0; i < this.cards.length; i++) {
                    this.cards[i].style.transform =
                        'translateX(' + this.transforms[this.nextTransform(i)].x + ')' +
                        'translateZ(' + this.transforms[this.nextTransform(i)].z + ')' +
                        'scale(' + this.transforms[this.nextTransform(i)].scale + ')';
                    this.cards[i].style.opacity = this.transforms[this.nextTransform(i)].opacity;
                }
                this.transforms.push(this.transforms.shift());
            }
        })
    }
})

=======

            })
        }
    })
>>>>>>> 66aa42421afc8a7fe5a59d66c6dd8f491903486a
})(angular.module('app.quiz'))

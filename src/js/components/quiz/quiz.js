((app) => {
    'use strict'
    app.component('quiz', {
        templateUrl: 'js/components/quiz/quiz.html',
        controller: function() {
            angular.extend(this, {
                quizzes : [
                  {title:"Welcome to Bordeaux?",
                  image:"img/stmichel.jpg",
                  question1: "Who was St Michel?"
                },
                  {title:"Place de La Bourse",
                  image:"img/place_bourse.jpg",
                  question2: "Where is the place de Bourse?"
                },
                  {title:"Bad day at work?",
                  image:"img/client_mecontent.jpg",
                  question3: "How do you keep calm?"
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
})(angular.module('app.quiz'))

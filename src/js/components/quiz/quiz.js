((app) => {
    'use strict'
    app.component('quiz', {
        templateUrl: 'js/components/quiz.html',
        controller: function() {
          angular.extend(this,{
            var cards = document.getElementsByClassName('card'),
    transforms = [
  { x: 0,
    z: 0,
    scale: 1,
    opacity: 1
  },
  { x: '-55%',
    z: '-50px',
    scale: 0.8,
    opacity: 0.8
  },
  {
    x: '55%',
    z: '-50px',
    scale: 0.8,
    opacity: 0.8
  }
];

var nextTransform = function(x) {
  if (x >= cards.length - 1) {
    x = 0;
  } else {
    x++;
  }
  return x;
};

function next() {
  for (i = 0; i < cards.length; i++) {
    cards[i].style.transform =
      'translateX(' + transforms[nextTransform(i)].x + ')' +
      'translateZ(' + transforms[nextTransform(i)].z + ')' +
      'scale(' + transforms[nextTransform(i)].scale + ')';
    cards[i].style.opacity = transforms[nextTransform(i)].opacity;
  }
  transforms.push(transforms.shift());
}

document.getElementById('carousel').onclick = function() {
  next();
};

          })
        }
    })
})(angular.module('app.quiz'))

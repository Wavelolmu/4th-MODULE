let path = anime.path('#demo-svg path');

anime({
  targets: '#moon',
  translateX: path('x'),
  easing: 'inElastic',
  translateY: path('y'),
  rotate: path('angle'),
  easing: 'linear',
  duration: 10000,
  loop: true
});

window.onload = setTimeout(function() {
  document.querySelector('#flower2').style.opacity = '1';

  anime({
    targets: '#flower2',
    easing: 'cubicBezier(.5, .05, .1, .3)',
    translateX: path('x'),
    translateY: path('y'),
    rotate: path('angle'),
    easing: 'linear',
    duration: 10010,
    loop: true
  });
}, 1200);

window.onload = setTimeout(function() {
  document.querySelector('#condi').style.opacity = '1';

  anime({
    targets: '#condi',
    easing: 'cubicBezier(.5, .05, .1, .3)',
    translateX: path('x'),
    translateY: path('y'),
    rotate: path('angle'),
    easing: 'linear',
    duration: 10010,
    loop: true
  });
}, 2400);

window.onload = setTimeout(function() {
  document.querySelector('#flower1').style.opacity = '1';

  anime({
    targets: '#flower1',
    easing: 'cubicBezier(.5, .05, .1, .3)',
    translateX: path('x'),
    translateY: path('y'),
    rotate: path('angle'),
    easing: 'linear',
    duration: 10010,
    loop: true
  });
}, 3600);

window.onload = setTimeout(function() {
  document.querySelector('#vacuum1').style.opacity = '1';

  anime({
    targets: '#vacuum1',
    easing: 'cubicBezier(.5, .05, .1, .3)',
    translateX: path('x'),
    translateY: path('y'),
    rotate: path('angle'),
    easing: 'linear',
    duration: 10010,
    loop: true
  });
}, 4800);

window.onload = setTimeout(function() {
  document.querySelector('#skull').style.opacity = '1';

  anime({
    targets: '#skull',
    easing: 'cubicBezier(.5, .05, .1, .3)',
    translateX: path('x'),
    translateY: path('y'),
    rotate: path('angle'),
    easing: 'linear',
    duration: 10010,
    loop: true
  });
}, 6000);

window.onload = setTimeout(function() {
  document.querySelector('#brush').style.opacity = '1';

  anime({
    targets: '#brush',
    easing: 'cubicBezier(.5, .05, .1, .3)',
    translateX: path('x'),
    translateY: path('y'),
    rotate: path('angle'),
    easing: 'linear',
    duration: 10010,
    loop: true
  });
}, 7200);

window.onload = setTimeout(function() {
  document.querySelector('#demon').style.opacity = '1';

  anime({
    targets: '#demon',
    easing: 'cubicBezier(.5, .05, .1, .3)',
    translateX: path('x'),
    translateY: path('y'),
    rotate: path('angle'),
    easing: 'linear',
    duration: 10010,
    loop: true
  });
}, 8400);

function intro() {
  document.querySelector('.question').style.animation = 'none';
  document.querySelector('#question-first').style.display = 'none';
  document.querySelector('#question-second').style.display = 'none';
  document.querySelector('#question-third').style.display = 'none';
  document.querySelector('#question-fourth').style.display = 'none';
  document.querySelector('#logo').style.opacity = '1';
  document.querySelector('#cleaning').style.opacity = '1';
  document.querySelector('#yes').style.opacity = '0';
  setTimeout(() =>
  document.querySelector('#yes').style.display = 'none', 300);
};

let path2 = anime.path('#demo-svg2 path');

anime({
  targets: '#bucket',
  translateX: path2('x'),
  translateY: path2('y'),
  rotate: path2('angle'),
  easing: 'linear',
  duration: 8000,
  loop: true,
});

window.onload = setTimeout(function() {
  document.querySelector('#vacuum2').style.opacity = '1';

  anime({
    targets: '#vacuum2',
    translateX: path2('x'),
    translateY: path2('y'),
    rotate: path2('angle'),
    easing: 'linear',
    duration: 8000,
    loop: true
  });
}, 1500);

window.onload = setTimeout(function() {
  document.querySelector('#dagger').style.opacity = '1';

  anime({
    targets: '#dagger',
    translateX: path2('x'),
    translateY: path2('y'),
    rotate: path2('angle'),
    easing: 'linear',
    duration: 8000,
    loop: true
  });
}, 3000);

window.onload = setTimeout(function() {
  document.querySelector('#moon2').style.opacity = '1';

  anime({
    targets: '#moon2',
    translateX: path2('x'),
    translateY: path2('y'),
    rotate: path2('angle'),
    easing: 'linear',
    duration: 8000,
    loop: true
  });
}, 4500);

var i = 1;
var l = setInterval(function() {
    if (i % 2 === 1) {
      k = 2;
    } else {
      k = -2;
    };
    document.querySelector('#bucket').style.zIndex = k;
    // console.log(k);
    i++;
  }, 4000);

var m = 1;
var l = setTimeout(() => {
  setInterval(function() {
    if (m % 2 === 1) {
      k = 2;
    } else {
      k = -2;
    };
    document.querySelector('#vacuum2').style.zIndex = k;
    // console.log(k);
    m++;
  }, 4000);
}, 1500);

var n = 1;
var l = setTimeout(() => {
  setInterval(function() {
    if (n % 2 === 1) {
      k = 2;
    } else {
      k = -2;
    };
    document.querySelector('#dagger').style.zIndex = k;
    // console.log(k, i);
    n++;
  }, 4000);
}, 3000);

var o = 1;
var l = setTimeout(() => {
  setInterval(function() {
    if (o % 2 === 1) {
      k = 2;
    } else {
      k = -2;
    };
    document.querySelector('#moon2').style.zIndex = k;
    // console.log(k, i);
    o++;
  }, 4000);
}, 4500);

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

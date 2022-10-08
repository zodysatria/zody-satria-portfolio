var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(300)
  .typeString('root@zodysatria:$cat me.txt ')
  .pauseFor(300)
  .start();
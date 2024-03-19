var tim = 0;

function createRandomBall() {
  const container = document.querySelector('body');
  if (tim < 18){
    tim++;
    const ball = document.createElement('div');
    ball.classList.add('ball');
    ball.style.left = `${Math.random()*35}%`;
    ball.style.backgroundColor = randomColor();
    container.appendChild(ball);
    }
  } 

setInterval(createRandomBall, 500);

var tim1 = 0;

function createRandomBall2() {
  const container = document.querySelector('body');
  if (tim1 < 18){
    tim1++;
    const ball = document.createElement('div');
    ball.classList.add('ball');
    ball.style.right = `${Math.random()*35}%`;
    ball.style.backgroundColor = randomColor();
    container.appendChild(ball);
    }
  } 

setInterval(createRandomBall2, 500);

function randomColor() {
    return `rgb(255,255,255)`;
  }
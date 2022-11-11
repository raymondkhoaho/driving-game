var $car = document.querySelector('.car');

function rotateCar(event) {
  if (event.key === 'ArrowLeft') {
    $car.setAttribute('class', 'car west');
  } else if (event.key === 'ArrowDown') {
    $car.setAttribute('class', 'car south');
  } else if (event.key === 'ArrowUp') {
    $car.setAttribute('class', 'car north');
  } else if (event.key === 'ArrowRight') {
    $car.setAttribute('class', 'car east');
  }
}

var id = setInterval(moveCar, 16);
clearInterval(id);

var position = 0;
function startCar(event) {
  if (event.key === ' ') {
    id = setInterval(moveCar, 16);
  }

}
function moveCar() {
  if (position === 100) {
    clearInterval(id);
  } else {
    position++;
    $car.style.left = position + '2px';
  }
}

document.addEventListener('keydown', rotateCar);
document.addEventListener('keydown', startCar);

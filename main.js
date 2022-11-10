var $car = document.querySelector('.car');

function rotateCar(event) {
  if (event.key === 'ArrowLeft') {
    $car.setAttribute('class', 'car west');
  } else if (event.key === 'ArrowDown') {
    $car.setAttribute('class', 'car south');
  } else if (event.key === 'ArrowUp') {
    $car.setAttribute('class', 'car north');
  } else if (event.key === 'ArrowRight') {
    $car.setAttribute('class', 'car');
  }
}

document.addEventListener('keydown', rotateCar);

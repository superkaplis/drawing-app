const container = document.getElementById('container')

const resetBtn = document.getElementById('resetBtn')
resetBtn.addEventListener('click', () => {
  const allDivs = document.querySelectorAll('.griddy');
  allDivs.forEach(sqrDiv => {
    sqrDiv.style.backgroundColor = 'rgb(255, 255, 255)'
  })
})

populateGrid(256);

const newGridBtn = document.getElementById('newGridBtn');

newGridBtn.addEventListener('click', function () {
  let sqrNum = 0;

  do {
    sqrNum = prompt('Enter squares per side:')
    if (sqrNum > 100) {
      alert('cant enter number bigger than 100')
    }
  } while (sqrNum > 100);

  let returnVal = sqrNum * sqrNum;
  let widthHeight = (100 / sqrNum);
  populateGrid(returnVal, widthHeight);
})


function populateGrid(sqrCount, sqrWidth) {

  const oldSquares = document.querySelectorAll('.griddy')
  oldSquares.forEach(element => {
    element.remove();
  })

  for (i = 0; i < sqrCount; i++) {
    const sqr = document.createElement('div');
    sqr.classList.add('griddy')
    sqr.style.width = `${sqrWidth}%`
    sqr.style.height = `${sqrWidth}%`
    sqr.style.backgroundColor = 'rgb(255, 255, 255)';

    sqr.addEventListener('mouseover', () => {
      let currentBg = sqr.style.backgroundColor
      let lightVal = currentBg.slice(4, 7);
      let newVal = lightVal - 50;
      sqr.style.backgroundColor = `rgb(${newVal}, ${newVal}, ${newVal})`
    })

    container.appendChild(sqr);
  }
}


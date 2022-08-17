const container = document.getElementById('container')


function populateGrid(sqrCount, sqrWidth) {
  
  const oldSquares = document.querySelectorAll('.griddy')

  oldSquares.forEach(element => {
    element.remove();
  })


  for (i = 0; i < sqrCount; i++) {
    const div = document.createElement('div');
    div.classList.add('griddy')
    div.style.width = `${sqrWidth}%`
    div.style.height = `${sqrWidth}%`



    div.addEventListener('mouseover', () => {
      div.style.backgroundColor = 'black'
    })

    container.appendChild(div);
  }

}

populateGrid(256);

const newGridBtn = document.getElementById('newGridBtn');

newGridBtn.addEventListener('click', function() {
  let sqrNum = prompt('Enter squares per side:')
  let returnVal = sqrNum * sqrNum;
  let widthHeight = (100 / sqrNum);
  populateGrid(returnVal, widthHeight);
})
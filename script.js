const container = document.getElementById('container')

for(i = 0; i < 256; i++){
  const div = document.createElement('div');
  div.classList.add('griddy')
  
  div.addEventListener('mouseover', () => {
    div.style = "background-color: black;"
  })
  
  container.appendChild(div);
}

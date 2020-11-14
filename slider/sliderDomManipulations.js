const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const itemsList = document.querySelector("#items");

let currentRight = 0;

rightBtn.addEventListener('click', e => {
  e.preventDefault();
  if (currentRight < 500) {
    currentRight += 100;
    itemsList.style.right = `${currentRight}px`;
  }
  
});

leftBtn.addEventListener('click', e => {
  e.preventDefault();
  if (currentRight >= 100 ) {
    currentRight -= 100;
    itemsList.style.right = `${currentRight}px`;
  } 
  
});
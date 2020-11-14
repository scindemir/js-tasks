const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const itemsList = document.querySelector("#items");
const computedStyle = getComputedStyle(itemsList);


rightBtn.addEventListener('click', e => {
  e.preventDefault();

  let currentRight = parseInt(computedStyle.right); 
  if (currentRight < 500) {
    currentRight += 100;
    itemsList.style.right = `${currentRight}px`;
  }
  
});

leftBtn.addEventListener('click', e => {
  e.preventDefault();

  let currentRight = parseInt(computedStyle.right);
  if (currentRight >= 100 ) {
    currentRight -= 100;
    itemsList.style.right = `${currentRight}px`;
  } 
  
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector('#controls input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');


function createBoxes(amount){
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    div.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(div);  

  }

  return fragment; 
}


createButton.addEventListener('click',()=>{
  const amount=input.value;

  if (amount<1||amount>100){
    return alert('Please enter a number between 1 and 100');

};
  const boxes=createBoxes(amount);
  input.value='';
const boxesContainer=document.querySelector('#boxes');
boxesContainer.innerHTML='';
boxesContainer.appendChild(boxes);
})
destroyButton.addEventListener('click',()=>{
  document.querySelector('#boxes').innerHTML='';
}) 


const hamburgerList = document.querySelector('.js-hamburger-list');
const hiddenDiv = document.querySelector('.js-hidden-div');

let hamburgerStatus = true;
hamburgerList.addEventListener('click', ()=> {
  if(hamburgerStatus){
    hamburgerStatus = false;
    hiddenDiv.removeAttribute('class', 'display-none')
    console.log(hamburgerStatus);
  }else{
    hamburgerStatus = true;
    hiddenDiv.setAttribute('class', 'display-none')
    console.log(hamburgerStatus);
  }
});
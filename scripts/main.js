let myImage = document.querySelector('img');



let myHeading = document.querySelector('h1');
function setUserName() {
let myname=null ;
  
  myHeading.textContent = 'Why you should date me '
}

  if(!localStorage.getItem('name')) {
    setUserName(); } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = ' Why you should date me '
  }
  
let mybutton = document.querySelector('button');
mybutton.onclick = function() {window.location.href="Liar.html"}
  
  

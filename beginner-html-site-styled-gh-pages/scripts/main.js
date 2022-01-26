let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src','images/firefox2.png');
    } else {
      myImage.setAttribute('src','images/firefox-icon.png');
    }
}

function setUserName() {
  let myName = prompt('あなたの名前を入力してください。');
  
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla はすばらしいよ、' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla はすばらしいよ、' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

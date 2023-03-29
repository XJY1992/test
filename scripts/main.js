let myImage=document.querySelector('img');
myImage.onclick=()=>{
    let mySrc=myImage.getAttribute('src');
    if(mySrc==='images/BSR.jpg'){
        myImage.setAttribute('src','images/XJY.jpg');
    }else{
        myImage.setAttribute('src','images/BSR.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName){
        setUserName();
    }else{
    localStorage.setItem('name', myName);
    myHeading.textContent = '帅呆啦 酷毙了，' + myName;
    }
  }

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = '帅呆啦 酷毙了，' + storedName;
}

myButton.onclick = function() {
    setUserName();
 }
 


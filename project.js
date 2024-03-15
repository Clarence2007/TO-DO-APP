let lightMode = document.getElementById('lightMode');
let darkMode = document.getElementById('darkMode');
let firstHalf = document.getElementById('first-half');
let body = document.getElementById('body');

lightMode.onclick = () =>{
    lightMode.style.display =
     "none";
    darkMode.style.display = 
    "flex"
    firstHalf.style.backgroundImage = 
    "url(./bg-desktop-light.jpg)";
    body.style.backgroundColor = 
    '#fff';
    document.querySelector("li")
    .style.backgroundColor = "#fff"; 
    document.querySelector("li")
    .style.borderBottomColor = "hsl(235, 21%, 11%)"; 
   
}
darkMode.onclick = () =>{
    darkMode.style.display =
     "none";
    lightMode.style.display = 
    "flex"
    firstHalf.style.backgroundImage = 
    "url(images/bg-desktop-dark.jpg)";
    body.style.backgroundColor = 
    ' hsl(235, 21%, 11%)';
    document.querySelector("#li").
    style.backgroundColor = " hsl(235, 21%, 11%)";
}
const input = document.getElementById('input');
const btn = document.getElementById('btn');
let ul = document.getElementById('ul');
let list = document.createElement('li');
btn.onclick = () =>{
   if(input.value === ""){
    alert('You have to add item to do!!!');
   }else{
    let list = document.createElement('li');
    list.innerHTML = input.value;
    list.id = "li";
    ul.appendChild(list);
    input.value='';
    // console.log(input.value);
    list.onclick = () =>{
        if(list.style.textDecoration ==="line-through"){
            list.style.textDecoration ="none";
            list.style.color = " hsl(234, 39%, 85%)"
        } else {
         list.style.textDecoration ="line-through"
         list.style.color = "grey";
        }    
     };
   
     span.onclick = function(){
         menu.removeChild(list);   
     }
   }
  
};

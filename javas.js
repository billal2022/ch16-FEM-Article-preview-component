const btn = document.querySelector(`.icon-icon-share`)//this is the button 
const content=document.querySelector(".content")//this is the animated box for the button
const scale=document.querySelector(".scale")


btn.addEventListener("click" ,()=>{

  content.classList.toggle("scale")
  if (!content.classList.contains("scale")) {
    btn.style.backgroundColor="hsl(217, 19%, 35%)"
  }else{
    btn.style.backgroundColor="" 
  }
console.log("hi");
}) 

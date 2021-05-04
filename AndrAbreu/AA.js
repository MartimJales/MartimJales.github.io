let default_btn= document.querySelector(".default_btn")
let grey_btn=document.querySelector(".grey_btn")
let blue_btn=document.querySelector(".blue_btn")
let red_btn=document.querySelector(".red_btn")
let yellow_btn=document.querySelector(".yellow_btn")


default_btn.addEventListener( 'click', (e)=>{
  e.preventDefault();
  document.querySelector("body").style.background= "aliceblue";
})
grey_btn.addEventListener( 'click', (e)=>{
  e.preventDefault();
  document.querySelector("body").style.background= "grey";
})
blue_btn.addEventListener( 'click', (e)=>{
  e.preventDefault();
  document.querySelector("body").style.background= "blue";
})
red_btn.addEventListener( 'click', (e)=>{
  e.preventDefault();
  document.querySelector("body").style.background= "red";
})
yellow_btn.addEventListener( 'click', (e)=>{
  e.preventDefault();
  document.querySelector("body").style.background= "yellow";
})
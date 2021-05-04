let submitBtn= document.querySelector(".forms #butt-submit");

submitBtn.addEventListener("click", submittt);

function submittt (e){
  e.preventDefault();
  
  let item= document.querySelector("#item").value;
  if(item== "bad"){
    window.location.href = "https://400-bad-request.martimjales.repl.co/pedro.html";
  }
}



 
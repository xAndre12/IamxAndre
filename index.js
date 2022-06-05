let button = document.querySelector("button")
let header = document.querySelector("nav")
let text= document.querySelector("h1")
button.addEventListener("click", ()=>{
    button.style.visibility="hidden";
    text.style.visibility="visible";
})
setInterval(()=> {
    header.style.backgroundColor="rgb(4, 175, 175)";
    button.style.backgroundColor="cyan";
    text.style.color="cyan";
 }, 1000)
 setInterval(()=> {
    header.style.backgroundColor="hotpink";
    button.style.backgroundColor="hotpink";
    text.style.color="hotpink";
  }, 2000)

  setInterval(()=> {
    text.style.transform = 'scale(1.4)'
 }, 1000)
 setInterval(()=> {
    text.style.transform = 'scale(0.8)'
 }, 2000)

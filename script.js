console.log("script is running");

const myName = document.querySelector(".myname").innerText;
myName.addeventListner("click" , ()=>{console.log("clicked")})
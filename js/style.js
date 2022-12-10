
let nav = document.querySelector("nav");
let menu = document.querySelector('#menubar');
let myul = document.querySelector('ul');
let btn  = document.querySelector('.btn a');
window.onscroll = function () {
  if (window.scrollY >= 50) {
    nav.style.background = "white";
    nav.style.borderBottom = "1.5px solid rgb(207 203 203)";
    btn.classList.add("active");
   
  } else {
    nav.style.background = "none";
    nav.style.border = "none";
    btn.classList.remove("active");
    
  }
};
// ############
menu.onclick = () => {
  menu.classList.toggle('fa-times')
  myul.classList.toggle('active')
}
//start fun for to change for Bg is the ul
function fun (){
let myul = document.querySelector('ul');
window.addEventListener("scroll", function(){
  if(window.scrollY >=50){
    myul.classList.add("activeition");
  }else{
    myul.classList.remove('activeition');
  }
})
}
fun ();
//End fun for to change for Bg is the ul


// start code change color for the  a and color #menubar
function mybody(){
  let body = document.querySelector("body");
  let butn = document.querySelector("#menubar")
  window.addEventListener("scroll", function(){
    if(window.scrollY >=50){
      body.classList.add("active");
      butn.classList.add("active");
    }else{
      body.classList.remove("active");
      butn.classList.remove("active");
    }
  })
}
mybody();
// End code change color for the a
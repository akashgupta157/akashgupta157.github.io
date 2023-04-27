function NewTab() {
  window.open("Akash-Gupta-Resume.pdf", "_blank");
}
let click = document.getElementById("click");
let hbo = document.getElementById("hbo");
let hbc = document.getElementById("hbc");
click.onclick = () => {
  if (click.checked) {
    hbo.style.display = "none";
    hbc.style.display = "flex";
  } else {
    hbo.style.display = "flex";
    hbc.style.display = "none";
  }
};
var myNav = document.getElementById("nav-menu");
var tablet = window.matchMedia("(max-width:768px)")
var mobile = window.matchMedia("(max-width:480px)")
window.onscroll = () => {
  if (document.documentElement.scrollTop >= 10) {
    myNav.style.backgroundColor = "#3a89d0";
    if(tablet.matches || mobile.matches){
      myNav.style.backgroundColor="transparent"
    }
  }else{
    myNav.style.backgroundColor = "transparent";
  }
};

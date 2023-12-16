let react = document.getElementById("react");
let mui = document.getElementById("mui");
let njs = document.getElementById("njs");
let mdb = document.getElementById("mdb");
let git = document.getElementById("git");
let github = document.getElementById("github");
let click = document.getElementById("click");
let hbo = document.getElementById("hbo");
let hbc = document.getElementById("hbc");
let tablet = window.matchMedia("(max-width:768px)");
let mobile = window.matchMedia("(max-width:480px)");
let home = document.querySelector(".home");
let about = document.querySelector(".about");
let skills = document.querySelector(".skills");
let projects = document.querySelector(".projects");
let contact = document.querySelector(".contact");
click.onclick = () => {
  if (click.checked) {
    hbo.style.display = "none";
    hbc.style.display = "flex";
  } else {
    hbo.style.display = "flex";
    hbc.style.display = "none";
  }
};
if (mobile.matches || tablet.matches) {
  home.onclick = () => {
    click.checked = false;
    hbo.style.display = "flex";
    hbc.style.display = "none";
  };
  about.onclick = () => {
    click.checked = false;
    hbo.style.display = "flex";
    hbc.style.display = "none";
  };
  skills.onclick = () => {
    click.checked = false;
    hbo.style.display = "flex";
    hbc.style.display = "none";
  };
  projects.onclick = () => {
    click.checked = false;
    hbo.style.display = "flex";
    hbc.style.display = "none";
  };
  contact.onclick = () => {
    click.checked = false;
    hbo.style.display = "flex";
    hbc.style.display = "none";
  };
  react.setAttribute("data-aos", "fade-right");
  mui.setAttribute("data-aos", "fade-left");
  njs.setAttribute("data-aos", "fade-left");
  mdb.setAttribute("data-aos", "fade-right");
  git.setAttribute("data-aos", "fade-right");
  github.setAttribute("data-aos", "fade-right");
}
function NewTab() {
  window.open("Resume.pdf", "_blank");
  click.checked = false;
  hbo.style.display = "flex";
  hbc.style.display = "none";
}
var myNav = document.getElementById("nav-menu");
window.onscroll = () => {
  if (document.documentElement.scrollTop >= 10) {
    myNav.style.backgroundColor = "white";
    myNav.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";
    if (tablet.matches || mobile.matches) {
      myNav.style.backgroundColor = "transparent";
      myNav.style.boxShadow = "none";
    }
  } else {
    myNav.style.boxShadow = "none";
    myNav.style.backgroundColor = "transparent";
  }
};

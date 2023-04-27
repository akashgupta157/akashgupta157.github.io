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

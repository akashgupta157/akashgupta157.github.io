// document.addEventListener('scroll',()=>{
//     const header = document.querySelector('nav')
//     const nav=document.querySelector(".nav")
//     const img=document.querySelector("#home")
//     const about=document.querySelector("#about")
//     const skill=document.querySelector("#skill")
//     const project=document.querySelector("#projects")
//     if (window.scrollY>0) {
//         header.classList.add('scroll')
//         nav.classList.add('scroll')
//         img.style.paddingTop="100px"
//         img.style.webkitTransition="all 0.5s ease-in"
//         about.style.paddingTop="117px"
//         skill.style.paddingTop="100px"
//         project.style.paddingTop="100px"
//     }else{
//         header.classList.remove('scroll')
//         nav.classList.remove('scroll')
//         img.style.paddingTop="0px"
//         about.style.paddingTop="100px"
//         about.style.marginTop="100px"
//         skill.style.paddingTop="10rem"
//         project.style.paddingTop="0px"
//     }
// })
function NewTab() {
    window.open(
    "Akash-Gupta-Resume.pdf", "_blank");
}

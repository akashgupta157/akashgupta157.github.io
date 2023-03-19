document.addEventListener('scroll',()=>{
    const header = document.querySelector('nav')
    const nav=document.querySelector(".nav")
    const img=document.querySelector("#home")
    const skill=document.querySelector("#skill")
    if (window.scrollY>0) {
        header.classList.add('scroll')
        nav.classList.add('scroll')
        img.style.paddingTop="100px"
        skill.style.paddingTop="100px"
        img.style.webkitTransition="all 0.5s ease-in"
    }else{
        header.classList.remove('scroll')
        nav.classList.remove('scroll')
        img.style.paddingTop="0px"
    }
})
function NewTab() {
    window.open(
    "Akash-Gupta-Resume.pdf", "_blank");
}





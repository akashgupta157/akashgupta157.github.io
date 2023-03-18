document.addEventListener('scroll',()=>{
    const header = document.querySelector('nav')
    const nav=document.querySelector(".nav")
    // const img=document.querySelector("#home")
    if (window.scrollY>0) {
        header.classList.add('scroll')
        nav.classList.add('scroll')
        // img.style.marginTop="100px"
    }else{
        header.classList.remove('scroll')
        nav.classList.remove('scroll')
        // img.style.marginTop="0px"
    }
})

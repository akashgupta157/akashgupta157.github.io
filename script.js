document.addEventListener('scroll',()=>{
    const header = document.querySelector('nav')
    const nav=document.querySelector(".nav")
    if (window.scrollY>0) {
        header.classList.add('scroll')
        nav.classList.add('scroll')
    }else{
        header.classList.remove('scroll')
        nav.classList.remove('scroll')
    }
})
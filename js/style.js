const menu =document.querySelector('.navbar')

function navToggle(e){
    if (!e.target.classList.contains('active')){
        e.target.classList.add('active')
        gsap.to('.nav-1',0.5,{rotate:"45",y:4,background:"black"})
        gsap.to('.nav-2',0.5,{rotate:"-45",y:-4,background:"black"})
        gsap.to('.titel-nav',{color:"black"})
        gsap.to('.menu-nav',{clipPath:"circle(2500px at 100%)"})
    }
    else{
        e.target.classList.remove('active')
        gsap.to('.nav-1',0.5,{rotate:"0",y:0,background:"white"})
        gsap.to('.nav-2',0.5,{rotate:"0",y:0,background:"white"})
        gsap.to('.titel-nav',{color:"white"})
        gsap.to('.menu-nav',{clipPath:"circle(50px at 100%)"})
    
    }
}

menu.addEventListener('click',navToggle)
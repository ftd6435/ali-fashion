'use strict'

var instragramSlider = new Swiper('.instagram-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect:{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,   
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    }
});


let navbar = document.querySelector('.navbar');
let navOnglets = document.querySelectorAll('.nav-link');
let navbarMenu = document.querySelector('.navbar-nav');
let closeMenuv = document.querySelector('.close-bars');
let openMenuv = document.querySelector('.menu-bars');

function openMenu(){
    navbarMenu.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
    closeMenuv.style.display = "inline-block";
    openMenuv.style.display = "none";
}

function closeMenu(){
    navbarMenu.style.clipPath = "polygon(0 0, 100% 0, 100% 0, 0 0)";
    closeMenuv.style.display = "none";
    openMenuv.style.display = "inline-block";
}

// scroll mooth after click
navOnglets.forEach(nav => {
    nav.addEventListener('click', function(e){
        let id = e.target.getAttribute('data-sec');

        navOnglets.forEach(n => {
            let test = n.getAttribute('data-sec');
            test == id ? n.classList.add('active') : n.classList.remove('active');;

            document.querySelector(`.section-${id}`).scrollIntoView({behavior: "smooth"});
        });
    });
});

// sticky navbar 
window.addEventListener('scroll', function stickyFunction (){
    if(window.scrollY >= 100){
        navbar.classList.add('sticky');
    }else{
        navbar.classList.remove('sticky');
    }
});


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
let navbarMenu = document.querySelector('.navbar-nav');
let closeMenuv = document.querySelector('.close-bars');
let openMenuv = document.querySelector('.menu-bars');

const galleryItem = document.querySelectorAll('.gallery-item');
// for container
const boxContenainer = document.createElement('div');
// for basic area 
const boxContent = document.createElement('div');
// for images
const boxImg = document.createElement('img');
// for prev button to change images 
const btnPrev = document.createElement('div');
// for next button to change images 
const btnNext = document.createElement('div');


// create classList 
boxContenainer.classList.add('lightbox');
boxContent.classList.add('lightbox-content');
btnPrev.classList.add('fa', 'fa-angle-left', 'lightbox-prev');
btnNext.classList.add('fa', 'fa-angle-right', 'lightbox-next');

boxContenainer.appendChild(boxContent);
boxContent.appendChild(boxImg);
boxContent.appendChild(btnPrev);
boxContent.appendChild(btnNext);

document.body.appendChild(boxContenainer);

let index = 1;

function showLightBox(n){
    if(n > galleryItem.length){
        index = 1
    }else if(n < 1){
        index = galleryItem.length;
    }

    let imageLocation = galleryItem[index-1].getAttribute("src");
    boxImg.setAttribute('src', imageLocation);
}


function currentImage(){
    boxContenainer.style.display = "block";
    let imageIndex = parseInt(this.getAttribute('data-index'));
    showLightBox(index = imageIndex);
}

for(let i = 0; i < galleryItem.length; i++){
    galleryItem[i].addEventListener('click', currentImage);
}

function sliderImage(n){
    showLightBox(index +=n);
}

function prevImage(){
    sliderImage(-1);
}

function nextImage(){
    sliderImage(1);
}

btnPrev.addEventListener('click', prevImage);
btnNext.addEventListener('click', nextImage);

function closeBox(){
    if(this === event.target){
        boxContenainer.style.display = 'none';
    }
}

boxContenainer.addEventListener('click', closeBox);



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

// sticky navbar 
window.addEventListener('scroll', function stickyFunction (){
    console.log('start');
    if(window.scrollY >= 100){
        navbar.classList.add('sticky');
        console.log('in');
    }else{
        navbar.classList.remove('sticky');
    }
});


// ============================ SHOW MENU ===========================//
const navMenu = document.getElementById('nav-menu'),
      navToggle =document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


// Menu show//
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
       
    })
}

// Menu hidden//
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// ================================= REMOVE MENU MOBILE =========================//
const navLink = document.querySelectorAll('.nav--link')

const linkAction = () =>{
    const navMenu  = document.getElementById('nav-menu')
    // when we click on each nav--link we remove the show-menu
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// ============================= SWIPER CAR ==============================//
const swiperHome  = new Swiper('.home--swiper', {
      speed: 1200,
      effect: 'fade',


    pagination: {
      el: '.swiper-pagination',
       clickable: true, 
       renderBullet: (index, className) => {
        return '<span class="' + className + '">' + String(index + 1).padStart(2, '0') + "</span>";
      },
    },
  });




  // ========================== GSAP ANIMATION ==============
   gsap.from('.home--panel-1', {y: -1000, duration: 2})
   gsap.from('.home--panel-2', {y: 1000, duration: 2})
   gsap.from('.home--image', {x: -1000, duration: 2})
   gsap.from('.home--tittle', {y: 1000, opacity: 0, delay: 2.1})
  // ======================= ADD BLUR HEADER ============================//
  const blurHeader = () => {
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of vh
    this.scrollY >= 50 ? header.classList.add('blur-header')
                             :header.classList.remove('blur-header')
  }

  window.addEventListener('scroll', blurHeader)
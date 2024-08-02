//  ============== SHOW MENU =========================
const toggle = document.getElementById('nav-toggle');
const close = document.getElementById('nav-close');
const navMenu = document.getElementById('nav-menu');



//  Menu show
if(toggle) {
    toggle.addEventListener('click', () => {
        navMenu.classList.add("show-menu")

    })
}
// Menu hidden
if(close){
    close.addEventListener('click', () => {
        navMenu.classList.remove("show-menu")
    })
}


// ===================== REMOVE MENU MOBILE =====================//
const navLink = document.querySelectorAll('.nav--link');


const rihanCode = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener('click', rihanCode ))

// const linkAction = () => {
//     const navMenu = document.getElementById('nav-menu')
//     //  When We click on each nav--link we Remove the show-menu class//
//     navMenu.classList.remove("show-menu")
// }
// navLink.forEach(n => n.addEventListener('click', linkAction))

// ======================================= SHADOW HEADER ===================================
const shadowHeader = () => {
    const header = document.getElementById('header')
    //  Add a class if the bottom offset is > 50 of the 
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                        : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)


//  ========================== SWIPER FAVORITES =============================//
const swiperFavorites = new Swiper('.favorites--swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 'auto', 
    centredSlides: 'auto',
});


// ======================== SHOW SCROLL UP =============================//
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is hgher than 350 vh , add the 
    this.scrllY >= 350 ? scrollUp.classList.add('show-scroll')
                       : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);


// =========================== SCROLL SECTIONS ACTIVE LINK =======================//
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offseHeight,
        sectionTop = current.ffsetTop -58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav--menu a [href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')

        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}

// ================= SCROLL REVEAL ANIMATION ===========================/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    // reset: true, //Animations repeat


})

sr.reveal(`.home--data, .favorites--container, .footer--container`)
sr.reveal(`.home--circle, .home--img`, {delay: 600, scale: .5})
sr.reveal(`.home--chips-1, .home--chips-2, .home--chips-3,`, {delay: 1000, interval: 100})
sr.reveal(`.home--leaf`, {delay: 1200})
sr.reveal(`..home--tomato-1, .home--tomato-2`, {delay: 1400, interval: 100})
sr.reveal(`.care--img, .contact--img`, {origin: 'left'})
sr.reveal(`.care--list, .contact--data`, {origin: 'right'})
sr.reveal(`.banner--item, .products--card`, {interval: 100});
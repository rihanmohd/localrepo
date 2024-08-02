// ========================= SHOW MENU ==========================//
const navMenu = document.getElementById('nav-menu')
const navClose = document.getElementById('nav-close')
const navToggle = document.getElementById('nav-toggle')


// Menu Show//
if (navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add("show-menu")
    })
}
// Menu hidden//
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove("show-menu")
    })
}

// ============================== REMOVE MENU MOBILE =================//
const navLink = document.querySelectorAll('.nav--link')

const some = ()=>{
    const navMenu = document.getElementById('nav-menu')

    // when we click on each nav-link we remove show-menu clas//
          navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener('click', some))




// ========================== ADD BLUR HEADER ============================//
const blurHeader = () => {
    const header = document.getElementById('header')
    // Add a class if the bottom offset is graeter than 50 of the //
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       :header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)


// ================ SHOW SCROLL UP ============================//
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 vh add the 
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



// ======================== SCROLL SECTIONS ACTIVE LINK -==============//
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
               sectionTop = current.offsetTop -58,
               sectionId = current.getAttribute('id'),
               sectionsClass = document.querySelector('.nav--menu a[href*=' + sectionId + ']')


    if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
        sectionsClass.classList.add('active-link')

    }else{
        sectionsClass.classList.remove('active-link')
    }
    }) 
}
window.addEventListener('scroll', scrollActive)


// ================================ SCROLL REVEAL ANIMATION ==============//
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2500,
    delay: 300,
    // reset: true, //Anamations repeat

})

sr.reveal(`.home--img, .new--data, .care--img, .contact--content, .footer`)
sr.reveal(`.home--data, .care--list, .contact--img`, {delay: 500})
sr.reveal(`.new--card`, {delay: 500, interval: 100})
sr.reveal(`.shop--card`, { interval: 100})



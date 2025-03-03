/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
// TYPEWRITER 
        const words = ["Web Developer", "UI/UX Designer", "Freelancer"];
        let wordIndex = 0;
        let charIndex = 0;
        let isErasing = false;
        const typingSpeed = 100;
        const erasingSpeed = 50;
        const delayBetweenWords = 1500;
        
        function typeEffect() {
            const span = document.querySelector(".typewriter");
            
            if (!isErasing && charIndex < words[wordIndex].length) {
                span.textContent += words[wordIndex].charAt(charIndex);
                charIndex++;
                setTimeout(typeEffect, typingSpeed);
            } else if (!isErasing && charIndex === words[wordIndex].length) {
                isErasing = true;
                setTimeout(typeEffect, delayBetweenWords);
            } else if (isErasing && charIndex > 0) {
                span.textContent = words[wordIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(typeEffect, erasingSpeed);
            } else {
                isErasing = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(typeEffect, typingSpeed);
            }
        }

        document.addEventListener("DOMContentLoaded", () => setTimeout(typeEffect, 500));

     src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js">
                    (function() {
                        emailjs.init("nnH35yTOGhq9zmnhH"); // Replace with your EmailJS Public Key
                    })();
                
                    document.getElementById("contact-form").addEventListener("submit", function(event) {
                        event.preventDefault(); // Prevent page reload
                
                        let templateParams = {
                            name: document.getElementById("name").value,
                            email: document.getElementById("email").value,
                            message: document.getElementById("message").value
                        };
                
                        emailjs.send("service_9uj8iqu", "template_1q1fnbr", templateParams)
                        .then(function(response) {
                            alert("Message sent successfully!");
                            document.getElementById("contact-form").reset(); // Clear form after submission
                        }, function(error) {
                            alert("Failed to send message. Please try again.");
                        });
                    });

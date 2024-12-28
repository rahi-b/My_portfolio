/*======== Toggle Icon Navbar ============== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Menu icon click-ൽ navbar toggle ചെയ്യാൻ
if (menuIcon && navbar) {
  menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Icon change (open/close)
    navbar.classList.toggle('active'); // Navbar visibility toggle
  };
}

/*======== SCROLL SECTIONS ACTIVE LINK ============== */
let sections = document.querySelectorAll('section'); // എല്ലാം section-കളെയും select ചെയ്യുന്നു
let navLinks = document.querySelectorAll('header nav a'); // Navbar links select ചെയ്യുന്നു

window.onscroll = () => {
  if (sections.length && navLinks.length) {
    sections.forEach(sec => {
      let top = window.scrollY; // User scroll position
      let offset = sec.offsetTop - 150; // Section start position
      let height = sec.offsetHeight; // Section height
      let id = sec.getAttribute('id'); // Section ID
         // Active section-നെ highlight ചെയ്യാൻ
         if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
              link.classList.remove('active'); // Active class remove ചെയ്യുന്നു
              let activeLink = document.querySelector('header nav a[href*=' + id + ']');
              if (activeLink) {
                activeLink.classList.add('active'); // Current section highlight
              }
            });
          }
        });
      }
    
      /*========== Sticky Navbar ====================== */
      let header = document.querySelector('header');
      if (header) {
        header.classList.toggle('sticky', window.scrollY > 100); // 100px scroll കഴിഞ്ഞാൽ sticky add
      }
    
      /*==== Navbar close when link clicked ====================== */
      if (menuIcon && navbar) {
        menuIcon.classList.remove('bx-x'); // Icon reset
        navbar.classList.remove('active'); // Navbar close
      }
    };

    /*========== Scroll Reveal ====================== */
if (typeof ScrollReveal !== 'undefined') {
    ScrollReveal({
      distance: '80px', // Effect distance
      duration: 2000, // Animation duration
      delay: 200 // Delay for reveal
    });
  
    // Top-origin reveal
    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
  
    // Bottom-origin reveal
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
  
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
  
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
  }
  
  /*==================== Typed JS ====================== */
  
    const typed = new Typed('.multiple-text', {
      strings: [ 'Frontend Developer', 'React Devloper','BACKEND developer','FullStack developer'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    });
  
    
    

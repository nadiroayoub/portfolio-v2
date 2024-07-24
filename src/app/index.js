import "../public/images/_un-optimized/logo.svg";
import "../style/sass/main.scss";

document.addEventListener('DOMContentLoaded', () => {
    AOS.init();
  });

  
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.project-demo, .project-source');
    
    links.forEach(link => {
      if (link.getAttribute('href') === null) {
        link.classList.add('invalid-link');
      }
    });
  });
  
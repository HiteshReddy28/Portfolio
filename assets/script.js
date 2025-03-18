const hamburger = document.getElementById('hamburger');
const sideNav = document.getElementById('side-nav');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');
const navLinks = document.querySelectorAll('.side-nav ul li a');

// Open the side menu
hamburger.addEventListener('click', () => {
  sideNav.classList.add('active');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden'; // Disable scrolling when nav is open
});

// Close the side menu
closeBtn.addEventListener('click', () => {
  sideNav.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = 'auto'; // Enable scrolling again
});

// Close menu if overlay is clicked
overlay.addEventListener('click', () => {
  sideNav.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = 'auto'; // Enable scrolling again
});

// Close menu when a link is clicked (small screens)
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    sideNav.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto'; // Enable scrolling again
  });
});


const words = ["Software Developer","Machine learning Enthusiast" , "Chess Player", "Problem Solver","Cricketer","Data Analyst"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const speed = 100; // Typing speed
        const eraseSpeed = 50; // Erasing speed
        const delayBetweenWords = 1500; // Pause before erasing

        function typeEffect() {
            const element = document.getElementById("typewriter");
            const currentWord = words[wordIndex];

            if (!isDeleting) {
                // Typing effect
                element.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
                if (charIndex === currentWord.length) {
                    isDeleting = true;
                    setTimeout(typeEffect, delayBetweenWords); // Pause before deleting
                    return;
                }
            } else {
                // Erasing effect
                element.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
                if (charIndex === 0) {
                    isDeleting = false;
                    wordIndex = (wordIndex + 1) % words.length; // Move to next word
                }
            }

            setTimeout(typeEffect, isDeleting ? eraseSpeed : speed);
        }

        // Start the effect
        typeEffect();

        const starsContainer = document.querySelector('.stars');

    // Generate random star placements
    for (let i = 0; i < 200; i++) {
      const star = document.createElement('div');
      star.classList.add('star');

      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;

      // Random size for stars
      const size = Math.random() * 4 + 2;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      starsContainer.appendChild(star);
    }

    // Create a shooting star
    const shootingStar = document.createElement('div');
    shootingStar.classList.add('shooting-star');
    starsContainer.appendChild(shootingStar);
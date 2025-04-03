// script.js
const load = document.querySelector(".loader")


const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

// Resize canvas to fit window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// const particles = [];

// // Particle class
// class Particle {
//   constructor(x, y, size, color, speedX, speedY) {
//     this.x = x;
//     this.y = y;
//     this.size = size;
//     this.color = color;
//     this.speedX = speedX;
//     this.speedY = speedY;
//   }

//   update() {
//     this.x += this.speedX;
//     this.y += this.speedY;
//     this.size *= 0.95; // Gradually shrink
//   }

//   draw() {
//     ctx.beginPath();
//     ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//     ctx.fillStyle = this.color;
//     ctx.fill();
//   }
// }

// window.addEventListener('mousemove', (event) => {
//   const { clientX: x, clientY: y } = event;
//   for (let i = 0; i < 5; i++) {
//     const size = Math.random() * 5 + 2;
//     const color = `rgba(255, 255, 255, ${Math.random()})`;
//     const speedX = (Math.random() - 0.5) * 2;
//     const speedY = (Math.random() - 0.5) * 2;
//     particles.push(new Particle(x, y, size, color, speedX, speedY));
//   }
// });


// function animate() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   for (let i = 0; i < particles.length; i++) {
//     particles[i].update();
//     particles[i].draw();

//     // Remove particles that are too small
//     if (particles[i].size < 0.5) {
//       particles.splice(i, 1);
//       i--;
//     }
//   }

//   requestAnimationFrame(animate);
// }

// animate();

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


const words = ["AI Enthusiast" ,"Software Developer","Machine Learning Explorer" , "Problem Solver","Data Analyst", "Tech Enthusiast"];
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

typeEffect();



document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  elements.forEach(element => observer.observe(element));
});
function Submission(){
  alert("Recieved your message!!");
}
function openresume(){
  window.open("./assets/Hitesh_Reddy.pdf" );
}
function opentimeflex()
{
  window.open("https://github.com/HiteshReddy28/TimeFlex-Trader");
}    
function openagriprotech(){
  window.open("https://github.com/HiteshReddy28/Agriprotech");
}
function openser()
{
  window.open("https://github.com/HiteshReddy28/Speech_Emotion_Recognition");
}
function opencardio(){
  window.open("https://github.com/HiteshReddy28/Cardiopathie");
}
function opencocinero(){
  window.open("https://docs.google.com/document/d/1OpAuwzKkKz_v6h19EDiJwG6Nqs1zF8oM/edit?usp=sharing&ouid=109487922008051782336&rtpof=true&sd=true");
}
function openvisionnet(){
  window.open("https://github.com/HiteshReddy28/Visionnet");
}
function openweatherapp(){
  window.open("https://skyweathercast.netlify.app/");
}
function getGreeting() {
  const hour = new Date().getHours();
  return hour < 12 ? "Good Morning 🌞" :
         hour < 18 ? "Good Afternoon 🌤️" :
                     "Good Evening 🌙";
}

// Simulated progress (combines actual load events and visual feedback)
function initializeLoader() {
  const loader = document.getElementById('loader');
  const progress = document.getElementById('progress');
  const greeting = document.getElementById('greeting');
  const content = document.getElementById('content');

  // Set initial greeting
  greeting.textContent = getGreeting();

  // Simulated progress (for better UX)
  let simulatedProgress = 0;
  const progressInterval = setInterval(() => {
      simulatedProgress = Math.min(simulatedProgress + Math.random() * 10, 90);
      progress.style.width = simulatedProgress + '%';
  }, 300);

  // Real load events
  window.addEventListener('load', () => {
      clearInterval(progressInterval);
      progress.style.width = '100%';
      
      // Add slight delay for smooth transition
      setTimeout(() => {
          loader.style.opacity = '0';
          content.style.opacity = '1';
          
          // Remove loader after transition
          setTimeout(() => {
              loader.remove();
          }, 500);
      }, 500);
  });
}

// Start loader
initializeLoader();

const timelineItems = document.querySelectorAll('.timeline-item');
        
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.5 });

timelineItems.forEach(item => {
    observer.observe(item);
});

document.querySelectorAll('.timeline-content').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});



const container = document.getElementById('contact');
let resizeTimer;

function createRaindrop() {
    const raindrop = document.createElement('div');
    raindrop.className = 'raindrop';
    
    // Use vw units for horizontal position
    const xPos = Math.random() * 100;
    raindrop.style.left = `${xPos}vw`;
    
    // Duration based on viewport height
    const vh = window.innerHeight / 100;
    const duration = 1 + (Math.random() * 1) + (vh * 0.02);
    raindrop.style.animationDuration = `${duration}s`;

    raindrop.addEventListener('animationend', () => {
        createSplash(raindrop);
        raindrop.remove();
    });

    container.appendChild(raindrop);
}

function createSplash(raindrop) {
    const containerRect = container.getBoundingClientRect();
    const dropRect = raindrop.getBoundingClientRect();
    
    // Calculate relative position within container
    const xPercent = ((dropRect.left - containerRect.left) / containerRect.width) * 100;
    const yPercent = 97; // 3% from bottom

    for (let i = 0; i < 6; i++) {
        const splash = document.createElement('div');
        splash.className = 'splash';
        
        // Position using percentages
        splash.style.left = `${xPercent}%`;
        splash.style.top = `${yPercent}%`;
        
        // Random splash direction
        const angle = Math.random() * 360;
        const distance = 1 + Math.random() * 3;
        splash.style.transform = `
            rotate(${angle}deg)
            translate(${distance}vmin, -${distance}vmin)
        `;

        container.appendChild(splash);

        splash.addEventListener('animationend', () => {
            splash.remove();
        });
    }
}

// Handle window resize
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Reset rain density after resize
        const drops = document.querySelectorAll('.raindrop');
        drops.forEach(drop => drop.remove());
    }, 200);
});

// Start rain
setInterval(createRaindrop, 150);


document.addEventListener('DOMContentLoaded', () => {
const toggle = document.querySelector('.chatbot-toggle');
const interface = document.querySelector('.chatbot-interface');
const closeBtn = document.querySelector('.close-chat');
const sendBtn = document.querySelector('.send-button');
const input = document.querySelector('.chat-input input');
const messages = document.querySelector('.chat-messages');
const bottoggle = document.querySelector('.bot');
bottoggle.addEventListener('click', () => {
  interface.style.display = 'flex';
});
toggle.addEventListener('click', () => {
    interface.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    interface.style.display = 'none';
});

sendBtn.addEventListener('click', sendMessage);
input.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') sendMessage();
});

async function sendMessage() {
    const text = input.value.trim();
    if(!text) return;
    addMessage(text, 'user');
    input.value = '';
    data = await getMockResponse(text);
    console.log(data)
    addMessage(data, 'bot');
}

function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `${sender}-message`;
    
    const content = document.createElement('div');
    content.className = 'message-content';
    content.textContent = text;
    
    messageDiv.appendChild(content);
    messages.appendChild(messageDiv);
    messages.scrollTop = messages.scrollHeight;
}

async function getMockResponse(input) {
  try{
  const response = await fetch('http://localhost:8000/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({"user":input})
    
  })
  console.log(input)
  data = await response.json();
  return data.message;
  }catch(error){
    return "Hitesh is working on me!! and will deploy me in a few days!!";
    console.error('Error:', error);
  }
}
});


// Updated JavaScript with smooth transitions
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projects = document.querySelectorAll('.project-card');
  const loadMoreBtn = document.querySelector('.load-more');
  
  const ITEMS_PER_PAGE = 4; // Number of projects to show initially and on each "load more" click
  let currentItems = ITEMS_PER_PAGE;
  
  // Initial state - show only first 4 projects, hide the rest
  projects.forEach((project, index) => {
    if (index < ITEMS_PER_PAGE) {
      project.classList.remove('hidden');
    } else {
      project.classList.add('hidden');
    }
  });
  
  // Check if load more button should be visible initially
  updateLoadMoreButton('all');
  
  // Filter functionality
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Reset current items count when changing categories
      currentItems = ITEMS_PER_PAGE;
      
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      const filterValue = button.dataset.filter;
      
      // Filter and show only first 4 of the filtered projects
      let visibleCount = 0;
      
      projects.forEach((project) => {
        project.style.pointerEvents = 'none';
        
        const categories = project.dataset.category ? project.dataset.category.split(',') : [];
        const matchesFilter = filterValue === 'all' || categories.includes(filterValue);
        
        // If matches filter and within current items limit, show it
        const shouldShow = matchesFilter && visibleCount < currentItems;
        
        if (matchesFilter) {
          visibleCount++;
        }
        
        requestAnimationFrame(() => {
          if (shouldShow) {
            project.classList.remove('hidden');
          } else {
            project.classList.add('hidden');
          }
          
          setTimeout(() => {
            project.style.pointerEvents = 'auto';
          }, 300);
        });
      });
      
      // Update load more button visibility
      updateLoadMoreButton(filterValue);
    });
  });
  
  // Load More functionality
  loadMoreBtn.addEventListener('click', function() {
    const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
    currentItems += ITEMS_PER_PAGE; // Increase the number of items to show
    
    let visibleCount = 0;
    
    projects.forEach(project => {
      const categories = project.dataset.category ? project.dataset.category.split(',') : [];
      const matchesFilter = activeFilter === 'all' || categories.includes(activeFilter);
      
      if (matchesFilter) {
        visibleCount++;
        
        // If this item should now be visible based on the new currentItems limit
        if (visibleCount <= currentItems) {
          project.classList.remove('hidden');
        }
      }
    });
    
    // Update load more button visibility
    updateLoadMoreButton(activeFilter);
  });
  
  // Function to update the visibility of Load More button
  function updateLoadMoreButton(filterValue) {
    const filteredProjects = Array.from(projects).filter(project => {
      const categories = project.dataset.category ? project.dataset.category.split(',') : [];
      return filterValue === 'all' || categories.includes(filterValue);
    });
    
    // Hide load more button if there are 4 or fewer filtered projects
    // or if all filtered projects are already visible
    if (filteredProjects.length <= ITEMS_PER_PAGE || currentItems >= filteredProjects.length) {
      loadMoreBtn.style.display = 'none';
    } else {
      loadMoreBtn.style.display = 'block';
    }
  }
});

// document.querySelectorAll('.nav-btn').forEach(btn => {
//   btn.addEventListener('click', () => {
//     document.querySelector('.nav-btn.active')?.classList.remove('active');
//     btn.classList.add('active');
//   });
// });



// document.addEventListener('DOMContentLoaded', function() {
//   const hexItems = document.querySelectorAll('.hexagon-item');
//   const loadMoreBtn = document.querySelector('.load-more-btn');
//   const tabButtons = document.querySelectorAll('.tab-btn');

//   const mediaQuery = window.matchMedia('(max-width: 768px)');
//   let itemsToShow = mediaQuery.matches ? 6 : 12;
//   let currentlyVisible = itemsToShow;
//   let activeCategory = 'all';

//   function updateVisibleItems() {
//       let visibleItems = 0;

//       hexItems.forEach((item) => {
//           const category = item.dataset.skill;
//           const shouldShow = activeCategory === 'all' || category === activeCategory;

//           if (shouldShow && visibleItems < currentlyVisible) {
//               item.style.display = 'flex';
//               item.style.animation = 'none';
//               setTimeout(() => {
//                   item.style.animation = 'hexagonAppear 0.5s forwards';
//               }, 10);
//               visibleItems++;
//           } else {
//               item.style.display = 'none';
//           }
//       });

//       // Hide Load More button if all items are shown
//       const totalVisibleItems = [...hexItems].filter(item => 
//           activeCategory === 'all' || item.dataset.skill === activeCategory
//       ).length;

//       if (currentlyVisible >= totalVisibleItems) {
//           loadMoreBtn.style.display = 'none';
//       } else {
//           loadMoreBtn.style.display = 'block';
//       }
//   }

//   loadMoreBtn.addEventListener('click', () => {
//       currentlyVisible += itemsToShow;
//       updateVisibleItems();
//   });

//   tabButtons.forEach(button => {
//       button.addEventListener('click', () => {
//           tabButtons.forEach(btn => btn.classList.remove('active'));
//           button.classList.add('active');

//           activeCategory = button.dataset.category;
//           currentlyVisible = itemsToShow;

//           updateVisibleItems();
//       });
//   });

//   window.addEventListener('resize', () => {
//       itemsToShow = mediaQuery.matches ? 6 : 12;
//       currentlyVisible = itemsToShow;
//       updateVisibleItems();
//   });

//   updateVisibleItems();
// });

// document.addEventListener('DOMContentLoaded', function() {
//   // Set animation delays for staggered appearance
//   const hexItems = document.querySelectorAll('.hexagon-item');
//   hexItems.forEach((item, index) => {
//       item.style.setProperty('--i', index);
//   });
  
//   // Tab filtering
//   const tabButtons = document.querySelectorAll('.tab-btn');
//   tabButtons.forEach(button => {
//       button.addEventListener('click', () => {
//           // Update active button
//           tabButtons.forEach(btn => btn.classList.remove('active'));
//           button.classList.add('active');
          
//           // Filter items
//           const category = button.dataset.category;
//           hexItems.forEach(item => {
//               if (category === 'all' || item.dataset.skill === category) {
//                   item.style.display = 'block';
//                   // Reset animation
//                   item.style.animation = 'none';
//                   setTimeout(() => {
//                       item.style.animation = 'hexagonAppear 0.5s forwards';
//                       item.style.animationDelay = `${parseFloat(item.style.getPropertyValue('--i')) * 0.1}s`;
//                   }, 10);
//               } else {
//                   item.style.display = 'none';
//               }
//           });
//       });
//   });

  
  
  
//   // Popup functionality
//   const skillPopup = document.querySelector('.skill-popup');
//   const closePopup = document.querySelector('.close-popup');
//   const popupTitle = document.querySelector('.popup-title');
//   const levelFill = document.querySelector('.level-fill');
//   const levelText = document.querySelector('.level-text');
//   const skillDescription = document.querySelector('.skill-description');
//   const projectsList = document.querySelector('.skill-projects ul');
  
//   // Skill data (this could be expanded)
//   const skillData = {
//       'Python': {
//           level: 90,
//           description: 'Extensive experience with Python for data science, backend development, and automation. Proficient with libraries like Pandas, NumPy, and Flask.',
//           projects: ['TimeFlex Trader', 'AgriProtech']
//       },
//       'JavaScript': {
//           level: 85,
//           description: 'Strong expertise in frontend JavaScript development. Experience with modern frameworks and ES6+ features.',
//           projects: ['Portfolio', 'Weather App', 'To do App']
//       },
//       'React': {
//           level: 82,
//           description: 'Experience building complex user interfaces with React. Familiar with Redux, Context API, and React Hooks.',
//           projects: ['Portfolio Website', 'Dashboard Application']
//       },
//       'C++':{
//         level: 95,
//         description: "Started coding journey with C++. Solved 200+ problems in leetcode",
//         projects: ['Competitive coding']
//       },
//       'Java':{
//         level: 40,
//         description: "Learn java in my undergraduate. Learned about multithreading, concurrency , and data structures",
//         projects: ['Weather App']
//         },
//       'PyTorch':{
//         level: 80,
//         description: "Experience with PyTorch for deep learning projects",
//         projects: ['Image classification', 'Object detection']
//       },
//       'AWS':{
//         level: 75,
//         description: "Experience in EC2 instance, S3 bucket, and Lambda functions",
//         projects: ['Portfolio backend Deployement', 'Apache Spark for Big Data in AWS']
//       },
//       'Git/Github':{
//         level: 90,
//         description: "Experience with Git for version control",
//         projects: ['Portfolio']
//         },
//         'SQL':{
//           level: 80,
//           description: "Experience with SQL for database management",
//           projects: ['Portfolio']
//         },
//         'Jenkins':{
//           level: 80,
//           description: "Experience with Jenkins for CI/CD pipeline",
//           projects: ['Portfolio']
//         }
//   };
  
  
//   hexItems.forEach(item => {
//       const hexagon = item.querySelector('.hexagon');
//       const skillName = item.querySelector('span').textContent;
      
//       hexagon.addEventListener('click', () => {
//         // console.log(skillData[skillName])
//           const skill = skillData[skillName] || {
//               level: 85,
//               description: 'Proficient in this technology with hands-on project experience.',
//               projects: ['Various Projects']
//           };

//           console.log(skill);
//           // Update popup content
//           popupTitle.textContent = '';
//           skillDescription.textContent = ''; 
//           levelFill.style.animation = 'none'; // Reset animation
//           levelFill.style.width = '0'; // Reset bar width
//           projectsList.innerHTML = '';
//           setTimeout(() => {
//               popupTitle.textContent = skillName;
//               skillDescription.textContent = skill.description; // Assign new content
//               levelFill.style.animation = ''; // Re-enable animation
//               levelFill.style.width = `${skill.level}%`;
//               levelText.textContent = `${skill.level < 70 ? 'Intermediate' : 'Advanced'} (${skill.level}%)`;
//               projectsList.innerHTML = '';
//               skill.projects.forEach(project => {
//                 const li = document.createElement('li');
//                 li.textContent = project;
//                 projectsList.appendChild(li);
//             });
//           }, 10);
          
//           skillPopup.classList.add('active');

          
//           // Trigger animation
//           setTimeout(() => {
//               levelFill.style.animation = 'fillBar 1.5s ease forwards';
//           }, 300);

        
//       });
//   });
  
//   // Close popup
//   closePopup.addEventListener('click', () => {
//       skillPopup.classList.remove('active');
//   });
  
//   // Close popup when clicking outside
//   skillPopup.addEventListener('click', (e) => {
//       if (e.target === skillPopup) {
//           skillPopup.classList.remove('active');
//       }
//   });
// });






document.addEventListener('DOMContentLoaded', function() {
  const hexItems = document.querySelectorAll('.hexagon-item');
  const loadMoreBtn = document.querySelector('.load-more-btn');
  const tabButtons = document.querySelectorAll('.tab-btn');
  const skillPopup = document.querySelector('.skill-popup');
  const closePopup = document.querySelector('.close-popup');
  const popupTitle = document.querySelector('.popup-title');
  const levelFill = document.querySelector('.level-fill');
  const levelText = document.querySelector('.level-text');
  const skillDescription = document.querySelector('.skill-description');
  const projectsList = document.querySelector('.skill-projects ul');

  const mediaQuery = window.matchMedia('(max-width: 768px)');
  let itemsToShow = mediaQuery.matches ? 6 : 12;
  let currentlyVisible = itemsToShow;
  let activeCategory = 'all';

  // Staggered animation delays
  hexItems.forEach((item, index) => {
      item.style.setProperty('--i', index);
  });

  // Skill Data
  const skillData = {
      'Python': {
          level: 90,
          description: 'Extensive experience with Python for data science, backend development, and automation. Proficient with libraries like Pandas, NumPy, and Flask.',
          projects: ['TimeFlex Trader', 'AgriProtech']
      },
      'JavaScript': {
          level: 85,
          description: 'Strong expertise in frontend JavaScript development. Experience with modern frameworks and ES6+ features.',
          projects: ['Portfolio', 'Weather App', 'To-do App']
      },
      'React': {
          level: 82,
          description: 'Experience building complex user interfaces with React. Familiar with Redux, Context API, and React Hooks.',
          projects: ['Portfolio Website', 'Weather app']
      },
      'C++': {
          level: 95,
          description: "Started coding journey with C++. Solved 200+ problems on Leetcode.",
          projects: ['Competitive Coding']
      },
      'Java': {
          level: 40,
          description: "Learned Java in my undergraduate studies. Knowledgeable in multithreading, concurrency, and data structures.",
          projects: ['Weather App']
      },
      'PyTorch': {
          level: 80,
          description: "Experience with PyTorch for deep learning projects.",
          projects: ['Image Classification', 'Object Detection']
      },
      'AWS': {
          level: 75,
          description: "Experience with EC2 instances, S3 buckets, and Lambda functions.",
          projects: ['Portfolio Backend Deployment', 'Apache Spark for Big Data on AWS']
      },
      'Git/Github': {
          level: 90,
          description: "Experienced with Git for version control and collaboration.",
          projects: ['Portfolio']
      },
      'Mysql & PostgreSQL': {
          level: 80,
          description: "Experience with SQL and Nosql for database management and query optimization.",
          projects: ['Portfolio', 'CognuteAi','Weather app','ChatApp']
      },
      'Jenkins': {
          level: 80,
          description: "Experience with Jenkins for CI/CD pipelines.",
          projects: ['Portfolio']
      },
      'Docker':{
        level: 75,
        description: "Experience with Docker for containerization and creating images.",
        projects: ['Portfolio','TimeFlex Trader', 'Cardiopathie']
      },
      'TensorFlow':{
        level: 85,
        description: "Experience with TensorFlow for deep learning projects.",
        projects: ['Image Classification', 'Object Detection']
      },
      'PyTorch':{
        level: 75,
        description: "Experience with PyTorch for deep learning projects.",
        projects: ['Image Classification', 'Object Detection']
      },
      'Scikit-Learn':{
        level: 90,
        description: "Experience with Scikit-Learn for machine learning projects.",
        projects: ['Image Classification', 'Object Detection']
      },
      "LLM's":{
        level: 80,
        description: "Experience with LLM's for natural language processing.",
        projects: ['H.A.R.I.S','Cognute']
      },
      "Prompting":{
        level: 80,
        description: "Experience with prompting for natural language processing.",
        projects: ['H.A.R.I.S','Cognute']
      },
  };

  function updateVisibleItems() {
      let visibleItems = 0;

      hexItems.forEach((item) => {
          const category = item.dataset.skill;
          const shouldShow = activeCategory === 'all' || category === activeCategory;

          if (shouldShow && visibleItems < currentlyVisible) {
              item.style.display = 'flex';
              item.style.animation = 'none';
              setTimeout(() => {
                  item.style.animation = 'hexagonAppear 0.5s forwards';
              }, 10);
              visibleItems++;
          } else {
              item.style.display = 'none';
          }
      });

      const totalVisibleItems = [...hexItems].filter(item =>
          activeCategory === 'all' || item.dataset.skill === activeCategory
      ).length;

      loadMoreBtn.style.display = currentlyVisible >= totalVisibleItems ? 'none' : 'block';
  }

  // Load More button functionality
  loadMoreBtn.addEventListener('click', () => {
      currentlyVisible += itemsToShow;
      updateVisibleItems();
  });

  // Tab filtering
  tabButtons.forEach(button => {
      button.addEventListener('click', () => {
          tabButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');

          activeCategory = button.dataset.category;
          currentlyVisible = itemsToShow; // Reset visible items count when switching tabs
          updateVisibleItems();
      });
  });

  // Handle screen resizing
  window.addEventListener('resize', () => {
      itemsToShow = mediaQuery.matches ? 6 : 12;
      currentlyVisible = itemsToShow;
      updateVisibleItems();
  });

  // Popup functionality
  hexItems.forEach(item => {
      const hexagon = item.querySelector('.hexagon');
      const skillName = item.querySelector('span').textContent;

      hexagon.addEventListener('click', () => {
          const skill = skillData[skillName] || {
              level: 85,
              description: 'Proficient in this technology with hands-on project experience.',
              projects: ['Various Projects']
          };

          // Reset popup content before updating
          popupTitle.textContent = '';
          skillDescription.textContent = '';
          levelFill.style.animation = 'none';
          levelFill.style.width = '0';
          projectsList.innerHTML = '';

          setTimeout(() => {
              popupTitle.textContent = skillName;
              skillDescription.textContent = skill.description;
              levelFill.style.animation = '';
              levelFill.style.width = `${skill.level}%`;
              levelText.textContent = `${skill.level < 70 ? 'Intermediate' : 'Advanced'} (${skill.level}%)`;

              projectsList.innerHTML = '';
              skill.projects.forEach(project => {
                  const li = document.createElement('li');
                  li.textContent = project;
                  projectsList.appendChild(li);
              });
          }, 10);

          skillPopup.classList.add('active');

          setTimeout(() => {
              levelFill.style.animation = 'fillBar 1.5s ease forwards';
          }, 300);
      });
  });

  // Close popup
  closePopup.addEventListener('click', () => {
      skillPopup.classList.remove('active');
  });

  // Close popup when clicking outside
  skillPopup.addEventListener('click', (e) => {
      if (e.target === skillPopup) {
          skillPopup.classList.remove('active');
      }
  });

  // Initial update to set the visible items
  updateVisibleItems();
});



    document.querySelector("form").addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent default form submission

        // Collect form data
        const formData = {
            first_name: document.querySelector("input[name='firstName']").value,
            last_name: document.querySelector("input[name='lastName']").value,
            email: document.querySelector("input[name='email']").value,
            message: document.querySelector("textarea[name='message']").value
        };

        try {
            // Send data to FastAPI backend
            const response = await fetch("http://127.0.0.1:8000/submit-form", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            alert(result.message); 

            // Clear form after successful submission
            if (response.ok) {
                document.querySelector("form").reset();
            }
        } catch (error) {
            alert("Message sent!!")        
            console.error("Error submitting form:", error);
            alert("Error submitting form. Please try again.");
        }
    });

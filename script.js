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

const sections = document.querySelectorAll('section');
const activeNav = document.querySelectorAll('.nav-btn');

function onScroll() {
  let scrollPos = window.scrollY + window.innerHeight / 2; // middle of viewport

  sections.forEach((section, index) => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;

    if (scrollPos >= top && scrollPos < bottom) {
      activeNav.forEach(link => link.classList.remove('active'));
      activeNav[index].classList.add('active');
    }
  });
}
document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});
window.addEventListener('scroll', onScroll);
window.addEventListener('load', onScroll); // highlight on page load


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
function openRagProject(){
  window.open("https://github.com/HiteshReddy28/RAG");
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
function openTodo(){
  window.open("https://github.com/HiteshReddy28/TodoApp")
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


// document.addEventListener('DOMContentLoaded', () => {
//   const toggle = document.querySelector('.chatbot-toggle');
//   const interface = document.querySelector('.chatbot-interface');
//   const closeBtn = document.querySelector('.close-chat');
//   const sendBtn = document.querySelector('.send-button');
//   const input = document.querySelector('.chat-input input');
//   const messages = document.querySelector('.chat-messages');

//   // Toggle the chatbot interface on click
//   toggle.addEventListener('click', () => {
//       // Toggle visibility
//       interface.style.display = interface.style.display === 'flex' ? 'none' : 'flex';
//   });

//   // Close the chatbot interface when the close button is clicked
//   closeBtn.addEventListener('click', () => {
//       interface.style.display = 'none';
//   });

//   sendBtn.addEventListener('click', sendMessage);
//   input.addEventListener('keypress', (e) => {
//       if (e.key === 'Enter') sendMessage();
//   });

//   // Send a message to the chatbot
//   async function sendMessage() {
//       const text = input.value.trim();
//       if (!text) return;
//       addMessage(text, 'user');
//       input.value = '';
//       const typingIndicator = addTypingIndicator();
//       data = await getMockResponse(text);
//       typingIndicator.remove();
//       typeStreamingMessage(data, 'bot');
//   }
//   async function typeStreamingMessage(text, sender) {
//     const messageDiv = document.createElement('div');
//     messageDiv.className = `${sender}-message`;

//     const content = document.createElement('div');
//     content.className = 'message-content';
//     messageDiv.appendChild(content);
//     messages.appendChild(messageDiv);

//     // Add the blinking cursor element to the message content
//     const cursor = document.createElement('span');
//     cursor.className = 'typing-cursor';
//     content.appendChild(cursor);

//     // Simulate typing effect (one character at a time)
//     let index = 0;
//     const typingSpeed = 30; // Adjust this value to make typing faster (lower is faster)

//     function typeNextChar() {
//         if (index < text.length) {
//             content.textContent += text[index]; // Add one character at a time
//             index++;

//             // Scroll the messages to the bottom as we type
//             messages.scrollTop = messages.scrollHeight;

//             setTimeout(typeNextChar, typingSpeed); // Call next char after a shorter delay for faster typing
//         } else {
//             // Remove the cursor when typing is finished
//             cursor.remove();
//         }
//     }

//     typeNextChar(); // Start typing effect
// }
//   // Add typing indicator
//   function addTypingIndicator() {
//       const messageDiv = document.createElement('div');
//       messageDiv.className = 'bot-message typing';

//       const content = document.createElement('div');
//       content.className = 'message-content';
//       content.innerHTML = `<span class="dot"></span><span class="dot"></span><span class="dot"></span>`;

//       messageDiv.appendChild(content);
//       messages.appendChild(messageDiv);
//       messages.scrollTop = messages.scrollHeight;

//       return messageDiv; // So we can remove it later
//   }

//   // Add the actual chat message
//   function addMessage(text, sender, isTemporary = false) {
//       const messageDiv = document.createElement('div');
//       messageDiv.className = `${sender}-message`;

//       const content = document.createElement('div');
//       content.className = 'message-content';
//       content.textContent = text;

//       messageDiv.appendChild(content);
//       messages.appendChild(messageDiv);
//       messages.scrollTop = messages.scrollHeight;

//       return isTemporary ? messageDiv : null;
//   }

//   // Mock response from the backend
//   async function getMockResponse(input) {
//       try {
//           const response = await fetch('http://localhost:8000/generate', {
//               method: 'POST',
//               headers: {
//                   'Content-Type': 'application/json',
//               },
//               body: JSON.stringify({ "user": input })
//           });
//           data = await response.json();
//           return data.message;
//       } catch (error) {
//           return "Hitesh is working on me!! and will deploy me in a few days!!";
//           console.error('Error:', error);
//       }
//   }
// });




document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.chatbot-toggle');
  const interface = document.querySelector('.chatbot-interface');
  const closeBtn = document.querySelector('.close-chat');
  const sendBtn = document.querySelector('.send-button');
  const input = document.querySelector('.chat-input input');
  const messages = document.querySelector('.chat-messages');

  // Restore chat history from localStorage
  function loadChatHistory() {
    const history = JSON.parse(localStorage.getItem('chatHistory') || '[]');
    messages.innerHTML = ''; // Clear current messages
    history.forEach(({ sender, text }) => {
      addMessage(text, sender);
    });
  }

  // Save chat history to localStorage
  function saveChatHistory() {
    const allMessages = [...messages.querySelectorAll('.user-message, .bot-message')];
    const history = allMessages.map(msgDiv => {
      const sender = msgDiv.classList.contains('user-message') ? 'user' : 'bot';
      const text = msgDiv.querySelector('.message-content').textContent;
      return { sender, text };
    });
    localStorage.setItem('chatHistory', JSON.stringify(history));
  }

  // Utility: Read cookie by name
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

  // On load, check if session-id cookie exists; if not, get from backend
  async function ensureSessionCookie() {
    if (!getCookie('session-id')) {
      // Request any endpoint on backend to trigger cookie set (your FastAPI middleware sets it)
      await fetch('  https://4xawa6q91c.execute-api.us-east-2.amazonaws.com/default/HARIS/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user: 'hi' }), // initial dummy message to set cookie
        credentials: 'include',  // important to allow cookies cross-origin (make sure backend CORS allows credentials)
      });
    }
  }

  // Toggle chatbot UI visibility
  toggle.addEventListener('click', () => {
    interface.style.display = interface.style.display === 'flex' ? 'none' : 'flex';
    input.focus();
  });

  closeBtn.addEventListener('click', () => {
    interface.style.display = 'none';
  });

  sendBtn.addEventListener('click', sendMessage);
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
  });

  async function sendMessage() {
    const text = input.value.trim();
    if (!text) return;
    addMessage(text, 'user');
    saveChatHistory();
    input.value = '';

    const typingIndicator = addTypingIndicator();
    const response = await getBotResponse(text);
    typingIndicator.remove();
    await typeStreamingMessage(response, 'bot');
    saveChatHistory();
  }

  async function getBotResponse(userInput) {
    try {
      const response = await fetch('  https://4xawa6q91c.execute-api.us-east-2.amazonaws.com/default/HARIS/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // important for cookie
        body: JSON.stringify({ user: userInput }),
      });
      const data = await response.json();
      return data.message;
    } catch (error) {
      console.error('Error:', error);
      return "Hitesh is working on me!! and will deploy me in a few days!!";
    }
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

  function addTypingIndicator() {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'bot-message typing';

    const content = document.createElement('div');
    content.className = 'message-content';
    content.innerHTML = `<span class="dot"></span><span class="dot"></span><span class="dot"></span>`;

    messageDiv.appendChild(content);
    messages.appendChild(messageDiv);
    messages.scrollTop = messages.scrollHeight;

    return messageDiv;
  }

  async function typeStreamingMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `${sender}-message`;

    const content = document.createElement('div');
    content.className = 'message-content';
    messageDiv.appendChild(content);
    messages.appendChild(messageDiv);

    // Add blinking cursor
    const cursor = document.createElement('span');
    cursor.className = 'typing-cursor';
    content.appendChild(cursor);

    let index = 0;
    const typingSpeed = 40;

    return new Promise((resolve) => {
      function typeNextChar() {
        if (index < text.length) {
          content.textContent += text[index];
          index++;
          messages.scrollTop = messages.scrollHeight;
          setTimeout(typeNextChar, typingSpeed);
        } else {
          cursor.remove();
          resolve();
        }
      }
      typeNextChar();
    });
  }

  // Initialize chatbot UI on page load
  (async () => {
    await ensureSessionCookie();
    loadChatHistory();
  })();

});

// function playTypingSound() {
//   if (typingSound) {
//     typingSound.loop = true;
//     typingSound.volume = 0.3;

//     const playPromise = typingSound.play();
//     if (playPromise !== undefined) {
//       playPromise.catch((error) => {
//         console.warn("Typing sound couldn't autoplay:", error.message);
//       });
//     }
//   }
// }


// function stopTypingSound() {
//   if (typingSound) {
//       typingSound.pause();
//       typingSound.currentTime = 0;
//   }
// }



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
function openchatbot(){
  const div = document.querySelector(".chatbot-interface")
  if (div.style.display === "none" || div.style.display === "") {
    div.style.display = "flex"; // You can use "flex", "grid", etc., depending on layout
  } else {
    div.style.display = "none";
  }
}

// Enhanced timeline animations with scroll-based ball movement
document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timeline = document.querySelector('.timeline');
    
    // Add animation delay to each timeline item
    timelineItems.forEach((item, index) => {
        item.style.setProperty('--i', index);
    });
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.3 });

    timelineItems.forEach(item => {
        observer.observe(item);
    });

    // Scroll-based timeline ball animation and active item logic
    function updateTimelineBall() {
        const timelineSection = document.getElementById('experience');
        const timeline = document.querySelector('.timeline');
        if (!timelineSection || !timeline) return;

        const sectionRect = timelineSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const timelineHeight = timeline.offsetHeight;

        let ballPosition = 0;

        if (sectionRect.bottom <= 0) {
            // Section is above viewport (scrolled past) - ball at bottom
            ballPosition = timelineHeight;
        } else if (sectionRect.top >= windowHeight) {
            // Section is below viewport (not reached) - ball at top
            ballPosition = 0;
        } else {
            // Section is in view - calculate progress
            const sectionHeight = timelineSection.offsetHeight;
            const scrollY = window.scrollY;
            const sectionTop = timelineSection.offsetTop;
            const progress = Math.min(1, Math.max(0, (scrollY + windowHeight/2 - sectionTop) / sectionHeight));
            ballPosition = progress * timelineHeight;
        }

        timeline.style.setProperty('--scroll-position', `${ballPosition}px`);

        // Active item logic (only when in view)
        const timelineItems = document.querySelectorAll('.timeline-item');
        if (sectionRect.top < windowHeight && sectionRect.bottom > 0) {
            // Find the item whose center is closest to the ball
            let closestItem = null;
            let minDistance = Infinity;
            const ballY = timeline.getBoundingClientRect().top + window.scrollY + ballPosition;
            timelineItems.forEach(item => {
                const itemRect = item.getBoundingClientRect();
                const itemTop = itemRect.top + window.scrollY;
                const itemBottom = itemTop + itemRect.height;
                const itemCenter = (itemTop + itemBottom) / 2;
                const distance = Math.abs(ballY - itemCenter);
                if (distance < minDistance) {
                    minDistance = distance;
                    closestItem = item;
                }
            });
            // Remove all actives, then set only the closest one
            timelineItems.forEach(item => item.classList.remove('active'));
            if (closestItem) closestItem.classList.add('active');
        } else {
            timelineItems.forEach(item => item.classList.remove('active'));
        }
    }

    // Improved throttling for better performance
    let ticking = false;
    let lastScrollY = window.scrollY;
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(() => {
                const currentScrollY = window.scrollY;
                // Only update if scroll position changed significantly
                if (Math.abs(currentScrollY - lastScrollY) > 1) {
                    updateTimelineBall();
                    lastScrollY = currentScrollY;
                }
                ticking = false;
            });
            ticking = true;
        }
    }

    // Add scroll event listener with passive option for better performance
    window.addEventListener('scroll', requestTick, { passive: true });
    
    // Initial call to set ball position
    updateTimelineBall();
});

// Enhanced project animations with staggered effects
document.addEventListener('DOMContentLoaded', function() {
  // Add staggered animation to project bullet points
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach((card, cardIndex) => {
    const bulletPoints = card.querySelectorAll('.project-info li');
    
    bulletPoints.forEach((bullet, bulletIndex) => {
      bullet.style.setProperty('--i', bulletIndex);
    });
    
    // Add magnetic effect to project cards
    card.addEventListener('mousemove', function(e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });
    
    card.addEventListener('mouseleave', function() {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    });
  });
  
  // Add ripple effect to filter buttons
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');
      
      button.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
  
  // Add floating animation to section title
  const sectionTitle = document.querySelector('#projects .section-title');
  if (sectionTitle) {
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', function(e) {
      mouseX = e.clientX / window.innerWidth;
      mouseY = e.clientY / window.innerHeight;
      
      const moveX = (mouseX - 0.5) * 10;
      const moveY = (mouseY - 0.5) * 10;
      
      sectionTitle.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  }
  
  // Add particle effect to load more button
  const loadMoreBtn = document.querySelector('.load-more');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', function() {
      for (let i = 0; i < 10; i++) {
        createParticle(loadMoreBtn);
      }
    });
  }
  
  function createParticle(button) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
      position: absolute;
      width: 4px;
      height: 4px;
      background: rgb(3, 190, 190);
      border-radius: 50%;
      pointer-events: none;
      z-index: 1000;
    `;
    
    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    
    document.body.appendChild(particle);
    
    const angle = Math.random() * Math.PI * 2;
    const velocity = 50 + Math.random() * 50;
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity;
    
    let opacity = 1;
    const animate = () => {
      opacity -= 0.02;
      particle.style.opacity = opacity;
      particle.style.left = (parseFloat(particle.style.left) + vx * 0.1) + 'px';
      particle.style.top = (parseFloat(particle.style.top) + vy * 0.1) + 'px';
      
      if (opacity > 0) {
        requestAnimationFrame(animate);
      } else {
        particle.remove();
      }
    };
    
    requestAnimationFrame(animate);
  }
});

// Enhanced Home and About Section Animations
document.addEventListener('DOMContentLoaded', function() {
  // Parallax effect for floating elements
  const floatingElements = document.querySelectorAll('.floating-element');
  
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    
    floatingElements.forEach((element, index) => {
      const speed = parseFloat(element.getAttribute('data-speed')) || 0.5;
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  });
  
  // Interactive background elements for about section
  const bgElements = document.querySelectorAll('.bg-circle, .bg-square');
  
  bgElements.forEach((element, index) => {
    element.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.2) rotate(180deg)';
      this.style.opacity = '0.8';
    });
    
    element.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1) rotate(0deg)';
      this.style.opacity = '0.3';
    });
  });
  
  // Enhanced typewriter effect with cursor animation
  const typewriterElement = document.getElementById('typewriter');
  if (typewriterElement) {
    // Add blinking cursor effect
    const cursor = document.createElement('span');
    cursor.className = 'typing-cursor';
    cursor.style.cssText = `
      display: inline-block;
      width: 3px;
      height: 1.2em;
      background-color: rgb(218, 206, 206);
      margin-left: 2px;
      animation: blink 1s step-end infinite;
    `;
    
    typewriterElement.appendChild(cursor);
  }
  
  // Add cursor blink animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes blink {
      50% { opacity: 0; }
    }
  `;
  document.head.appendChild(style);
  
  // Enhanced profile picture interaction
  const profileImage = document.querySelector('.profilepic img');
  if (profileImage) {
    profileImage.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });
    
    profileImage.addEventListener('mouseleave', function() {
      this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    });
  }
  
  // Enhanced button interactions
  const botButtons = document.querySelectorAll('.bot');
  
  botButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      // Create ripple effect
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
      `;
      
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
    
    // Add magnetic effect
    button.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const moveX = (x - centerX) / 10;
      const moveY = (y - centerY) / 10;
      
      this.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'translate(0px, 0px) scale(1)';
    });
  });
  
  // Add ripple animation CSS
  const rippleStyle = document.createElement('style');
  rippleStyle.textContent = `
    @keyframes ripple-animation {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(rippleStyle);
  
  // Enhanced name animation with letter-by-letter reveal
  const nameElement = document.getElementById('slide-right');
  if (nameElement) {
    const text = nameElement.textContent;
    nameElement.textContent = '';
    
    text.split('').forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.cssText = `
        display: inline-block;
        opacity: 0;
        transform: translateY(20px);
        animation: letterAppear 0.5s ease-out forwards;
        animation-delay: ${index * 0.1}s;
      `;
      nameElement.appendChild(span);
    });
  }
  
  // Add letter appear animation
  const letterStyle = document.createElement('style');
  letterStyle.textContent = `
    @keyframes letterAppear {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  document.head.appendChild(letterStyle);
  
  // Enhanced highlight interactions
  const highlights = document.querySelectorAll('.highlight');
  
  highlights.forEach(highlight => {
    highlight.addEventListener('mouseenter', function() {
      this.style.animation = 'highlightPulse 0.6s ease-in-out';
    });
    
    highlight.addEventListener('mouseleave', function() {
      this.style.animation = '';
    });
  });
  
  // Add highlight pulse animation
  const highlightStyle = document.createElement('style');
  highlightStyle.textContent = `
    @keyframes highlightPulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.1); }
    }
  `;
  document.head.appendChild(highlightStyle);
  
  // Add scroll-triggered animations for about section
  const aboutSection = document.getElementById('about');
  const aboutContent = document.querySelector('.aboutmecontent');
  const profileContainer = document.querySelector('.profilepic');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Trigger staggered animations
        if (aboutContent) {
          aboutContent.style.animation = 'contentSlideIn 1.8s ease-out forwards';
        }
        if (profileContainer) {
          profileContainer.style.animation = 'profileSlideIn 1.8s ease-out forwards';
        }
      }
    });
  }, { threshold: 0.3 });
  
  if (aboutSection) {
    observer.observe(aboutSection);
  }
  
  // Add dynamic background color change on scroll
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const homeSection = document.querySelector('.container');
    const aboutSection = document.getElementById('about');
    
    if (homeSection) {
      const opacity = Math.max(0, 1 - scrolled / 500);
      homeSection.style.opacity = opacity;
    }
    
    if (aboutSection) {
      const aboutOpacity = Math.min(1, scrolled / 300);
      aboutSection.style.opacity = aboutOpacity;
    }
  });
  
  // Add floating animation to stars
  const stars = document.querySelector('.stars');
  if (stars) {
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', function(e) {
      mouseX = e.clientX / window.innerWidth;
      mouseY = e.clientY / window.innerHeight;
      
      const moveX = (mouseX - 0.5) * 20;
      const moveY = (mouseY - 0.5) * 20;
      
      stars.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  }
});

// Enhanced scroll-triggered animations and modern transitions
document.addEventListener('DOMContentLoaded', function() {
    // Initialize scroll animations
    initializeScrollAnimations();
    
    // Initialize parallax effects
    initializeParallaxEffects();
    
    // Initialize letter-by-letter name animation
    initializeNameAnimation();
    
    // Initialize magnetic effects
    initializeMagneticEffects();
    
    // Initialize smooth section transitions
    initializeSectionTransitions();
});

// Modern scroll-triggered animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Observe sections for reveal animations
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Observe profile box
    const profileBox = document.getElementById('profilebox');
    if (profileBox) {
        observer.observe(profileBox);
    }
}

// Parallax scrolling effects
function initializeParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.floating-element, .bg-circle, .bg-square');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        parallaxElements.forEach((element, index) => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Letter-by-letter name animation
function initializeNameAnimation() {
    const nameElement = document.getElementById('slide-right');
    if (!nameElement) return;
    
    const text = nameElement.textContent;
    nameElement.innerHTML = '';
    
    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.setProperty('--i', index);
        nameElement.appendChild(span);
    });
}

// Magnetic effects for interactive elements
function initializeMagneticEffects() {
    const magneticElements = document.querySelectorAll('.bot, .profilepic img, .typewriter-container');
    
    magneticElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const moveX = x * 0.1;
            const moveY = y * 0.1;
            
            element.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'translate(0, 0)';
        });
    });
}

// Smooth section transitions
function initializeSectionTransitions() {
    const sections = document.querySelectorAll('section');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Trigger staggered animations for section content
                const animatedElements = entry.target.querySelectorAll('.fade-in');
                animatedElements.forEach((el, index) => {
                    setTimeout(() => {
                        el.classList.add('visible');
                    }, index * 100);
                });
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '-50px 0px'
    });
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
}

// Enhanced scroll performance
let ticking = false;

function updateScrollAnimations() {
    // Update timeline ball position
    updateTimelineBall();
    
    // Update parallax elements
    updateParallaxElements();
    
    ticking = false;
}

function requestScrollUpdate() {
    if (!ticking) {
        requestAnimationFrame(updateScrollAnimations);
        ticking = true;
    }
}

window.addEventListener('scroll', requestScrollUpdate);

// Update parallax elements with better performance
function updateParallaxElements() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-element');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
}

// Enhanced timeline ball animation
function updateTimelineBall() {
    const timelineSection = document.getElementById('experience');
    const timeline = document.querySelector('.timeline');
    if (!timelineSection || !timeline) return;

    const sectionRect = timelineSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const timelineHeight = timeline.offsetHeight;

    let ballPosition = 0;

    if (sectionRect.bottom <= 0) {
        // Section is above viewport (scrolled past) - ball at bottom
        ballPosition = timelineHeight;
    } else if (sectionRect.top >= windowHeight) {
        // Section is below viewport (not reached) - ball at top
        ballPosition = 0;
    } else {
        // Section is in view - calculate progress
        const sectionHeight = timelineSection.offsetHeight;
        const scrollY = window.scrollY;
        const sectionTop = timelineSection.offsetTop;
        const progress = Math.min(1, Math.max(0, (scrollY + windowHeight/2 - sectionTop) / sectionHeight));
        ballPosition = progress * timelineHeight;
    }

    timeline.style.setProperty('--scroll-position', `${ballPosition}px`);

    // Active item logic (only when in view)
    const timelineItems = document.querySelectorAll('.timeline-item');
    if (sectionRect.top < windowHeight && sectionRect.bottom > 0) {
        // Find the item whose center is closest to the ball
        let closestItem = null;
        let minDistance = Infinity;
        const ballY = timeline.getBoundingClientRect().top + window.scrollY + ballPosition;
        timelineItems.forEach(item => {
            const itemRect = item.getBoundingClientRect();
            const itemTop = itemRect.top + window.scrollY;
            const itemBottom = itemTop + itemRect.height;
            const itemCenter = (itemTop + itemBottom) / 2;
            const distance = Math.abs(ballY - itemCenter);
            if (distance < minDistance) {
                minDistance = distance;
                closestItem = item;
            }
        });
        // Remove all actives, then set only the closest one
        timelineItems.forEach(item => item.classList.remove('active'));
        if (closestItem) closestItem.classList.add('active');
    } else {
        timelineItems.forEach(item => item.classList.remove('active'));
    }
}

// Enhanced profile picture loading with debugging
function ensureProfilePictureLoaded() {
  const profileImg = document.querySelector('.profilepic img');
  if (!profileImg) {
    console.error('Profile image element not found!');
    return;
  }
  
  // console.log('Profile image element found:', profileImg);
  // console.log('Image src:', profileImg.src);
  
  // Add loading animation
  profileImg.style.opacity = '0';
  profileImg.style.transform = 'scale(0.8)';
  
  // Check if image is already loaded
  if (profileImg.complete && profileImg.naturalHeight !== 0) {
    // console.log('Image already loaded');
    profileImg.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    profileImg.style.opacity = '1';
    profileImg.style.transform = 'scale(1)';
  } else {
    // console.log('Image not loaded yet, waiting for load event');
  }
  
  profileImg.onload = function() {
    // console.log('Image loaded successfully!');
    profileImg.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    profileImg.style.opacity = '1';
    profileImg.style.transform = 'scale(1)';
    
    // Add success indicator
    const successIndicator = document.createElement('div');
    successIndicator.textContent = '✓ Image Loaded';
    successIndicator.style.cssText = `
      position: absolute;
      top: -10px;
      right: -10px;
      background: rgba(0, 255, 0, 0.8);
      color: white;
      padding: 2px 6px;
      border-radius: 50%;
      font-size: 10px;
      z-index: 1000;
    `;
    profileImg.parentElement.appendChild(successIndicator);
    
    // Remove indicator after 3 seconds
    setTimeout(() => {
      if (successIndicator.parentElement) {
        successIndicator.parentElement.removeChild(successIndicator);
      }
    }, 3000);
  };
  
  profileImg.onerror = function() {
    console.error('Failed to load profile image:', profileImg.src);
    // Fallback for missing image
    profileImg.style.background = 'linear-gradient(45deg, rgba(3, 190, 190, 0.3), rgba(255, 255, 255, 0.1))';
    profileImg.style.opacity = '1';
    profileImg.style.transform = 'scale(1)';
    
    // Add error indicator
    const errorIndicator = document.createElement('div');
    errorIndicator.textContent = '⚠️ Image Error';
    errorIndicator.style.cssText = `
      position: absolute;
      top: -10px;
      right: -10px;
      background: rgba(255, 0, 0, 0.8);
      color: white;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 10px;
      z-index: 1000;
    `;
    profileImg.parentElement.appendChild(errorIndicator);
  };
  
  // Force image load if not already loading
  if (!profileImg.complete) {
    profileImg.src = profileImg.src; // Force reload
  }
}

// Debug interactive elements
function debugInteractiveElements() {
  // console.log('Debugging interactive elements...');
  
  // Check navbar
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    // console.log('Navbar found, z-index:', getComputedStyle(navbar).zIndex);
  } else {
    console.error('Navbar not found!');
  }
  
  // Check buttons
  const buttons = document.querySelectorAll('.bot');
  // console.log('Found', buttons.length, 'buttons');
  buttons.forEach((btn, index) => {
    // console.log(`Button ${index + 1}:`, btn.textContent, 'z-index:', getComputedStyle(btn).zIndex);
  });
  
  // Check nav items
  const navItems = document.querySelectorAll('.nav-items a');
  // console.log('Found', navItems.length, 'nav items');
  navItems.forEach((item, index) => {
    // console.log(`Nav item ${index + 1}:`, item.textContent, 'z-index:', getComputedStyle(item).zIndex);
  });
  
  // Check profile picture
  const profilePic = document.querySelector('.profilepic');
  if (profilePic) {
    // console.log('Profile picture container found, z-index:', getComputedStyle(profilePic).zIndex);
  } else {
    // console.error('Profile picture container not found!');
  }
  
  // Check profile image
  const profileImg = document.querySelector('.profilepic img');
  if (profileImg) {
    // console.log('Profile image found, z-index:', getComputedStyle(profileImg).zIndex);
    // console.log('Image src:', profileImg.src);
    // console.log('Image natural dimensions:', profileImg.naturalWidth, 'x', profileImg.naturalHeight);
  } else {
    console.error('Profile image not found!');
  }
}

// Enhanced initialization with debugging
document.addEventListener('DOMContentLoaded', function() {
  // console.log('DOM loaded, initializing...');
  
  // Initialize scroll animations
  initializeScrollAnimations();
  
  // Initialize parallax effects
  initializeParallaxEffects();
  
  // Initialize letter-by-letter name animation
  initializeNameAnimation();
  
  // Initialize magnetic effects
  initializeMagneticEffects();
  
  // Initialize smooth section transitions
  initializeSectionTransitions();
  
  // Initialize profile picture loading
  ensureProfilePictureLoaded();
  
  // Initialize smooth scrolling
  initializeSmoothScrolling();
  
  // Initialize touch interactions
  initializeTouchInteractions();
  
  // Debug interactive elements
  setTimeout(debugInteractiveElements, 1000);
  
  // Force profile picture to be visible
  setTimeout(() => {
    const profileImg = document.querySelector('.profilepic img');
    if (profileImg) {
      profileImg.style.opacity = '1';
      profileImg.style.transform = 'scale(1)';
      profileImg.style.display = 'block';
      // console.log('Forced profile image to be visible');
    }
  }, 2000);
});

// Enhanced click debugging
document.addEventListener('click', function(e) {
  // console.log('Click detected on:', e.target);
  // console.log('Element z-index:', getComputedStyle(e.target).zIndex);
  // console.log('Element pointer-events:', getComputedStyle(e.target).pointerEvents);
});

// Check for overlapping elements
function checkOverlappingElements() {
  const interactiveElements = document.querySelectorAll('.bot, .nav-items a, .profilepic img, .hamburger');
  
  interactiveElements.forEach(element => {
    const rect = element.getBoundingClientRect();
    // console.log('Element:', element.tagName, element.className);
    // console.log('Position:', rect.left, rect.top, rect.width, rect.height);
    // console.log('Z-index:', getComputedStyle(element).zIndex);
    // console.log('Pointer events:', getComputedStyle(element).pointerEvents);
    // console.log('---');
  });
}

// Run overlap check after a delay
setTimeout(checkOverlappingElements, 3000);

// Enhanced smooth scrolling for navigation
function initializeSmoothScrolling() {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(requestScrollUpdate, 16); // ~60fps
window.addEventListener('scroll', debouncedScrollHandler);

// Enhanced mobile touch interactions
function initializeTouchInteractions() {
  if ('ontouchstart' in window) {
    // Disable hover effects on touch devices
    document.body.classList.add('touch-device');
    
    // Add touch-specific interactions
    const touchElements = document.querySelectorAll('.bot, .profilepic img');
    
    touchElements.forEach(element => {
      element.addEventListener('touchstart', () => {
        element.style.transform = 'scale(0.95)';
      });
      
      element.addEventListener('touchend', () => {
        element.style.transform = 'scale(1)';
      });
    });
  }
}
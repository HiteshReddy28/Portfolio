document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const projectsGrid = document.querySelector('.projects-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const projectModal = document.querySelector('.project-modal');
    const modalContent = document.querySelector('.modal-content');
    const closeModalBtn = document.querySelector('.close-modal');
    const modalTitle = document.querySelector('.modal-title');
    const modalTags = document.querySelector('.modal-tags');
    const modalMainImage = document.querySelector('.modal-main-image');
    const modalThumbnails = document.querySelectorAll('.modal-thumbnail');
    const modalDescription = document.querySelector('.modal-description');
    const liveBtn = document.querySelector('.live-btn');
    const githubBtn = document.querySelector('.github-btn');
    const prevProjectBtn = document.querySelector('.prev-project');
    const nextProjectBtn = document.querySelector('.next-project');
    const detailsBtns = document.querySelectorAll('.details-btn');

    let currentProjectIndex = 0;
    
    // Set animation delay for cards
    projectCards.forEach((card, index) => {
        card.style.setProperty('--i', index);
    });

    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Toggle active class
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Hide all cards first with a fade out effect
            projectCards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
            });
            
            // Show filtered cards after a short delay
            setTimeout(() => {
                projectCards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    
                    if (filter === 'all' || category === filter) {
                        card.style.display = 'block';
                        // Trigger animation
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 50);
                    } else {
                        card.style.display = 'none';
                    }
                });
            }, 300);
        });
    });

    // Function to populate modal with project data
    function populateModal(index) {
        const project = projectCards[index];
        currentProjectIndex = index;
        
        // Get project data
        const projectTitle = project.querySelector('h3').textContent;
        const projectTags = Array.from(project.querySelectorAll('.tag')).map(tag => tag.textContent);
        const projectDesc = project.querySelector('.project-description').textContent.trim();
        const projectImg = project.querySelector('img').getAttribute('src');
        
        // Set modal content
        modalTitle.textContent = projectTitle;
        modalTags.innerHTML = '';
        projectTags.forEach(tag => {
            const tagEl = document.createElement('span');
            tagEl.className = 'tag';
            tagEl.textContent = tag;
            modalTags.appendChild(tagEl);
        });
        
        modalMainImage.setAttribute('src', projectImg);
        
        // Set fake data for thumbnails (in a real application, you would use actual project images)
        modalThumbnails.forEach((thumb, i) => {
            thumb.className = i === 0 ? 'modal-thumbnail active' : 'modal-thumbnail';
        });
        
        // Update project links (in a real application, you would use actual project links)
        const projectLinks = project.querySelectorAll('.project-link');
        if (projectLinks.length > 0) {
            const liveLink = projectLinks[0].getAttribute('href');
            const githubLink = projectLinks[1].getAttribute('href');
            
            liveBtn.setAttribute('href', liveLink);
            githubBtn.setAttribute('href', githubLink);
        }
        
        // Enable/disable navigation buttons
        prevProjectBtn.disabled = index === 0;
        nextProjectBtn.disabled = index === projectCards.length - 1;
        
        // Update navigation button opacity based on state
        prevProjectBtn.style.opacity = index === 0 ? '0.5' : '1';
        nextProjectBtn.style.opacity = index === projectCards.length - 1 ? '0.5' : '1';
    }

    // Open modal when clicking on "View Details"
    detailsBtns.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            populateModal(index);
            projectModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        });
    });

    // Close modal
    closeModalBtn.addEventListener('click', function() {
        projectModal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    });

    // Close modal when clicking outside content
    projectModal.addEventListener('click', function(e) {
        if (e.target === projectModal) {
            projectModal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        }
    });

    // Navigate between projects
    prevProjectBtn.addEventListener('click', function() {
        if (currentProjectIndex > 0) {
            populateModal(currentProjectIndex - 1);
        }
    });

    nextProjectBtn.addEventListener('click', function() {
        if (currentProjectIndex < projectCards.length - 1) {
            populateModal(currentProjectIndex + 1);
        }
    });

    // Thumbnail click functionality
    modalThumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', function() {
            // Update active thumbnail
            modalThumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // In a real application, you would change the main image source
            // For this demo, we'll just simulate changing the image
            const currentSrc = modalMainImage.getAttribute('src');
            modalMainImage.setAttribute('src', this.getAttribute('src').replace('150/100', '800/500'));
        });
    });

    // Escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && projectModal.classList.contains('active')) {
            projectModal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        }
    });

    // Additional animation for project cards on scroll
    const animateOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.9;
        
        projectCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            
            if (cardTop < triggerBottom) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };

    // Initial animation check
    setTimeout(animateOnScroll, 300);
    
    // Animate cards when scrolling
    window.addEventListener('scroll', animateOnScroll);
});
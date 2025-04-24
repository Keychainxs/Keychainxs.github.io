document.addEventListener('DOMContentLoaded', function() {
 
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        element.classList.add('active');
    });
   
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    

    const projectButtons = document.querySelectorAll('.view-project');
    const modal = document.querySelector('.modal');
    const closeModal = document.querySelector('.close-modal');
    
    projectButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.project-card');
            const title = card.querySelector('h3').textContent;
            const category = card.querySelector('.project-category').textContent;
            const description = card.querySelector('.project-description').textContent;
            
            document.getElementById('modal-title').textContent = title;
            document.getElementById('modal-category').textContent = category;
            document.getElementById('modal-description').textContent = description + ' This is an expanded description of the project with more details about the technologies used, challenges faced, and solutions implemented.';
            
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });
    
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
   
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
 
            document.querySelectorAll('.error-message').forEach(error => {
                error.style.display = 'none';
            });
            
    
            if (nameInput.value.trim() === '') {
                showError(nameInput, 'Name is required');
                isValid = false;
            }
            
     
            if (emailInput.value.trim() === '') {
                showError(emailInput, 'Email is required');
                isValid = false;
            } else if (!isValidEmail(emailInput.value)) {
                showError(emailInput, 'Please enter a valid email');
                isValid = false;
            }
            
      
            if (messageInput.value.trim() === '') {
                showError(messageInput, 'Message is required');
                isValid = false;
            }
            
            if (isValid) {
            
                const submitBtn = contactForm.querySelector('.submit-btn');
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    contactForm.reset();
                    submitBtn.textContent = 'Message Sent!';
                    
                    setTimeout(() => {
                        submitBtn.textContent = 'Send Message';
                        submitBtn.disabled = false;
                    }, 3000);
                }, 1500);
            }
        });
    }
    
    function showError(input, message) {
        const errorElement = input.nextElementSibling;
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
    
    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }


    document.querySelectorAll('.skill-card').forEach(card => {
        const skillLevel = card.getAttribute('data-skill-level');
        if (skillLevel) {
            const progressBar = card.querySelector('.progress-bar');
            if (progressBar) {
                progressBar.style.width = skillLevel + '%';
            }
        }
    });
    
});
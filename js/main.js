// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navList.classList.toggle('active');
});

// Close mobile menu when clicking a nav link
document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navList.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Testimonial Slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');

function showTestimonial(index) {
    testimonials.forEach(testimonial => {
        testimonial.classList.remove('active');
    });
    testimonials[index].classList.add('active');
}

prevBtn.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
});

nextBtn.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
});

// Auto-rotate testimonials
let testimonialInterval = setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}, 5000);

// Pause auto-rotation on hover
const testimonialSlider = document.querySelector('.testimonial-slider');
testimonialSlider.addEventListener('mouseenter', () => {
    clearInterval(testimonialInterval);
});

testimonialSlider.addEventListener('mouseleave', () => {
    testimonialInterval = setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 5000);
});

// Brewing Method Tabs
const methodTabs = document.querySelectorAll('.method-tab');
const methodContents = document.querySelectorAll('.method-content');

methodTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        methodTabs.forEach(t => t.classList.remove('active'));
        methodContents.forEach(c => c.classList.remove('active'));
        
        tab.classList.add('active');
        methodContents[index].classList.add('active');
    });
});

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        question.classList.toggle('active');
        const answer = question.nextElementSibling;
        answer.classList.toggle('active');
    });
});

// Tour Booking Form
const tourTypeSelect = document.getElementById('tour-type');
const tourTimeSelect = document.getElementById('tour-time');
const minusBtn = document.querySelector('.quantity-button.minus');
const plusBtn = document.querySelector('.quantity-button.plus');
const participantsInput = document.getElementById('participants');

// Update available times based on tour type
tourTypeSelect.addEventListener('change', () => {
    tourTimeSelect.innerHTML = '<option value="">Select time</option>';
    
    if (tourTypeSelect.value === 'basic') {
        const basicTimes = ['9:00 AM', '11:30 AM', '2:30 PM'];
        basicTimes.forEach(time => {
            const option = document.createElement('option');
            option.value = time;
            option.textContent = time;
            tourTimeSelect.appendChild(option);
        });
    } else if (tourTypeSelect.value === 'premium') {
        const premiumTimes = ['8:30 AM', '1:00 PM'];
        premiumTimes.forEach(time => {
            const option = document.createElement('option');
            option.value = time;
            option.textContent = time;
            tourTimeSelect.appendChild(option);
        });
    } else if (tourTypeSelect.value === 'private') {
        const privateTimes = ['8:00 AM', '10:00 AM', '12:00 PM', '2:00 PM'];
        privateTimes.forEach(time => {
            const option = document.createElement('option');
            option.value = time;
            option.textContent = time;
            tourTimeSelect.appendChild(option);
        });
    }
});

// Participant counter
minusBtn.addEventListener('click', () => {
    let value = parseInt(participantsInput.value);
    if (value > 1) {
        participantsInput.value = value - 1;
    }
});

plusBtn.addEventListener('click', () => {
    let value = parseInt(participantsInput.value);
    if (value < 15) {
        participantsInput.value = value + 1;
    }
});

// Form submission
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Here you would typically send the form data to a server
        // For this demo, we'll just show an alert
        alert('Thank you for your submission! We will contact you soon.');
        form.reset();
    });
});

// Gallery Lightbox (would need additional HTML/CSS)
// This is a basic implementation - consider using a library like lightbox.js for production

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Account for fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Initialize the first testimonial as active
showTestimonial(0);
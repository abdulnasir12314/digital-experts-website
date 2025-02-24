// Toggle mobile menu
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-btn");
    const navMenu = document.querySelector(".nav-menu ul");
    
    if (menuToggle) {
        menuToggle.addEventListener("click", function() {
            navMenu.classList.toggle("active");
        });
    }
});

// Contact Form Validation
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector("form");
    
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            
            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let phone = document.getElementById("phone").value.trim();
            let message = document.getElementById("message").value.trim();
            
            if (name === "" || email === "" || phone === "" || message === "") {
                alert("Please fill in all fields.");
                return;
            }
            
            if (!validateEmail(email)) {
                alert("Please enter a valid email address.");
                return;
            }
            
            alert("Thank you! Your message has been sent.");
            contactForm.reset();
        });
    }
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

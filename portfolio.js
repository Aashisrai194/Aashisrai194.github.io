// Portfolio Mode Toggle - Aashis Chamling

const modeButton = document.getElementById("mode-button");
const body = document.body;

// Toggle between light and dark mode
function toggleMode() {
    body.classList.toggle("dark-mode");
    
    // Save the current theme preference
    const currentTheme = body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", currentTheme);
}

// Add click event to mode button
modeButton.addEventListener("click", toggleMode);

// Load saved theme on page load
window.addEventListener("load", () => {
    // Check for saved theme preference, default to light mode
    const savedTheme = localStorage.getItem("theme") || "light";
    
    // Apply dark mode if it was previously selected
    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
    }
});

// Optional: Smooth scroll for any anchor links (if you add navigation later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// Optional: Add scroll animations when elements come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

// Observe all sections for fade-in effect (add 'fade-in' class to sections if you want this)
document.querySelectorAll("section").forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(section);
});
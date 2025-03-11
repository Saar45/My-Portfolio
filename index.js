console.log('index.js loaded');

const textAnim = document.querySelector(".profession");

if (textAnim) {
  const typewriter = new Typewriter(textAnim, {
    loop: true,
  });
  
  typewriter
    .start()
    .pauseFor(200)
    .typeString("Développeur Web")
    .pauseFor(700)
    .deleteChars(15)
    .changeDeleteSpeed(70)
    .typeString("Web Designer")
    .pauseFor(500);
}



AOS.init();

// Dynamic Copyright Year
const date = new Date();

const year = date.getFullYear(); 

document.getElementById("currentYear").innerHTML = year;

// Theme Management
function initTheme() {
    // Check for saved user preference, first in localStorage, then in system
    const savedTheme = localStorage.getItem('theme') || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    // Apply saved theme
    applyTheme(savedTheme);

    // Add event listener to toggle button
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
          console.log('clicked');
          
            const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' 
                ? 'light' 
                : 'dark';
            applyTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeToggleIcon(theme);
}

function updateThemeToggleIcon(theme) {
    const icon = document.querySelector('#themeToggle i');
    if (icon) {
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// Initialize theme when DOM is loaded
document.addEventListener('DOMContentLoaded', initTheme);
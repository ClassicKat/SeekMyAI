document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger-bars');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('show');
       });
}

    // Dark/Light mode toggle
    const sunMoonToggle = document.querySelector('.sun-moon-toggle');
    
    if (sunMoonToggle) {
        sunMoonToggle.addEventListener('click', () => {
           const body = document.body;
           if (body.classList.contains('dark-mode')) {
           body.classList.remove('dark-mode');
           body.classList.add('light-mode');
           sunMoonToggle.textContent = '🔆';
       } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        sunMoonToggle.textContent = '🌙';
       }
    });
   }
});
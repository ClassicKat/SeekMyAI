const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const backdrop = document.getElementById('backdrop');
const toggle = document.querySelector('.toggle');
const toggleCircle = document.querySelector('.toggle-circle');
const body = document.body;
const header = document.querySelector('header');
const menuItems = document.querySelectorAll('.menu-item');
const dividers = document.querySelectorAll('.divider');

menuToggle.addEventListener('click', () => {
    const isOpen = sidebar.classList.toggle('open');
    backdrop.style.display = isOpen ? 'block' : 'none';
});

backdrop.addEventListener('click', () => {
    sidebar.classList.remove('open');
    backdrop.style.display = 'none';
});

// Dark/Light Mode Toggle
toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    body.classList.toggle('light-mode');
    sidebar.classList.toggle('light-mode');
    header.classList.toggle('light-mode');

    menuItems.forEach(item => {
        item.classList.toggle('light-mode');
    });

    dividers.forEach(divider => {
        divider.classList.toggle('light-mode');
    });

    // Change toggle colors based on mode
    if (body.classList.contains('light-mode')) {
        toggle.style.backgroundColor = '#000000'; // Light mode background
        toggle.style.borderColor = '#808080'; // Light mode outline
        toggleCircle.style.backgroundColor = '#FFFFFF'; // Light mode circle
        toggleCircle.style.left = 'calc(100% - 0.6cm - 2px)'; // Move circle to right
    } else {
        toggle.style.backgroundColor = '#ED7117'; // Dark mode background
        toggle.style.borderColor = '#D3D3D3'; // Dark mode outline
        toggleCircle.style.backgroundColor = '#FFFFFF'; // Dark mode circle
        toggleCircle.style.left = '2px'; // Move circle to left
    }
});
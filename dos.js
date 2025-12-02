// Быстрый скрипт для меню
document.addEventListener('DOMContentLoaded', function() {
    // Создаем гамбургер меню
    const menu = document.querySelector('.menu');
    if (menu && window.innerWidth <= 768) {
        const toggleBtn = document.createElement('button');
        toggleBtn.innerHTML = '☰ Меню';
        toggleBtn.style.cssText = 'padding: 10px 20px; background: #4299e1; color: white; border: none; border-radius: 5px; margin-left: auto;';
        toggleBtn.onclick = () => menu.classList.toggle('active');
        
        const topMenu = document.querySelector('.top-menu');
        if (topMenu) topMenu.appendChild(toggleBtn);
    }
});
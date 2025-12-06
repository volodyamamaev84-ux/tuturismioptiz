// sleep.js - Мобильная оптимизация

document.addEventListener('DOMContentLoaded', function() {
    // ===== МОБИЛЬНОЕ МЕНЮ =====
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    
    // ===== TOUCH ОПТИМИЗАЦИЯ =====
    const touchElements = document.querySelectorAll('.service-card, .btn');
    
    touchElements.forEach(el => {
        el.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        el.addEventListener('touchend', function() {
            this.style.transform = '';
        });
        
        el.addEventListener('touchcancel', function() {
            this.style.transform = '';
        });
    });
    
    // ===== ОПТИМИЗАЦИЯ ИЗОБРАЖЕНИЙ =====
    const images = document.querySelectorAll('.card-img img');
    images.forEach(img => {
        // Добавляем обработчик ошибок
        img.onerror = function() {
            console.error('Ошибка загрузки изображения:', this.src);
            // Можно добавить fallback изображение
            // this.src = 'fallback.jpg';
        };
    });
    
    // ===== ИСПРАВЛЕНИЕ ВЫСОТЫ ДЛЯ МОБИЛЬНЫХ =====
    function setViewportHeight() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);
    window.addEventListener('orientationchange', setViewportHeight);
    console.log('Сайт оптимизирован для мобильных устройств');
};
// dos.js - Мобильная оптимизация

document.addEventListener('DOMContentLoaded', function() {
    // ===== МОБИЛЬНОЕ МЕНЮ =====
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Закрытие меню при клике на ссылку
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // ===== TOUCH ОПТИМИЗАЦИЯ =====
    const touchElements = document.querySelectorAll('.attraction-card, .btn');
    
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
    
    // ===== ПЛАВНАЯ ПРОКРУТКА ДЛЯ ЯКОРЕЙ =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Закрываем меню если открыто
                if (navMenu && navMenu.classList.contains('active')) {
                    menuToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                }
                
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===== ОПТИМИЗАЦИЯ ИЗОБРАЖЕНИЙ =====
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        // Добавляем обработчик ошибок
        img.onerror = function() {
            console.error('Ошибка загрузки изображения:', this.src);
            this.style.display = 'none';
        };
    });
});
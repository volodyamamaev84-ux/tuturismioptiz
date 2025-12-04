<script>
// Мобильное меню
document.addEventListener('DOMContentLoaded', function() {
    // Создаем кнопку гамбургер
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '☰';
    menuToggle.setAttribute('aria-label', 'Открыть меню');
    
    const navMenu = document.querySelector('.nav-menu');
    const navContainer = document.querySelector('.nav-container');
    
    if (navMenu && navContainer) {
        navContainer.appendChild(menuToggle);
        
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.innerHTML = navMenu.classList.contains('active') ? '✕' : '☰';
            menuToggle.setAttribute('aria-label', 
                navMenu.classList.contains('active') ? 'Закрыть меню' : 'Открыть меню'
            );
        });
        
        // Закрытие меню при клике на ссылку
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.innerHTML = '☰';
                menuToggle.setAttribute('aria-label', 'Открыть меню');
            });
        });
        
        // Закрытие меню при клике вне его
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                menuToggle.innerHTML = '☰';
                menuToggle.setAttribute('aria-label', 'Открыть меню');
            }
        });
    }
    
    // Lazy loading изображений
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img');
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    
                    // Загружаем изображение если оно еще не загружено
                    if (!img.complete && img.dataset.src) {
                        img.src = img.dataset.src;
                    }
                    
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => {
            img.setAttribute('loading', 'lazy');
            imageObserver.observe(img);
        });
    }
    
    // Оптимизация форм для мобильных
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.style.fontSize = '16px'; // Предотвращает zoom в iOS
    });
    
    // Touch оптимизация
    const touchElements = document.querySelectorAll('.btn, .attraction-card, .nav-link');
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
    
    // Кнопка "Наверх" для мобильных
    backToTop.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: #3498db;
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s;
        z-index: 999;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    `;
    
    document.body.appendChild(backToTop);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Исправление высоты на мобильных
    const setVH = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    setVH();
    window.addEventListener('resize', setVH);
    window.addEventListener('orientationchange', setVH);
});
</script>
function animateHeader() {
    anime({
        targets: '.header-title',
        translateY: [-50, 0],
        opacity: [0, 1],
        duration: 1200,
        easing: 'easeOutElastic(1, .5)'
    });
}
function animatePersonCards() {
    anime({
        targets: '.person-card',
        translateY: [50, 0],
        opacity: [0, 1],
        delay: anime.stagger(200),
        duration: 1000,
        easing: 'easeOutExpo'
    });
}

function animateNavLinks() {
    anime({
        targets: '.nav-link',
        scale: [0.8, 1],
        opacity: [0, 1],
        delay: anime.stagger(100),
        duration: 800,
        easing: 'easeOutBack'
    });
}

function animateSections() {
    anime({
        targets: '.info-section',
        translateY: [30, 0],
        opacity: [0, 1],
        delay: anime.stagger(150),
        duration: 900,
        easing: 'easeOutQuad'
    });
}

function animateTable() {
    anime({
        targets: '.works-table tbody tr',
        translateX: [-50, 0],
        opacity: [0, 1],
        delay: anime.stagger(100),
        duration: 800,
        easing: 'easeOutSine'
    });
}
function animateButtons() {
    anime({
        targets: ['.theme-toggle', '.geo-button'],
        scale: [0, 1],
        rotate: '1turn',
        delay: anime.stagger(300),
        duration: 1000,
        easing: 'easeOutBack'
    });
}
function fadeInPage() {
    anime({
        targets: '.page-wrapper',
        opacity: [0, 1],
        duration: 600,
        easing: 'easeInOutQuad'
    });
}
function initAnimations() {
    fadeInPage();
    animateHeader();
    animateNavLinks();
    animatePersonCards();
    animateSections();
    animateButtons();
    if (document.querySelector('.works-table')) {
        animateTable();
    }
    document.querySelectorAll('.person-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.05,
                duration: 300,
                easing: 'easeOutSine'
            });
        });
        
        card.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                duration: 300,
                easing: 'easeOutSine'
            });
        });
    });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.1,
                duration: 200,
                easing: 'easeOutSine'
            });
        });
        link.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                duration: 200,
                easing: 'easeOutSine'
            });
        });
    });
}
document.addEventListener('DOMContentLoaded', initAnimations);
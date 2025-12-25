// main.js

// Переключение темы
function toggleTheme() {
    let body = document.body;
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    }
}

// Геолокация
function showDistance() {
    if (!navigator.geolocation) {
        alert('Ваш браузер не поддерживает геолокацию');
        return;
    }

    navigator.geolocation.getCurrentPosition(
        function(position) {
            let userLat = position.coords.latitude;
            let userLon = position.coords.longitude;
            let museumLat = 59.9395;
            let museumLon = 30.3255;
            
            let distance = Math.sqrt(
                Math.pow(userLat - museumLat, 2) + 
                Math.pow(userLon - museumLon, 2)
            ) * 111;
            
            alert('Расстояние до музея: ' + distance.toFixed(1) + ' км\nАдрес: наб. реки Мойки, 12, Санкт-Петербург');
        },
        function() {
            alert('Не удалось определить ваше местоположение');
        }
    );
}

// Инициализация кнопок темы и геолокации
function initPage() {
    // Загрузка темы
    let savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }

    // Кнопка переключения темы
 setTimeout(() => {
    // Кнопка переключения темы
    let themeButton = document.createElement('button');
    themeButton.textContent = 'Сменить тему';
    themeButton.className = 'theme-toggle';
    themeButton.onclick = toggleTheme;
    document.body.appendChild(themeButton);

    // Кнопка геолокации
    let geoButton = document.createElement('button');
    geoButton.textContent = 'Узнать расстояние до музея';
    geoButton.className = 'geo-button';
    geoButton.onclick = showDistance;
    document.body.appendChild(geoButton);
}, 500);
}

// Запуск после загрузки DOM
document.addEventListener('DOMContentLoaded', initPage);

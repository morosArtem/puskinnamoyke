// media-controls.js

function initMediaControls() {
    let video = document.querySelector('video');
    let audio = document.querySelector('audio');
    
    if (video) addControls(video);
    if (audio) addControls(audio);
}

function addControls(media) {
    let container = media.parentElement;
    
    let controls = document.createElement('div');
    controls.className = 'custom-controls';
    
    let buttons = [
        { text: 'Воспр./Пауза', action: () => media.paused ? media.play() : media.pause() },
        { text: '-5с', action: () => media.currentTime -= 5 },
        { text: '+5с', action: () => media.currentTime += 5 },
        { text: 'Громче', action: () => media.volume = Math.min(1, media.volume + 0.1) },
        { text: 'Тише', action: () => media.volume = Math.max(0, media.volume - 0.1) }
    ];
    
    buttons.forEach(btn => {
        let button = document.createElement('button');
        button.textContent = btn.text;
        button.className = 'media-control-button';
        button.onclick = btn.action;
        controls.appendChild(button);
    });
    
    container.appendChild(controls);
}

// Запуск после загрузки DOM
document.addEventListener('DOMContentLoaded', initMediaControls);
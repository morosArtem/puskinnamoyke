document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    const savedName = localStorage.getItem('contact_name');
    const savedFeedback = localStorage.getItem('contact_feedback');

    if (savedName && savedName.trim() !== '') {
        const greeting = document.createElement('div');
        greeting.className = 'greeting-message';
        greeting.innerHTML = `<h3>Добрый день, ${savedName}!</h3>`;
        
        const formContainer = form.parentElement;
        formContainer.insertBefore(greeting, form);
    }

    if (savedFeedback) {
        const feedbackInput = document.getElementById('feedback');
        if (feedbackInput) {
            feedbackInput.value = savedFeedback;
        }
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const category = document.getElementById('category').value;
        const feedback = document.getElementById('feedback').value;

        localStorage.setItem('contact_name', name);
        localStorage.setItem('contact_email', email);
        localStorage.setItem('contact_category', category);
        localStorage.setItem('contact_feedback', feedback);
        localStorage.setItem('contact_timestamp', new Date().toISOString());

        form.style.display = 'none';

        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = `
            <div style="text-align: center;">
                <h3>Спасибо за ваш отзыв!</h3>
                <p>Ваше сообщение успешно отправлено.</p>
                <p>Мы свяжемся с вами в ближайшее время.</p>
                <button id="new-message-btn" class="submit-button" style="margin-top: 1rem;">
                    Отправить новое сообщение
                </button>
            </div>
        `;

        form.parentElement.appendChild(successMessage);

        document.getElementById('new-message-btn').addEventListener('click', function() {
      
            successMessage.remove();

            form.style.display = 'block';
 
            form.reset();

            const oldGreeting = document.querySelector('.greeting-message');
            if (oldGreeting) {
                oldGreeting.remove();
            }
        });
    });
});
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {

    question.addEventListener('click', () => {

        const answer = question.nextElementSibling;

        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }

    });

});

const form = document.querySelector('.contact-form');

form.addEventListener('submit', (e) => {

    e.preventDefault();

    alert('Сообщение успешно отправлено!');

    form.reset();

});
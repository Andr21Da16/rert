document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const messagesContainer = document.getElementById('messages-container');
    const questionsContainer = document.getElementById('questions-container');
    const nextSectionButton = document.getElementById('next-section');

    let currentMessageIndex = 0;
    let currentQuestionIndex = 0;

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const errorMessage = document.getElementById('error-message');

        if (username === 'Ayelen' && password === 'Ayelen') {
            loginForm.style.display = 'none'; // Ocultar el formulario de inicio de sesión
            messagesContainer.style.display = 'block'; // Mostrar los mensajes
            document.getElementById('message-1').style.display = 'block'; // Mostrar el primer mensaje
        } else {
            errorMessage.textContent = 'Usuario o contraseña incorrectos.';
        }
    });

    messagesContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('next-btn')) {
            const messageId = parseInt(event.target.getAttribute('data-message'), 10);
            document.getElementById(`message-${messageId}`).style.display = 'none';

            if (messageId < document.querySelectorAll('.message').length) {
                document.getElementById(`message-${messageId + 1}`).style.display = 'block';
            } else {
                nextSectionButton.style.display = 'block'; // Mostrar el botón para pasar a las preguntas
            }
        }
    });

    nextSectionButton.addEventListener('click', () => {
        messagesContainer.style.display = 'none';
        questionsContainer.style.display = 'block';
        document.getElementById('question-1').style.display = 'block';
    });

    questionsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('question-btn')) {
            const questionId = event.target.getAttribute('data-question');
            const answer = event.target.getAttribute('data-answer');
            document.querySelector(`#question-${questionId} .next-btn`).style.display = 'block';
        }

        if (event.target.classList.contains('next-btn')) {
            const questionId = parseInt(event.target.getAttribute('data-question'), 10);
            document.getElementById(`question-${questionId}`).style.display = 'none';

            if (questionId < document.querySelectorAll('.question').length) {
                document.getElementById(`question-${questionId + 1}`).style.display = 'block';
            } else {
                questionsContainer.style.display = 'none';
                document.getElementById('response-message').style.display = 'block';
            }
        }
    });
});
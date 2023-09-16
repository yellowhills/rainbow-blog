// Script para validar o formulário de inscrição na newsletter
document.addEventListener('DOMContentLoaded', function () {
    const newsletterForm = document.querySelector('form');
    newsletterForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const emailValue = emailInput.value;
        if (isValidEmail(emailValue)) {
            // Envie o formulário
            alert('Obrigado por se inscrever em nossa newsletter!');
            newsletterForm.reset();
        } else {
            alert('Por favor, insira um endereço de e-mail válido.');
        }
    });

    // Função para validar endereço de e-mail simples (pode ser aprimorada)
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});

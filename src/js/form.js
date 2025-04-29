document.getElementById('meuForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const button = this.querySelector('button');
  const formMessage = document.getElementById('form-message');
  button.disabled = true;

  formMessage.classList.remove('show', 'error');

  fetch(this.action, {
    method: 'POST',
    body: new FormData(this),
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      formMessage.textContent = 'Mensagem enviada! Entraremos em contato em breve.';
      formMessage.classList.add('show');
      this.reset();
    } else {
      formMessage.textContent = 'Erro ao enviar. Tente novamente ou nos chame no WhatsApp.';
      formMessage.classList.add('show', 'error');
    }
  }).finally(() => {
    button.disabled = false;
    setTimeout(() => {
      formMessage.classList.remove('show');
    }, 3000);
  });
});
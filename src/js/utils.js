const pages = {
    contato: './contato.html',
    'saiba mais': './saiba-mais.html',
    home: '../index.html',
    sobre: './sobre.html',
    servico: './servicos.html',
    'Dra.Ana Silvia':'./anaSilva.html'
  };
  const searchButton = document.getElementById('search-button');
  const searchInput = document.getElementById('search-input');
  const searchMessage = document.getElementById('search-message');

  function showMessage(message) {
    searchMessage.textContent = message;
    searchMessage.classList.add('show');

    setTimeout(() => {
      searchMessage.classList.remove('show');
    }, 1000);
  }

  searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim().toLowerCase();

    if (pages[query]) {
      window.location.href = pages[query];
    } else {

      showMessage('Página não encontrada.');
    }
  });
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      searchButton.click();
    }
  });
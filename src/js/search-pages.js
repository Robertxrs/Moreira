document.addEventListener('DOMContentLoaded', () => {
        const pages = {
    contato: 'src/pages/contato.html',
    'saiba mais': '/src/pages/saibaMais.html',
    home: 'index.html',
    servicos: '/src/pages/servicos.html',
    'ana silvia': '/src/pages/draanasilva.html'
  };

  const searchButton = document.getElementById('search-button');
  const searchInput = document.getElementById('search-input');
  const searchMessage = document.getElementById('search-message');

  function showMessage(message) {
    searchMessage.textContent = message;
    searchMessage.classList.add('show');

    setTimeout(() => {
      searchMessage.classList.remove('show');
    }, 2000);
  }

  function handleSearch() {
    const query = searchInput.value.trim().toLowerCase();

    if (pages[query]) {
      window.location.href = pages[query];
    } else {
      showMessage('Página não encontrada.');
    }
  }

  searchButton.addEventListener('click', handleSearch);

  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  });
});


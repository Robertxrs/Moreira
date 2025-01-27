document.addEventListener('DOMContentLoaded', () => {
  const pages = {
    contato: '/src/pages/contato.html',
    'saiba mais': '/src/pages/saibaMais.html',
    home: '/index.html',
    servicos: '/src/pages/servicos.html',
    'ana silvia': '/src/pages/anaSilva.html'
  };

  const toggleSearch = document.getElementById('toggle-search');
  const searchDropdown = document.getElementById('search-dropdown');
  const dropdownSearchInput = document.getElementById('dropdown-search-input');
  const dropdownSearchButton = document.getElementById('dropdown-search-button');
  const searchMessage = document.getElementById('search-message'); 


  function showMessage(message) {
    searchMessage.textContent = message;
    searchMessage.classList.add('show');

    setTimeout(() => {
      searchMessage.classList.remove('show');
    }, 2000);
  }


  toggleSearch.addEventListener('click', () => {
    const isHidden = searchDropdown.classList.contains('hidden');
    if (isHidden) {
      searchDropdown.classList.remove('hidden');
      searchDropdown.classList.add('show');
    } else {
      searchDropdown.classList.remove('show');
      setTimeout(() => searchDropdown.classList.add('hidden'), 300);
    }
  });


  function searchPages() {
    const query = dropdownSearchInput.value.trim().toLowerCase();
    if (pages[query]) {
      window.location.href = pages[query];
    } else {
      showMessage('Página não encontrada.');
    }
  }


  dropdownSearchButton.addEventListener('click', searchPages);

  dropdownSearchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      searchPages();
    }
  });
});

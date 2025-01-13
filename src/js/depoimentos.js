const content = document.getElementById('depoimentos-content-p');
const btnNext = document.getElementById('bttn-next');
const btnBack = document.getElementById('bttn-back');

const cardWidth = content.offsetWidth / 1; // Calcula a largura de dois depoimentos visíveis

// Função para avançar
btnNext.addEventListener('click', () => {
    content.scrollLeft += cardWidth; // Avança dois depoimentos
});

// Função para voltar
btnBack.addEventListener('click', () => {
    content.scrollLeft -= cardWidth; // Volta dois depoimentos
});

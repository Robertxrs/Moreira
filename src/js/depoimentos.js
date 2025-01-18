document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('depoimentos-content');
    const btnNext = document.getElementById('bttn-next');
    const btnBack = document.getElementById('bttn-back');

    if (content && btnNext && btnBack) {
        const cardWidth = content.offsetWidth;

        btnNext.addEventListener('click', () => {
            content.scrollLeft += cardWidth; 
        });

        btnBack.addEventListener('click', () => {
            content.scrollLeft -= cardWidth; 
        });
    }

    const content2 = document.getElementById('depoimentos-content-p');
    if (content2) {
        const cardWidth2 = content2.offsetWidth;

        btnNext.addEventListener('click', () => {
            content2.scrollLeft += cardWidth2; 
        });

        btnBack.addEventListener('click', () => {
            content2.scrollLeft -= cardWidth2;
        });
    }

    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("header-menu");

    if (hamburger && menu) {
        hamburger.addEventListener("click", () => {
            menu.classList.toggle("active");
        });
    }
});

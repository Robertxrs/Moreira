const content = document.getElementById('depoimentos-content');
const btnNext = document.getElementById('bttn-next');
const btnBack = document.getElementById('bttn-back');
const cardWidth = content.offsetWidth / 1;

btnNext.addEventListener('click', () => {
    content.scrollLeft += cardWidth; 
});
btnBack.addEventListener('click', () => {
    content.scrollLeft -= cardWidth; 
});



const content2 = document.getElementById('depoimentos-content-p');
const cardWidth2 = content2.offsetWidth / 1; 

btnNext.addEventListener('click', () => {
    content2.scrollLeft += cardWidth; 
});
btnBack.addEventListener('click', () => {
    content2.scrollLeft -= cardWidth2;
});


const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("header-menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});

let currentSlide = 0; // Índice do slide atual
const slides = document.querySelectorAll('.carousel-slide'); // Seleciona todos os slides
const totalSlides = slides.length; // Total de slides
const carouselContainer = document.querySelector('.carousel-container'); // Seleciona o container do carrossel

function moveToNextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; // Avança para o próximo slide
    updateSlides();
}

function moveToPrevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Volta para o slide anterior
    updateSlides();
}

function updateSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = 'none'; // Esconde todos os slides
    });
    slides[currentSlide].style.display = 'block'; // Mostra apenas o slide atual
    const offset = -currentSlide * 100; // Calcula o deslocamento
    carouselContainer.style.transform = `translateX(${offset}%)`; // Move o container
}

// Inicializa o carrossel
function initCarousel() {
    updateSlides(); // Atualiza os slides ao inicializar
    setInterval(moveToNextSlide, 3000); // Troca de slide a cada 3 segundos
}

// Chama a função para iniciar o carrossel
window.onload = initCarousel;

// Adiciona eventos aos botões
document.querySelector('.carousel-button.prev').addEventListener('click', moveToPrevSlide);
document.querySelector('.carousel-button.next').addEventListener('click', moveToNextSlide);

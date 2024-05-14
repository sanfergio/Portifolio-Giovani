function animarTexto(textoAnimado, palavra) {
    let letraAtual = 0;
    let apagando = false;

    function animacao() {
        if (!apagando) {
            textoAnimado.textContent += palavra[letraAtual];
            if (letraAtual < palavra.length - 1) {
                letraAtual++;
                setTimeout(animacao, 100);
            } else {
                apagando = true;
                setTimeout(animacao, 1500);
            }
        } else {
            textoAnimado.textContent = textoAnimado.textContent.slice(0, -1);
            if (textoAnimado.textContent === '') {
                apagando = false;
                letraAtual = 0;
            }
            setTimeout(animacao, 150); 
        }
    }

    animacao();
}

document.querySelectorAll('.especial').forEach((elemento) => {
    const palavra = "DEVELOPER!";
    animarTexto(elemento, palavra);
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }
    });
});

document.querySelectorAll(".fade-in").forEach((element) => {
    observer.observe(element);
});

document.querySelectorAll(".fade-in-img").forEach((element) => {
    observer.observe(element);
});




$(document).ready(function(){
  $('.carousel').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev">&#8592;</button>',
    nextArrow: '<button type="button" class="slick-next">&#8594;</button>'
  });
});


const carousel = document.querySelector('.projects-carousel');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let scrollAmount = 0;
const scrollSize = 220; // Define o tamanho do scroll

prevBtn.addEventListener('click', () => {
  scrollAmount -= scrollSize;
  if (scrollAmount < 0) scrollAmount = 0;
  carousel.scrollTo({
    top: 0,
    left: scrollAmount,
    behavior: 'smooth'
  });
});

nextBtn.addEventListener('click', () => {
  scrollAmount += scrollSize;
  if (scrollAmount > carousel.scrollWidth - carousel.clientWidth) {
    scrollAmount = carousel.scrollWidth - carousel.clientWidth;
  }
  carousel.scrollTo({
    top: 0,
    left: scrollAmount,
    behavior: 'smooth'
  });
});

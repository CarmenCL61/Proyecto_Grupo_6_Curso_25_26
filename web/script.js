document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener('click', function (e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute('href'));
        destino.scrollIntoView({behavior: 'smooth'});
});
});

const tarjetas = document.querySelectorAll('.tarjeta');

const observador = new IntersectionObserver(entradas => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

tarjetas.forEach(tarjeta => {
    observador.observe(tarjeta);
});

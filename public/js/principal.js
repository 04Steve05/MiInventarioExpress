document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('nav-toggle');
  const navEnlaces = document.querySelector('.nav-enlaces');

  if (navToggle) {
    navToggle.addEventListener('click', function() {
      navEnlaces.classList.toggle('activo');
    });
  }

  const alertas = document.querySelectorAll('.error, .errores');
  alertas.forEach(function(alerta) {
    setTimeout(function() {
      alerta.style.opacity = '0';
      alerta.style.transition = 'opacity 0.5s ease';
      setTimeout(function() {
        alerta.style.display = 'none';
      }, 500);
    }, 4000);
  });
});

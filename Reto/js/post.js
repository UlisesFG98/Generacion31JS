document.addEventListener("DOMContentLoaded", function() {
  const pubBtn = document.getElementById('pubBtn');

  pubBtn.addEventListener('click', function(event) {
    event.preventDefault();

    const title = document.getElementById('titlePost').value;
    const body = document.getElementById('bodyPost').value;

    if (title && body) {
      const post = {
        title: title,
        body: body
      };

      // Guardar la publicación en el localStorage
      guardarPublicacion(post);

      // Redireccionar a la página de publicaciones
      window.location.href = '/Reto/index.html';
    } else {
      alert('Por favor, complete todos los campos.');
    }
  });


});

function guardarPublicacion(post) {
  let publicaciones = JSON.parse(localStorage.getItem('publicaciones')) || [];
  publicaciones.push(post);
  localStorage.setItem('publicaciones', JSON.stringify(publicaciones));
}

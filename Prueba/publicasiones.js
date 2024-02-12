// Declarar la variable publicaciones fuera del evento DOMContentLoaded
let publicaciones = [];

document.addEventListener("DOMContentLoaded", function() {
  const postsList = document.getElementById('postsList');

  // Obtener las publicaciones del localStorage
  publicaciones = JSON.parse(localStorage.getItem('publicaciones')) || [];

  // Renderizar las publicaciones en la lista
  renderizarPublicaciones();
});

function renderizarPublicaciones() {
  postsList.innerHTML = ''; // Limpiar la lista antes de renderizar

  publicaciones.forEach(post => {
      const li = document.createElement('li');
      li.classList.add('post');
      li.innerHTML = `
        <div class="post-header">
          <h2>${post.title}</h2>
          <div class="dropdown-container">
            <span class="toggle-button" onclick="toggleMenu(this)">...</span>
            <div class="dropdown-menu">
              <span class="action-button" onclick="editPost(${post.id})">Editar</span>
              <span class="action-button" onclick="deletePost(${post.id})">Eliminar</span>
            </div>
          </div>
        </div>
        <p>${post.body}</p>`;
      postsList.appendChild(li);
  });
}

function toggleMenu(button) {
  const menu = button.parentElement.querySelector('.dropdown-menu');
  menu.classList.toggle('show-menu');
}

function editPost(id) {
  console.log("Editar publicación con ID:", id);
}

function deletePost(id) {
  const index = publicaciones.findIndex(post => post.id === id);
  if (index !== -1) {
    publicaciones.splice(index, 1);
    localStorage.setItem('publicaciones', JSON.stringify(publicaciones));
    renderizarPublicaciones();
  }
}


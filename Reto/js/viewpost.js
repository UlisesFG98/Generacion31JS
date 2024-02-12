// Declarar la variable publicaciones fuera del evento DOMContentLoaded
let publicaciones = [];

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOMContentLoaded event fired");

  // Obtener las publicaciones del localStorage
  publicaciones = JSON.parse(localStorage.getItem('publicaciones')) || [];

  // Renderizar las publicaciones en la lista
  renderizarPublicaciones();

  // Obtener la información del post editado, si existe
  const editedPost = JSON.parse(localStorage.getItem('editedPost'));
  console.log("Edited Post:", editedPost);
  if (editedPost) {
    // Llenar los campos con la información del post editado
    console.log("Filling fields with edited post information");
    const titlePost = document.getElementById('titlePost');
    const bodyPost = document.getElementById('bodyPost');
    if (titlePost && bodyPost) {
      titlePost.value = editedPost.title;
      bodyPost.value = editedPost.body;
    } else {
      console.error("Element with ID 'titlePost' or 'bodyPost' not found.");
    }
  } else {
    console.log("No edited post found in localStorage");
  }
});


function renderizarPublicaciones() {
  const postsList = document.getElementById('postsList');
  if (!postsList) {
    console.error("Element with ID 'postsList' not found.");
    return;
  }
  postsList.innerHTML = ''; // Limpiar la lista antes de renderizar

  publicaciones.forEach((post, index) => {
    const li = document.createElement('li');
    li.classList.add('post');
    li.innerHTML = `
        <div class="post-header">
          <h2>${post.title}</h2>
          <div class="dropdown-container">
            <span class="toggle-button" onclick="toggleMenu(this)">...</span>
            <div class="dropdown-menu">
              <span class="action-button" onclick="editPost(${index})">Editar</span>
              <span class="action-button" onclick="deletePost(${index})">Eliminar</span>
            </div>
          </div>
        </div>
        <p>${post.body}</p>`;
    postsList.insertBefore(li, postsList.firstChild); // Agregar al principio de la lista
  });
}

function toggleMenu(button) {
  const menu = button.parentElement.querySelector('.dropdown-menu');
  menu.classList.toggle('show-menu');
}

function editPost(index) {
  console.log("Editar publicación en el índice:", index);

  // Obtener el post seleccionado
  const post = publicaciones[index];

  // Almacenar la información del post en el localStorage
  localStorage.setItem('editedPost', JSON.stringify(post));

  // Redireccionar a la página de creación de publicaciones
  window.location.href = "/Reto/Post/post.html"; // Cambia la URL según la ubicación de tu página de creación de publicaciones
}


function deletePost(index) {
  console.log("Eliminar publicación en el índice:", index);

  if (index !== -1) {
    publicaciones.splice(index, 1);
    localStorage.setItem('publicaciones', JSON.stringify(publicaciones));
    renderizarPublicaciones();
  }
}

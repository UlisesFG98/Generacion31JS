// Función para validar el formulario
export function validateForm() {
  let email = document.getElementById('inputEmail').value;
  let name = document.getElementById('inputName').value;
  let phone = document.getElementById('inputPhone').value;

  if (email === '') {
    alert('El campo correo es requerido');
    return false;
  } else if (!email.includes('@')) {
    alert('El correo no es válido');
    return false;
  }

  if (name === '') {
    alert('El campo nombre es requerido');
    return false;
  }

  if (phone === '') {
    alert('El campo teléfono es requerido');
    return false;
  }

  return true;
}

// Función para leer los datos desde localStorage y mostrarlos en la tabla
export function readData() {
  let list = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
  let bodyListHtml = '';

  list.forEach(function(element, index) {
    bodyListHtml += "<tr>";
    bodyListHtml += "<td>" + element.email + "</td>";
    bodyListHtml += "<td>" + element.name + "</td>";
    bodyListHtml += "<td>" + element.phone + "</td>";
    bodyListHtml += '<td><button onclick="deleteData(' + index + ')" class="btn btn-danger">Eliminar Datos</button> <button onclick="editData(' + index + ')" class="btn btn-warning">Editar Datos</button>';
    bodyListHtml += "</tr>";
  });

  document.querySelector('#tableData tbody').innerHTML = bodyListHtml;
}

// Función para agregar nuevos datos
export function funcionAddData() {
  if (validateForm()) {
    let email = document.getElementById('inputEmail').value
    let name = document.getElementById('inputName').value
    let phone = document.getElementById('inputPhone').value

    let list = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : []

    list.push({
      email: email,
      name: name,
      phone: phone
    });

    localStorage.setItem('list', JSON.stringify(list))
    readData();

    document.getElementById('inputEmail').value = ''
    document.getElementById('inputName').value = ''
    document.getElementById('inputPhone').value = ''
  }
}

// Función para eliminar datos
export function deleteData(index) {
  let list = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : []
  list.splice(index, 1)
  localStorage.setItem('list', JSON.stringify(list))
  readData()
}

// Función para editar datos
export function editData(index) {
  document.getElementById('btnAdd').style.display = 'none';
  document.getElementById('btnUpdate').style.display = 'block';

  let list = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];

  document.getElementById('inputEmail').value = list[index].email;
  document.getElementById('inputName').value = list[index].name;
  document.getElementById('inputPhone').value = list[index].phone;

  document.querySelector('#btnUpdate').onclick = function(){
    if (validateForm()) {
      list[index].email = document.getElementById('inputEmail').value;
      list[index].name = document.getElementById('inputName').value;
      list[index].phone = document.getElementById('inputPhone').value;

      localStorage.setItem('list', JSON.stringify(list));
      readData();

      document.getElementById('inputEmail').value = '';
      document.getElementById('inputName').value = '';
      document.getElementById('inputPhone').value = '';

      document.getElementById('btnAdd').style.display = 'block';
      document.getElementById('btnUpdate').style.display = 'none';
    }
  }
}

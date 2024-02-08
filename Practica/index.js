// Función para validar el formulario
function validateForm() {
  const requiredFields = [
    { id: 'inputName', name: 'Nombre' },
    { id: 'inputAge', name: 'Edad' },
    { id: 'inputPhone', name: 'Teléfono' },
    { id: 'inputEmail', name: 'Correo' },
    { id: 'inputGender', name: 'Género' },
    { id: 'inputBirthDate', name: 'Fecha de Nacimiento' },
    { id: 'inputCodeEditor', name: 'Editor de Código' },
    { id: 'inputDescriptionUser', name: 'Descripción del Usuario' }
  ];

  for (let field of requiredFields) {
    const fieldValue = document.getElementById(field.id).value.trim();
    if (!fieldValue) {
      alert(`El campo ${field.name} es requerido`);
      return false;
    }
  }

  const email = document.getElementById('inputEmail').value.trim();
  if (!email.includes('@')) {
    alert('El correo no es válido');
    return false;
  }

  const programmingLanguagesChecked = document.querySelectorAll('input[type="checkbox"]:checked');
  if (programmingLanguagesChecked.length === 0) {
    alert('Debe seleccionar al menos un lenguaje de programación');
    return false;
  }

  return true;
}




// Función para leer los datos desde localStorage y mostrarlos en la tabla
function readData() {
  let list = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
  let bodyListHtml = '';

  list.forEach(function(element, index) {
    bodyListHtml += "<tr>";
    bodyListHtml += "<td>" + element.name + "</td>";
    bodyListHtml += "<td>" + element.age + "</td>";
    bodyListHtml += "<td>" + element.phone + "</td>";
    bodyListHtml += "<td>" + element.email + "</td>";
    bodyListHtml += "<td>" + element.gender + "</td>";
    bodyListHtml += "<td>" + element.birthDate + "</td>";
    bodyListHtml += "<td>" + element.programmingLanguages.join(', ') + "</td>"; // Convertir el array en una cadena separada por comas
    bodyListHtml += "<td>" + element.codeEditor + "</td>";
    bodyListHtml += "<td>" + element.descriptionUser + "</td>";
    bodyListHtml += '<td><button onclick="deleteData(' + index + ')" class="btn btn-danger">Eliminar Datos</button></td>';
    bodyListHtml += '<td><button onclick="editData(' + index + ')" class="btn btn-warning">Editar Datos</button></td>';
    bodyListHtml += "</tr>";
  });

  document.querySelector('#tableData tbody').innerHTML = bodyListHtml;
}


// Llamar a la función readData para mostrar los datos al cargar la página
readData()

// Función para agregar nuevos datos
// Función para agregar nuevos datos
function funcionAddData() {
  if (validateForm()) {
    let name = document.getElementById('inputName').value;
    let age = document.getElementById('inputAge').value;
    let phone = document.getElementById('inputPhone').value;
    let email = document.getElementById('inputEmail').value;
    let gender = document.getElementById('inputGender').value;
    let birthDate = document.getElementById('inputBirthDate').value;

    // Obtener los lenguajes de programación seleccionados
    let programmingLanguages = [];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(function(checkbox) {
      programmingLanguages.push(checkbox.value);
    });

    let codeEditor = document.getElementById('inputCodeEditor').value;
    let descriptionUser = document.getElementById('inputDescriptionUser').value;

    let list = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];

    list.push({
      name: name,
      age: age,
      phone: phone,
      email: email,
      gender: gender,
      birthDate: birthDate,
      programmingLanguages: programmingLanguages,
      codeEditor: codeEditor,
      descriptionUser: descriptionUser
    });

    localStorage.setItem('list', JSON.stringify(list));
    readData();

    // Limpiar los campos de entrada después de agregar los datos
    document.getElementById('inputName').value = '';
    document.getElementById('inputAge').value = '';
    document.getElementById('inputPhone').value = '';
    document.getElementById('inputEmail').value = '';
    document.getElementById('inputGender').value = '';
    document.getElementById('inputBirthDate').value = '';
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(function(checkbox) {
      checkbox.checked = false;
    });
    document.getElementById('inputCodeEditor').value = '';
    document.getElementById('inputDescriptionUser').value = '';
  }
}



function deleteData(index) {
  let list = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : []
  list.splice(index, 1)
  localStorage.setItem('list', JSON.stringify(list))
  readData()
}

// Función para editar datos
function editData(index){
  document.getElementById('btnAdd').style.display = 'none';
  document.getElementById('btnUpdate').style.display = 'block';

  let list = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];

  // Llenar los campos con los valores del usuario seleccionado
  document.getElementById('inputName').value = list[index].name;
  document.getElementById('inputAge').value = list[index].age;
  document.getElementById('inputPhone').value = list[index].phone;
  document.getElementById('inputEmail').value = list[index].email;
  document.getElementById('inputGender').value = list[index].gender;
  document.getElementById('inputBirthDate').value = list[index].birthDate;

  // Marcar las casillas de verificación de los lenguajes de programación
  list[index].programmingLanguages.forEach(function(language) {
    document.getElementById('checkbox' + language).checked = true;
  });

  document.getElementById('inputCodeEditor').value = list[index].codeEditor;
  document.getElementById('inputDescriptionUser').value = list[index].descriptionUser;

  document.querySelector('#btnUpdate').onclick = function(){
    if (validateForm() == true) {
      // Actualizar los valores en el almacenamiento local
      list[index].name = document.getElementById('inputName').value;
      list[index].age = document.getElementById('inputAge').value;
      list[index].phone = document.getElementById('inputPhone').value;
      list[index].email = document.getElementById('inputEmail').value;
      list[index].gender = document.getElementById('inputGender').value;
      list[index].birthDate = document.getElementById('inputBirthDate').value;

      // Actualizar los lenguajes de programación
      let programmingLanguages = [];
      document.querySelectorAll('input[type="checkbox"]:checked').forEach(function(checkbox) {
        programmingLanguages.push(checkbox.value);
      });
      list[index].programmingLanguages = programmingLanguages;

      list[index].codeEditor = document.getElementById('inputCodeEditor').value;
      list[index].descriptionUser = document.getElementById('inputDescriptionUser').value;

      localStorage.setItem('list', JSON.stringify(list));
      readData();

      // Limpiar los campos de entrada después de la actualización
      document.getElementById('inputName').value = '';
      document.getElementById('inputAge').value = '';
      document.getElementById('inputPhone').value = '';
      document.getElementById('inputEmail').value = '';
      document.getElementById('inputGender').value = '';
      document.getElementById('inputBirthDate').value = '';
      document.querySelectorAll('input[type="checkbox"]:checked').forEach(function(checkbox) {
        checkbox.checked = false;
      });
      document.getElementById('inputCodeEditor').value = '';
      document.getElementById('inputDescriptionUser').value = '';

      // Restaurar la visibilidad de los botones
      document.getElementById('btnAdd').style.display = 'block';
      document.getElementById('btnUpdate').style.display = 'none';
    }
  }
}



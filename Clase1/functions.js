console.log("hola mundo");

// Comentario de una sola linea

/*comentario
de
bloque*/

//.TODO. comentario

//imprimir errores en consola, estos si se pueden quedar en la paguina
console.error("error");

//Funciones
/**  **/
const quieroSumar /* Guardar una funcion en una variable */ = function sumar2Numeros(numero1, numero2 /* Parametros */){
  let resultado = numero1 + numero2; // variable que guarda lo que se retornara
  console.log(resultado); // imprimirlo en la consola
  return resultado; // retornamos lo que queremos imprimir
}

quieroSumar(3,11); // mandamos a llamar a la funcion y le asignamos los parametros

//Funciones
/**  **/
/*
const sumar = function sumarNumeros(a, b){
  if(typeof a !== "number" || typeof b !== "number") {
    console.error("Alguno de los parametrosno no es un numero");
    return;
  }
  let resultado = a + b;
  return resultado;
}
console.log(sumar(3,15)); // mandamos a llamar a la funcion y le asignamos los parametros
*/


//Ejercicio 1
/*
function saludo (nombre){
  let saludar = console.log("Hola" , nombre);
  return saludar
}
saludo("Ulises");
*/

function saludo (nombre){
  return (`Hola ${nombre} buenjos dias`)
}
console.log(saludo("Ulises"));

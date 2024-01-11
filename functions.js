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


const sumar = function sumarNumeros(a, b){
  if(typeof a !== "number" || typeof b !== "number") {
    console.error("Alguno de los parametrosno no es un numero");
    return;
  }else{
    let resultado = a + b;
    return resultado;
  }
}
console.log(sumar(3,5)); // mandamos a llamar a la funcion y le asignamos los parametros

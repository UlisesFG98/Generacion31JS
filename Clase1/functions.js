//onsole.log("hola mundo");

// Comentario de una sola linea

/*comentario
de
bloque*/

//.TODO. comentario

//imprimir errores en consola, estos si se pueden quedar en la paguina
//console.error("error");

//Funciones
/**  **/

//const quieroSumar /* Guardar una funcion en una variable */ = function sumar2Numeros(numero1, numero2 /*Parametros */){
//  let resultado = numero1 + numero2; // variable que guarda lo que se retornara
//  console.log(resultado); // imprimirlo en la consola
//  return resultado; // retornamos lo que queremos imprimir
//}

//quieroSumar(3,11); // mandamos a llamar a la funcion y le asignamos los parametros

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

/*
function saludo (nombre){
  return (`Hola ${nombre} buenjos dias`)
}
console.log(saludo("Ulises"));
*/

//Ejercicio 2
// funcion si un numero es par o impar
/*
function parImpar (numero){
  if(typeof numero !== "number"){
    console.error("No es un numero");
    return;
  }
  if(numero % 2 == 0){
    return `El numero: ${numero} si es par`;
  }
  return `El numero: ${numero} si es impar`;
}

console.log(parImpar(8));
*/

/********************************************************
 * Tarea
********************************************************/



/*
 Ejercicio #1
 Crea una función llamada numeroMayor() que toma tres números como entrada y retornar el
 numero mayor de ellos, si son iguales devolver un String «son iguales».
*/
console.log("Resultados del ejercicio 1 -- Forma 1")
function numeroMayor(numero1, numero2, numero3){
  let respuesta;
  if ((typeof numero1 !== "number") || (typeof numero2 !== "number") || (typeof numero3 !== "number")) {
    console.error("Alguno de los parametros no es un numero");
    return;
  }else{
    if ((numero1 == numero2) && (numero2 == numero3)) {
      respuesta = "Los tres numeros son iguales";
    }else if ((numero1 > numero2) && (numero1 > numero3)) {
      respuesta = numero1;
    }else if ((numero2 > numero3)){
      respuesta = numero2;
    }else{
      respuesta = numero3;
    }
  }
  return respuesta;
}
console.log(numeroMayor(10,15,18))
console.log(numeroMayor(1,1,1))

/**************************/
console.log("\nResultados del ejercicio 1 -- Forma 2")
function numeroMayor2(num1, num2, num3) {
  let resultado;
  if ((typeof num1 !== "number") || (typeof num2 !== "number") || (typeof num3 !== "number")) {
    console.error("Alguno de los parametros no es un numero");
    return;
  }else{
    if (num1 === num2 && num2 === num3) {
      return "Los tres numeros son iguales";
    } else {
      resultado = Math.max(num1, num2, num3);
  }
  }
  return resultado;
}

console.log(numeroMayor2(10, 5, 8));
console.log(numeroMayor2(7, 7, 7),"\n\n");

/*
 Ejercicio #2
 Escriba una función con el nombre de esVocal() que tome un carácter , devuelva True si es vocal
 (no importa si es mayúscula o minúscula), y devuelva False en caso contrario.
*/

console.log("Resultados del ejercicio 2")
function esVocal(caracter) {
  let respuesta;
  let caracterMinuscula;
  if (typeof caracter === "string" && caracter.length === 1) {
    if (/^[a-zA-Z]$/.test(caracter)) {
      caracterMinuscula = caracter.toLowerCase();
      respuesta = ["a", "e", "i", "o", "u"].includes(caracterMinuscula);
    } else {
      respuesta = "El parámetro no es una vocal";
    }
  } else {
    respuesta = "Error en el parámetro";
  }
  return respuesta;
}

console.log(esVocal("A"));
console.log(esVocal("b"));
console.log(esVocal("o"));
console.log(esVocal("1"));
console.log(esVocal("%"));
console.log(esVocal("ab"), "\n\n");


/*
 Ejercicio #3
Crea una función llamada generar_caracteres() que tome como parámetro un número entero (n)
y un carácter, retornar el carácter multiplicado por n. Por ejemplo, generar_caracteres(5,x),
debería retornar «xxxxx».
*/

console.log("Resultados del ejercicio 3")
function generar_caracteres(numero, caracter) {
  let cadenaResultante;
  if (Number.isInteger(numero) && typeof caracter === "string" && caracter.length === 1) {
    // Utilizar el método repeat() para generar la cadena resultante
    cadenaResultante = caracter.repeat(numero);
  } else {
    cadenaResultante = "Parámetros no válidos";
  }

  return cadenaResultante;
}

console.log(generar_caracteres(5, 'x'));
console.log(generar_caracteres(3, 'A'));
console.log(generar_caracteres(0, '*'));
console.log(generar_caracteres(2, 'abc'));






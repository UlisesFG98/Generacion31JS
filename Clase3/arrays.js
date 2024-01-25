///Tarea Es Palindromo??
function esPalindromo(palabra) {
  let palabraSinEspacios = palabra.toLowerCase().replace(/\s/g, '');
  let palabraReversa = palabraSinEspacios.split('').reverse().join('');
  return palabraSinEspacios === palabraReversa;
}

console.log(esPalindromo("reconocer"));
console.log(esPalindromo("hola"));

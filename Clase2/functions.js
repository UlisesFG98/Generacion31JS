//Sintaxis de una funcin normal
function normalFunction(parametros) {
    return "Esto es una funcion normal"
}

// Sintaxis Arrow Function
const arrowFunction = (parametros) =>{
    return "Esto es un arrow Function"
}

//Si solo quiero hacer solo una cosa y entregar un solo valor, hay un return implicito despues de la flecha
const arrowFunction2 = (parametros) => "Esto es un arrow Function"


// Objetos: Ejemplo

const tarjeta = {
    //sintaxi----- Atributo Dos Puntos Valor y coma
    //key: value,
    tamano: "chico",
    color: "azul",
    propietario: "Samuel",
    saldo: -500,
    forma: "rectangular",
    emisor: "Blue block",
    textura: "lista",
    material: "plastico",
    'se-Usa-En': "tiendas",
    contenido: {     ///Se pueden poner objetos dentro de objetos
        logotipo: "logo.png",
        titulo: "Certificado ..."
    },
    pagar: () => console.log("estoy pagando"),//funciones y metodos en un objeto
    //otra funcion
    cancelarPago: () => {
        console.log("Cancelar pago...")

        return "La cantidad cancelada fue $123"
    },
}

//Sintaxis para mandar a llamar una propiedad de un objeto
//nombreDelObjeto Punto nombreDeLaPropiedad
tarjeta.propietario

//Otra forma seria con un console.log
console.log(tarjeta.contenido)

//para el caso de se 'se-Usa-En': "tiendas",
console.log(tarjeta["se-Usa-En"])

//mandar a llamar metodos en objetos

tarjeta.pagar()
console.log(tarjeta.cancelarPago())

//mostrar como hacer un mock de un objeto, explode, estraer propiedades
// un mock es un objeto simulado o imitado que repite el comportamiento del objeto original, se utilizan para pruebas
// un explode es
const mockTarjeta = {
  ...tarjeta,
  emisor: "Samuel Bank", //Las propiedades en los mocks no se modifican si no se sobreescriben par pruebas
  dondeSeUsa: tarjeta["se-Usa-En"], //modificar el nombre de una propiedad
  perro: "firulais"
}

console.log(mockTarjeta)

console.log(mockTarjeta.perro ?? "el valor no existe")

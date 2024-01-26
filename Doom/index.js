
// document, hace refencia a mi estructura de html
//window. hace referenia a la pestaña del navegador
/*console.log(document)
const h1 = document.querySelector("h1")
console.log(h1)*/

/*Busqueda en el dom por tagElemnt
document.addEventListener("DOMContentLoaded", () => {
  const h1 = document.querySelector("h1")
  console.log(h1)
})*/

/*Busqueda en el dom por id
document.addEventListener("DOMContentLoaded", () => {
  const h1 = document.querySelector("#mi-titulo")
  console.log(h1)
})*/

/*Busqueda en el dom por Clase
document.addEventListener("DOMContentLoaded", () => {
  const h1 = document.querySelector(".mi-clase")
  console.log(h1)
})*/

/*Busqueda en el dom por Atributo
document.addEventListener("DOMContentLoaded", () => {
  const h1 = document.querySelector('[mi-attributo="ok"]')
  console.log(h1)
})*/

/*Busqueda en el dom por querySelectorAll
document.addEventListener("DOMContentLoaded", () => {
  const headings = document.querySelectorAll('mi-clase')
  console.log(headings)
})

headings.forEach((head) => {
  console.log(head)
});*/

/*Busqueda en el dom por elementId
const element = document.getElementById('mi-id2')
console.log("🚀 ~ document.addEventListener ~ element:", element)*/

/*Busqueda en el dom por elementTagName
const element2 = document.getElementsByTagName('h2')
console.log("🚀 ~ document.addEventListener ~ element2:", element2)*/


document.addEventListener("DOMContentLoaded", () => {
  const dom_1 = document.querySelector("#mi-id1")
  const dom_2 = document.querySelector("#mi-id2")

  dom_1.style.color = 'cyan'

  console.log(dom_1.innerHTML)

  console.log(dom_2.offsetWidth)

  dom_2.innerHTML = 'Acabo de cambiar el contenido'

  console.log(dom_2.innerHTML)
  console.log(dom_2.offsetWidth)


})

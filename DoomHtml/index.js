/*Crear elementos de html en el Doom
createElement -> Crea un elememento
append -> agrega elementos al final(new)
prepend -> crea elemtos al principio
remove
removeChild
insertBefore -> inserta elementos antes de otros(custom)
innerHtml -> contenido en html del elemento
*/



document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('#container')
  const h1 = document. createElement('h1')
  const p = document. createElement('p')

  const name = 'Ulises'
  h1.innerHTML = 'Hola'

  h1.style.color = 'teal'
  h1.style.margin= '0px'
  h1.setAttribute('id', 'id-54')
  //h1.removeAtribute('style')

  h1.innerHTML = `Hola ${name}`
  p.innerHTML = 'Este es mi contenido nuevo'


  container.prepend(h1)
  container.append(p)

})

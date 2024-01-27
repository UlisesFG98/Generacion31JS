document.addEventListener("DOMContentLoaded", () => {
  const screen = document.querySelector('.pantalla')
  const allButtons = document.querySelectorAll('.btn') //queriSelectorAll nos crea un array

  allButtons.forEach(button => {
    button.addEventListener('click', () => {
      //console.log(boton.textContent)
      const pressedButton = button.textContent
      if (button.id === 'c') {
        //screen.textContent = '0'
        clearScreen()
        return
      }

      if (button.id === 'borrar'){
        //screen.textContent.length === 1 || screen.textContent === 'Error!' ? screen.textContent = '0': screen.textContent = screen.textContent.slice(0 , -1)
        removeLastDigit()
        return
      }

      if (button.id === "igual") {
        /*try{
          screen.textContent = eval(screen.textContent)
        }catch{
          screen.textContent = 'Error!'
        }*/

        evaluateExpression()
        return
      }

      //screen.textContent === '0' || screen.textContent === 'Error!' ? screen.textContent = pressedButton : screen.textContent += pressedButton
      //console.log(screen)

      addDigitToScreen(pressedButton)
    })
  })

  const clearScreen = () => screen.innerHTML = '0'

  const removeLastDigit = () => {
    let currentContent = screen.innerHTML
    currentContent.length > 1 ? screen.innerHTML = currentContent.slice(0, -1) : clearScreen();
  }

  const evaluateExpression = () => {
    try {
      let result = eval(screen.innerHTML);
      screen.innerHTML = result;
    } catch {
      screen.innerHTML = 'Error!';
    }
  }

  const addDigitToScreen = (digit) => {
    let currentContent = screen.innerHTML;
    currentContent === '0' || currentContent === 'Error!' ? screen.innerHTML = digit : screen.innerHTML += digit
  }

})




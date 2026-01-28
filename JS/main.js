// Contador de clicks

const botonConocenos = document.getElementById('boton-conocenos')

const resultadoContador = document.getElementById('resultado-contador')

botonConocenos.addEventListener('click', botonConocenosHandler)

let contador = 0

function botonConocenosHandler() {
  contador = contador + 1

  if (contador === 1) {
    resultadoContador.innerText = `Nos has conocido ${contador} vez`
  } else {
    resultadoContador.innerText = `Nos has conocido ${contador} veces`
  }
}

// Botón de ver más

const botonVerMas = document.getElementById('boton-verMas')

const descripcionZaragoza = document.getElementById('descripcion-zaragoza')

botonVerMas.addEventListener('click', () => {
  console.log(descripcionZaragoza.childElementCount)

  if (descripcionZaragoza.childElementCount === 0) {
    const elementoParrafo = document.createElement('p')
    const textoParrafo = document.createTextNode(
      'La idea de la "ciudad de 15 minutos" se refiere a la posibilidad de que las personas puedan acceder a todas las necesidades básicas y servicios dentro de un radio de 15 minutos caminando o en transporte público.'
    )
    elementoParrafo.appendChild(textoParrafo)
    descripcionZaragoza.appendChild(elementoParrafo)
    botonVerMas.innerText = 'Ver Menos'
  } else {
    descripcionZaragoza.lastChild.remove()
    botonVerMas.innerText = 'Ver Mas'
  }
})

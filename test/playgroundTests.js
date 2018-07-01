const ava = require('ava')
const matrizNumbers = require('../playground/matrizNumbers')

ava('it should display the representation of the number 8', t => {
  const numeroOcho = matrizNumbers.numeros[8]
  let strNumeroOcho = matrizNumbers.showNumber(numeroOcho)
  const expected = ' - \n| |\n - \n| |\n - \n'
  t.is(strNumeroOcho, expected)
})

ava('it sould display the representation of the number 21', t => {
  const numeroUno = matrizNumbers.numeros[1]
  const numeroDos = matrizNumbers.numeros[2]
  const expected = ' -      \n  |   | \n -      \n|     | \n -      \n'
  let strNumero = matrizNumbers.showCompoundNumber([numeroDos, numeroUno])

  t.is(strNumero, expected)
})


ava('it should return the string representation of the number 1', t => {
  let strNumeroUno = matrizNumbers.showCompoundNumberSpecial([matrizNumbers.numeros[1]], '2')

  const expeted = '     \n   | \n   | \n     \n   | \n   | \n     \n'

  t.is(strNumeroUno, expeted)

})

'use strict'

/** Representados en una matriz con los caracteres para cada (fila, columna) */
const numeroUnoM = [[' ', ' ', ' '], [' ', ' ', '|'], [' ', ' ', ' '], [' ', ' ', '|'], [' ', ' ', ' ']]
const numeroDosM = [[' ', '-', ' '], [' ', ' ', '|'], [' ', '-', ' '], ['|', ' ', ' '], [' ', '-', ' ']]
const numeroTresM = [[' ', '-', ' '], [' ', ' ', '|'], [' ', '-', ' '], [' ', ' ', '|'], [' ', '-', ' ']]
const numeroCuatroM = [[' ', ' ', ' '], ['|', ' ', '|'], [' ', '-', ' '], [' ', ' ', '|'], [' ', ' ', ' ']]
const numeroCincoM = [[' ', '-', ' '], ['|', ' ', ' '], [' ', '-', ' '], [' ', ' ', '|'], [' ', '-', ' ']]
const numeroSeisM = [[' ', '-', ' '], ['|', ' ', ' '], [' ', '-', ' '], ['|', ' ', '|'], [' ', '-', ' ']]
const numeroSieteM = [[' ', '-', ' '], [' ', ' ', '|'], [' ', ' ', ' '], [' ', ' ', '|'], [' ', ' ', ' ']]
const numeroOchoM = [[' ', '-', ' '], ['|', ' ', '|'], [' ', '-', ' '], ['|', ' ', '|'], [' ', '-', ' ']]
const numeroNueveM = [[' ', '-', ' '], ['|', ' ', '|'], [' ', '-', ' '], [' ', ' ', '|'], [' ', ' ', ' ']]
const numeroCeroM = [[' ', '-', ' '], ['|', ' ', '|'], [' ', ' ', ' '], ['|', ' ', '|'], [' ', '-', ' ']]

const numeros = [numeroCeroM, numeroUnoM, numeroDosM, numeroTresM, numeroCuatroM, numeroCincoM, numeroSeisM, numeroSieteM, numeroOchoM, numeroNueveM]

/**
 *
 * @param {String} numbers String con los números a representar en pantalla
 * @param {String} size Tamaño del número a representar en la pantalla
 */
function print (numbers, size) {
  // Extraigo todos los números para poder obtener la matriz para cada uno
  let numbersArray = numbers.split('')
  // Arreglo de matrices con los números a imprimir en pantalla
  let numberToPrint = []
  // Creo la matriz
  for (let i = 0; i < numbersArray.length; i++) {
    const number = numbersArray[i]
    numberToPrint.push(numeros[number])
  }
  return showNumber(numberToPrint, size)
}

/**
 *
 * @param {Object} number Matriz con los números que componen el número a representar
 * @param {Number} size Tamaño con el que se imprimirá en pantalla
 */
const showNumber = (number, size) => {
  let strNumber = '' // Representacion en String del número que se quiere representar
  let nRows = 5
  /** Son cinco filas por matriz */
  for (let i = 0; i < nRows; i++) {
    if (i % 2 === 0) { // Se expande horizontalmente, representan las filas que se añaden
      strNumber += recorrerFila(number, size, i)
    } else { // Se expande verticalmente representa las columnas que se añaden
      for (let e = 0; e < size; e++) {
        // Se repite dos veces la misma fila
        strNumber += recorrerFila(number, size, i)
      }
    }
  }
  return strNumber
}

function recorrerFila (number, size, i) {
  let strNumber = ''

  for (let m = 0; m < number.length; m++) {
    const matriz = number[m]
    const fila = matriz[i]
    /** Recorro la fila */
    for (let j = 0; j < fila.length; j++) {
      const element = fila[j]
      if (j % 2 !== 0) {
        // Esta columna se expande horizontalmente
        for (let e = 0; e < size; e++) {
          strNumber += element
        }
      } else {
        strNumber += element
      }
    }
    strNumber += ' '
  }
  strNumber += '\n'

  return strNumber
}

module.exports = {
  numeros,
  print
}

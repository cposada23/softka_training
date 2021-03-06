'use strict'

const fs = require('fs')

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

const showNumber = (number) => {
  let strNumber = ''
  for (let i = 0; i < number.length; i++) {
    const row = number[i]
    for (let j = 0; j < row.length; j++) {
      const element = row[j]
      strNumber += element
    }
    strNumber += '\n'
  }
  return strNumber
}

const showCompoundNumber = (number) => {
  let strNumber = ''
  let nRows = 5
  /** Son cinco filas por matriz */
  for (let i = 0; i < nRows; i++) {
    /** Tengo que obtener la fila para cada matriz */
    for (let m = 0; m < number.length; m++) {
      const matriz = number[m]
      const fila = matriz[i]
      /** Recorro la fila */
      for (let j = 0; j < fila.length; j++) {
        const element = fila[j]
        strNumber += element
      }
      strNumber += ' '
    }
    strNumber += '\n'
  }
  return strNumber
}

const showCompoundNumberSpecial = (number, size) => {
  let strNumber = ''
  let nRows = 5
  /** Son cinco filas por matriz */
  for (let i = 0; i < nRows; i++) {
    if (i % 2 === 0) { // Se expande horizontalmente
      strNumber += recorrerFila(number, size, i)
    } else { // Se expande verticalmente
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
  showNumber,
  showCompoundNumber,
  showCompoundNumberSpecial
}

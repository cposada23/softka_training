'use strict'

/** Representados en una matriz */
const numeroUnoM = [[' ', ' ', ' '], [' ', ' ', '|'], [' ', ' ', ' '], [' ', ' ', '|'], [' ', ' ', ' ']]
const numeroDosM = [[' ', '-', ' '], [' ', ' ', '|'], [' ', '-', ' '], ['1', ' ', ' '], [' ', '-', ' ']]
const numeroTresM = [[' ', '-', ' '], [' ', ' ', '|'], [' ', '-', ' '], [' ', ' ', '|'], [' ', '-', ' ']]
const numeroCuatroM = [[' ', ' ', ' '], ['|', ' ', '|'], [' ', '-', ' '], [' ', ' ', '|'], [' ', ' ', ' ']]
const numeroCincoM = [[' ', '-', ' '], ['|', ' ', ' '], [' ', '-', ' '], [' ', ' ', '|'], [' ', '-', ' ']]
const numeroSeisM = [[' ', '-', ' '], ['|', ' ', ' '], [' ', '-', ' '], ['|', ' ', '|'], [' ', '-', ' ']]
const numeroSieteM = [[' ', '-', ' '], [' ', ' ', '|'], [' ', ' ', ' '], [' ', ' ', '|'], [' ', ' ', ' ']]
const numeroOchoM = [[' ', '-', ' '], ['|', ' ', '|'], [' ', '-', ' '], ['|', ' ', '|'], [' ', '-', ' ']]
const numeroNueveM = [[' ', '-', ' '], ['|', ' ', '|'], [' ', '-', ' '], [' ', ' ', '|'], [' ', ' ', ' ']]
const numeroCeroM = [[' ', '-', ' '], ['|', ' ', '|'], [' ', ' ', ' '], ['|', ' ', '|'], [' ', '-', ' ']]

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

module.exports = {
  numeroCeroM,
  numeroUnoM,
  numeroDosM,
  numeroTresM,
  numeroCuatroM,
  numeroCincoM,
  numeroSeisM,
  numeroSieteM,
  numeroOchoM,
  numeroNueveM,
  showNumber
}

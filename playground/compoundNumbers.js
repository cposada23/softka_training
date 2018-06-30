'use strict'

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
    }
    strNumber += '\n'
  }
  return strNumber
}

module.exports = {
  showCompoundNumber
}

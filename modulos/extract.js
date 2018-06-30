'use strict'

/**Este modulo es el encargado de extraer el tamaño {size} y en numero a representar {number} */


/**
 * @param {String} strNumber tamaño y número, separados por una coma(,) ej = "9,34"
 * @returns {Object} Objeto con el tamaño {size} y el número {number}
 *                   Objeto vacio cuando el tamaño {size} es mayor a 10 o m enor que 0
 */
function extract(strNumber) {

  let reg = /^([1-9]|1[0]),([0-9]*)$/
  let matches = reg.exec(strNumber)
  let object = {}

  if(matches){
    object = {
      size: matches[1],
      number: matches[2]
    }
  }
  return object;
}

module.exports = {
  extract
}
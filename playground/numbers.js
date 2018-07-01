'use strict'

const log = console.log
const stringNumbers = require('./stringNumbers')
const matrizNumbers = require('./matrizNumbers')

/** Números representados en un string */
log(stringNumbers.numeroUno)
log(stringNumbers.numeroDos)
log(stringNumbers.numeroTres)
log(stringNumbers.numeroCuatro)
log(stringNumbers.numeroCinco)
log(stringNumbers.numeroSeis)
log(stringNumbers.numeroSiete)
log(stringNumbers.numeroOcho)
log(stringNumbers.numeroNueve)
log(stringNumbers.numeroCero)

/** Representados en una matriz */
log('/*********** NÚMERO SOLO *************/')
log(matrizNumbers.showNumber(matrizNumbers.numeros[5]))

/** Números compuestos */

const treintaYCinco = [matrizNumbers.numeros[3], matrizNumbers.numeros[5]]
const milTreintaYSeis = [matrizNumbers.numeros[1], matrizNumbers.numeros[0], matrizNumbers.numeros[3], matrizNumbers.numeros[6]]
const ventiYUno = [matrizNumbers.numeros[2], matrizNumbers.numeros[1]]

log('/****************NÚMERO COMPUESTO*****************')

log('------------------ 35 -------------------')
log(matrizNumbers.showCompoundNumber(treintaYCinco))

log('------------------ 21 -------------------')
log(matrizNumbers.showCompoundNumber(ventiYUno))

log('------------------ 1036 -------------------')
log(matrizNumbers.showCompoundNumber(milTreintaYSeis))

log('------------------ 1036 -------------------')
log(matrizNumbers.showCompoundNumberSpecial(milTreintaYSeis, 5))

log('------------------ 8 -------------------')
log(matrizNumbers.showCompoundNumber([matrizNumbers.numeros[8]]))

log('------------------ 8 M-------------------')
log(matrizNumbers.showCompoundNumberSpecial([matrizNumbers.numeros[8]], 3))

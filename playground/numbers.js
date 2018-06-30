'use strict'

const log = console.log
const stringNumbers = require('./stringNumbers')
const matrizNumbers = require('./matrizNumbers')
const compoundNumbers = require('./compoundNumbers')

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
log(matrizNumbers.showNumber(matrizNumbers.numeroCincoM))

/** Números compuestos */

const treintaYCinco = [matrizNumbers.numeroTresM, matrizNumbers.numeroCincoM]
const milTreintaYSeis = [matrizNumbers.numeroUnoM, matrizNumbers.numeroCeroM, matrizNumbers.numeroTresM, matrizNumbers.numeroSeisM]

log('/****************NÚMERO COMPUESTO*****************')

log('------------------ 35 -------------------')
log(compoundNumbers.showCompoundNumber(treintaYCinco))

log('------------------ 1036 -------------------')
log(compoundNumbers.showCompoundNumber(milTreintaYSeis))

'use strict'

const readLine = require('readline')
const extractModule = require('./modulos/extract')
const numbers = require('./modulos/numbers')
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Input> '
})

rl.prompt()

rl.on('line', (line) => {
  switch (line.trim()) {
    case '0,0':
      rl.close()
      break
    default:
      showNumber(line.trim())
      break
  }
  rl.prompt()
}).on('close', () => {
  console.log('Saliendo...')
  process.exit(0)
})

function showNumber (input) {
  let object = extractModule.extract(input)
  if (object.size) {
    let numberStr = numbers.print(object.number, object.size)
    console.log(numberStr)
  } else {
    console.log('\x1b[31m%s\x1b[0m', 'Por favor ingresar los datos en el formado correcto {tamaño},{numero}')
    console.log('\x1b[31m%s\x1b[0m', 'Ejempo: 2,19  2->Tamaño, 19->Número a representar')
    console.log('\x1b[31m%s\x1b[0m', '\tEl tamaño debe estar entre [0 - 10]')
    console.log('\x1b[31m%s\x1b[0m', '\tEl tamaño y número deben ser numericos')
  }
}

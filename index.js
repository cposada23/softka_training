'use strict'
const readLine = require('readline')

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Ingrese el numero: ', (answer) => {
  console.log(`El numero fué ${answer}`)
  rl.close()
})

'use strict'
let reg = /^([1-9]|1[0]),([0-9]*)$/

let matchs = reg.exec('1,2')
console.log(matchs)

matchs = reg.exec('1.2')
console.log(matchs)

matchs = reg.exec('10,2123123123')
console.log(matchs)

matchs = reg.exec('12,333')
console.log(matchs)

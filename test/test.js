const ava = require('ava')
const extractModule = require('../modulos/extract')


ava('make it pass', t => {
  t.pass()
})

ava('it should return and object cotaining the size and the number to be displayed on the screen', t => {
  let strNumber = '9,3'
  let expected = {
    size: '9',
    number: '3'
  }
  let object = extractModule.extract(strNumber)

  t.deepEqual(expected, object)

  strNumber = '2,3'
  expected = {
    size: '2',
    number: '3'
  }
  object = extractModule.extract(strNumber)

  t.deepEqual(expected, object)

})

ava('it should return an empty object {} when the size is lower than 1 or greater than 10', t=> {
  let strNumber = '10,3'
  let expected = {
    size: '10',
    number: '3'
  }
  let object = extractModule.extract(strNumber)
  t.deepEqual(expected, object)

  strNumber = '1,3'
  expected = {
    size: '1',
    number: '3'
  }
  object = extractModule.extract(strNumber)

  t.deepEqual(expected, object)

  strNumber = '0,3'
  expected = {}
  object = extractModule.extract(strNumber)

  t.deepEqual(expected, object)

  strNumber = '11,3'
  expected = {}
  object = extractModule.extract(strNumber)

  t.deepEqual(expected, object)
})

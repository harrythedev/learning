import R from 'ramda'

// 1. curry
const add = (a, b) => a + b
console.log(add(1, 2))

const addCurried = R.curry(add)
const addOne = addCurried(1)
console.log(addOne(9)) // 10

// 2. propEq
const isCircle = R.propEq('type', 'circle')
const shapes = [
  { type: 'circle', width: 10, height: 10 },
  { type: 'square', width: 10, height: 10 },
]
console.log(isCircle(shapes[0])) // true
console.log(isCircle(shapes[1])) // false
shapes.filter(isCircle)

// 3. merge
const circle = { type: 'circle', width: 10, height: 10 }
const boldBorder = R.merge({ border: '5px' })
console.log(boldBorder(shapes[0])) // { border: '5px', type: 'circle', width: 10, height: 10}

// 4. isNil
R.isNil(null) // true
R.isNil(undefined) // true
R.isNil(0) // false
R.isNil('functions are great') // false

const square = (x) => x * x
console.log(square(9))

const user = {
  name: 'Harry',
  sayHi: () => {
    console.log(`Hi. I'm ${user.name}`)
  },
  sayHiAlt() {
    console.log(arguments)
    console.log(`Hi. I'm ${this.name}`)
  }
}

user.sayHi(1,2,3)
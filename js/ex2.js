let array = []
for (let i = 0; i <= 10; i++) {
  array[i] = i + 1;
}

const a = array.filter(num => {
  return num % 2 !== 0;
})

const b = array.filter(num => {
  if (num % 2 == 0 || num % 5 == 0) {
    return num
  }
})

const c = array.filter(num => {
  if (num % 3 == 0) {
    return num ** 2;
  }
})

const d = array.reduce((accumulator, currentValue) => {
  if (currentValue % 5 == 0) {
    return accumulator + currentValue ** 2
  }
  return accumulator
})

console.log(a)
console.log(b)
console.log(c)
console.log(d)
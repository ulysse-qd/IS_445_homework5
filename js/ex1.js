class square {
  constructor(sides) {
    this.sides = sides;
  }

  perimeter() {
    return this.sides * 4
  }

  area() {
    return this.sides ** 2
  }

  diagonal() {
    return Math.sqrt(2 * this.area())
  }

  describe() {
    console.log("Square with side", this.sides, "has perimeter of", this.perimeter(), ", area of", this.area(), "and diagonal of", this.diagonal())
  }
}

const square1 = new square(4)
const square2 = new square(10)
const square3 = new square(42)

square1.describe()
square2.describe()
square3.describe()
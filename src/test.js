class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get area() {
    return this.calArea();
  }

  get perimetre() {
    return this.calPer();
  }

  calArea() {
    return this.height * this.width;
  }

  calPer() {
    return this.height * 2 + this.width * 2;
  }
}

const square = new Rectangle(10, 10);
console.log(square.area);
console.log(square.perimetre);


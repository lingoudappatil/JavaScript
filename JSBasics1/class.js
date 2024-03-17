class Rectangle 
{
    constructor(height, width)
    {
      this.height = height;
      this.width = width;
    }
    // Getter
    get area() {
      return this.calcArea();
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }
    *getSides() {
      yield this.height;
      yield this.width;
      yield this.height;
      yield this.width;
    }
  }
  
  const square = new Rectangle(5, 5);
  
  console.log(square.area); // 100
  console.log([...square.getSides()]);
  
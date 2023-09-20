/*
Open Close Pronciple Принцип открытости-закрытости
Классы должны  быть  открыты для расширения, но закрыты для модификации.
Когда вы меняете текущее поведение класса, эти изменения сказываются на всех системах, работающих с данным классом. Если хотите, чтобы класс выполнял больше операций, то идеальный вариант – не заменять старые на новые, а добавлять новые к уже существующим
*/
//на примере кода ниже покажем как можно применить данный принцип и позволить классу расширяться не модифицируя его
class Shape {
  area() {
    throw new Error('Area method should be implemented');
  }
}
//у нас каждый класс выполняет свою задачу, тем самым мы соблюдаем первый принцип.
class Square extends Shape {
  constructor(size) {
    super();
    this.size = size;
  }
  area() {
    return this.size ** 2;
  }
}
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return this.radius ** 2 * Math.PI;
  }
}
class Rect extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
}
//наш класс AreaCalculator не модифицируясь может расширяться в функциональности и считать все новые и новые фигуры(по новым классам фигур)
class AreaCalculator {
  constructor(shapes = []) {
    this.shapes = shapes;
  }
  sum() {
    //получается наш класс закрыт для модификаций метод сделан для подсчета и не меняется. У нас только расширяется функционал путем добавления новых классов объектов(можно добавить по такому же приципу класс треугольника например)
    return this.shapes.reduce((acc, shape) => {
      acc += shape.area();
      return acc;
    }, 0);
  }
}
const calc = new AreaCalculator([
  //нам не нужно ничего менять в классе AreaCalculator теперь соблюдая прицип Open-Closed мы можем просто добавлять новые классы фигур и просто расширять текущий объект содавая новый элемент в массиве
  new Square(10),
  new Circle(1),
  new Rect(10, 10),
  new Square(100),
]);
console.log(calc.sum());

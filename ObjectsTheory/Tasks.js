//Task1
//Создайте класс Circle, который имеет поле radius, а также метод getArea(), высчитывающий площадь круга и округляющий её до двух знаков после запятой. Сделайте так, чтобы код ниже работал:
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    return (Math.PI * this.radius ** 2).toFixed(2);
  }
}

const circle = new Circle(5);
console.log(circle.getArea()); // "78.54"

//Task2
//Реализуйте класс Product, который имеет поля name и price. Также он имеет метод priceWithDiscount(), который возвращает обновленную цену с учетом переданной скидки (в процентах). Метод не изменяет само значение price в объекте, а только выводит обновленное.
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  priceWithDiscount(discount) {
    return this.price - (this.price * discount) / 100;
  }
}

const product = new Product('Phone', 1000);
console.log(product.priceWithDiscount(10)); // 900
console.log(product.priceWithDiscount(20)); // 800

//Task3
//Реализуйте класс Person, который имеет поле friends (изначально пустой массив). Также он имеет методы:
//addFriend() — принимает имя нового друга и добавляет его в массив friends;
//showFriends() — выводит в консоль строку со всеми друзьями через запятую.
class Person {
  constructor(name) {
    this.name = name;
    this.friends = [];
  }
  addFriend(name) {
    this.friends.push(name);
  }
  showFriends() {
    return this.friends.join(', ');
  }
}

const person = new Person();
person.addFriend('Иван');
person.addFriend('Сергей');
person.addFriend('Игорь');
console.log(person.showFriends()); // Иван, Сергей, Игорь

//Task4
/*
1. Создайте класс Animal с полями name, favoriteFood, а также методами:
makeSound() — вывести звук животного в консоль;
sayName() — вывести имя животного в консоль;
sayInfo() — вывести любимое блюдо животного в консоль.
2. Создайте еще 2 класса, которые будут наследоваться от класса Animal — Cat, Dog. Переопределите для них метод makeSound(), чтобы он всегда возвращал соответствующий звук животного. 
*/
class Animal {
  constructor(name, favoriteFood) {
    this.name = name;
    this.favoriteFood = favoriteFood;
  }
  makeSound() {
    return 'sound';
  }
  sayName() {
    return `My name is ${this.name}`;
  }
  sayInfo() {
    return `${this.name}'s favorite food is ${this.favoriteFood}`;
  }
}
class Cat extends Animal {
  makeSound() {
    return 'Meow';
  }
}
class Dog extends Animal {
  makeSound() {
    return 'Gav!';
  }
}

const dog = new Dog('Rex', 'Meat');
const cat = new Cat('Barsik', 'Fish');

console.log(cat.makeSound()); // Meow
console.log(dog.makeSound()); // Gav!

console.log(dog.sayName()); // My name is Rex
console.log(cat.sayName()); // My name is Barsik

console.log(dog.sayInfo()); // Rex's favorite food is Meat
console.log(cat.sayInfo()); // Barsik's favorite food is Fish

//Task5
/*
Создайте объект foo со свойством a равным 5. Также добавьте ему два метода:

bar() — с помощью ключевого слова function;
baz() — с помощью стрелочной функции.
Внутри методов выведите в консоль this.a и затем выполните следующий код:
*/
const foo = {
  a: 5,
  bar: function () {
    console.log(this.a);
  },
  baz: () => {
    console.log(this.a);
  },
};

foo.bar(); // Выведет: 5
foo.baz(); // Выведет: undefined стрелочная функция baz была создана в глобальной области видимости, она будет использовать глобальный this, который не имеет свойства a

//Task6
const boxFactory = {
  type: 'box',
  count: 0,
  produce: function () {
    this.count++;
    return `Box №  ${this.count}`;
  },
};

const produceBox = (produceFn) => {
  const boxName = produceFn();
  console.log(boxName);
};

for (let i = 0; i < 25; i++) {
  produceBox(boxFactory.produce.bind(boxFactory));
}

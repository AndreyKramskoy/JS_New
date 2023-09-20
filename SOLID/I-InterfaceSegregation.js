/*
I — Interface Segregation (Принцип разделения интерфейсов)
Не следует ставить клиент в зависимость от методов, которые он не использует.
Принцип служит для того, чтобы раздробить единый набор действий на ряд наборов поменьше – таким образом, каждый класс делает то, что от него действительно требуется, и ничего больше.
*/
//
class Animal {
  constructor(name) {
    this.name = name;
  }
}
//в классе есть объекты добавляющие определ поведение
const swimmer = {
  swim() {
    console.log(`${this.name} can swim`);
  },
};
const flier = {
  fly() {
    console.log(`${this.name} can fly`);
  },
};
const runner = {
  run() {
    console.log(`${this.name} can run`);
  },
};
//и у нас есть классы которые наследуются от родительского Animal
class Dog extends Animal {}
class Eagle extends Animal {}
class Whale extends Animal {}
//и благодаря методу Object.assign() который позволяет мерджить объекты обращаясь к прототипу через нужный класс и мержим его с другим классом для добавления необходимого функционала
Object.assign(Dog.prototype, swimmer, runner);
Object.assign(Eagle.prototype, flier, runner);
Object.assign(Whale.prototype, swimmer);
//и теперь можно спокойно создавать новые объекты с необходимыми нам функциями и мы избежали проблем с тем что у нас один скоуп методов лежит в одном родительском классе
const dog = new Dog('Bob');
dog.run();
dog.swim();
const eagle = new Eagle('Huc');
eagle.run();
eagle.fly();
const whale = new Whale('J');
whale.swim();

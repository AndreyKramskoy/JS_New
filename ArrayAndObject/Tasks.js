//Task1
/*
Создайте 2 объекта john и ann с полями name, age, pet и заполните их именем, возрастом и именем питомца соответственно.
Создайте функцию, которая в параметры принимает объект человека (john или ann), и в качестве результата выводит информацию о нем в консоль:“Меня зовут {name}, мне {age}, у меня есть питомец {pet}”
Создайте функцию incrementAge(), которая в параметры принимает объект человека и увеличивает ему возраст на 1.
Выведите циклом все названия свойств и их значения, которые есть у объекта john.
*/
const people = [
  (john = {
    name: 'John',
    age: 30,
    pet: 'dog',
  }),
  (ann = {
    name: 'Ann',
    age: 20,
    pet: 'cat',
  }),
];

const getInformation = function find(person) {
  return `Меня зовут ${person.name}, мне ${person.age}, у меня есть питомец ${person.pet}`;
};
console.log(getInformation(john));
console.log(getInformation(ann));

const incrementAge = function find(person) {
  return ++person.age;
};
console.log(incrementAge(john));
console.log(incrementAge(ann));

for (let prop in john) {
  console.log(`${prop}:${john[prop]}`);
}
//Task2
// Создайте функцию, которая на вход принимает массив, а на выходе возвращает сумму его элементов:
function sum(array) {
  return array.reduce((acc, curr) => acc + curr, 0);
}
const arr = [1, 50, 20, 75, 90];
const arr1 = [10, 10, 20, 50, 10];
console.log(sum(arr)); // 236
console.log(sum(arr1));

//Task3
/*
Создайте пустой массив names.
Добавьте в него 5 любых имен.
Выведите массив в консоль.
Уберите из начала и конца массива по 1 элементу.
Снова выведите массив в консоль.
*/
const names = [];
console.log(names);
names.push('Alena', 'Andrey', 'Veronica', 'Valera', 'Luda');
console.log(names);
names.shift();
names.pop();
console.log(names);

//Task4
/*
Дан массив names. Необходимо сделать функцию, которая на основе этого массива генерирует строку c HTML. Она представляет из себя список элементов (<ul>), где каждый элемент списка (<li>) содержит элемент массива.
*/
function generateHTMLList(namesArray) {
  let htmlString = '<ul>';
  for (const name of namesArray) {
    htmlString += `<li>${name}</li>`;
  }
  htmlString += '</ul>';
  return htmlString;
}
const names = ['Bob', 'Klar', 'Petya', 'Ilya', 'Viktoriya'];
const htmlList = generateHTMLList(names);
console.log(htmlList);

//Task5
//Необходимо выполнить деструктуризацию объекта (для всех полей). Выведите полученные переменные в консоль.
/*
Деструктуризация объекта в JavaScript - это способ извлечь значения из объекта и присвоить их переменным с помощью синтаксиса, напоминающего синтаксис объявления объекта.
*/
const obj = {
  age: 22,
  favColor: 'red',
  height: 188,
  pet: 'dog',
  money: 12300,
};
const { age, favColor, height, pet, money } = obj;
console.log(age);
console.log(favColor);
console.log(height);
console.log(pet);
console.log(money);

//Task6
//Необходимо создать новый объект obj2, в котором будут все поля объекта obj, но с обновленными значениями полей как у объекта updateObj.
const obj = {
  age: 22,
  favColor: 'red',
  height: 188,
  pet: 'dog',
  money: 12300,
};

const updateObj = {
  age: 23,
  favColor: 'blue',
  money: 11450,
};

const obj2 = Object.assign(obj, updateObj);
console.log(obj2);
/**
 * {
 *	age: 23,
 *	favColor: 'blue',
 *	height: 188,
 *	pet: 'dog',
 *	money: 11450
 * }
 */

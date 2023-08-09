//Task1:
var a = 5;
let b = 10;
const c = 13;
console.log(a);
console.log(b);
console.log(c);
a = 6;
b = 11;
console.log(a);
console.log(b);
console.log(c);

//Task2:
//нельзя присваивать повторно значение константе
const a = 100;
a = 20;
console.log(a);
//нельзя вывести неинициализированную пременную
console.log(a);
let a = 15;
console.log(a);
// выводит undefined и 10 тк у нас не присвоено значение переменной а при первом console.log(a)
console.log(a);
var a;
a = 10;
console.log(a);

//Task3
let productName = 'car';
let productPrice = 1000000;
let productQuantity = 2;
let resultCost = productPrice * productQuantity;
console.log(
  `Вы купили ${productName} (${productQuantity} шт.) по ${productPrice} ₽. Всего было потрачено: ${resultCost} ₽`
);

//Task4

console.log(typeof 'Hello'); //строка в кавычках
console.log(typeof 10); // число, без кавычек
console.log(typeof {}); // объект т.к. {} его создает
console.log(typeof null); // воспринимается JS как объект(особенность языка)
console.log(typeof undefined); //неопределено
console.log(typeof true); // имеет два boolean значения true/false
console.log(typeof []); //особенность языка и работы typeof
console.log(typeof (() => {})); // объявлена функция ()

//Task5
console.log(10 == 10); //true сравнение значений на равенство
console.log(10 != 10); //false неравенство значений
console.log(12 == 'Привет'); //false сравнение значений на равенство
console.log(10 < 11); //true сравнение
console.log(12 > 20); //false сравнение
console.log(true && true); //true логическое И соблюдение условия оба true
console.log(true && false); //false логическое И несоблюдение условия только один true
console.log(false && true); //false логическое И несоблюдение условия
console.log(false || true); //true логическое ИЛИ соблюдение условия один из true
console.log(true || false); //true логическое ИЛИ соблюдение условия один из true
console.log(true || true); //true логическое ИЛИ соблюдение условия один из true
console.log(10 <= 10); //true сравнение, соблюдение условия
console.log(18 <= 20); //true
console.log(50 >= 50); //true
console.log(51 >= 50); //true
console.log({} === {}); //false строгое сравнение не прошло тк объекты имею разные ссылки хоть и эдентичны на первый взгляд
console.log({} == {}); //false находятся в разных местах в памяти и представляют разные ссылки на объекты

//Task6
let a = 1;
let d = 5;
while (a < d) {
  console.log(false);
  break;
}
while (a > d) {
  console.log(true);
  break;
}
//PART TWO
//Task1
let a = 5;
if (a % 2 == 0) {
  console.log('Четное');
} else {
  console.log('Нечетное');
  console.log(a + 1);
}

//Task2
let i = 0;
for (i = 0; i <= 1000; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

//Task3
let arr = [1, 10, 15, -100, -23, 19, 15032];
let newArr = arr.map((num) => num * 0.25);
console.log(newArr);

//Task4
/*
function sayHello(name) {
  if (name) {
    return `Hello, ${name}!`;
  } else {
    return 'Hello, someone!';
  }
}
console.log(sayHello('Andrey'));
console.log(sayHello());
*/
let sayHello = (name) => {
  return name ? `Hello, ${name}!` : 'Hello, someone!';
};
console.log(sayHello('Andrey'));
console.log(sayHello());

//Task5
function calc(a, b, operation) {
  if (operation == '+') {
    return a + b;
  } else if (operation == '-') {
    return a - b;
  } else if (operation == '*') {
    return a * b;
  } else {
    return a / b;
  }
}

console.log(calc(1, 2, '+')); // 3
console.log(calc(1, 2, '-')); // -1
console.log(calc(2, 2, '*')); // 4
console.log(calc(4, 2, '/')); // 2

//Task6
let age = 11;
let category = age < 18 ? 'Детский' : 'Взрослый';
console.log(age);
console.log(category);

//Task7
let a = 101;
let e = 22;
let r = a < e ? e : a;
console.log(r);

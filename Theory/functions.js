/*
1) Function Declaration - если мы делаем так, функция будет доступна для вызова в любом месте

2) Function Expression - функция будет доступна для вызова только когда работа кода дойдет до выполнения кода функции

3) Анонимные функции - это функция, которая не имеет имени и обычно используется для выполнения определенной операции в определенном контексте. Она также часто называется "лямбда-функцией" или "функцией-стрелкой". Анонимные функции полезны, когда вам нужно передать функцию как аргумент в другую функцию или создать небольшой фрагмент кода для выполнения определенной задачи.
а) Обработка событий
// Анонимная функция как обработчик события
document.getElementById("myButton").addEventListener("click", function() {
    alert("Кнопка была нажата!");
});
// Используя анонимную стрелочную функцию
document.getElementById("myButton").addEventListener("click", () => alert("Кнопка была нажата!"));
б) Асинхронные операции
// Анонимная функция внутри setTimeout
setTimeout(function() {
    console.log("Прошло 2 секунды");
}, 2000);
// Используя анонимную стрелочную функцию
setTimeout(() => console.log("Прошло 2 секунды"), 2000);

4)
Стрелочные функции - позволяют сократить объем кода и сделать его более читабельным. можно записать в одну строку без фигурных скобок если в теле функ одна операция. в фигурных записывается несколько операций и для возврата уже нужно использовать return
const greet(name) => console.log('Hello - ', name) //если у функции один параметр его можно записать без ()
greet('Andrey');

5)
Default parameters
следует использовать в функции когда есть вероятность что один из заданных ей параметров может быть не передан в функцию. Тогда по умолчанию в функции присваиваются значения этим параметрам, которые в дальнейшем могут меняться
const sum = (a = 5, b = a + 5) => a + b
console.log(sum(40,20))// 60
console.log(sum())// 15

6)
... - оператор rest позволяет указать функции что все значения передаваемых параметров нужно положить в какой-то массив
function sumAll(...numbers){

}
console.log(sumAll(1,2,3,4,5))
если параметры не будут переданы, получим пустой массив

7)
Closures - замыкания. Это функция в функции позволяющая сохранить доступ к переменным из внешних областей видимости
*/
// 1

greet('Andrey'); // будет работать
function greet(name) {
  console.log('Hello - ', name);
}
greet('Andrey'); // будет работать
// 2

// greet2('Andrey'); // вызов выдаст ошибку тк функция вызывается до ее инициализации
const greet2 = function (name) {
  console.log('Hello - ', name);
};
greet2('Andrey'); // будет работать

// 3
setTimeout(function () {
  greet('Aliona');
}, 2000);

// setInterval(function () {
//   console.log(Math.random());
// }, 1500);

// схожий синтаксис и для setTimeout
// можно для остановки работы использовать clearInterval clearTimeout
let count = 0;
const interval = setInterval(function () {
  if (count === 5) {
    clearInterval(interval);
  } else {
    console.log(++count);
  }
}, 1000);
// 4
const greet3 = (name) => console.log('Hello - ', name); //если у функции один параметр его можно записать без () просто const greet3 = name
greet('Ника');
// 5
const sum = (a = 5, b = a + 5) => a + b;
console.log(sum(40, 20)); // 60
console.log(sum()); // 15
// 6
function sumAll(...numbers) {
  return numbers;
}
console.log(sumAll(1, 2, 3, 4, 5));
//например с исп рест нам можно полученные параметры объедин в массив и далее вывести их сумму

function sumAll(...numb) {
  let res = 0;
  for (num of numb) {
    res += num;
  }
  return res;
}
console.log(sumAll(10, 20, 30, 40, 50)); //150
// код выше можно переписать используя reduce
function sumEvr(...numbe) {
  return numbe.reduce((acc, cur) => (acc += cur), 0);
}
console.log(sumEvr(100, 200, 300, 400, 500)); //1500
// 7
function createPerson(name) {
  return function (lastName) {
    // используя замыкание мы в функцию createPerson помещаем фноним функцию return function (lastName) которая будет возвращать в консоль Имя + Фамилия
    console.log(name + ' ' + lastName);
  };
}
const addLastname = createPerson('Andrey'); // создаеи метод который будет передавать в функцию createPerson параметр имени
addLastname('Kramskoy'); // далее можем вызывать этот метод задавая уже в нем нужное нам значение

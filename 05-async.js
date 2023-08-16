// Event Loop
//явным примером асинхронности является метод setTimeout() т.к мы используем в нем задержку на выполнение операции
const timeout = setTimeout(() => {
  console.log('after 2 seconds');
}, 2000);

clearTimeout(timeout); // используя это мы можем чистить таймауты и вызвав здесь этот метод мы очищаем таймаут выше и следовательно выполняется только таймаут ниже который 'after 3 seconds'

setTimeout(() => {
  console.log('after 3 seconds');
}, 3000);
let count = 0;
setInterval(() => {
  // интервалами мы выполняем заданное действие console.log('tick', ++count); каждые указанные милсекунд
  console.log('tick', ++count);
}, 1000);

function delay(callback, time = 1000) {
  // создаем функцию delay и в параметры принимаем функцию callback и время задержки этого таймаута time = 1000
  setTimeout(callback, time); // и передаем этот callback как параметр и time параметр
}
// здесь мы переписываем ту же функцию delay но уже с использованием promise
const delay = (time = 1000) => {
  // мы можем любую асинхронность поместить в promise, это будет выглядеть так:
  const promise = new Promise((resolve, reject) => {
    //здесть мы создаем константу с любым удобным название наприм promise и присваиваем ей след new Promise()а в new Promise(мы помещаем уже любую асинхронную функцию наприм (сюда помещаем другие две функции это resolve, reject) => {setTimeout(() => {resolve([1, 2, 3]); }, time);});
    setTimeout(() => {
      resolve([1, 2, 3]); //resolve говорит нам что асинхрон код закончился, промис завершен
      //!!! если происходит ошибка мы можем передавать через reject ее как результат работы промиса
      reject('Error in delay');
    }, time); //здесь замыкание те передаем время в лице time
  });
  return promise; //и здесь мы уже возвращаем наш const promise = new Promise(
};

delay(2500) //у нас есть промис выше и теперь мы с его использованием можем провернуть след. вызвать функ delay с задержкой 2.5 сек
  .then((data) => {
    //у промисс есть свои методы один из них .then который помогает указать что мы будем делать после 2.5 сек в delay
    //в data мы получаем параметр из resolve([1, 2, 3]); промиса
    console.log('Timeout', data); //получим Timeout [ 1, 2, 3 ]
    return data.map((x) => x ** 2); // здесь с пом data.map мы возводим в квадрат каждый элемент в data полученный из resolve([1, 2, 3]);
  })
  .then((data) => {
    //в новом .then мы получаем новую data с возвед в степень значениями
    console.log(data); // получим [ 1, 4, 9 ]
  })
  .catch((err) => {
    console.log(err); // чтобы поймать ошибку нужно использовать ещё один метод промисса это .catch используя данный метод мы уходим от появления просто ошибок и приходим к тому результату который хотим вернуть при её возникновении например текст Error in delay
  })
  .finally(() => console.log('Finally')); // получим Finally этот метод всегда вызывается не зависит от результата работы промисса

//создаем функцию getData которая будет возвращать нам промисс
const getData = () => new Promise((resolve) => resolve([1, 2, 3]));
//есть другой синтаксис работы с асинхрон данными и он называется asyncАwait
//здесь мы можем вместо .then .catch использовать try {...} catch (){...}
async function asyncExample() {
  //async указывает что функция асинхронна
  try {
    await delay(3000); //с пом await мы можем задать задержку передав ее в delay
    const data = await getData();
    console.log(data);
  } catch (err) {
    console.log(err);
  } finally {
    console.log('Finally');
  }
}

asyncExample();

//Task1
//Определите порядок вывода в следующем фрагменте кода без его запуска. снач выводит все console.log( вне функций и далее уже по мере выполнения функций
console.log('a'); //1
new Promise((resolve, reject) => {
  console.log('b'); //2
  setTimeout(() => {
    console.log('c'); //5
    resolve();
  }, 0);
}).then(() => console.log('d')); //6

console.log('e'); //3
setTimeout(() => console.log('f'), 0); //7
console.log('g'); //4

//Task2
/*
Напишите код, который получает список задач по URL https://jsonplaceholder.typicode.com/todos и выводит их в виде списка (<ul>) на страницу. 
Примечание. Сетевые запросы можно выполнять с помощью функции fetch(), работающей на основе Promise API. 
*/
function fetchList() {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((list) => {
      console.log('Список задач:', list);
    })
    .catch((error) => console.error('Ошибка:', error));
}
fetchList();

//Task3
//Напишите функцию sumWithDelay(), которая принимает delay, a, b и возвращает a + b через delay миллисекунд. Функция должна работать на основе Promise API.

function sumWithDelay() {
  // Ваш код здесь...
}

async function start() {
  const result = await sumWithDelay(1000, 5, 5);
  console.log(result);
}

start();

//Task4
/*
Напишите функцию, имитирующую запрос к серверу за получением пользователя. Она принимает id и с задержкой 2500 миллисекунд возвращает пользователя из массива USERS с соответствующим id. В случае отсутствия пользователя сгенерировать обработать исключение.
*/

const USERS = [
  { id: '001', name: 'Алексей', age: 25 },
  { id: '002', name: 'Иван', age: 28 },
  { id: '003', name: 'Егор', age: 30 },
];

function fetchUser(id) {
  // Ваш код здесь...
}

async function start() {
  // ...
  const result = await fetchUser('001');
  console.log(result); // { id: '001', name: "Алексей", age: 25 }
  // ...
}

start();

//создадим функцию которая будет возвращать промисс с выполнением задержки
const delay = (ms) => {
  // у нас есть стрелочная функ принимающая некоторое кол милисек
  return new Promise((resolve) => setTimeout(() => resolve(), ms)); //функция возвращает новый промисс в конструктор которого мы передаем функцию resolve. далее с пом setTimeout мы задаем некотурую задержку и в колбэке мы будем вызывать функ resolve если таймаут завершится успешно по истечению заданного кол милисек ms
};
delay(2000).then(() => console.log('2 sec')); // вызываем функ delay с параметром задержки 2сек и используя then задаем что она должна выполнить

const url = 'https://jsonplaceholder.typicode.com/todos'; //задаем переменной адрес

function fetchTodos() {
  //создаем функцию которая будет фетчить данные по указ адресу
  console.log('Fetch todo started...'); //чтобы обозначить начало работы функ выведем в консоль сообщение
  return delay(2000) //далее передадим в уже суж функ delay параметр с задержкой
    .then(() => fetch(url)) //по итогу успеш раб функ delay через then задаем дальнейшие действия фукции fetchTodos и выполн колбэк в котоом делаем запрос на сервер через fetch по адресу
    .then((response) => response.json()); // и т.к первый колбэк включ метод fetch который возвращ промис мы можем обратиться к нему через еще один then чтобы получить ответ с содержанием необх нам json
}
fetchTodos() //далее мы вызываем метод fetchTodos
  .then((data) => {
    //у него доступен метод then который принимает некоторую дату и выводит ее в консоль
    console.log('Data:', data);
  })
  .catch((error) => console.error(error)); // чтобы обработать потенциальные ошибки мы используем доступный в промисах метод catch

// +++++  используя Async Await можно упростить код описанный выше ++++++  //
const delay1 = (ms) => {
  return new Promise((resolve) => setTimeout(() => resolve(), ms));
};
delay1(2000).then(() => console.log('2 sec'));
const url1 = 'https://jsonplaceholder.typicode.com/todos';

async function fetchAsyncTodos() {
  //делаем функцию асинхронной используя async
  console.log('Fetch todo started...');
  try {
    //для работы с ошибками присутствуют ключивые слова try catch
    await delay1(2000); //мы вызываем функцию delay которая возвращ нам промисс, чтобы обработать сейчас данн функ мы используем оператор await и как только данный промисс delay зарезолвится мы перейдем к выполнению како-то логики ниже
    const response = await fetch(url1); //метод fetch возвращ нам некий response, мы можем просто получить этот ответ в созданную переменную response
    const data = await response.json(); // теперь мы по той же логике можем вернуть полученный response в виде json уже в созданную переменную data
    console.log('Data:', data); // которую в итоге выведем в консоль по истечении 2 сек
  } catch (err) {
    console.error(err); //выводит ошибку в случае возникновения
  } finally {
    //так же сущ блок c finally который выполняется в любом случае, даже при возникновении ошибки
  }
}
fetchAsyncTodos(); // для этого нам просто нужно вызвать созданный метод

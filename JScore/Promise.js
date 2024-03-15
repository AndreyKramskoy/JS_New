/*
Промисы (Promises) в JavaScript представляют собой механизм для управления асинхронными операциями. Они предоставляют более структурированный и понятный способ работы с асинхронным кодом, делая его более легким для чтения, отладки и управления.
Вот несколько основных причин, для которых промисы используются:
Обработка асинхронных операций: Промисы предоставляют структурированный способ обработки асинхронных операций, таких как запросы к серверу, чтение/запись файлов, работа с базами данных и другие операции, которые могут занимать время.
Избегание "Callback Hell": Использование промисов помогает избежать так называемого "Callback Hell", когда вложенные колбэки делают код сложным для понимания и поддержки.
Легкий механизм управления потоком: Промисы предоставляют удобный способ управления последовательными асинхронными операциями. Вы можете выполнять операции одну за другой, возвращая новые промисы, и использовать методы then() и catch() для обработки результатов или ошибок.
Обработка ошибок: Промисы имеют встроенный механизм обработки ошибок с использованием метода catch(), который позволяет централизованно обрабатывать ошибки, возникающие в ходе асинхронных операций.
Параллельное выполнение: С помощью метода Promise.all() можно запускать несколько асинхронных операций параллельно и ожидать завершения всех.
Продвинутые паттерны: Промисы являются основой для более сложных паттернов асинхронного программирования, таких как асинхронные генераторы и асинхронные функции (async/await).
*/
/*
Промисы в JavaScript предоставляют ряд методов, которые упрощают работу с асинхронными операциями и управление потоком выполнения. Вот основные методы промисов:
1. **`then(onFulfilled, onRejected)`:** Метод `then()` используется для добавления колбэков для обработки успешного выполнения (`onFulfilled`) и ошибок (`onRejected`). Он возвращает новый промис, который позволяет создавать цепочку обработчиков.
2. **`catch(onRejected)`:** Метод `catch()` позволяет обрабатывать ошибки в промисе. Он работает аналогично `then(null, onRejected)` и возвращает промис, позволяя продолжить цепочку обработки ошибок.
3. **`finally(onFinally)`:** Метод `finally()` добавляет колбэк, который будет вызван независимо от того, успешно ли промис был выполнен или завершился ошибкой. Он позволяет выполнить код, который должен выполняться независимо от исхода.
4. **`Promise.resolve(value)` и `Promise.reject(reason)`:** Статические методы `resolve()` и `reject()` позволяют создавать промисы сразу с определенными значениями (в случае успеха) или причинами ошибки.
5. **`Promise.all(iterable)`:** Статический метод `all()` принимает итерируемый объект (обычно массив) промисов и возвращает новый промис, который будет выполнен, когда все переданные промисы успешно завершатся. Возвращает массив результатов.

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});
Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // expected output: [3, 42, "foo"]
});

6. **`Promise.race(iterable)`:** Статический метод `race()` также принимает итерируемый объект промисов, но завершается, как только один из переданных промисов завершится (либо успешно, либо с ошибкой). Возвращает результат первого завершившегося промиса.

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'one');
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, 'two');
});
Promise.race([promise1, promise2]).then((value) => {
  console.log(value); // expected output: 'one' (because promise1 resolves first)
});

7. **`Promise.allSettled(iterable)`:** Статический метод `allSettled()` принимает итерируемый объект промисов и возвращает промис, который завершится только тогда, когда все переданные промисы завершатся (независимо от исхода). Возвращает массив объектов с результатами и состоянием каждого промиса.

const promise1 = Promise.resolve(42);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'Ошибка'));
Promise.allSettled([promise1, promise2]).then((results) => {
  console.log(results);
   expected output:
    [
      { status: "fulfilled", value: 42 },
      { status: "rejected", reason: "Ошибка" }
    ]
  });


Эти методы позволяют эффективно управлять асинхронными операциями, создавать цепочки обработчиков и обрабатывать ошибки. Они являются основой для удобного и структурированного асинхронного программирования в JavaScript.
*/
//начнем с примера асинхронного кода с коллбэк функциями и посмотрим как выглядит код в данной реализации
console.log('Request data...');

setTimeout(() => {
  console.log('Preparing data...');

  const backendData = {
    server: 'aws',
    port: 2000,
    status: 'working',
  };
  setTimeout(() => {
    backendData.modified = true;
    console.log('Data received', backendData);
  }, 2000);
}, 3500);

//такая структура трудно поддерживаема и объемна поэтому появились промиссы
//создаем константу промисс, для этого используем глобалл класс Promise и передаем в его функцию дфе функции промиссов это resolve, reject
const p = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log('Preparing data...');
    const backendData = {
      server: 'aws',
      port: 2000,
      status: 'working',
    };
    resolve(backendData); //вызвав после асинхрон функции resolve мы показываем об ее успешном завершении
  }, 2000);
});

p.then((data) => {
  //теперь мы можем обратиться к нашему промису р и через метод then передать в консоль сообщение и наш backendData
  //console.log('Promise resolved', data);
  //либо создать в нем еще один промисс с асинхр кодом и выполнитьь его
  return new Promise((resolve, reject) => {
    //теперь мы можем просто возвращать новый промисс
    setTimeout(() => {
      data.modified = true;
      resolve(data);
    }, 2000);
  }).then((clientData) => {
    //и используя метод then выводить данные
    console.log('Data received', clientData);
  });
}).catch((err) => console.error('Error', err)); //чтобы передать ошибку в случ ее возникновения
//Preparing data...
//Data received { server: 'aws', port: 2000, status: 'working', modified: true }

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
};
sleep(2000).then(() => console.log('After 2 sec'));
sleep(3000).then(() => console.log('After 3 sec'));

//Задача- ============ Make a chain of three promises. Let the first promise return a number. Make each subsequent promise square the result of the previous promise after 3 seconds. After the end of the manipulations, display the console log number on the screen.

// First Promise: Returns a number after 1 second
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const number = 5; // You can replace this with any number you want
    console.log('First Promise resolved with:', number);
    resolve(number);
  }, 1000);
});

// Second Promise: Squares the result of the first promise after 3 seconds
const promise2 = promise1.then((result) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const squaredNumber = result * result;
      console.log('Second Promise resolved with:', squaredNumber);
      resolve(squaredNumber);
    }, 3000);
  });
});

// Third Promise: Squares the result of the second promise after 3 seconds
const promise3 = promise2.then((result) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const squaredNumber = result * result;
      console.log('Third Promise resolved with:', squaredNumber);
      resolve(squaredNumber);
    }, 3000);
  });
});

// Final result
promise3.then((result) => {
  console.log('Final Result:', result);
});

//  with async/await=====================================================
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function calculateSquares() {
  try {
    // First Promise: Resolves with a number after 1 second
    const promise1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        const number = 5; // You can replace this with any number you want
        console.log('First Promise resolved with:', number);
        resolve(number);
      }, 1000);
    });

    // Wait for the first promise to resolve
    const result1 = await promise1;

    // Second Promise: Squares the result of the first promise after 3 seconds
    await delay(3000); // Delay for 3 seconds
    const squaredNumber2 = result1 * result1;
    console.log('Second Promise resolved with:', squaredNumber2);

    // Third Promise: Squares the result of the second promise after 3 seconds
    await delay(3000); // Delay for another 3 seconds
    const squaredNumber3 = squaredNumber2 * squaredNumber2;
    console.log('Third Promise resolved with:', squaredNumber3);

    // Final result
    console.log('Final Result:', squaredNumber3);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Вызываем функцию calculateSquares для выполнения всех асинхронных операций
calculateSquares();

/*
Давайте подробно разберем код:

1. **Создание первой промисса (promise1)**:
   ```javascript
   const promise1 = new Promise((resolve, reject) => {
     setTimeout(() => {
       const number = 5; // Вы можете заменить это на любое число по вашему выбору
       console.log("First Promise resolved with:", number);
       resolve(number);
     }, 1000);
   });
   ```
   - Мы создаем первый промисс с помощью конструктора `Promise`. Этот промисс выполняет асинхронную операцию с помощью `setTimeout`.
   - Внутри промисса есть функция с двумя параметрами: `resolve` и `reject`. `resolve` используется для успешного завершения промисса.
   - Мы через 1 секунду решаем промисс и передаем число (5 в данном случае) как результат операции.

2. **Создание второй промисса (promise2), привязанный к первому**:
   ```javascript
   const promise2 = promise1.then((result) => {
     return new Promise((resolve, reject) => {
       setTimeout(() => {
         const squaredNumber = result * result;
         console.log("Second Promise resolved with:", squaredNumber);
         resolve(squaredNumber);
       }, 3000);
     });
   });
   ```
   - Мы используем метод `.then()` на первом промиссе `promise1`, чтобы выполнить дополнительные действия после его успешного завершения.
   - Внутри `.then()`, мы получаем результат первого промисса (который был передан через `resolve`) в параметре `result`.
   - Затем создаем новый промисс (`promise2`), который выполняет асинхронную операцию через `setTimeout`.
   - Второй промисс возводит результат в квадрат и передает этот результат через `resolve`.

3. **Создание третьего промисса (promise3), привязанный ко второму**:
   ```javascript
   const promise3 = promise2.then((result) => {
     return new Promise((resolve, reject) => {
       setTimeout(() => {
         const squaredNumber = result * result;
         console.log("Third Promise resolved with:", squaredNumber);
         resolve(squaredNumber);
       }, 3000);
     });
   });
   ```
   - То же самое, что и для второго промисса, но теперь третий промисс (`promise3`) привязан к результату второго промисса.

4. **Завершение итоговой операции**:
   ```javascript
   promise3.then((result) => {
     console.log("Final Result:", result);
   });
   ```
   - Здесь мы используем `.then()` на третьем промиссе (`promise3`) для выполнения операции после завершения всех предыдущих промиссов.
   - В данном случае, мы просто выводим итоговый квадрат числа в консоль.

Таким образом, весь код создает цепочку трех промиссов, где каждый последующий промисс выполняет операцию над результатом предыдущего и выводит результат в консоль. После завершения всей цепочки операций, вы получите итоговый результат в консоли.*/

new Promise(function (resolve, reject) {
  resolve(2);
})
  .then((result) => {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve(result * result);
        console.log(result);
      }, 3000);
    });
  })
  .then((result) => {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve(result * result);
        console.log(result);
      }, 3000);
    });
  })
  .catch((alert) => {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        reject(new Error('Error!'));
        console.log(alert);
      }, 1000);
    });
  })
  .then((result) => {
    console.log('Final Result:', result);
  });
//================================== with async/await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function calculate() {
  try {
    const result1 = await new Promise(function (resolve, reject) {
      resolve(2);
    });

    const result2 = await new Promise(function (resolve, reject) {
      return delay(3000).then(() => {
        resolve(result1 * result1);
        console.log(result1);
      });
    });

    const result3 = await new Promise(function (resolve, reject) {
      return delay(3000).then(() => {
        resolve(result2 * result2);
        console.log(result2);
      });
    });

    console.log('Final Result:', result3);
  } catch (error) {
    console.error('Error!', error);
  }
}

calculate();

//++++++++++++++=====================+++++++++++++++++++

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function getResult(result) {
  const squaredResult = result * result;
  console.log(squaredResult);
  return squaredResult;
}

new Promise(function (resolve, reject) {
  resolve(2);
})
  .then((result) => {
    console.log(result);
    return result;
  })
  .then((result) => {
    return delay(3000).then(() => getResult(result));
  })
  .then((result) => {
    return delay(3000).then(() => getResult(result));
  })
  .then((result) => {
    console.log('Final Result:', result);
  })
  .catch((error) => {
    console.error('Err:', error);
  });

//========================================Задача: Получение случайного числа после задержки
function getRandomNumberAfterDelay(delay, max) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * max) + 1;
      if (randomNumber) {
        resolve(randomNumber);
      } else {
        reject(new Error('Failed to generate a random number.'));
      }
    }, delay);
  });
}

// Пример использования:
getRandomNumberAfterDelay(2000, 10)
  .then((number) => {
    console.log('Random Number:', number);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

//================Задача: Параллельное выполнение задач
function runParallelTasks(tasks) {
  return Promise.allSettled(tasks.map((task) => task()));
}

const tasks = [
  () => fetch('https://api.example.com/data/1'),
  () => fetch('https://api.example.com/data/2'),
  () => fetch('https://api.example.com/data/3'),
];

runParallelTasks(tasks)
  .then((results) => {
    console.log('Results:', results);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
//====================Вывод приветсвия после задержки
function delayedGreeting(name, delay) {
  return new Promise((resolve, reject) =>
    delay < 0
      ? reject('Error')
      : setTimeout(() => {
          resolve(`Hello ${name}`);
        }, delay)
  );
}
delayedGreeting('Andrey', 2000)
  .then((greeting) => {
    console.log(greeting); // Должен вывести 'Hello, Alice!' через 2 секунды
  })
  .catch((error) => {
    console.error(error); // Выведет ошибку, если delay отрицательный
  });
//=====================
function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (num >= 10) {
      setTimeout(() => {
        resolve();
      }, 2000);
    } else {
      reject();
    }
  });
}
checkNumber(25)
  .then(() => console.log('Число меньше 10'))
  .catch(() => console.error('Число больше или равно 10'));
checkNumber(1)
  .then(() => console.log('Число меньше 10'))
  .catch(() => console.error('Число больше или равно 10'));
//////////// ИЛИ С async await
async function checkAndPrint(num) {
  try {
    await checkNumber(num);
    console.log('Число меньше 10');
  } catch (err) {
    console.error('Число больше или равно 10');
  }
}
checkAndPrint(25);
checkAndPrint(1);
//===========================
// Пример использования публичного API для получения данных пользователя
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}
// Использование функции
fetchUserData(1)
  .then((userData) => console.log(userData))
  .catch((error) => console.error(error));
// с использованием async/await:
async function fetchUserData(userId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
async function displayUserData(userId) {
  try {
    const userData = await fetchUserData(userId);
    console.log('User Data:', userData);
  } catch (error) {
    console.error('Error:', error);
  }
}
displayUserData(1);
//=================Функция должна возвращать промис, который разрешается строкой в верхнем регистре
function delayedUpperCase(str, ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const strToUpperCase = str.toUpperCase();
      if (strToUpperCase) {
        resolve(strToUpperCase);
      } else {
        reject(err);
      }
    }, ms);
  });
}
delayedUpperCase('hello', 2000)
  .then((result) => {
    console.log(result); // Ожидаемый результат: 'HELLO' (выводится через 2 секунды)
  })
  .catch((error) => {
    console.error('Произошла ошибка:', error);
  });
//
async function delayedUpperCaseAsync(str, ms) {
  try {
    const result = await delayedUpperCase(str, ms);
    console.log(result);
  } catch (error) {
    console.error('Произошла ошибка:', error);
  }
}
delayedUpperCaseAsync('hello', 2000);

//===========================================================================================================================================
//=======Задача fetchUserData, принимает на вход ID пользователя и возвращает промис. Этот промис должен делать GET-запрос к некоторому API для получения данных о пользователе с указанным ID.

function fetchUserData(id) {
  return new Promise((resolve, reject) => {
    fetch(`https://api.example.com/users/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Ошибка при получении данных о пользователе');
        }
        return response.json();
      })
      .then((userData) => {
        resolve(userData);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

fetchUserData(123)
  .then((userData) => {
    console.log('Данные о пользователе:', userData);
  })
  .catch((error) => {
    console.error('Ошибка при получении данных:', error);
  });
//==============Задача: Получение данных о погоде
function getWeather(city) {
  return new Promise((resolve, reject) => {
    fetch(`https://api.meteo.com/cities/${city}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Ошибка при получении данных о пользователе');
        }
        return response.json();
      })
      .then((cityWeather) => {
        resolve(cityWeather);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
getWeather('Moscow')
  .then((weatherData) => {
    console.log('Данные о погоде:', weatherData);
  })
  .catch((error) => {
    console.error('Ошибка получения данных о погоде:', error);
  });
//===========================================
// Функция, симулирующая длительную операцию
function longOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = Math.random() >= 0.5; // Случайный результат операции
      if (result) {
        resolve('Операция завершена успешно!');
      } else {
        reject('Операция завершена с ошибкой!');
      }
    }, 2000); // Длительность операции: 2 секунды
  });
}

// Вызываем нашу функцию longOperation
console.log('Начало выполнения операции...');
longOperation()
  .then((result) => {
    console.log('Результат:', result);
  })
  .catch((error) => {
    console.error('Ошибка:', error);
  })
  .finally(() => {
    console.log('Операция завершена.');
  });

//====================Задача:У вас есть массив с URL-адресами изображений. Напишите функцию loadImages, которая принимает этот массив в качестве аргумента и возвращает промис.
const imageUrls = [
  'https://example.com/image1.jpg',
  'https://example.com/image2.jpg',
  'https://example.com/image3.jpg',
];
function loadImages(imageUrls) {
  const promises = imageUrls.map((url) => fetch(url));
  return Promise.all(promises);
}
loadImages(imageUrls)
  .then(() => {
    console.log('Все изображения успешно загружены!');
  })
  .catch((error) => {
    console.error('Ошибка загрузки изображений:', error);
  });

//===================У вас есть массив промисов, которые представляют собой запросы к API для получения данных о пользователях. Напишите функцию fetchUserData, которая принимает массив пользовательских идентификаторов и возвращает массив объектов с данными о пользователях
const userIds = [1, 2, 3, 4, 5];
function fetchUserData(userIds) {
  const userData = userIds.map((userId) =>
    fetch(`https://example/user/${userId}`)
  );
  return Promise.all(userData);
}
fetchUserData(userIds)
  .then((userData) => {
    console.log('Данные о пользователях:', userData);
  })
  .catch((error) => {
    console.error('Ошибка при получении данных о пользователях:', error);
  });

const imagesURLs = [
  'https://example.com/image1.jpg',
  'https://example.com/image2.jpg',
  'https://example.com/image3.jpg',
];
function preloadImages(imagesURLs) {
  const imagesData = imagesURLs.map((url) => fetch(url));
  return Promise.all(imagesData);
}
preloadImages(imagesURLs)
  .then((imagesData) => {
    console.log('Все изображения успешно загружены!', imagesData);
  })
  .catch((error) => {
    console.error('Ошибка загрузки изображений:', error);
  });

//=====У вас есть массив чисел. Напишите функцию findAverage, которая принимает этот массив в качестве аргумента и возвращает промис, который разрешается со средним значением чисел в массиве.
function findAverage(arr) {
  return new Promise((resolve, reject) => {
    const numericArr = arr.filter((item) => typeof item === 'number');
    if (numericArr.length === 0) {
      resolve(0);
    } else if (numericArr.length !== arr.length) {
      reject('Массив содержит неправильные элементы');
    } else {
      const arrSum = numericArr.reduce((acc, curr) => acc + curr, 0);
      resolve(arrSum / numericArr.length);
    }
  });
}

findAverage([1, 2, 3, 4, 5])
  .then((average) => {
    console.log('Среднее значение:', average); // Ожидаемый результат: 3
  })
  .catch((error) => {
    console.error('Ошибка:', error);
  });

findAverage([])
  .then((average) => {
    console.log('Среднее значение:', average); // Ожидаемый результат: 0
  })
  .catch((error) => {
    console.error('Ошибка:', error);
  });

findAverage([1, 2, 'a', 4, 5])
  .then((average) => {
    console.log('Среднее значение:', average);
  })
  .catch((error) => {
    console.error('Ошибка:', error); // Ожидаемый результат: "Массив содержит неправильные элементы"
  });

//=========. Этот промис должен разрешаться массивом объектов только для пользователей, чей возраст больше или равен 18.
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 30 },
  { name: 'David', age: 20 },
];
function filterAdults(usersArr) {
  return new Promise((resolve, reject) => {
    const adults = usersArr.filter((item) => item.age > 18);
    if (adults.length > 0) {
      resolve(adults);
    } else {
      reject('Нет взрослых пользователей');
    }
  });
}
filterAdults(users)
  .then((adults) => {
    console.log('Взрослые пользователи:', adults);
  })
  .catch((error) => {
    console.error('Ошибка:', error);
  });

function findUniqueElements(arr) {
  return new Promise((resolve, reject) => {
    const uniqueElements = arr.filter(
      (num, index) => arr.indexOf(num) === arr.lastIndexOf(num)
    );
    if (uniqueElements) {
      resolve(uniqueElements);
    } else {
      reject('Error');
    }
  });
}
findUniqueElements([1, 2, 3, 2, 4, 5, 3])
  .then((uniqueElements) => {
    console.log('Уникальные элементы:', uniqueElements); // Ожидаемый результат: [1, 4, 5]
  })
  .catch((error) => {
    console.error('Ошибка:', error);
  });

findUniqueElements([5, 7, 5, 9, 8, 7, 6])
  .then((uniqueElements) => {
    console.log('Уникальные элементы:', uniqueElements); // Ожидаемый результат: [9, 8, 6]
  })
  .catch((error) => {
    console.error('Ошибка:', error);
  });

findUniqueElements([2, 2, 2, 2, 2, 2])
  .then((uniqueElements) => {
    console.log('Уникальные элементы:', uniqueElements); // Ожидаемый результат: []
  })
  .catch((error) => {
    console.error('Ошибка:', error);
  });

//=====================
function filterBooksByGenre(books, genre) {
  return new Promise((resolve, reject) => {
    const filteredBooks = books.filter((book) => book.genre === genre);
    if (filteredBooks) {
      resolve(filteredBooks);
    } else {
      reject(err);
    }
  });
}
const books = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Novel',
    pages: 218,
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Novel',
    pages: 324,
  },
  {
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian Fiction',
    pages: 328,
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    genre: 'Dystopian Fiction',
    pages: 288,
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Novel',
    pages: 234,
  },
];

filterBooksByGenre(books, 'Novel')
  .then((filteredBooks) => {
    console.log('Книги в жанре "Novel":', filteredBooks);
  })
  .catch((error) => {
    console.error('Ошибка:', error);
  });

filterBooksByGenre(books, 'Science Fiction')
  .then((filteredBooks) => {
    console.log('Книги в жанре "Science Fiction":', filteredBooks);
  })
  .catch((error) => {
    console.error('Ошибка:', error);
  });

//====================================
const books1 = [
  { title: 'Book 1', author: 'Author A' },
  { title: 'Book 2', author: 'Author B' },
  { title: 'Book 3', author: 'Author A' },
];
function filterBooksByAuthor(books1, author) {
  return new Promise((resolve, reject) => {
    const byAuthor = books1.filter((book) => book.author === author);
    if (byAuthor.length !== 0) {
      resolve(byAuthor);
    } else {
      reject('This author is absent');
    }
  });
}

filterBooksByAuthor(books1, 'Author A')
  .then((filteredBooks) => {
    console.log('Книги автора A:', filteredBooks);
  })
  .catch((error) => {
    console.error('Ошибка:', error);
  });

filterBooksByAuthor(books1, 'Author C')
  .then((filteredBooks) => {
    console.log('Книги автора C:', filteredBooks);
  })
  .catch((error) => {
    console.error('Ошибка:', error);
  });

//===================================================
function filterUsersByAgeRange(users2, minAge, maxAge) {
  return new Promise((resolve, reject) => {
    const filteredUsers = users2.filter(
      (user) => user.age > minAge || user.age < maxAge
    );
    if (filteredUsers.length !== 0) {
      resolve(filteredUsers);
    } else {
      reject(error);
    }
  });
}
const users2 = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 20 },
];

filterUsersByAgeRange(users2, 25, 30)
  .then((filteredUsers) => {
    console.log('Пользователи в возрасте от 25 до 30 лет:', filteredUsers);
  })
  .catch((error) => {
    console.error('Ошибка:', error);
  });

filterUsersByAgeRange(users2, 40, 50)
  .then((filteredUsers) => {
    console.log('Пользователи в возрасте от 40 до 50 лет:', filteredUsers);
  })
  .catch((error) => {
    console.error('Ошибка:', error);
  });

//==Напишите функцию findProductById, которая принимает массив products и id товара в качестве аргументов. Функция должна возвращать промис, который разрешается с объектом товара, если такой товар найден по указанному id, или отклоняется с сообщением "Товар не найден", если товар с указанным id отсутствует.
const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 },
  // Другие товары...
];
function findProductById(products, id) {
  return new Promise((resolve, reject) => {
    const product = products.find((item) => item.id === id);
    if (product) {
      resolve(product);
    } else {
      reject('There is no product');
    }
  });
}
findProductById(products, 2)
  .then((product) => console.log('Найденный товар:', product))
  .catch((error) => console.error('Ошибка:', error));
findProductById(products, 4)
  .then((product) => {
    console.log('Найденный товар:', product);
  })
  .catch((error) => {
    console.error('Ошибка:', error);
  });

  const use = [
    { username: 'user1', age: 25 },
    { username: 'user2', age: 30 },
    { username: 'user3', age: 35 },
  ];
function findUserByUsername(arr, name){
  return new Promise((resolve,reject)=>{
    const currUser = arr.find((item)=>item.username === name)
    if(currUser){
      resolve(currUser)
    }else{
      reject("error")
    }
  })
}
  findUserByUsername(use, 'user2')
    .then((user) => console.log('Найденный пользователь:', user))
    .catch((error) => console.error('Ошибка:', error));

  findUserByUsername(use, 'user4')
    .then((user) => console.log('Найденный пользователь:', user))
    .catch((error) => console.error('Ошибка:', error));

    /////////////==========================================
function findProductsWithPriceLessThan(arr, pr){
  return new Promise((resolve,reject)=>{
    const filteredProducts=arr.filter((item)=>item.price<pr)
    if(filteredProducts){
      resolve(filteredProducts);
    }else{
      reject('err')
    }
  })
}
    const products2 = [
      { name: 'Product 1', price: 10 },
      { name: 'Product 2', price: 20 },
      { name: 'Product 3', price: 30 },
    ];

    findProductsWithPriceLessThan(products2, 25)
      .then((filteredProducts) => {
        console.log('Товары с ценой меньше 25:', filteredProducts);
      })
      .catch((error) => {
        console.error('Ошибка:', error);
      });

function findUsersByAge(arr, num){
  return new Promise((resolve,reject)=>{
    let filteredUsers = arr.filter((item)=>item.age === num)
    if(filteredUsers){
resolve(filteredUsers);
    }else{
      reject('Пользователи данного возраста не найдены');
    }
  })
}
      const users4 = [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 },
        { name: 'Charlie', age: 25 },
        { name: 'David', age: 20 },
      ];

      findUsersByAge(users4, 25)
        .then((filteredUsers) => {
          console.log('Пользователи в возрасте 25:', filteredUsers);
        })
        .catch((error) => {
          console.error('Ошибка:', error);
        });

      findUsersByAge(users4, 40)
        .then((filteredUsers) => {
          console.log('Пользователи в возрасте 40:', filteredUsers);
        })
        .catch((error) => {
          console.error('Ошибка:', error);
        });

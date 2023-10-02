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
6. **`Promise.race(iterable)`:** Статический метод `race()` также принимает итерируемый объект промисов, но завершается, как только один из переданных промисов завершится (либо успешно, либо с ошибкой). Возвращает результат первого завершившегося промиса.
7. **`Promise.allSettled(iterable)`:** Статический метод `allSettled()` принимает итерируемый объект промисов и возвращает промис, который завершится только тогда, когда все переданные промисы завершатся (независимо от исхода). Возвращает массив объектов с результатами и состоянием каждого промиса.

Эти методы позволяют эффективно управлять асинхронными операциями, создавать цепочки обработчиков и обрабатывать ошибки. Они являются основой для удобного и структурированного асинхронного программирования в JavaScript.
*/
//начнем с примера асинхронного кода с коллбэк функциями и посмотрим как выглядит код в данной реализации
console.log('Request data...');

// setTimeout(() => {
//   console.log('Preparing data...');

//   const backendData = {
//     server: 'aws',
//     port: 2000,
//     status: 'working',
//   };
//   setTimeout(() => {
//     backendData.modified = true;
//     console.log('Data received', backendData);
//   }, 2000);
// }, 3500);

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
  // .catch((alert) => {
  //   return new Promise(function (resolve, reject) {
  //     setTimeout(() => {
  //       reject(new Error('Error!'));
  //       console.log(alert);
  //     }, 1000);
  //   });
  // })
  .then((result) => {
    console.log('Final Result:', result);
  });

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

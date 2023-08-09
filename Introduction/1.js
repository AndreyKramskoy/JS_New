/*
// переменные(можно присваивать различные значения в том числе типы данных)
let num = 11;
let Language = 'JavaScript';
// постоянные(неизменна после присваения)
const isProgrammer = true;

// НАЗВАНИЯ ПЕРЕМЕННЫХ //
    Переменные могут начинаться с символов: $ _ любых букв и заканчиваться на эти символы или цифры
при написании названия используется кэмлкейс
НЕльзя писать название переменных через - или использовать зарезервированные(служебные) слова в JS

//для вывода информации в консоль используем команду
console.log(Language);

//БАЗОВЫЕ ОПЕРАТОРЫ//
+ сложение
- вычетание
/ деление
* умножение
** возведение в степень
% взятие остатка при делении
== не строгое равенство
=== строгое равенство
console.log(num + 14);
console.log(num - 1);
console.log(num * 10);
console.log(num / 10);
console.log(num ** 2);
console.log(num % 2);

let num2 = num + 24;
console.log(num2);
*/

// КОД КАЛЬКУЛЯТОРА
// в одном месте получение всех элементов для упрощения обслуж кода
const resultElement = document.getElementById('result'); // через эту константу получаем доступ по ИД к выводимому результату вычисления
const input1 = document.getElementById('input1'); // через эту константу получаем значение первого элемента вычисления
const input2 = document.getElementById('input2'); // через эту константу получаем значение вторго элемента вычисления
const submitBtn = document.getElementById('submit'); // через эту константу получаем доступ к кнопке вычисления нашего калькулятора
const plusBtn = document.getElementById('plus'); // через эту константу получаем доступ к кнопке сложения нашего калькулятора
const minusBtn = document.getElementById('minus'); // через эту константу получаем доступ к кнопке вычетания нашего калькулятора
const multiplyBtn = document.getElementById('multiply'); // через эту константу получаем доступ к кнопке умножения нашего калькулятора
const divideBtn = document.getElementById('divide'); // через эту константу получаем доступ к кнопке деления нашего калькулятора
let action = '+'; //задаем переменную через которую сможем добавить вариативность в действия кода

//console.log(input1.value); просто в консоли видим наши значения
//console.log(input2.value);

/* у нас есть код: const sum = Number(input1.value) + Number(input2.value);
                   resultElement.textContent = sum;
этот код мы помещаем в функцию которая будет выполнять вычисления по данному коду при нажатии submitBtn
данный код просто суммирует два значения при нажатии кнопки
Далее мы можем заставить наш код ветвиться в зависимости от нужной операции сложение или вычетание
*/
plusBtn.onclick = function () {
  // для работы кода присваиваем соответсвующим экшенам нужное значение
  action = '+';
};
minusBtn.onclick = function () {
  // присвоив нужные значения мы сможем использовать наш action далее в коде и добавить ветвление в его работе в зависимости от выбранной операции
  action = '-';
};
multiplyBtn.onclick = function () {
  // присвоив нужные значения мы сможем использовать наш action далее в коде и добавить ветвление в его работе в зависимости от выбранной операции
  action = '*';
};
divideBtn.onclick = function () {
  // присвоив нужные значения мы сможем использовать наш action далее в коде и добавить ветвление в его работе в зависимости от выбранной операции
  action = '/';
};

// !!! созданим НАШУ собственную функцию printResult которая сделает наш код локаничнее и более читабельным

//3.1
function printResult(result) {
  // так как код не знает о существовании sum в данной функции, мы будем использовать собственную переменную result
  if (result < 0) {
    // здесь нам не нужен return т.к. мы просто работаем с внеш составляющими
    resultElement.style.color = 'red';
  } else {
    resultElement.style.color = 'green';
  }
  resultElement.textContent = result;
}

//4.1
function computeNumberWithAction(inp1, inp2, actionSymbol) {
  //в данн функ мы получаем оба значения и экшн, на основании которых далее производим вычисления
  const num1 = Number(inp1.value); // мы показываем JS что наши переменные связаны с значениями инпутов
  const num2 = Number(inp2.value);
  //можно переписать закомментир код через тернарный оператор
  /* if (actionSymbol == '+') {
    // мы задаем вариативность действий в завис от экшена
    return num1 + num2; // через return мы возвращаем получившееся значение работы кода функции
  } else if (actionSymbol == '-') {
    return num1 - num2;
  } else if (actionSymbol == '*') {
    return num1 * num2;
  } else {
    return num1 / num2;
  }*/
  //тернарный оператор немного уменьшает код
  return actionSymbol == '+'
    ? num1 + num2
    : actionSymbol == '-'
    ? num1 - num2
    : actionSymbol == '*'
    ? num1 * num2
    : num1 / num2;
}

submitBtn.onclick = function () {
  //1 через . мы добавили обработчик события onclick
  //2 let sum = Number(input1.value) + Number(input2.value); эта строка здесь уже не нужна удаляем
  //3 добавляем наше ветвление в зависимости от выбранной операции через if else
  //4 чтобы ещё больше упростить данный код мы можем создать ещё одну функцию, в которой будет уже описан экшен по сложению или вычетанию

  /*4.1  if (action == '+') {
    sum = Number(input1.value) + Number(input2.value);
    //мы хотим чтобы наш результат подкрашивался в зависимости положительный или отрицательный он. добавим
    // данный код можно заменить на нашу функцию printResult

    /*3.1   if (sum < 0) {
      resultElement.style.color = 'red';
    } else {
      resultElement.style.color = 'green';
    }
    resultElement.textContent = sum;
 
   3.1 printResult(sum); // использовав нашу функцию printResult(sum) мы смогли избавиться от закомментир кода и сделать наш код более читаемым и понятным

  } else {

 /*4.1   sum = Number(input1.value) - Number(input2.value);
    // данный код можно заменить на нашу функцию printResult

    /*3.1    if (sum < 0) {
      //мы видим что код с подкраш результата грамосткий и используется повторно. Это неудобно и влияет на качество кода. поэтому мы ВЫНЕСЕМ ЕГО В ФУНКЦИЮ, которую создадим выше и назовем printResult
      resultElement.style.color = 'red';
    } else {
      resultElement.style.color = 'green';
    }
    resultElement.textContent = sum;

   3.1 printResult(sum); // использовав нашу функцию printResult(sum) мы смогли избавиться от закомментир кода и сделать наш код более читаемым и понятным
  }
*/
  //4.1
  const result = computeNumberWithAction(input1, input2, action); // передаем в нашу функцию 4.1 необходимые значения для вычислений
  printResult(result); // выводим наш результат через функцию 3.1
};

//console.log(typeof sum); можем увидеть в консоли какой тип у нашей переменно

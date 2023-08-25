let ssa = [
  { name: 'a', width: '10', len: '12' },
  { name: 'b', width: '12', len: '14' },
  { name: 'c', width: '15', len: '11' },
];

function calculateSquare(width, len) {
  return width * len;
}
const Square = ssa.map((item) => ({
  name: item.name,
  square: calculateSquare(parseInt(item.width), parseInt(item.len)),
}));
console.log(Square);

//Проверить является ли строка палиндромом
let str = '12345';
let str2 = '12321';

// function isPalindrom(strin) {
//   return strin === strin.split('').reverse().join('');
// }
let strin = (st) => st === st.split('').reverse().join('');
console.log(strin(str));
console.log(isPalindrom(str2));
console.log(isPalindrom(str));
console.log(isPalindrom(str2));

const words = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
// Функция для сравнения длин строк
function compareStringLength(a, b) {
  return a.length - b.length;
}
// Сортировка массива слов по длине
const sortedWords = words.slice().sort(compareStringLength);

console.log('Исходный массив:', words);
console.log('Отсортированный массив:', sortedWords);

/*В этом коде:  
  1. Создается копия массива `words` с помощью метода `slice()`. Это делается для того, чтобы не изменять исходный массив.
  2. Определяется функция `compareStringLength`, которая сравнивает длины двух строк. Эта функция будет использоваться методом `sort()` для определения порядка сортировки.
  3. Метод `sort(compareStringLength)` сортирует копию массива `words` согласно функции сравнения `compareStringLength`, что приводит к отсортированному массиву `sortedWords`.
  4. Результаты исходного массива и отсортированного массива выводятся в консоль.
  Ожидаемый вывод:
  ```
  Исходный массив: [ 'apple', 'banana', 'cherry', 'date', 'elderberry' ]
  Отсортированный массив: [ 'date', 'apple', 'cherry', 'banana', 'elderberry' ]
  ```*/

//Задача: Фильтрация уникальных элементов
const numbers = [1, 2, 3, 4, 2, 3, 5, 6, 7, 8, 1];
const Words = ['apple', 'banana', 'cherry', 'apple', 'date', 'banana'];

function isUnick(element, index, arr) {
  return arr.indexOf(element) === arr.lastIndexOf(element);
}
const sortedNumbers = numbers.filter(isUnick);
const sorteWords = Words.filter(isUnick);
console.log('Исходный массив:', numbers);
console.log('Отсортированный массив:', sortedNumbers);
console.log('Исходный массив:', Words);
console.log('Отсортированный массив:', sorteWords);

//Задача: Удаление дубликатов У вас есть массив строк, и ваша задача - создать новый массив, в котором будут только уникальные строки из исходного массива, то есть такие строки, которые не повторяются.
const Word = ['apple', 'banana', 'cherry', 'apple', 'date', 'banana'];
function isUnick(element, index, arr) {
  return arr.indexOf(element) === index;
}

const sortWords = Word.filter(isUnick);

console.log('Исходный массив:', Word);
console.log('Отсортированный массив:', sortWords);

//Проверьте, является ли данная строка палиндромом, то есть читается ли она одинаково как слева направо, так и справа налево, игнорируя пробелы, знаки препинания и регистр.
const phrase1 = 'A man, a plan, a canal, Panama!';
const phrase2 = 'hello world';
function isPalindrom(string) {
  currString = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''); // С помощью метода .replace(/[^a-zA-Z0-9]/g, ''), мы заменяем все найденные символы (которые не являются буквами и цифрами) на пустую строку, тем самым удаляя их из строки. Таким образом, получается "очищенная" версия исходной строки, содержащая только буквы и цифры.
  if (currString === currString.split('').reverse().join('')) {
    return `${string} - Это палиндром`;
  } else {
    return `${string} - Это не палиндром`;
  }
}
console.log(isPalindrom(phrase1));
console.log(isPalindrom(phrase2));

//У вас есть массив чисел, и ваша задача - найти сумму всех положительных чисел в этом массиве.
const numbers2 = [3, -2, 8, -4, 7, -1, 6];
function getSumm(numbers2) {
  const arr = numbers2.filter((num) => num > 0);
  return (sumNum = arr.reduce((acc, curr) => acc + curr, 0));
}

console.log(getSumm(numbers2));

/*Ваша задача:
Создать новый массив, содержащий только товары, которые есть в наличии (inStock: true).
Отсортировать новый массив по цене по возрастанию.
Вывести информацию о каждом товаре в формате: "Название: Футболка, Цена: 25".
*/
const products = [
  { name: 'Футболка', price: 25, inStock: true },
  { name: 'Джинсы', price: 50, inStock: true },
  { name: 'Кепка', price: 10, inStock: false },
  { name: 'Носки', price: 5, inStock: true },
  { name: 'Куртка', price: 80, inStock: false },
];
function getMoods() {
  const inStockProducts = products
    .filter((product) => product.inStock)
    .sort((a, b) => a.price - b.price)
    .forEach((product) =>
      console.log(`Название: ${product.name}, Цена: ${product.price}`)
    );
  return inStockProducts;
}
getMoods();

/*Задача 1: Поиск максимального элемента
Напишите функцию, которая принимает массив чисел в качестве аргумента и возвращает наибольшее число из этого массива.*/
const numbers3 = [5, 2, 9, 1, 5, 6];
function getMaxNum(elem) {
  if (elem.length === 0) {
    return null;
  }
  let max = elem[0];
  for (let i = 1; i < elem.length; i++) {
    if (elem[i] > max) {
      return (max = elem[i]);
    }
  }
}
console.log(getMaxNum(numbers3));

/*Задача 2: Палиндромная строка
Напишите функцию, которая проверяет, является ли данная строка палиндромом (читается одинаково как слева направо, так и справа налево).*/
const phrase3 = 'level';
const phrase4 = 'hello';

function isPal(str) {
  if (str === str.split('').reverse().join('')) {
    return `${str} is a Palindrome`;
  } else {
    return `${str} is not a Palindrome`;
  }
}
console.log(isPal(phrase3));
console.log(isPal(phrase4));

/*Задача 3: Сумма положительных чисел
Напишите функцию, которая принимает массив чисел в качестве аргумента и возвращает сумму всех положительных чисел из этого массива.*/
const numbers4 = [3, -2, 8, -4, 7, -1, 6];

function getSumm(numbers) {
  const positiveNum = numbers.filter((num) => num > 0);
  return positiveNum.reduce((acc, curr) => acc + curr, 0);
}
console.log(getSumm(numbers4));

//Отсортировать в по возр
let a = [11, 5, 8, 21, 18, 2, 1, 33];
function sortArr(arr) {
  return String(arr.sort((a, b) => a - b)); //если нужно в убывании тогда b - a
} //можно без String если не нужноо выводить строкой
console.log(sortArr(a)); //1,2,5,8,11,18,21,33

/*
Задача 1: Поиск индекса элемента
Напишите функцию, которая принимает массив чисел и целевое число в качестве аргументов и возвращает индекс 
первого вхождения целевого числа в массиве. Если число не найдено, верните -1.
*/
function getTurgetNumb(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}
const numbers5 = [1, 2, 3, 4, 5];
const targetNumber = 3;
console.log(getTurgetNumb(numbers5, targetNumber));

/*
Задача 2: Генерация уникального ID
Напишите функцию для генерации случайного уникального ID. Уникальный ID может быть представлен как строка, состоящая из букв и цифр.
Гарантируйте, что генерируемые ID действительно уникальны.
*/
function generateUniqueId() {
  const uniqueId =
    Math.random().toString(36).substring(2) + Date.now().toString(36);
  return uniqueId;
}
console.log(generateUniqueId());

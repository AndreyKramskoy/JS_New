const users = [
  {
    name: 'John',
    email: 'John@mail.com',
  },
  {
    name: 'Nick',
    email: 'Nick84@gmail.com',
  },
  {
    name: 'Alex',
    email: 'Alex123@gmail.com',
  },
  {
    name: 'Bob',
    email: 'bb11@mail.com',
  },
];
// Используем метод filter() для фильтрации пользователей с почтой gmail.com
const gmailUsers = users.filter((user) => user.email.endsWith('gmail.com'));
console.log(gmailUsers);

//=============================================================
let ssa = [
  { name: 'a', width: '10', len: '12' },
  { name: 'b', width: '12', len: '14' },
  { name: 'c', width: '15', len: '11' },
];
const calculateSquare = (width, len) => width * len;
const Square = ssa.map((item) => ({
  name: item.name,
  square: calculateSquare(parseInt(item.width), parseInt(item.len)),
}));
console.log(Square);

//Задача ======= Найти площать и периметр, отобразаить в одном объекте.

let ssa1 = [{ sideLength: 7 }, { sideLength: 13 }, { sideLength: 17 }];
const result = ssa1.map((item) => {
  const side = item.sideLength;
  const perimeter = 4 * side;
  const area = side * side;
  return {
    sideLength: side,
    perimeter: perimeter,
    area: area,
  };
});
console.log(result);

//======Найти площать и периметр треугольника, отобразаить в одном объекте.

let ssa2 = [{ sideLength: 7 }, { sideLength: 13 }, { sideLength: 17 }];
function calculateTriangleArea(side1, side2, side3) {
  const s = (side1 + side2 + side3) / 2;
  const area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3)); // Используем формулу Герона для нахождения площади треугольника
  return area;
}
const result1 = ssa2.reduce((acc, item) => {
  const side = item.sideLength;
  acc.perimeter = (acc.perimeter || 0) + side;
  acc.sides = (acc.sides || []).concat(side);
  return acc;
}, {});
result1.area = calculateTriangleArea(
  result1.sides[0],
  result1.sides[1],
  result1.sides[2]
); // Добавляем площадь в объект
console.log(result1);

//Задача ========Проверить является ли простая строка палиндромом

let str = '12345';
let str2 = '12321';
let strin = (st) => st === st.split('').reverse().join('');
console.log(strin(str));
console.log(isPalindrom(str2));
console.log(isPalindrom(str));
console.log(isPalindrom(str2));

//Задача ========Проверить является ли сложная строка палиндромом

const phrase1 = 'A man, a plan, a canal, Panama!';
const phrase2 = 'hello world';
function isPalindrom(string) {
  currString = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''); // С помощью метода .replace(/[^a-zA-Z0-9]/g, ''), мы заменяем все найденные символы (которые не являются буквами и цифрами  ^ в начале квадратных скобок означает "не") на пустую строку, тем самым удаляя их из строки. Таким образом, получается "очищенная" версия исходной строки, содержащая только буквы и цифры.
  if (currString === currString.split('').reverse().join('')) {
    return `${string} - Это палиндром`;
  } else {
    return `${string} - Это не палиндром`;
  }
}
console.log(isPalindrom(phrase1));
console.log(isPalindrom(phrase2));

//Задача 2: Палиндромная строка

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

//=================Задача: Проверка на палиндром

function isPalindrome(str) {
  let newStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  if (newStr.split('').reverse().join('') === newStr) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome('A man, a plan, a canal, Panama')); // Ожидаемый результат: true
console.log(isPalindrome('racecar')); // Ожидаемый результат: true
console.log(isPalindrome('hello')); // Ожидаемый результат: false

//Задача ====== Сортировка по длин строк в массиве

const words = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
function compareStringLength(a, b) {
  return a.length - b.length; // Функция для сравнения длин строк
}
const sortedWords = words.slice().sort(compareStringLength); // Сортировка массива слов по длине
console.log('Исходный массив:', words);
console.log('Отсортированный массив:', sortedWords);

//Задача: =======Поиск уникальных элементов в массиве
function findUniqueElements(arr) {
  let newArr = []; // Создаем пустой массив для уникальных элементов
  for (let i = 0; i < arr.length; i++) {
    // Проверяем, есть ли текущий элемент в уникальном массиве
    if (newArr.indexOf(arr[i]) === -1) {
      // Если элемент не найден, добавляем его в уникальный массив
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
const originalArray = [1, 2, 3, 2, 4, 5, 1, 6];
const uniqueArray = findUniqueElements(originalArray);
console.log(uniqueArray); // Ожидаемый результат: [1, 2, 3, 4, 5, 6] (порядок сохранен)

//Задача: =======Фильтрация уникальных элементов

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

//Задача ========Найти сумму всех положительных чисел в этом массиве.

const numbers2 = [3, -2, 8, -4, 7, -1, 6];
function getSumm(numbers2) {
  const arr = numbers2.filter((num) => num > 0);
  return (sumNum = arr.reduce((acc, curr) => acc + curr, 0));
}
console.log(getSumm(numbers2));

//Задача 1: Поиск максимального элемента

const numbers3 = [5, 2, 9, 1, 5, 6];
function getMaxNum(elem) {
  if (elem.length === 0) {
    return null;
  }
  let max = elem[0];
  for (let i = 1; i < elem.length; i++) {
    if (elem[i] > max) {
      max = elem[i];
    }
  }
  return max;
}
console.log(getMaxNum(numbers3));

// ==============Отсортировать в по возр

let a = [11, 5, 8, 21, 18, 2, 1, 33];
function sortArr(arr) {
  return String(arr.sort((a, b) => a - b)); //если нужно в убывании тогда b - a
} //можно без String если не нужноо выводить строкой
console.log(sortArr(a)); //1,2,5,8,11,18,21,33

//Задача 1: ===========Поиск индекса элемента

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

//=================Принимает массив чисел и возвращает наибольшее число из этого массива.

function findLargestNumber(arr) {
  let maxNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (maxNum < arr[i]) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}
const numbers6 = [4, 9, 2, 18, 5];
console.log(findLargestNumber(numbers6)); // Ожидаемый результат: 18
console.log(Math.max(...numbers6));

//=================Принимает строку и возвращает количество гласных букв (a, e, i, o, u) в этой строке, независимо от регистра (то есть, учитывая как заглавные, так и строчные буквы).

function countVowels(str) {
  let vowelList = 'aeiouAEIOU';
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowelList.indexOf(str[i]) != -1) {
      count++; //Метод indexOf() возвращает индекс первого вхождения указанного значения в строковый объект
    }
  }
  return count;
}
const text = 'Hello, World!';
const vowelCount = countVowels(text);
console.log(vowelCount); // Ожидаемый результат: 3 (e, o, o - 3 гласные)

/*Задача 3:============== Сумма положительных чисел
Напишите функцию, которая принимает массив чисел в качестве аргумента и возвращает сумму всех положительных чисел из этого массива.*/

const numbers4 = [3, -2, 8, -4, 7, -1, 6];
function getSumm(numbers) {
  const positiveNum = numbers.filter((num) => num > 0);
  return positiveNum.reduce((acc, curr) => acc + curr, 0);
}
console.log(getSumm(numbers4));

//==============Задача: Вычисление факториала

function factorial(n) {
  if (n === 0 || n === 1) {
    // Обрабатываем случаи, когда n равно 0 или 1
    return 1;
  }
  let result = 1; // Создаем переменную для хранения результата (факториала)
  for (let i = 2; i <= n; i++) {
    result *= i; // Используем цикл для умножения чисел от 2 до n
  }
  return result;
}
console.log(factorial(5)); // Ожидаемый результат: 120 (5! = 5 * 4 * 3 * 2 * 1 = 120)
console.log(factorial(0)); // Ожидаемый результат: 1 (0! = 1)
console.log(factorial(1)); // Ожидаемый результат: 1 (1! = 1)

//===============Задача: Проверка на простое число

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(5)); // Ожидаемый результат: true (5 - простое число)
console.log(isPrime(12)); // Ожидаемый результат: false (12 - не простое число, делится на 2, 3, 4, 6)
console.log(isPrime(2)); // Ожидаемый результат: true (2 - простое число)
console.log(isPrime(1)); // Ожидаемый результат: false (1 не считается простым числом)

//Задача: =========Удаление дубликатов

const Word = ['apple', 'banana', 'cherry', 'apple', 'date', 'banana'];
function isUnick(element, index, arr) {
  return arr.indexOf(element) === index;
}
const sortWords = Word.filter(isUnick);
console.log('Исходный массив:', Word);
console.log('Отсортированный массив:', sortWords);

const Word1 = ['apple', 'banana', 'cherry', 'apple', 'date', 'banana'];
function isUnick(arr) {
  return (uniqueWords1 = [...new Set(arr)]);
}
console.log('Исходный массив:', Word1);
console.log('Отсортированный массив:', isUnick(Word1));

//Задача: ==========Подсчет количества слов в строке

function countWords(word) {
  if (word.trim() === '') {
    return 0; // Если строка пуста или состоит только из пробелов, возвращаем 0.
  }
  let arr = word.split(' ');
  return arr.length;
}
console.log(countWords('Hello, World!')); // Ожидаемый результат: 2 (Hello, World)
console.log(countWords('The quick brown fox')); // Ожидаемый результат: 4 (The, quick, brown, fox)
console.log(countWords('')); // Ожидаемый результат: 0 (пустая строка)
console.log(countWords('One.')); // Ожидаемый результат: 1 (One)

//Задача: ======== Обратная строка

function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString('Hello, World!')); // Ожидаемый результат: "!dlroW ,olleH"
console.log(reverseString('JavaScript')); // Ожидаемый результат: "tpircSavaJ"
console.log(reverseString('12345')); // Ожидаемый результат: "54321"

//Задача: ======== Подсчет гласных букв

function countVowels(str) {
  let Vowels = 'aeiouAEIOU';
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (Vowels.indexOf(str[i]) !== -1) {
      count++;
    }
  }
  return count;
}
console.log(countVowels('Hello, World!')); // Ожидаемый результат: 3 (e, o, o - 3 гласные)
console.log(countVowels('JavaScript')); // Ожидаемый результат: 3 (a, a, i - 3 гласные)
console.log(countVowels('12345')); // Ожидаемый результат: 0 (нет гласных)

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

// Задача: ==============Поиск наибольшего общего делителя (НОД) алгоритм Евклида
function findGCD(a, b) {
  while (b !== 0) {
    const remainder = a % b;
    a = b;
    b = remainder;
  }
  return a;
}
console.log(findGCD(8, 12)); // Ожидаемый вывод: 4
console.log(findGCD(48, 18)); // Ожидаемый вывод: 6
console.log(findGCD(17, 23)); // Ожидаемый вывод: 1

//Задача: Подсчет гласных букв
function countVowels(str) {
  let Vowels = 'aeiouAEIOU';
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (Vowels.indexOf(str[i]) !== -1) {
      count++;
    }
  }
  return count;
}

console.log(countVowels('Hello, World!')); // Ожидаемый вывод: 3 (e, o, o)
console.log(countVowels('This is a test sentence.')); // Ожидаемый вывод: 7 (i, i, a, e, e, e, e)
console.log(countVowels('')); // Ожидаемый вывод: 0 (пустая строка)

//Задача: Поиск наибольшего элемента в массиве
function findMax(arr) {
  let Max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (Max < arr[i]) {
      Max = arr[i];
    }
  }
  return Max;
}

console.log(findMax([3, 9, 1, 25, 6])); // Ожидаемый вывод: 25
console.log(findMax([-10, -2, -8, -1])); // Ожидаемый вывод: -1
console.log(findMax([])); // Ожидаемый вывод: undefined (пустой массив)

//Задача: Проверка наличия элемента в массиве
function containsElement(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return true;
    }
  }
  return false;
}

console.log(containsElement([1, 2, 3, 4, 5], 3)); // Ожидаемый вывод: true
console.log(containsElement(['apple', 'banana', 'cherry'], 'orange')); // Ожидаемый вывод: false
console.log(containsElement([], 42)); // Ожидаемый вывод: false (пустой массив)

//Задача: Объединение массивов
function mergeArrays(arr1, arr2) {
  // Объединяем оба массива с помощью оператора распространения (spread operator)
  const mergedArray = [...arr1, ...arr2];

  // Создаем новый Set, который автоматически убирает дубликаты
  const uniqueArray = [...new Set(mergedArray)];

  return uniqueArray;
}

console.log(mergeArrays([1, 2, 3], [2, 3, 4])); // Ожидаемый вывод: [1, 2, 3, 4]
console.log(mergeArrays(['apple', 'banana'], ['cherry', 'banana'])); // Ожидаемый вывод: ['apple', 'banana', 'cherry']
console.log(mergeArrays([], [42])); // Ожидаемый вывод: [42]

//Задача: Фильтрация уникальных элементов
function getUniqueElements(arr) {
  let newArr = [];
  arr.forEach((element) => {
    if (newArr.indexOf(element) === -1) {
      newArr.push(element);
    }
  });
  return newArr;
}
const originalArray1 = [1, 2, 3, 2, 4, 5, 1, 6];
const uniqueArray1 = getUniqueElements(originalArray1);
console.log(uniqueArray1); // Ожидаемый результат: [1, 2, 3, 4, 5, 6] (порядок сохранен)

function findLargestNumber(matrix) {
  let maxMatrixNum = matrix[0][0];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (maxMatrixNum < matrix[i][j]) {
        maxMatrixNum = matrix[i][j];
      }
    }
  }
  return maxMatrixNum;
}
const matrix = [
  [4, 8, 7],
  [12, 5, 9],
  [6, 11, 2],
];
const largestNumber = findLargestNumber(matrix);
console.log(largestNumber); // Ожидаемый результат: 12

//=========================Задача: Подсчет количества слов в строке
function countWords(text1) {
  let sum = text1.split(/\s+/);
  return sum.length;
}
const text1 = 'Hello, World!';
const wordCount = countWords(text1);
console.log(wordCount); // Ожидаемый результат: 2 (Hello, World - 2 слова)

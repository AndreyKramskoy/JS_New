//Task 1
//Реализуйте функцию isPrimeNumber(), которая принимает число и возвращает true, если оно простое, иначе — false.
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}
console.log(isPrimeNumber(4));
console.log(isPrimeNumber(2));
console.log(isPrimeNumber(3));
//Task 2
/*
Напишите функцию func(), которая принимает num, min, max:

Если число num < min, то функция возвращает min ** 2.
Если число num > max, функция возвращает max ** 2.
Если число num < max - (max - min) / 2, то функция возвращает num ** 2
Иначе возвращает округленное вниз значение num.
*/
function func(num, min, max) {
  if (num < min) {
    return min ** 2;
  } else if (num > max) {
    return max ** 2;
  } else if (num < max - (max - min) / 2) {
    return num ** 2;
  } else {
    return Math.floor(num);
  }
}

console.log(func(3, 1, 10)); // 9
console.log(func(15, 1, 10)); // 100
console.log(func(5, 1, 10)); // 25
console.log(func(8.5, 1, 10)); // 8

//Task3
/*
Создайте функцию isPerfectNumber(), которая принимает целое положительное число в параметры и возвращает true, если число является совершенным, и false в противном случае.
Примечание. Совершенное число — это число, равное сумме всех своих положительных делителей (за исключением самого числа). Например, число 6 является совершенным, потому что делители числа 6 (1, 2, 3) в сумме дают 6.
*/
const isPerfectNumber = (num) => {
  const a = [];
  for (let i = 1; i > num; i++) {
    if (num % i === 0) {
      a.push(i);
    }
  }
  return a.reduce((a, b) => a + b, 0) === num;
};
console.log(isPerfectNumber(6)); // true
console.log(isPerfectNumber(28)); // true
console.log(isPerfectNumber(12)); // false
console.log(isPerfectNumber(16)); // false

//Task4
/*
  Напишите функцию getNumberDigit(), которая принимает число (number) и индекс цифры в числе (digitPosition). Возвращает она цифру числа number, находящуюся на позиции digitPosition. 
Если происходит попытка чтения числа на позиции, которой не существует (например, кол-во цифр в числе меньше, чем передано в digitPosition), то верните undefined.
Примечание. Нельзя использовать приведение числа к строке.
  */
function countDigits(number) {
  if (number === 0) {
    return 1;
  }

  let count = 0;
  let num = Math.abs(number);

  while (num >= 1) {
    num = Math.floor(num / 10);
    count++;
  }

  return count;
}

function getNumberDigit(number, digitPosition) {
  if (digitPosition < 0) {
    return undefined;
  }

  const count = countDigits(number);

  if (digitPosition > count) {
    return undefined;
  }

  const invertedIndex = count - 1 - digitPosition;
  let tempNumber = Math.abs(number);

  for (let i = 0; i < invertedIndex; i++) {
    tempNumber = Math.floor(tempNumber / 10);
  }
  return tempNumber % 10;
}
console.log(getNumberDigit(123, 0)); // 1
console.log(getNumberDigit(123, 1)); // 2
console.log(getNumberDigit(123, 2)); // 3
console.log(getNumberDigit(1, 2)); // undefined
//Module 2

//Task 1
/*
Дан объект машины. 
const car = {
  name: 'Hendai Solaris',
	type: 'sedan',
	maxSpeed: '320',
	color: 'red',
}
Необходимо написать написать функцию, которая принимает объект машины и возвращает строку с HTML, заполненную значениями переданного объекта. 
*/
function getCarHTML(car) {
  return `<article>
  <div>
      <h2>${car.name}</h2>
      <span>${car.type}</span>
  </div>
  <div>
      <span>Maximum speed:</span>
      <span>${car.maxSpeed}</span>
  </div>
  <div>
      <span>Color:</span>
      <span>${car.color}</span>
  </div>
</article>`;
}
const car = {
  name: 'Hendai Solaris',
  type: 'sedan',
  maxSpeed: '320',
  color: 'red',
};
const carHTML = getCarHTML(car);
console.log(carHTML);

//Task2
/*
Необходимо написать функцию countWords(), которая принимает предложение и подсчитывает количество слов в нем.
*/
function countWords() {
  let arr = sentence.split(' ');
  return arr.length;
}

const sentence = 'Hello, how are you?';
console.log(countWords(sentence)); // 4

//Task3
/*
Необходимо написать функцию getInitials(), которая принимает полное имя в виде строки (например, “John Doe”) и возвращает инициалы в формате “J. D.”
*/
function getInitials() {
  const regex = /[A-Z]/g;
  initialArr = fullName.match(regex);
  return `"${initialArr[0]}. ${initialArr[1]}."`;
}
//const getInitials = name => name.split(' ').map((el) => `${el[0].toUpperCase()}.`).join(''); альтернативное решение
const fullName = 'John Doe';
const initials = getInitials(fullName);
console.log(initials); // "J. D."

//Task4
/*
Необходимо написать функцию generateGoogleString(), которая принимает число и возвращает сроку ”Google” с указанным количеством букв “o”. При этом минимальное количество букв “о” равно 2.
console.log(generateGoogleString(4));
// Goooogle
console.log(generateGoogleString(0));
// Google
console.log(generateGoogleString(-2));
*/
function generateGoogleString(quant) {
  const Count = Math.max(quant, 2);
  const GoogleString = 'o'.repeat(Count);
  return `G${GoogleString}gle`;
}

console.log(generateGoogleString(4));
// Goooogle
console.log(generateGoogleString(0));
// Google
console.log(generateGoogleString(-2));

//Task 5
// Реализуйте функцию countVowels(), которая подсчитывает количество гласных букв (латинских и кириллических) в переданной строке.
function countVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (/[aeiouAEIOUаеёиоуыэюяАЕЁИОУЫЭЮЯ]/.test(str[i])) {
      count++;
    }
  }
  return count;
}

const str = 'Hello, Привет!';
console.log(countVowels(str)); // 4
/*
Запись `.test(str[i])` означает, что метод `.test()` регулярного выражения будет применен к определенному символу строки `str` с индексом `i`. 

По сути, вы проверяете, соответствует ли текущий символ (на позиции `i`) заданному регулярному выражению. Если символ соответствует регулярному выражению, метод `.test()` вернет `true`, иначе - `false`.

В вашем случае:

```javascript
/[aeiouAEIOUаеёиоуыэюяАЕЁИОУЫЭЮЯ]/.test(str[i])
```

Регулярное выражение `/[aeiouAEIOUаеёиоуыэюяАЕЁИОУЫЭЮЯ]/` ищет гласные буквы как в латинском, так и в кириллическом алфавите. Метод `.test(str[i])` проверяет, соответствует ли символ строки `str` (на позиции `i`) этому регулярному выражению. Если символ - гласная, `.test()` вернет `true`, в противном случае - `false`.
*/

//Part 3

//Task1
//Напишите функцию sumNumbers(), которая принимает произвольное количество чисел через запятую и возвращает их сумму.
//const sumNumbers = number.map((sum) => sum.reduce((acc, curr) => acc + curr, 0));
function sumNumbers() {
  const sum = Array.from(arguments).reduce((acc, curr) => acc + curr, 0);
  return sum;
}
//можно сократить записав стрелочной функцией
const sumNumbers = (...sum) => sum.reduce((acc, curr) => acc + curr, 0); //В этой версии функции мы используем специальный синтаксис ...numbers (rest parameter), который позволяет нам передавать аргументы как массив numbers. Затем мы используем стрелочную функцию для выполнения операции суммирования с помощью метода reduce.
const result1 = sumNumbers(1, 2, 3, 4, 5);
console.log(result1); // 15

const result2 = sumNumbers(10, 20, 30);
console.log(result2); // 60

//Task2
//Напишите функцию findMaxValue(), которая принимает массив чисел и находит максимальное значение. Если массив пустой, то возвращается значение undefined.
function findMaxValue(numbers) {
  let max = numbers[0];
  if (numbers.length === 0) {
  }
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

const numbers1 = [1, 2, 3, 4, 5];
const max1 = findMaxValue(numbers1);
console.log(max1); // 5

const numbers2 = [10, 20, 5, 30, 15];
const max2 = findMaxValue(numbers2);
console.log(max2); // 30

const emptyArray = [];
const maxEmpty = findMaxValue(emptyArray);
console.log(maxEmpty); // undefined

//Task3
//Напишите функцию calculateAverage(), которая принимает массив чисел и вычисляет их среднее арифметическое. Если массив пустой, то возвращается 0.
const calculateAverage = (numbers) =>
  numbers.length === 0
    ? undefined
    : numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;
const numbers3 = [1, 2, 3, 4, 5];
console.log(calculateAverage(numbers3)); // 3

const numbers4 = [10, 20, 30, 40, 50];
console.log(calculateAverage(numbers4)); // 30

const emptyArray1 = [];
console.log(calculateAverage(emptyArray1)); // 0

//Task4
//Напишите функцию isPalindrome(), которая принимает строку и возвращает true, если она является палиндромом, иначе — false.Примечание. Палиндром — строка, которая читается одинаково слева направо и справа налево.
const isPalindrome = (value) =>
  value === String(value).split('').reverse().join('') ? true : false;
console.log(isPalindrome('level')); // true
console.log(isPalindrome('radar')); // true
console.log(isPalindrome('hello')); // false
console.log(isPalindrome('12321')); // true
console.log(isPalindrome(12345)); // false

//Task5
//Напишите функцию removeDuplicates(), которая принимает массив и возвращает новый массив без дубликатов.
function removeDuplicates(numb) {
  let current = numb[0];
  const result = [current];
  if (numb.length === 0) {
    return numb;
  }
  for (let i = 1; i < numb.length; i++) {
    if (numb[i] !== current) {
      current = numb[i];
      result.push(current);
    }
  }
  return result;
}

const numbers5 = [1, 2, 3, 3, 4, 5, 5];
console.log(removeDuplicates(numbers5)); // [1, 2, 3, 4, 5]

const numbers6 = [10, 20, 30, 30, 40, 40, 50];
console.log(removeDuplicates(numbers6)); // [10, 20, 30, 40, 50]

const emptyArray2 = [];
console.log(removeDuplicates(emptyArray2)); // []

//Task6
//Создайте функцию createCounter(), которая принимает начальное значение и возвращает три функции:
/*
inc() — увеличивает значение на 1;
dec() — уменьшает значение на 1;
get() — возвращает текущее значение.
*/
function createCounter(value) {
  return {
    inc: function () {
      value++;
    },
    dec: function () {
      value--;
    },
    get: function () {
      return value;
    },
  };
}

const { inc, dec, get } = createCounter(5);
console.log(get()); // 5
inc();
inc();
inc();
dec();
console.log(get()); // 7
inc();
inc();
dec();
console.log(get()); //8
dec();
console.log(get()); //7

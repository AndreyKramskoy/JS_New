/*
Чтобы распарсить строку в число можно использ различные методы и способы
Number
parseInt - для целых чисел
parseFloat - для дробных чисел
унарный +
Чтобы округлить число указав в () сколько знаков после запятой
toFixed
*/
const strInt = '42';
const strFloat = '42.42';

console.log(parseInt(strInt));
console.log(parseFloat(strFloat));
console.log(+strFloat, +strInt);

const fixed = (0.01 * 0.3).toFixed(3);
console.log(parseFloat(fixed));

// чтобы работать с очень большими числами используется BigInt добавляя к числу n чтобы оно стало BigInt. он может работать только с типом BigInt и может быть только целым
console.log(BigInt(Number.MAX_SAFE_INTEGER) + 95664788n);

//Math
/*
Math.sqrt() - чтобы взять квадратный корень из числа 
Math.pow(число, степень) - чтобы возвести число в нужную степень
Math.abs() - возвращает абсолютное число, т.е всегда положительное
Math.max(.., .., ....) - позволяет найти макс число из находящихся в (), их может быть сколько угодно
Math.min(.., .., ....) - позволяет найти мин число из находящихся в (), их может быть сколько угодно
Методы для округления:
Math.floor - округление идет в меньшую сторону
Math.ceil - округление идет в большую сторону
Math.round - округление идет до ближ целочис значения
Math.trunc - возвращ целую часть числа
Для создания рандомных чисел можно использовать Math.random
*/
console.log(Math.sqrt(25));
console.log(Math.pow(2, 3));
console.log(Math.abs(-44));
console.log(Math.max(-44, 11, 334, 55, 676556, 56));
console.log(Math.min(-44, 0, 44));
const myNum = 33.777;
console.log(Math.floor(myNum));
console.log(Math.ceil(myNum));
console.log(Math.round(myNum));
console.log(Math.trunc(myNum));
console.log(Math.random());
//функция возвращ рандомное значение
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const num1 = getRandomNumber(10, 100);
console.log(num1);

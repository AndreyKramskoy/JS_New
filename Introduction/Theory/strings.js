/*
Строк представляют собой информацию заключенную в разного вида ковычки
"Can't find the string" - двойные, редко используются но позволяют использовать в себе одинарные
'' - одинарные в основном используются но нельзя использовать в них просто так например Can't требуется экранировать '\
`` - обратные позволяют переностить строку, использовать в ней Can't, любые виды других ковычек "" ''. Так же с пом ${} можно создавать шаблон строки и в фигур скобки помещать переменные, функции
ПРИМЕРЫ:
let name = 'Andrey'
let age = 36
const old = 'Hello, my name is' + name + 'I'\m' +age 'years old'
const output = `Hello my name is ${name} I'm ${age} years old`

function getAge(){
    return age
}
getAge() > 18 ? 'Can drive' : "Can't drive"
*/
//МЕТОДЫ СТРОК
/*
length - можно узнать длину строки
firstName.toUpperCase() - можно переформатировать строку и вернуть новую в верх регистр
firstName.toLowerCase() - вернуть в ниж регистр
charAt() - узнать какой символ находится на заданной позиции(элементы считает как в массиве)
indexOf() - чтобы узнать на какой позиции нужный символ(логика как в массивах, получаем -1 если заданный индекс не существует)
startsWith() - можно проверить соответсвие с чего начинается строка(идет строгое сравнение в том числе по регистру и возвращ true false)
endsWith() - определ чем заканчивается строка
repeat() - чтобы продублировать строку несколько раз можно использовать
trim() - чтобы обрезать пробелы и использовать только символы
*/
let firstName = 'Andrey';
console.log(firstName.length);
console.log(firstName);
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
console.log(firstName.charAt(2));
console.log(firstName.indexOf(2));
console.log(firstName.indexOf('A'));
console.log(firstName.startsWith('A'));
console.log(firstName.endsWith('A'));
console.log(firstName.repeat(2));
const password = '   my password    ';
console.log(password.trim());

/*
Задача 3: Тестирование функции
Напишите тесты с использованием популярных библиотек для тестирования (например, Jest или Mocha), чтобы убедиться, что функция add() работает правильно для разных входных значений.
*/
const add = require('C:/Users/Andrei_Kramski/source/repos/JS_New/NodeJS/test/add'); // Путь к файлу с функцией add

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('adds -1 + 5 to equal 4', () => {
  expect(add(-1, 5)).toBe(4);
});

test('adds 0 + 0 to equal 0', () => {
  expect(add(0, 0)).toBe(0);
});

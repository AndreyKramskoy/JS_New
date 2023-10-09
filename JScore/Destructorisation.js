/*
Деструктурирующее присваивание – это специальный синтаксис, который позволяет нам «распаковать» массивы или объекты в несколько переменных, так как иногда они более удобны.
Деструктуризация позволяет разбивать объект или массив на переменные при присвоении.
======Полный синтаксис для объекта:
let {prop : varName = default, ...rest} = object
Cвойство prop объекта object здесь должно быть присвоено переменной varName. Если в объекте отсутствует такое свойство, переменной varName присваивается значение по умолчанию.
Свойства, которые не были упомянуты, копируются в объект rest.
=======Полный синтаксис для массива:
let [item1 = default, item2, ...rest] = array
Первый элемент отправляется в item1; второй отправляется в item2, все остальные элементы попадают в массив rest.
Можно извлекать данные из вложенных объектов и массивов, для этого левая сторона должна иметь ту же структуру, что и правая.
*/
// представим у нас есть функция принимающая два значения и возвращ массив с результатами 4-х операций
function calcValues(a, b) {
  return [a + b, a - b, a * b, a / b];
}
//console.log(calcValues(50, 10));
//нам нужно например создать переменные отвечающие за каждую операцию
const result = calcValues(50, 10);
//const sum = result[0];
//const sub = result[1];
//но код выше содержит много дублирующего кода и может быть переписан с использованием деструктуризации
const [sum, sub, mult, ...other] = result;
//или вообще так const [sum, sub] = calcValues(50, 10);
//если нам нужно пропустить что-то в массиве и не выводить это можно оставить пустым обозначив ,, операцию для соблюдения очереди
//const [sum,, mult, ...other] = calcValues(50, 10);
//console.log(sum, mult, ...other); можно использовать и rest
// так же можно задавать значения по умолчанию в случае когда операция не может быть выполнена
//const [sum, sub = 'Операция не возможна', mult, ...other] = calcValues(50, 10);
console.log(sum, sub); //60  40

// === Для Объектов деструктуризацию можно исп если нужно работать с какими-то отдельными ключами
const person = {
  name: 'And',
  age: 30,
  address: {
    country: 'Rum',
    city: 'Hor',
  },
};
const {
  name: firstName,
  age,
  car = 'Машины нет',
  address: { city, country }, //для деструктуризации объекта в объекте можно использовать след синтекс
} = person; // можно задавать новое имя ключу как с именем, можно задавать дефолт значение для значения
console.log(firstName, age, car, city, country);

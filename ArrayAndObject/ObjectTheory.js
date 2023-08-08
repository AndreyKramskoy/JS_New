// Object theory
const person = {
  firstName: 'Andrey',
  lastName: 'Kramskoy',
  age: 36,
  married: true,
  getFullName: function () {
    console.log(person.firstName + ' ' + person.lastName);
  },
};
/*
объекты лучше создавать через const создаются они с помощью {} и далее ключ:значение
обращение к ключу объекта идет через точку
console.log(person.age)
обращение к ключу объекта идет через строку
console.log(person['lastName'])
обращение к ключу объекта идет через динамический ключ, это когда у нас есть переменная с присвоенным ей строк значением имени ключа объекта
const key = 'married'
и тогда можно где-то в коде обращаться к этому ключу через person[key]
console.log(person[key]) выводит значение married: true
можем вызвать функцию принадлежащую ключу объекта
person.getFullName()
*/

// контекст. this всегда указывает на тот объект в контексте которого была вызвана функция
//например функция sayHello при вызове в person (person.sayHello) вернет в консоль 'Hello' и this в виведе полей объекта person
function hello() {
  console.log('Hello', this);
}
const person = {
  name: 'Andrey',
  age: 36,
  sayHello: hello,
  //если мы хотим вызвать функ sayHelloWindow не в контексте объекта person а например в контексте глобал объекта window
  sayHelloWindow: hello.bind(window),
};
//person.sayHello т.е this = тому что стоит с лева от . вызываемой функции. ключевое слово this динамично и всегда указывает на тот объект в контексте которого оно было вызвано. !!! НО если нам нужно чтобы функция в нашем объекте взаимодействовала с контекстом не того объекта в котором она вызывается а другого, мы можем вызывать эту функ используя метод  function.bind(thisArg, arg1, arg2, ...).

//!ГДЕ МОЖЕТ ПРИГОДИТЬСЯ .bind: например у нас есть два объекта, но только в одном из них сущ необходимая функция, НО благодаря .bind мы можем указать в контексте какого объекта мы хотим что-то вызвать как в примере ниже
const persons = {
  name: 'Andrey',
  age: 25,
  logInfo: function (job, phone) {
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`Job is ${job}`);
    console.log(`Phone is ${phone}`);
  },
};
const lenka = {
  name: 'Elenka',
  age: 20,
};
//persons.logInfo.bind(lenka)(); мы обращаемся к объекту person вызывая у него функ logInfo но в данную функцию мы передаем контекст this .name и .age уже из объекта lenka с пом .bind. ГЛАВНОЕ запомнить что .bind передается только в случае вызова функции поэтому нам нужно исп () в конце чтобы получить ожидаемый результат
// так же мы можем передавать какие-то параметры в функцию, например нам нужно передать параметр job и phone. для этого мы можем в скобах указать эти параметры
persons.logInfo.bind(lenka, 'engineer', '451004091')(); //Name is Elenka Age is 20 Job is engineer Phone is 451004091 параметры мы можем передавать и в функцию указав их в последних () но метод bind позволяет делать это таким образом function.bind(thisArg, arg1, arg2, ...). !!НО нам всеравно нужно обязательно вызывать функцию с пом (). И вот здесь нам поможет метод call
persons.logInfo.call(lenka, 'engineer', '451004091'); // с этим методом функция вызывается автоматом
//так же есть еще один метод apply и он принимает массив но в остальном работает как call
persons.logInfo.apply(lenka, ['engineer', '451004091']);
/*
1. call:
Синтаксис: function.call(thisArg, arg1, arg2, ...).
Вызывает функцию, указанную как метод объекта (thisArg), передавая ей аргументы в виде списка.
Первый аргумент (thisArg) определяет, на каком объекте будет выполнена функция.
2. apply:
Синтаксис: function.apply(thisArg, [argsArray]).
Работает аналогично методу call, но аргументы передаются в виде массива. Данные метод может иметь только два параметра
3. bind:
Синтаксис: function.bind(thisArg, arg1, arg2, ...).
Создаёт новую функцию, привязывая указанный объект (thisArg) к её контексту выполнения. Эта новая функция будет иметь предопределённые аргументы, которые можно передать в момент вызова.
Не вызывает функцию немедленно, а возвращает новую функцию, которую можно вызвать позже.
Итак, основное отличие между ними:

call и apply вызывают функцию немедленно и передают аргументы.
bind создаёт новую функцию с привязанным контекстом, но не вызывает её немедленно.
*/
/// ==========================ПРИМЕР ЗАДАЧИ (применение прототипов и контекста)==================================///
//Написать функцию которая умножит каждое значение массива на заданн значение
const array = [1, 2, 3, 4, 5];
//1 вариант простой когда мы созд функ multBy которая принимает два параметра(массив и на что умножать) и возвращает с пом метода .map уже преобразованные массив (i * n)
function multBy(arr, n) {
  return arr.map(function (i) {
    return i * n;
  });
}
console.log(multBy(array, 2)); //[ 2, 4, 6, 8, 10 ]
//2 вариант с использ прототипов. Мы обращаясь к глобал объекту Array через .prototype создаем функцию .multBy которая будет выполнять ту же операцию что в примере выше.
const array1 = [1, 2, 3, 4, 5];
Array.prototype.multBy = function (n) {
  return this.map(function (i) {
    //используя this мы указываем что обращаемся к нашему массиву в данном примере array1 но теперь он может менять благодаря такой конструкции и this будет помогать работать этому коду как след
    return i * n;
  });
};
console.log(array1.multBy(2)); //[ 2, 4, 6, 8, 10 ] теперь multBy универсален и может использоваться с другими масивами
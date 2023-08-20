//простыми словами ЗАМЫКАНИЕ это функция внутри другой функции
//благодаря замыканию мы можем в рамках одной функции замкнуть какую-то функцию(переменную) и далее создавая новые переменные из этой функции использовать результат ее работы в этих вновь созданных переменных=функциях как в примерах ниже
function createCalcFunction(n) {
  //мы создали функцию createCalcFunction которая принимает параметр n
  return function () {
    // в createCalcFunction у нас есть функция которая выполняет определ код
    console.log(1000 * n);
  };
}
const calc = createCalcFunction(42); //теперь мы создаем новую переменную=функцию из функции createCalcFunction при этом передав значение в параметр n тем самым замкнув его в данной функции
calc(); //42000

//как мы можем использовать замыкание. Мы можем замкнув в одной фукции какое-то значение использовать его при вызове созданной на основе первой функции со своими параметрами
function createIncrementor(n) {
  return function (num) {
    return n + num;
  };
}
const addOne = createIncrementor(1);
console.log(addOne(10)); //11
console.log(addOne(20)); //21
const addTen = createIncrementor(10);
console.log(addTen(10)); //20
console.log(addTen(20)); //30
//те мы можем переиспользовать первую функцию при созд новых с необходим нам параметрами, которые не нужно будет вводить каждый раз
//например нам нужно сгенерить несколько адресов с одним и тем же расширением, а в перспективе мы можем генерить адреса и с другим расш, здесь и поможет замыкание
function urlgenerator(domain) {
  return function (url) {
    return `https://${url}.${domain}`;
  };
}
const comURL = urlgenerator('com');
console.log(comURL('google')); //https://google.com

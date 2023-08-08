//Theory
/*
лучше для массивов всегда использовать const
создание массива Array
const arr = [1,2,3,4,55,66,77,88,99]
или
const arr = new Array (1,2,3,4,55,66,77,88,99)

массив может содержать любую инф
const arrString = [a,b,c,null,55]

можно посмотреть длин массива
console.log(arr.length)
можно получить элемент массива по индексу. если нет такого индекса вернет undefined
console.log(arr[2]) // 3
чтобы получить последний элемент массива
console.log(arr[arr.length - 1]) это из-за того что length вернёт длинну массива а элементы считаются с 0 начиная, след нужно -1
можно изменять элемент массива по индексу если известен
arr[0] = 'new'
console.log(arr) // [new,2,2 и тд]
*/
//создадим основные переменные для работы приложения по выводу списка значений
const interElement = document.getElementById('title');
const BtnElement = document.getElementById('create');
const resultElement = document.getElementById('list');

//2 создатим массив который поможет выводить существующий список элементов
// const notes = ['theory', 'Array', 'JavaScript'];
//5 теперь нам нужно сделать чтобы у каждого значения в списке было два статуса выполнен или не выполне. мы можем преобразовать наш массив выше в:
const notes = [
  { title: 'theory', completed: false },
  { title: 'Array', completed: true },
];
//2.1 создаем новую функцию которая будет это делать
function render() {
  //4 теперь чтобы автоматизировать работу с массивом нужно добавить в код ниже цикл for
  /*
  for (let i = 0; i < notes.length; i++) {
    resultElement.insertAdjacentHTML('beforeend', getNoteTemplates(notes[i]));
  }
  */
  //4.1 !!! можно упростить цикл и использовать более современный for of !!!
  for (let note of notes) {
    resultElement.insertAdjacentHTML('beforeend', getNoteTemplates(note));
  }

  //4.2 комментим весь код ниже т.к. он перебрался в цикл выше
  /*  resultElement.insertAdjacentHTML(
    // для вывода каждого элемента массива и значений при вводе мы используем один и тот же код, поэтому закомментированный ниже код с HTML выносим в отдельную функцию 3 и переиспользуем далее по коду. Это поможет содержать код в порядке и легко обслуживать
    'beforeend',
    getNoteTemplates(notes[2])
    //мы можем закомментить HTML и вмсето него использовать функцию 3 getNoteTemplates
    `<li
      class="list-group-item d-flex justify-content-between align-items-center"
    >
      <span>${notes[2]}</span>
      <span>
        <span class="btn btn-small btn-success">&check;</span>
        <span class="btn btn-small btn-danger">&times;</span>
      </span>
      </li>`
      
  );
  */
}

render(notes); // выводим нашу функцию с массивом
//1 создаем функцию которая будет принимать и возвращать в списке полученные значения
BtnElement.onclick = function () {
  if (interElement.value.length === 0) {
    //с помощью interElement.value.length === 0 мы избегаем добавления в список пустых значений, когда длин получаемой string = 0
    return; // указав просто return мы говорим что при соблюдении условия ничего не возвращаем
  } //5.2 чтобы при вводе мы могли передавать в том числе и наш объект мы добавляем в код объект по примеру const notes = [{ title: 'theory', completed: false }]
  const newNote = {
    title: interElement.value,
    completed: false,
  };

  resultElement.insertAdjacentHTML(
    // с помощью .insertAdjacentHTML мы можем работать с HTML ниже по коду. 'beforeend' указывает сценарий работы кода
    'beforeend',
    //мы можем закомментить HTML и вмсето него использовать функцию 3 getNoteTemplates(title)
    //5.3
    getNoteTemplates(newNote) // теперь после 5.2 вместо getNoteTemplates(interElement.value) у нас будет getNoteTemplates(newNote)
    /*   `<li
  class="list-group-item d-flex justify-content-between align-items-center"
>
  <span>${interElement.value}</span>
  <span>
    <span class="btn btn-small btn-success">&check;</span>
    <span class="btn btn-small btn-danger">&times;</span>
  </span>
  </li>`
  */
  );
  interElement.value = '';
};
//3 создаем функцию которая облегчит работу с котом и позволит переиспольз HTML шаблон
function getNoteTemplates(note) {
  //5.1 т.к. мы начали работать с объекктами нам нужно показать что выводить мы теперь будем значения этих объектов поэтому аргумент title меняем на note из 4.1. тк это объект мы через точку можем обратиться к его свойству title в 5
  // задаем функции наш аргумент title который будет передаваться в HTML при работе с этой функцией далее в коде
  return `<li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span class="${
            note.completed ? 'text-decoration-line-through' : ''
          }">${note.title}</span>
          <span>
            <span class="btn btn-small btn-success">&check;</span>
            <span class="btn btn-small btn-danger">&times;</span>
          </span>
          </li>`;
} // 6 добавим зачеркивание для статуса true значения на 105 строке используя тернарный оператор

// Object theory
/*
const person = {
    firstName:'Andrey',
    lastName:'Kramskoy'
    age: 36
    married: true
    getFullName: function(){
        console.log(person.firstName + ' ' + person.lastName)
    }
}
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

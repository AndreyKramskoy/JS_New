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
  { title: 'Array', completed: false },
];
//2.1 создаем новую функцию которая будет это делать
function render() {
  //4 теперь чтобы автоматизировать работу с массивом нужно добавить в код ниже цикл for

  // 10.1.2 чтобы выводить корректно все элементы и данные в шаблоне обновлялись нужно очищать список, для этого добавим перед циклом for
  resultElement.innerHTML = '';
  //Конец. добавим текст Нет элементов если нах массив пуст
  if (notes.length === 0) {
    resultElement.innerHTML = '<p>Нет элементов</p>';
  }

  for (let i = 0; i < notes.length; i++) {
    //8 чтобы получить индекс нажимаемого на странице объекта используем цикл for изменив его под эту задачу и добавив i(index) в getNoteTemplates(notes[i], ...)

    resultElement.insertAdjacentHTML(
      'beforeend',
      getNoteTemplates(notes[i], i)
    );
  }

  //4.1 !!! можно упростить цикл и использовать более современный for of !!!
  /*
  for (let note of notes) {
    resultElement.insertAdjacentHTML('beforeend', getNoteTemplates(note));
  }
*/
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

  //10 при добавления индекса к кнопкам возникает проблема с навыми значениями, тк они еще не определены система возвращает их индекс как undefined тк массив const notes = [{ title: 'theory', completed: false },{ title: 'Array', completed: true },]; не связан с переменной newNote. Для этого необходимо убрать код resultElement.insertAdjacentHTML:

  /*
  resultElement.insertAdjacentHTML(
    // с помощью .insertAdjacentHTML мы можем работать с HTML ниже по коду. 'beforeend' указывает сценарий работы кода
    'beforeend',
    //мы можем закомментить HTML и вмсето него использовать функцию 3 getNoteTemplates(title)
    //5.3
    getNoteTemplates(newNote) // теперь после 5.2 вместо getNoteTemplates(interElement.value) у нас будет getNoteTemplates(newNote)
       `<li
  class="list-group-item d-flex justify-content-between align-items-center"
>
  <span>${interElement.value}</span>
  <span>
    <span class="btn btn-small btn-success">&check;</span>
    <span class="btn btn-small btn-danger">&times;</span>
  </span>
  </li>`
  
  );
  */
  //10.1 и добавим сюда наш массив используя метод push который добав элементы в конец массива
  notes.push(newNote);
  render(); //10.1.1 чтобы новые элемнты массива отображались нужно добавить вызов метода render
  interElement.value = '';

  // 11 добавим обработчик события клика на resultElement
  resultElement.onclick = function (event) {
    // данная функция всегда принимает параметр события event это object который всегда возвращ кликнутый объект на странице
    // 12
    if (event.target.dataset.index) {
      // создадим пременную распарсим ее в цифры и с ее помощью пройтя в объект мы получим значение index если оно там есть, так же и для type только без распарсить в цифры
      const index = parseInt(event.target.dataset.index);
      const type = event.target.dataset.type;
      //13 теперь реализуем логику нажатия кнопок и в зависимости от type будем совершать действие. тк это булевое значение мы можем обратиться к массиву notes и в зависимости от типа изменить его значение на противоположное используя !
      if (type === 'toggle') {
        notes[index].completed = !notes[index].completed;
      } else if (type === 'remove') {
        notes.splice(index, 1); //  для удаления используем метод splice указав что именно удаляем и сколько через (index, 1)
      }
      render(); // чтобы новые элемнты массива отображались нужно добавить вызов метода render
    }
  };
};
//3 создаем функцию которая облегчит работу с котом и позволит переиспольз HTML шаблон
function getNoteTemplates(note, index) {
  //5.1 т.к. мы начали работать с объекктами нам нужно показать что выводить мы теперь будем значения этих объектов поэтому аргумент title меняем на note из 4.1. тк это объект мы через точку можем обратиться к его свойству title в 5
  // задаем функции наш аргумент title который будет передаваться в HTML при работе с этой функцией далее в коде
  return `<li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span class="${
            note.completed ? 'text-decoration-line-through' : ''
          }">${note.title}</span>
          <span>
            <span class="btn btn-small btn-${
              note.completed ? 'warning' : 'success'
            } "data-index="${index}" data-type="toggle">&check;</span>
            <span class="btn btn-small btn-danger" data-type="remove" data-index="${index}">&times;</span>
          </span>
          </li>`;
} // 6 добавим зачеркивание для статуса true значения span class="${note.completed ?  строке используя тернарный оператор
// 7 добавим изменеия цвета при смене статуса заметки <span class="btn btn-small btn-${note.completed ? 'warning' : 'success'}
//9 теперь нужно добавить index к нашим кнопкам, чтобы дальше определять какая была нажата
// добавим ещё дата тип  data-type="remove" в "data-index="${index}" data-type="toggle">&check;</span>           <span class="btn btn-small btn-danger" data-type="remove" data-index="${index}">&times;</span>
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

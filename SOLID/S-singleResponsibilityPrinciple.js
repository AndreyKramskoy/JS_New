/*
S – Single Responsibility (Принцип единственной ответственности)
Каждый класс должен отвечать только за одну операцию.
Если класс отвечает за несколько операций сразу, вероятность возникновения багов возрастает – внося изменения, касающиеся одной из операций вы, сами того не подозревая, можете затронуть и другие.
*/
class News {
  //у нас есть класс новости
  constructor(title, text) {
    this.title = title;
    this.text = text;
    this.modified = false;
  }
  update(text) {
    //у котороко есть метод апдэйт который меняет текст и маркер апдэйта новости
    this.text = text;
    this.modified = true;
  }
  toHTML() {
    //создаем метод который будет выводить хтмл с нашим тайтлом и текстом
    //!!!!! ЭТО И ЕСТЬ НАРУШЕНИЕ ПРИНЦИПА Single Responsibility !!!!!!
    return `
    <div class='news'>
    <h1>${this.title}</h1>
    <p>${this.text}</p>
    </div>
    `;
  } //+++++ У нас должен быть для этого отдельный класс который будет отвечать только за вывод информации
}
const news = new News('Animals', 'I like dogs'); //мы создаем новый объект в который передаем title, text

//например чтобы соблюсти Single Responsibility мы можем создать класс
class NewsPrinter {
  constructor(news) {
    this.news = news;
  }
  toHTML1() {
    //теперь все верно и мы соблюдаем принцип один класс одна операция
    return `
    <div class='news'>
    <h1>${this.title}</h1>
    <p>${this.text}</p>
    </div>
    `;
  }
  toJSON() {
    return JSON.stringify(
      {
        title: this.news.title,
        text: this.news.text,
        modified: this.news.modified,
      },
      null,
      2
    );
  }
}
const printer = new NewsPrinter(news);
console.log(printer.toHTML1());
console.log(printer.toJSON());
//в итоге у нас есть два класса выполняющих каждый свою операцию и это позволяет нам безболезненно вносить изменения в любой класс

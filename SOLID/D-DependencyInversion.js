/*
D — Dependency Inversion (Принцип инверсии зависимостей)
Модули верхнего уровня не должны зависеть от модулей нижнего уровня. И те, и другие должны зависеть от абстракций. Абстракции не должны зависеть от деталей. Детали должны зависеть от абстракций.
Этот принцип служит для того, чтобы устранить зависимость классов верхнего уровня от классов нижнего уровня за счёт введения интерфейсов.
*/
class Fetch {
  request(url) {
    return Promise.resolve('data from fetch');
  }
}
class LocalStorage {
  get() {
    const dataFromLocalStorage = 'data from local storage';
    return dataFromLocalStorage;
  }
}
//чтобы реализовать данный принцип у нас должен быть создан некий класс который будет интерфейсом для взаимодействия между всеми сущностями
class FetchClient {
  //данные клас будет позволять обарачивать функционал Fetch
  constructor() {
    this.fetch = new Fetch();
  } //и у данного класса будет метод который будет своим для каждого клиента данного класса
  clientGet() {
    return this.fetch.request('goog.com');
  }
}
class LocalStorageClient {
  //теперь создаем класс для другого сторэджа
  constructor() {
    this.localStorage = new LocalStorage();
  } //и у данного класса будет метод который будет своим для каждого клиента данного класса
  clientGet() {
    return this.localStorage.get('goog.com');
  }
}
// в данном примере у нас у классов один и тот же метод но с разной реализацией для каждого класса в итоге зависимости мы переносим в другой уровень абстракции
class Database {
  constructor(client) {
    this.client = client;
  }

  getData() {
    return this.client.clientGet();
  }
}
const db = new Database(new FetchClient()); //в итоге мы не меняя реализацию класса Database можем передав в него другой класс получить соответ поведение. Database сейчас не зависит от абстракций низшего уровня, он завист только от тех абстракций которые были переданы в данный класс
console.log(db.getData('fgtt'));

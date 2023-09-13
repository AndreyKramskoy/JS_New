//Используйте для того, чтоб упростить создание объектов, проще генерировать экземпляры объектов, не требует использования конструктора.
//на примере с разными условиями подписки можно рассмотреть как работает фабрика
class SimpleMembership {
  constructor(name) {
    this.name = name;
    this.cost = 50;
  }
}
class StandartMembership {
  constructor(name) {
    this.name = name;
    this.cost = 150;
  }
}
class PremiumMembership {
  constructor(name) {
    this.name = name;
    this.cost = 500;
  }
}
//у нас есть три класса с подписками и как мы видим у этих классов есть отлич только в стоимости. те мы можем сказать что мы можем создать некотрую сущность объединяющую все эти классы и в завис от типа создавать нужный объект
//создадм тепрь класс MemberFactory в котором будет находиться список с ссылками на наши классы
class MemberFactory {
  static list = {
    simple: SimpleMembership,
    standart: StandartMembership,
    premium: PremiumMembership,
  }; //данная реализация позволит нам проще взаимодействавать с Factory
  //теперь в данном классе мы можем создать метод который будет создавать подписчиков с соответ подпиской
  create(name, type = 'simple') {
    //метод принимает имя и тип(по умолчанию будет simple)
    const Membership = MemberFactory.list[type] || MemberFactory.list.simple; //далее нам нужно получить необходимый нам инстанс
    //далее создаем переменную куда будем передавать имя
    const member = new Membership(name);
    member.type = type; //можно также здесь модифицировать эту переменную например для определения типа можно добавить
    member.define = function () {
      //а также функцию для определения например параметров подписки
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    };
    return member;
  }
}
const factory = new MemberFactory(); //создаем переменную
const members = [
  //теперь мы можем создав переменную с массивом участников задавать необх параметры
  factory.create('Andrey', 'simple'),
  factory.create('Alena', 'premium'),
  factory.create('Alex', 'standard'),
  factory.create('Oleg'),
];
//и теперь можно вывести инфу по каждому польз
members.forEach((m) => {
  //с пом forEach мы можем пробежать по всем участникам в нашем массиве
  m.define(); //и для каждого участника вызвать функцию define
});

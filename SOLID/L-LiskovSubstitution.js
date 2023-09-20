/*
L — Liskov Substitution (Принцип подстановки Барбары Лисков)
Если П является подтипом Т, то любые объекты типа Т, присутствующие в программе, могут заменяться объектами типа П без негативных последствий для функциональности программы.
Необходимо, чтобы класс-потомок был способен обрабатывать те же запросы, что и родитель, и выдавать тот же результат. Или же результат может отличаться, но при этом относиться к тому же типу
*/
//мы должны разделять слои абстракции те в нашем основном родительском классе должна лежать базовая функциональность
class Component {
  isComponent = true;
}
//далее у нас есть уже наследующие классы с какой-то определ функциональностью наследуя которые мы можем выполнять необход действия в дальнейшем
class ComponentWithTemplate extends Component {
  render() {
    return `<div>Component<div>`;
  }
}
class HigherOrderComponent extends Component {}
// а так же классы которые наследуют уже наши доп классы с их функционалом при этом функционал первого родительского класса будет доступен им всем но не будет ограничивать работу данных классов
class HeaderComponent extends ComponentWithTemplate {
  onInit() {}
}
class FooterComponent extends ComponentWithTemplate {
  afterInit() {}
}
class HOC extends HigherOrderComponent {
  render() {
    throw new Error('Render is imposible');
  }
  wrapComponent(component) {
    component.wrapped = true;
    return component;
  }
}
function renderComponent(component) {
  console.log(component.render());
}
renderComponent(new HeaderComponent());
renderComponent(new FooterComponent());

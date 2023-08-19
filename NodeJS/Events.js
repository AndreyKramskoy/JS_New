// events позволяет диспатчить различные события на примере рассм:
const EventEmitter = require('events');
// создаем переменну через ключ слово new от класса EventEmitter
const emitter = new EventEmitter();
//с пом метода .on() можно прослушивать события
emitter.on('MyEvent', (data) => {
  //в скобках передаем событие, его моно назвать как угодно и вторым параметром идет функция коллбэк
  console.log('My event:', data); //в итоге имеем My event: { andrey: 36 }
});
// с пом метода .emit() мы можем эмитировать событие чтобы его потом прослушать
emitter.emit('MyEvent', { andrey: 36 }); //здесь так же первым параметром идет название события MyEvent, вторым парам можно передавать необх данные/кофигурации они же будут обработаны колбэк функ из прослушивателя
// чтобы с эмулировать асинхронн операцию можно исп таймаут
setTimeout(() => {
  emitter.emit('MyEvent', { andrey: 37 });
}, 1500); // через 1.5 сек получим My event: { andrey: 37 }

//!!! можно наследоваться от const EventEmitter = require('events'); чтобы на его основе писать что-то свое
//заведем свой класс и будем наследовать его от EventEmitter с пом extends
const EventEmitter = require('events');
class Dispatcher extends EventEmitter {
  //в нашем классе можно созд собственные методы
  subscribe(eventName, callBack) {
    // в скобках указ что мы будем принимать строку с именем события и какой-то колбэк
    console.log('[Subscribe...]');
    this.on(eventName, callBack); //чтобы подписаться на событие мы можем использовать this и обращ к доступному от наследуемого классаEventEmitter .on()куда мы передаем имя события и коллбэк который будет выполнен
  } //по аналогии можем реализовать метод
  dispatch(eventName, data) {
    console.log('[Dispatched...]');
    this.emit(eventName, data); //чтобы эмитировать событие мы можем использовать this и обращ к доступному от наследуемого классаEventEmitter .emit() укзав имя события и какие-то данные что будем принимать
  }
}
// теперь можно создавать некоторые экземпляты от нашего созд класса
const dis = new Dispatcher();
// и по аналогии диспатчить события
dis.subscribe('myEvenName', (data) => {
  console.log('event data:', data);
}); //после того как мы поставили прослушку событий можно диспатчить
dis.dispatch('myEvenName', 35); //в итоге имеем [Subscribe...][Dispatched...] event data: 35

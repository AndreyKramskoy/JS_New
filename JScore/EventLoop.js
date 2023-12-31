//Асинхронность
//существует специальная функция(метод) setTimeout() которая позволяет нам выполнять асинхронные операции в js, первым параметром данный метод принимает в себя функцию(чаще всего анонимную function() {}) и вторым параметром он принимает кол милсек через которое мы ожидаем выполнение переданной функции
setTimeout(function () {}, 2000);

// мы можем передавать и ссылку на функцию в параметры setTimeout
function timeout2sec() {
  console.log('timeout2sec');
}
setTimeout(timeout2sec, 2000);

//======== в этом поведении кроется идея Event Loop =======//
/*
Event Loop - это специальный механизм на уровне движка js, который координирует работу трёх сущностей: Call Stack (стэк вызовов), Web API (API, предоставляемый браузером), Callback Queue (очередь колбэков).

Работают они следующим образом: движок js анализирует код. Когда он встречает вызов какой-то функции, он перемещает эту функцию в Call Stack. Если эта функция синхронная (например, console.log()), то она сразу же исполняется, покидает стэк и на её место приходит следующая функция. Если же эта функция асинхронная, например, setTimeout(), обработчик событий, сетевой запрос и т.д., то на помощь приходит браузер со своим Web API (мы же помним, что JavaScript - это однопоточный язык, и сам работать в многопоточном режиме он не может). Event Loop перемещает колбэк асинхронной функции в Web API, а сама асинхронная функция уходит из стэка вызовов. То есть, пока колбэк асинхронной функции находится под управлением Web API, движок js продолжает выполнять другие операции!

Что же происходит с колбэком? В случае, например, setTimeout(), Web API ожидает истечения указанного времени, затем Event Loop перемещает этот колбэк в Callback Queue (очередь колбэков). Когда стэк вызовов освобождается, Event Loop перемещает в него наш колбэк из очереди колбэков, после чего колбэк наконец исполняется и покидает стэк вызовов.

Этот процесс повторяется до тех пор, пока весь js код не будет выполнен.
*/

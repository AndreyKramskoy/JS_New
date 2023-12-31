//HTTP модуль позволяет создавать собственные вэб сервера
//1) .createServer - метод позволяет создать сервер,данный метод принимает в себя колбэк в который нужно передать запрос и ответ а так же некоторую операцию кторая будет выполняться
//2) .end - используется для завершения процесса ответа сервера

const http = require('http');
const server = http.createServer((req, res) => {
  //мы при обращении к объекту ответа можем указывать некий статус ответа и хэдэр
  // .weriteHead -  принимает статус код и хэдэр В виде ОБЪЕКТА который будет указывать на тип содержимого
  res.weriteHead(200, {
    'Content-Type': 'text/html',
  });
  res.end('Hello!!!'); //наприм после завершения сервера будем выводить
});
//4) .listen - позволяет прослушивать сервер
server.listen(3000, () => {
  // первым парам передаем порт а вторым какую-то инфу которую будем получ после запуска сервера
  console.log('Server has been started...');
});
//Если мы в браузере пеерейдем на localhost 3000 увидем там Hello!!! а в консоли будет инфа о запуске сервера Server has been started...
//!!! процесс работы сервера можно остан руками исп ctrl+C или с пом расширения nodemon котор устан через npm и в packagejson файле в скриптах можно указать скрипт для автомат рестарта сервера при внесении изменений в код наприм в данные res.end(. для этого создаем скрипт "restart":"nodemon HTTP.js" и далее можно запускать код уже через npm run имяскрипта

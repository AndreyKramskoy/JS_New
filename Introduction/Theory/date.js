/*
console.log(new Date()) - можно получать текущую дату и время
const secDate = new Date(1000 * 60 * 60 *24 * 365) - премножая мили сек на сек мин часы и дни получаем год
const date = new Date(2023, 8, 12, 14, 41, 00) - можно через , указать необходимую дату и время
getFullYear и прочие get позволяют получить значение
setFullYear и прочие set позволяют задать значение
toDateString - позволяет вывести дату преобразовав в String
toTimeString - время 
и тд
toLocalDateString - позволяет вывести дату в ФОРМАТЕ ЛОКАЛЬНОМ преобразовав в String
*/
const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth()); // отсчет идет от 0
console.log(now.getDate());
// и тд по мин сек и проч
now.setFullYear(2500);
console.log(now);

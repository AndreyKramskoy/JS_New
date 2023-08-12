const BtnFullDate = document.getElementById('full');
const BtnDate = document.getElementById('date');
const BtnTime = document.getElementById('time');
const currDate = document.getElementById('output');
let mode = 'time';

update();
setInterval(function () {
  update();
}, 1000);
function update() {
  currDate.textContent = format(mode);
}

function format(formatMode) {
  const now = new Date();
  switch (formatMode) {
    case 'time':
      return now.toLocaleTimeString();
    case 'date':
      return now.toLocaleDateString();
    case 'full':
      return now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
    default:
      return now.toLocaleTimeString();
  }
}
// можно замыканием код ниже сделать более локаничным
/*BtnFullDate.onclick = function () {
  mode = 'full';
  update();
};
BtnDate.onclick = function () {
  mode = 'date';
  update();
};
BtnTime.onclick = function () {
  mode = 'time';
  update();
};
*/
function bindMode(name) {
  return function () {
    mode = name;
    update();
  };
}
BtnFullDate.onclick = bindMode('full');
BtnDate.onclick = bindMode('date');
BtnTime.onclick = bindMode('time');

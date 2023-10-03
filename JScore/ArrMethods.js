const people = [
  { name: 'Andrey', age: 25, budget: 400000 },
  { name: 'Andy', age: 55, budget: 430000 },
  { name: 'Alena', age: 15, budget: 5000 },
  { name: 'Sush', age: 20, budget: 80000 },
  { name: 'Dan', age: 29, budget: 70000 },
  { name: 'Paul', age: 35, budget: 450 },
];
//итерация по массиву:
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

for (let person of people) {
  console.log(person);
}

//forEach
people.forEach((person) => console.log(person));

//map
const newPieople = people.map((person) => `${person.name} ${person.age}`);
console.log(newPieople);

//filter
//старые мето фильтрации
const adults = [];
for (let i = 0; i < people.length; i++) {
  if (people[i].age >= 18) {
    adults.push(people[i]);
  }
}
console.log(adults);
//используем наш метод для сокращения записи
const adults1 = people.filter((person) => {
  if (person.age >= 18) {
    return true;
  }
});
//можно еще больше сократить тк стрелочная запись позволяет это сделать с функцией и получим
const adults2 = people.filter((person) => person.age >= 18);
console.log(adults2);

//reduce
//длинная и старая запись данной операции выглядит так
let amount = 0;
for (let i = 0; i < people.length; i++) {
  amount += people[i].budget;
}
//с данным методом это можно сделать более лаконичным
const amount1 = people.reduce((acc, curr) => acc + curr.budget, 0);
console.log(amount1);

//find
const andrey = people.find((person) => person.name === 'Andrey');
console.log(andrey);

//findIndex
const andreyIndex = people.findIndex((person) => person.name === 'Andrey');
console.log(andreyIndex);

//==============++++++++++++++===================
const people1 = [
  { name: 'Andrey', age: 25, budget: 400000 },
  { name: 'Andy', age: 55, budget: 430000 },
  { name: 'Alena', age: 15, budget: 5000 },
  { name: 'Sush', age: 20, budget: 80000 },
  { name: 'Dan', age: 29, budget: 70000 },
  { name: 'Paul', age: 35, budget: 450 },
];
const newPeople = people1
  .filter((person) => person.budget > 10000)
  .map((person) => {
    return {
      info: `${person.name} ${person.age}`,
      budget: person.budget,
    };
  })
  .reduce((total, person) => total + person.budget, 0);
console.log(newPeople);

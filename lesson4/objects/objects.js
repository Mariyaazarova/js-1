const person = {
  name: "My object",
  age: 27,
  city: "Voronezh",
  work: "Frontend developer",
  salary: 150000,
  married: false,
};

console.log("Before:", person);

// удалить из объекта person все поля, которые не являются строковыми
// delete person.age;
// delete person.salary;
// delete person.married;

/* // написать функцию, которая принимает на вход объект, удаляет из него все поля, которые не являются строковыми, и возвращает этот объект
function removeNotStringFields(obj) {
  for (let prop in obj) {
    //console.log(`${prop}: ${obj[prop]}`);

    if (typeof obj[prop] !== "string") {
      delete obj[prop];
    }
  }
  return obj;
}
console.log("After:", removeNotStringFields(person));
 */
// console.log("After:", person);

// сделать то же самое, но вместо for...in использовать Object.entries и обход массива

function removeNotStringFields(obj) {
  for (const [key] of Object.entries(obj)) {
    //console.log(`${key}: ${value}`);

    if (typeof obj[key] !== "string") {
      delete obj[key];
    }
  }
  return obj;
}
console.log("After:", removeNotStringFields(person));

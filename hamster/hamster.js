/* function Hamster(name, age, weight) {
  this.name = name;
  this.age = age;
  this.weight = weight;

  this.run = function () {
    console.log("I run");
  };

  this.eat = function () {
    console.log("I eat");
  };

  this.speak = function () {
    console.log("Pipipipipipi");
  };
}

const jimmy = new Hamster("Jimmy", 1, 0.5);
jimmy.run();
jimmy.eat();
jimmy.speak();
 */

function Employee(name, gander, age, job, salary) {
  this.name = name;
  this.gander = gander;
  this.age = age;
  this.job = job;
  this.salary = salary;

  this.run = function () {
    console.log("I run");
  };
  this.walk = function () {
    console.log("I walk");
  };
  this.speak = function () {
    console.log("I speak");
  };
  this.work = function () {
    console.log("I work");
  };
  this.sleep = function () {
    console.log("I sleep");
  };
}

const jimmy = new Employee("Jimmy", "M", 29, "doctor", 50000);
jimmy.run();
jimmy.walk();
jimmy.speak();
jimmy.work();
jimmy.sleep();

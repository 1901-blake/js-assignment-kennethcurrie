/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/
class Dog {
    constructor(name,age,breed, jobs){
        this.name = name;
        this.age = age;
        this.breed = breed;
        this.jobs = jobs;
    }
    getAge() {
        return age;
    }
    addJob(job){
        this.jobs.push(job);
    }
};
function Doge(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  
    this.status = () => {
      console.log(`Doge ${name}, age ${age}, rules over the city of ${city}`);
    }
  }
  let cat = {
    name: "punkin",
    age: 7,
    maulings: 127
  };


//TestCode
let aDog = new Dog("Brutus",12,"German Shepard", ["Puppy", "MWD", "Guard Dog"]);
console.log(aDog);
aDog.addJob("Pixie's Guardian");
console.log(aDog);
let aDoge = new Doge("Vincent", 53, "Mezzapolis");
aDoge.status();
console.log(cat);
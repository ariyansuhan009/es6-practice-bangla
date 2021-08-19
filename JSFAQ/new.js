class Person{
    constructor(fName, lName, salary){
        this.fName = fName;
        this.lName = lName;
        this.salary = salary;
    }
}

const heroPerson = new Person('Hero', 'Balam', 25000);
console.log(heroPerson);

const friendlyPerson = new Person('Ismail', 'Ahmed', 30000);
console.log(friendlyPerson);

/*
function Person1(fName, lName, salary){
    this.fName = fName;
    this.lName = lName;
    this.salary = salary;
}

const oldPerson = new Person1('Ariyan', 'Sohan', 35000);
console.log(oldPerson);
*/
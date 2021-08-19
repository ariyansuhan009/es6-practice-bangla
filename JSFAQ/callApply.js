const normalPerson = {
    fName: "Ariyan",
    lName: "Sohan",
    salary: 15000,
    getFullName: function(){
        console.log(this.fName, this.lName);
    },
    chargeBill: function(amount, tax, tips){
        console.log(this);
        this.salary = this.salary - amount - tips -tax;
        return this.salary; 
    }
}

const heroPerson = {
    fname: "Hero",
    lName: "Balam",
    salary: 25000
}

const friendlyPerson = {
    fname: "ismail",
    lName: "Ahmed",
    salary: 25000
}

normalPerson.chargeBill();
/*
const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(2000);
heroChargeBill(3000);
console.log(heroPerson.salary);
console.log(normalPerson.salary);


const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
friendlyChargeBill(1500);
*/
/*
normalPerson.chargeBill.call(heroPerson, 900, 100, 10);
normalPerson.chargeBill.call(heroPerson, 3000, 300, 30);
console.log(heroPerson.salary);
*/
/*
normalPerson.chargeBill.call(friendlyPerson, 5000, 500, 50);
console.log(friendlyPerson.salary);
console.log(normalPerson.salary);
*/

normalPerson.chargeBill.apply(heroPerson, [3000, 300, 30]);
normalPerson.chargeBill.apply(heroPerson, [5000, 500, 50]);
console.log(heroPerson.salary);
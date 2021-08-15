
class Student{

    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = 'S A J Govt. High School'
    }
}


const student1 = new Student(12, 'Ariyan');
const student2 = new Student(22, 'Sohan');
const student3 = new Student(29, 'ismail');
console.log(student1, student2, student3);
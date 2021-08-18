const students = [
    {id: 22, name: 'Ariyan Sohan'},
    {id: 23, name: 'Ismail Ahmed'},
    {id: 21, name: 'Sumon Miah'},
    {id: 22, name: 'Emon'}
];

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const big = students.filter(s => s.id >22 );
const big1 = students.find(s => s.id > 21);
console.log(names);
console.log(ids);
console.log(big);
console.log(big1);
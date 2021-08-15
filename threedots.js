const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12, 17];
const ages3 = [25, 36, 22, 29];

const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3];
//console.log(allAges2);

const business = 650;
const minister = 450;
const sochib = 250;
const tk = [750, 480, 690];

const max = Math.max(business, minister, sochib);
const max2 = Math.max(...tk);
console.log(max2);
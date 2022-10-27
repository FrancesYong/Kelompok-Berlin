/* 
    Nama    : Muaja, Alden Daril
    Desc    : Exercise 1
    Front-End Web Development(C)
*/
console.log("Exercise 1");

console.log("CONCAT: ");
let month = "Oktober";
let date  = 4;
let year  = 2002;
console.log(date+ " " + month + " " + year);

console.log("\nInclude: ");
const food = ['Bakso', 'Mie Ayam', 'Sate'];
console.log(food.includes('Sate'));
console.log(food.includes('Pizza'));

console.log("\nLength: ");
let job = [];
console.log(food.length);
console.log(job.length);

console.log("\nsplit: ");


console.log("\nSlice: ");
let hewan = ['Sapi', 'Kuda', 'Babi', 'Ayam', 'Bebek', 'Penguin'];
let kakiEmpat = hewan.slice(0,3);
let kakidua = hewan.slice(3);
console.log(kakiEmpat);

console.log("\nSubstring: ");
const str = 'Front-end';
console.log(str.substring(1, 3));
console.log(str.substring(2));

console.log("\nLowerCase: ");
const kalimat = 'Budi Pergi ke pasar Bersama Ibunya';
console.log(kalimat.toLowerCase());

console.log("\nUpperCase: ");
const sentance = 'Budi Pergi ke pasar Bersama Ibunya';
console.log(sentance.toUpperCase());

console.log("\nTrim: ");
const greeting = '   Good Morning    '
console.log(greeting);
console.log(greeting.trim());

console.log("\nValueOf: ");
function angka(n) {
    this.bilangan = n;
  }
  angka.prototype.valueOf = function() {
    return this.bilangan;
  };
  const object1 = new angka(3); 
  console.log(object1 + 3);
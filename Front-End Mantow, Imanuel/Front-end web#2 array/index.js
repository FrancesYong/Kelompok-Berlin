

let people = ["Greg", "Mary", "Devon", "James"];



let people = ["Greg", "Mary", "Devon", "James"];

for(let i = 0; i < people.lenght; i++){
  console.log(`welcome to array loop class ${people[i]}`);
}


 

let people = ["Greg", "Mary", "Devon", "James"];
people.shift();



let people = ["Mary", "Devon", "James"];
people.pop();



let people = ["Mary", "Devon"];
people.unshift("Matt");


let people = ["Matt", "Mary", "Devon"];
people.push("Pemmy");



let people = ["Matt", "Mary", "Devon", "Pemmy"];
for(let i = 0; i < 2; i++){
  console.log(`welcome to array loop class ${people[i]}`);
}



let people = ["Matt", "Mary", "Devon", "Pemmy"];
let slicer = people.slice(2);
console.log(slicer)



let people = ["Matt", "Mary", "Devon", "Pemmy"];
console.log(people.indexOf("Mary"))



let people = ["Matt", "Mary", "Devon", "Pemmy"];
console.log(people.indexOf("foo"))



let people = ["Greg", "Mary", "Devon", "James"];
people.splice(2, 1, "elizabeth", "artie")
console.log(people)



let withBob=peole.concat("bob")
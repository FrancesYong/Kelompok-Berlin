let person = [
    {
        name: "John",
        age: 35
    },
    {
        name:"Bill",
        age:23
    },
    {
        name:"Bob",
        age: 17
    },
    {
        name:"Jack",
        age: 20
    },
];
let termuda = [
    {
        age: 30
    },
];
let tertua = [
    {
        age: 31
    },
];

for(let i=0; i<person.length; i++){
    if(person[i].age <tertua[0].age){
        tertua[0] = person[i];
    }
    
}
console.log("Paling muda =",tertua[0].name);

for(let i=0; i<person.length; i++){
    if(person[i].age >termuda[0].age){
        termuda[0] = person[i];
    }
    
}
console.log("Paling tua =",termuda[0].name);
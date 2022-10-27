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
let kecil = [
    {
        name: "kecil",
        age: 30
    },
];

let besar = [
    {
        name: "besar",
        age: 31
    },
];

for(let i=0; i<person.length; i++){
    if(person[i].age <kecil[0].age){
        kecil[0] = person[i];
    }
    
}
console.log("Paling Muda =",kecil[0].name);

for(let i=0; i<person.length; i++){
    if(person[i].age >besar[0].age){
        besar[0] = person[i];
    }
    
}
console.log("Paling Tua =",besar[0].name);
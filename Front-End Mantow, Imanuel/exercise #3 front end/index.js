//Mantow, imanuel otniel

let person = [
    {
        name : "Jhon",
        age : 35,
    },

    {
        name : "Bill",
        age : 23,
    },

    {
        name : "Bob",
        age : 17,
    },

    {
        name : "Jack",
        age : 20,
    }
];
 var max = Math.max(...person.map(orang=>orang.age));
 var nilai = person.filter(orang=>orang.age==max);
 var min = Math.min(...person.map(orang=>orang.age));
 var nilaiMin = person.filter(orang=>orang.age==min);
 console.log("Umur paling tua");
 console.log("nilaiMax");
 console.log("Umur paling muda");
 console.log("nilaiMin");
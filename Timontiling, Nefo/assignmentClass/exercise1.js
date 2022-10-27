// contoh concat pada JS
let text1 = "Kamu"
let text2 = "Siapa"
let text  = text1.concat(" : ", text2)
console.log(text)

    text3 = "oh baru" + " " + "ingat"
    text4 = "kamu".concat(" ", "karina yah ?")
    console.log(text3)
    console.log(text4)

//Contoh include pada JS
let text5 = "udah lama kita tidak betemu yah"
text5.includes("karina")
console.log(text5)

//Length 
let text6  = "Karina cantik banget"
let length = text6.length
console.log(length)

//Split
let text10    = "Aespa black mamba";
const myArray = text10.split(" ");
console.log(myArray)

//Slice
let text11 = "Karina, Winter, Giselle, Ning Ning"
let part   = text11.slice(2, 4)
console.log(part)

//Substring
let text12 = "Tidak tau sama sekali"
let part2  = text12.substring(2, 4)
console.log(part2)

//toLowerCase string  huruf kecil
let text7 = "AESPA SAVAGE"
let lwr   = text7.toLowerCase()
console.log(lwr)

//toUpperCase string huruf besar
let uppr = text7.toUpperCase()
console.log(uppr)

//Trim menghapus spasi dari kedua sisi
let text8 = "      Aespa Girls     "
let trmm  = text8.trim()
console.log(trmm)

//ValueOf 
let text9  = "live's too short"
let result = text9.valueOf()
console.log(result)
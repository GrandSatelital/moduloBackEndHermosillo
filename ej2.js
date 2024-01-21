// Crear un script que reciba n cantidad de numeros y muestre en terminal el promedio de esos numeros

let addCount = 0;
let numberCount = 0;
let average = addCount / numberCount;

for (let i = 2; i < process.argv.length; i++) {
  addCount += i;
  numberCount++;
}
console.log(addCount / numberCount);

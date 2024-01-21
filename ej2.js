// Crear un script que reciba n cantidad de numeros y muestre en terminal el promedio de esos numeros

let addCount = 0;
let numberCount = 0;
for (let i = 2; i < process.argv.length; i++) {
  let currentValue = parseFloat(process.argv[i]);
  addCount += currentValue;
  numberCount++;
}

let average = addCount / numberCount;

console.log(average);

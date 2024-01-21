// Crear un script que reciba n cantidad de numeros y muestre en terminal el promedio de esos numeros

let addCount = 0;
let numberCount = 0;
for (let i = 2; i < process.argv.length; i++) {
  let currentValue = isNaN(process.argv[i]) ? NaN : parseFloat(process.argv[i]);
  if (!isNaN(currentValue)) {
    addCount += currentValue;
    numberCount++;
  } else {
    console.log(process.argv[i], "is not a number ");
  }
}

let average = numberCount > 0 ? addCount / numberCount : 0;

console.log(`Average of the ${numberCount} numbers you entered is ${average}`);

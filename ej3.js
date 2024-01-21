// Crear un script que reciba n cantidad de argumentos y que los muestre en terminal de manera inversa a la ingresada
// Nota: no mostrar path node ni script

const showArgsInverseOrder = () => {
  for (let i = process.argv.length - 1; i >= 2; i--) {
    console.log(process.argv[i]);
  }
};
showArgsInverseOrder();

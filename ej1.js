/*
Crear un script que reciba [n] cantidad de argumentos y los muestre en la terminal 
Nota: No debe mostrar la ruta de node ni del script
*/

for (let i = 2; i < process.argv.length; i++) {
  console.log(process.argv[i]);
}

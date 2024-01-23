//Crear script que reciba como argumento el nombre de un alumno, si está en el objeto retornar su promedio, si no, retornar un mensaje de error.

let alumnos = {
  Juan: [10, 5, 8, 9, 7],
  Diana: [10, 9, 9, 8, 10],
  Roberto: [6, 8, 5, 9, 10],
};

let studentName = process.argv[2];
if (alumnos[studentName] !== undefined) {
  let addCount = 0;
  alumnos[studentName].forEach((item) => {
    addCount += item;
  });
  let average = addCount / alumnos[studentName].length;
  console.log(`${studentName} average grade is ${average}`);
} else {
  console.log("Student doesn't exist");
}

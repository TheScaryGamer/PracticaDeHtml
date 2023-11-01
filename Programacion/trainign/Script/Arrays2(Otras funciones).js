//.reverse() invierte las posiciones de un array
let Array1 = ["hola", "como", "estas"];
alert(`el estado actual de tu array es este( ${Array1} )`);
alert(`despues de usar .reverse() cambio a esto (${Array1.reverse()})`);

//.join(separador) devuelve el array con los separadores que queramos

Array1.reverse();
alert(`despues de usar .join(separadores) se muetra el array haci ${Array1.join("-")}`);

/*.splice(a,b, elemento1, elemento2, ...) 
    -a: elimina los elementos de un Array
    
    -b: es opcional por lo que si no lo pones se eliminan los elementos del inicio hasta el final, se usa para detener la eliminacion de elementos
    
    -elemento1: se ponen los nuevos elementos que se quieren agregar despues del primer elemento lo demas que coloques tambien seran elementos
*/

alert(`Tu actual array es ${Array1}`);
Array1.splice(0,3,"1","2","3","4","5");
alert(`despues de utilizar .splice(a,b,elementos) se elimino las palabras y se colocaron numeros ${Array1}`);

//.slice(a,b) extrae elementos desde el indice a hasta el indice b, si no existe b extrae todo desde el indicea a hasta el final creando una copia

alert(`Tu array va hacer copiado ${Array1}`);
let Extracion = Array1.slice(2);
alert(`despues de usar .slice(a) se copio esto ${Extracion} y tu array quedo haci ${Array1}`);

 Extracion = Array1.slice(2,4);
 alert(`despues de usar .slice(a,b) se copio esto ${Extracion}`);
 
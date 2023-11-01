let Array1 = [1,2,3,4,5,5];

alert(`Tienes un array de ${Array1}`);

//.length devuelve el numeros de posiciones que contiene un Array

alert(`Tu array tiene ${Array1.length} de posiciones`);

//Array.isArray() devuelve true en caso de que la variable sea un Array

alert(`¿es un array?:${Array.isArray(Array1)}`);

/*eliminar elementos de un Array
-shift() elimina el primer elemento de un array y devuelve ese elemento

-pop() elimina el ultimo elemento se un array y devuelve ese elemento*/

let EArray = Array1.shift();
alert(`despues de utilizar .shift() se ha eliminado el primer elemento por ende devuelve ${EArray}`);

let EArray2 = Array1.pop();
alert(`Despues de utilizar .pop() se ha eliminado el ultimo elemento por ende devuelve ${EArray2}`);

//.push(Elemento1, elemento2, ...) añade uno o varios elemenentos al final de un array y devuelve la longitud

Array1.push(EArray2);
alert(`.push() a devuelto exitosamente el elemento a ${Array1}`);

//.unshift(Elemento1, elemento2,...)agrega uno o varios elementos al inicio de un array y devuelve la longitud

Array1.unshift(EArray);
alert(`.unshift a devuelto exitosamente el elemento a ${Array1}`);

//.indexOf() busca el primer valor del array y devuelve su posicion
let Ms = prompt(`Que valor quieres encontrar de ${Array1}`);

(Ms == parseInt(Ms))? (alert(`El valor encontrado es ${Ms} en la posicion ${Array1.indexOf(parseInt(Ms))}`)) : (alert(`coloque un numero hallar para ${Array1}`));

//.LastindexOf() busca el ultimo valor de un array y devuelve su posicion

(Ms == parseInt(Ms))? (alert(`El valor encontrado es ${Ms} en la posicion ${Array1.lastIndexOf(parseInt(Ms))}`)) : (alert(`coloque un numero hallar para ${Array1}`));

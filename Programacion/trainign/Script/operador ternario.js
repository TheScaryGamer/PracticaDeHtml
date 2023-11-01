let Ms = prompt("coloque algo por favor");

//el sistema es el siguiente, este operador ternario es un if simple

(Ms == parseInt(Ms))? (alert(`${Ms} es un numero`), Ms = 1):(alert(`${Ms} no es un numero`));

//la estructura es la siguiente (condicion)? (codigo que se ejecuta si se cumple la condicion) : (codigo que se ejecuta cuando no se cumple, puedes poner otro codigo a jecutar colocando un coma antes como un array);
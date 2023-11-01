//saber que es mayor que o igual que o menor que

var logica =[true, 5, false, "hola", "adios", 2];

alert(logica[3] > logica[4]);

//operaciones booleanas
resultado1 = logica[0] && logica[2];
resultado2 = logica[2] || logica[0];
alert(resultado1);
alert(resultado2);

//operaciones matematicas
suma = logica[1] + logica[5];
alert(suma);

resta = logica[5] - logica[1];
alert(resta)

multiplicacion = logica[5] * logica[1];
alert(multiplicacion);

division = logica[5] / logica[1]
alert(division)

mayor = logica[1] % logica[5]
alert(mayor)
//puntaje
while(true){
  const M = "seleccione una opcion";
  
  
  let Dado = prompt("Seleccione una opcion: \n 1.dado de 6 caras\n 2.salir");

//por si no selecciona una opcuon
if(parseInt(Dado) != 1 && parseInt(Dado) != 2 ) {
  
  alert(M);
} 

//si selecciona el dado de 6 caras
else if(parseInt(Dado) == 1 ){
  //Math.round(x) redondea el valor decimal de x, si x es igual a 0.5, x 0.4 pasa hacer un numero mayor que el, si x es igual a 0.4 o inferior pasa hacer igual a x sin decimales
  
  //Match.random() escoge un numero entre 0 y 1 se ysa una forma para que agarre un numero entre el minimo y el maximo, esa formula es Math.round(Math.random() * (max - min) + min)
  let resultado = Math.round(Math.random() * (6 - 1) + 1);
  alert(resultado);
  
}

else{
  
  break;
}

}
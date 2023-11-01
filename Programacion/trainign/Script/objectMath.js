while(true){
  
const M = "por favor coloque un numero";

let Ms = prompt("seleccione una de estas opciones:\n" + "1.raiz cuadrada de un numero\n" + "2.potencia de un numero");

//verificacion del mensaje
if (parseInt(Ms) == 1) {
//mensaje para el numero
let Raiz = prompt("introdusca un numero como base para la raiz");

//verificacion del mensaje para el numero
if(Raiz == parseInt(Raiz)){
  
//Math.sqrt(x) se usa para dar la raiz cuadrada de x 
 let resultado = Math.sqrt(parseInt(Raiz));
  alert("La Raiz cuadrada de " + Raiz + " es " + resultado);
}
  
else{
  alert(M);
}
  
}

//potencia de un numero
else if(parseInt(Ms) == 2 ){
  
//base
let base = prompt("por favor coloque la base de la potencia, ejemplo 2³ en este caso la base es 2");

let exponente = prompt("por favor coloque el exponente de la base, ejemplo 2³ en este caso el exponente seria ³");

//verificador
if(base == parseInt(base) && exponente == parseInt(exponente)){

//Math.pow(x, y) X es la base y Y es el exponente
  let potencia = Math.pow(parseInt(base), parseInt(exponente));
  alert("la potencia de " + base + " elevada a " + exponente + " es igual a " + potencia);
}

else{
  alert(M)
}

}

else{
  
  break;
  
}

}
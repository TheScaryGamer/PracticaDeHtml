var Respuesta = prompt("  porfavor coloque una palabra que contenga la letra \"a\"")

var posicion = Respuesta.indexOf('a')

var recuento = Respuesta.length; 


if(recuento == "" || posicion < 0) {
    
    
    alert("no has colocado nada por favor intenta otra vez o la palabra introducida no continiene ninguna \"a\"");
    
}



else {
    
    alert("los caracteres introduccidos son:" + " " +  recuento)
    
    alert("la letra a se encuentra en la posicion:" + " " + posicion)
}

function suma (Numero1, Numero2) {
    
    
    
    var resultado = parseInt(Numero1) + parseInt(Numero2)
    
    alert("El resultado de la operacion es" + " " + resultado)
}

function restar (Numero1, Numero2) {
    
    var resultado = parseInt(Numero1) - parseInt(Numero2)
    
    alert("El resultado de la operacion es" + " " + resultado)
}
function multiplicar (Numero1, Numero2) {
    
    
    var resultado = parseInt(Numero1) * parseInt(Numero2)
    
    alert("El resultado de la operacion es" + " " + resultado)
}
while(Bc) {
        
    const C = /^[0-9]+$/;
    
    
    var N1 = prompt("ingresa \"1\" para sumar\n" +
    "ingresa \"2\" para restar\n" +
    "ingresa \"3\" para multiplicar\n" +
    "ingresa \"4\" para salir");
    
    
    if(parseInt(N1) == 1) // verificacion de numero
    {
        var N2 = prompt("Escriba el numero que desea sumar");
        
        var N3 = prompt("Escriba el numero por el cual se desea sumar");
        
        if(parseInt(N2) && parseInt(N3)) {
            
            suma(N2, N3)
        }
        
        else{
            
            alert("por favor coloque un numero")
            
        }
    }
    
    else if(parseInt(N1) == 2) {
        
        var N3 = prompt("Por favor coloque el numero a restar")
        
        var N4 = prompt("por favor coloque el numero por el cual desea restar")
        
        if (parseInt(N3) && parseInt(N4)) {
        
        restar(N3, N4)
        
        }
   else{
            
            alert("por favor coloque un numero")
            
            
    }
    
    }
    
    else if(parseInt(N1) == 3) {
        
        var N5 = prompt("Por favor coloque el numero a multiplicar")
        
        var N6 = prompt("Por favor coloque el numero el cual desea multiplicar")
        
        if(parseInt(N5) && parseInt(N6)) {
            
            multiplicar(N5, N6)
            
        }
    
    
else{
            
            alert("por favor coloque un numero")
}
    }
    else if(parseInt(N1) == 4) {
        
        break;
        
    }
    
  else if (N1 !== 1 && N1 !== 2 && N1 !== 3 && N1 !== 4){
        
        alert("por favor seleccione una opcion")
        
    }
    
}

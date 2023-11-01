var mensaje = prompt("por favor coloque una palabra");

function verificador (MJ) {
    
    var resultado = "el mensaje \"" + MJ + " " +"\""
    
     if (MJ == "") {
        
        alert("no has introduccido ninguna caracter por favor intentalo de nuevo")
     }
     
    else if (MJ == MJ.toUpperCase()) {
        
        resultado += "solo contiene mayusculas"
        alert(resultado)
    }
    
    else if (MJ == MJ.toLowerCase()) {
        
        resultado += "Solo contiene minisculas"
        alert(resultado)
    }
    
    
    
    else  {
        
        resultado += "contiene mayusculas y minisculas" 
        alert(resultado)
    }
    
    
    return resultado
}

verificador(mensaje)






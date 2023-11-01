var repetir = true

//para hallar la masa se usa la siguiente ecuacion  M = D * V 
function hallarMasa(densidad, volumen) {
  
  var M;
  
  M = densidad * volumen;
  
  alert("La masa es" + " " + M)
  return;
}

//para hallar el volumen se usa la siguiente formula V = M ÷ D
function hallarVolumen (Masa, Densidad) {
  
  var V;
  
  V = Masa / Densidad;
  
  alert("El volumen es:" + " " + V)
  return;
  
}
//para hallar la densidad se usa la siguiente formula D = M ÷ V 
function hallarDensidad(masa, volumen){
  
  var D;
  
  D = masa / volumen;
  
  alert("La densidad es" + " " + D)
  return;
}


while(repetir){
//Sistema para quimica

var opciones = prompt("Seleccione una de las opciones propuesta:\n 1.Hallar masa\n" + " 2.hallar volumen\n" + " 3.hallar densidad\n" + "4.salir del script")

var ms = "este script no puede leer decimales"

if(parseInt(opciones) != 1 && parseInt(opciones) != 2 && parseInt(opciones) != 3 && parseInt(opciones) != 4){
  
   alert("Porfavor Seleccione una opcion")
}

//comprobador para hallar la masa

else if( parseInt(opciones) == 1) {
  
  alert(ms)
  
  var volumen = prompt("Digite el volumen a procesar sin la simbologia")
  
  var densidad = prompt("Digite la dencidad a procesar sin la simbologia")
  
  if(parseInt(volumen) && parseInt(densidad)){
    
    hallarMasa(densidad,volumen)
    alert("para la simbologia recuerda que si 'x cm³' volumen se multiplica con 'x g/cm³' densidad, se cancela 'cm³' y se deja la g (Gramos)")
  }
  
  else{alert("Por favor digite un numero")}
  
}

//comprobador para hallar el volumen
else if(parseInt(opciones) == 2){
  
  alert(ms)
  var masa = prompt("Porfavor coloque la masa sin la simbologia")
  var densidad = prompt("Porfavor coloque la densidad sin la simbologia")
  
  if(parseInt(masa) && parseInt(densidad)){
    
    hallarVolumen(masa, densidad)
    alert("cuando se divide 'x g' de masa por 'x g/cm³' densidad , se cancela la g y se deja cm³")
    
  }
  
  else{alert("porfavor digite un numero")}
}
//salir del script
else if(parseInt(opciones) == 4){
  
  var repetir = false
  
}
//sistema para hallar la densidad
  else if(parseInt(opciones) == 3){
    
    alert(ms)
    var masa = prompt("porfavor coloque la masa sin la simbologia")
    
    var volumen = prompt("porfavor coloque el volumen sin la simbologia")
    
    hallarDensidad(masa, volumen);
    alert("recuerda que cuando se divide 'x g' de  masa por  'x cm³' se quedan dividiendo los simbolos 'x g/cm³' de dencidad")
  }
  
  
  else{alert("porfavor digite un numero")}
}  
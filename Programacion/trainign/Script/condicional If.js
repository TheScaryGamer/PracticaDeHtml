/* uso de condiciones, si se cumple cierta condicion el sistema realizara una accion distinta en vace a esa condicion */

var numero1 = 5;
var numero2 = 8;

if(numero1 <= numero2 ) { 
    
    alert("numero1 no es mayor que numero2");
    
}

if(numero2 >= 0) {
    
    alert("numero2 espositivo");
    
}

if(numero1 >= 0 || numero1 != 0) {
    
    alert("el numero es negativo o distinto a 0");
    
}

if(++numero1 > numero2) {
    
    alert("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2")
    
}

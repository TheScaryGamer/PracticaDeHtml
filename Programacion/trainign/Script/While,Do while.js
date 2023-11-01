let Password;
Password = prompt("Introdusca la contraseña");

//while(condicion) {codigo} ejecuta un bucle de codigo se se ejecuta cierta condicion

while(Password != "Saludos"){

alert(`la contraseña ${Password} es incorrecta`);
Password = prompt("Introdusca la contraseña");

}

//despues de que la condicion ya no se cumpla deja de ejecutarbel bucle

//do{codigo}while(condicion) a diferencia del while normal este se ejecuta almenos una vez y se vuelve a repetir si se cumple la condicion



do{
  
  for(var i = 0; i < 10; i++){
    
    alert(i);
    
  }
  
}
while(i < 10);


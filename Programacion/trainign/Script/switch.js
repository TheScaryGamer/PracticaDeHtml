let user = prompt("Coloca tu nombre");

//usamos el if normal
if(user.length > 0){
  
  alert(`tu eres ${user}`);
  
}
else(alert("algo salio mal"))

//aqui hacemos uso del switch
let ms = "por favor verifique su identidad de nuevo";

let User = prompt(`el usurio ${user} ingreso ${ms}`);
switch(User){
  
  //switch solo lee un valor y no los posibles casos
  case user:
    alert(`${User} su identidad a sido verificada`);
    break;
  
  default: alert("por favoe coloque algo");
}
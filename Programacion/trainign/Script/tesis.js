const avion = ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'];
let repetir = true;

while (repetir) {
    let opcionSeleccionada = prompt(
    "====== Bienvenido a Avianca ====\n\n" + 
    "Por favor, digite 1 para primera clase\n" + 
    "Por favor, digite 2 para económico\n"+ 
    "Por favor, digite 3 para salir\n\n"
  );

  if(opcionSeleccionada !== '1' && opcionSeleccionada !== '2' && opcionSeleccionada !== '3') {
    alert('No ha seleccionado una opción correcta. Por favor, intente nuevamente');
  }

  if (opcionSeleccionada === '1') { //Primera clase: 1 - 5
    let pos = -1;

    for(let i = 0; i < 5; i++) {
      if (avion[i] === '0'){
         pos = i;
         break;
      }
    }

    if (pos === -1) {
      const nuevaOpcion = prompt("====== ERROR ====\n\n" + 
        'No hay puestos en primera clase ¿Desea un asiento en clase económica?\n\n' + 
        "Por favor, digite 1 para aceptar\n" + 
        "Por favor, digite 2 para rechazar\n\n");
      
      if(nuevaOpcion !== '1' && nuevaOpcion !== '2') {
        alert('No ha seleccionado una opción correcta. El programa continuará al inicio');
      }
      
      if(nuevaOpcion === '2') {
        alert("====== ERROR ====\n\n" + 
          'El próximo vuelo parte en tres horas');
      }
      
      if(nuevaOpcion === '1') {
        opcionSeleccionada = '2';
      }
    } else {
      avion[pos] = '1';

      alert(
        "====== PASE DE ABORDAR ====\n\n" + 
        "Nro. asiento: #" + (pos + 1) + "\n" +
        "Sección: Primera clase"
      );
    }

  }

  if (opcionSeleccionada === '2') { // Económica: 6 - 10
    let pos = -1;

    for(let i = 5; i < 10; i++) {
      if (avion[i] === '0'){
         pos = i;
         break;
      }
    }

    if (pos === -1) {
      const nuevaOpcion = prompt("====== ERROR ====\n\n" + 
        'No hay puestos en clase económica ¿Desea un asiento en primera clase?\n\n' + 
        "Por favor, digite 1 para aceptar\n" + 
        "Por favor, digite 2 para rechazar\n\n");
      
      if(nuevaOpcion !== '1' && nuevaOpcion !== '2') {
        alert('No ha seleccionado una opción correcta. El programa continuará al inicio');
      }
      
      if(nuevaOpcion === '2') {
        alert("====== ERROR ====\n\n" + 
          'El próximo vuelo parte en tres horas');
      }
      
      if(nuevaOpcion === '1') {
        let pos = -1;

        for(let i = 0; i < 5; i++) {
          if (avion[i] === '0'){
             pos = i;
             break;
          }
        }
        
        if (pos === -1) {
          alert("====== ERROR ====\n\n" + 
            "No hay puestos en primera clase");
        } else {
          avion[pos] = '1';

          alert(
            "====== PASE DE ABORDAR ====\n\n" + 
            "Nro. asiento: #" + (pos + 1) + "\n" +
            "Sección: Primera clase"
          );
        }
      }
    } else {
      avion[pos] = '1';

      alert(
        "====== PASE DE ABORDAR ====\n\n" + 
        "Nro. asiento: #" + (pos + 1) + "\n" +
        "Sección: Económica"
      );
    }
  }
  
  if (opcionSeleccionada === '3') { // Salir
  	repetir = false;
  }
  
}
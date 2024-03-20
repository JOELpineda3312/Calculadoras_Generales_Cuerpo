function calcularCalorias() {
  var peso = parseFloat(document.getElementById('peso').value);
  var altura = parseFloat(document.getElementById('altura').value);
  var edad = parseFloat(document.getElementById('edad').value);
  var actividad = parseFloat(document.getElementById('actividad').value);
  var genero = document.querySelector('input[name="genero"]:checked');

  if (!peso || isNaN(peso) || peso <= 0) {
    alert('Por favor, ingrese un peso válido.');
    return;
  }

  if (!altura || isNaN(altura) || altura <= 0) {
    alert('Por favor, ingrese una altura válida.');
    return;
  }

  if (!edad || isNaN(edad) || edad <= 0) {
    alert('Por favor, ingrese una edad válida.');
    return;
  }

  if (!actividad || isNaN(actividad) || actividad <= 0) {
    alert('Por favor, ingrese una actividad válida.');
    return;
  }

  if (!genero) {
    alert('Por favor, seleccione un género.');
    return;
  }

  genero = genero.value; // Obtener el valor del género seleccionado

  var tmb;
  if (genero === 'hombre') {
    tmb = 66 + (13.7 * peso) + (5 * altura) - (6.8 * edad);
  } else if (genero === 'mujer') {
    tmb = 65 + (9.6 * peso) + (1.8 * altura) - (4.7 * edad);
  }

  var calorias = tmb * actividad; // Calcula las calorías sin redondear

  document.getElementById('resultado').innerHTML = 'Calorías recomendadas por día: ' + calorias.toFixed(2); // Muestra el resultado con 2 decimales
}



  
  
  

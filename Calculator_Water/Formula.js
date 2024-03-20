function calcularHidratacion() {
  var peso = parseFloat(document.getElementById('peso').value);
  var altura = parseFloat(document.getElementById('altura').value);
  var edad = parseFloat(document.getElementById('edad').value);
  var actividad = parseFloat(document.getElementById('actividad').value);
  
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

  var tmb = (30 * peso) + (actividad * peso);
  var litrosRecomendados = tmb / 1000; // Calcula los litros recomendados
  var litrosFormateados = litrosRecomendados.toFixed(2); // Redondea a 2 decimales

  document.getElementById('resultado').innerHTML = 'Litros recomendados por día: ' + litrosFormateados ;
}



  
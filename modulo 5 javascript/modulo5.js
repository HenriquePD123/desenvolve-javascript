const dataFutura = new Date('2025-12-31T23:59:59');

function calcularTempoRestante(dataFutura) {
  const agora = new Date();
  const diferenca = dataFutura - agora;

  if (diferenca <= 0) {
    return {
      dias: 0,
      horas: 0,
      minutos: 0,
      segundos: 0
    };
  }

  const segundosTotal = Math.floor(diferenca / 1000);
  const dias = Math.floor(segundosTotal / (60 * 60 * 24));
  const horas = Math.floor((segundosTotal % (60 * 60 * 24)) / (60 * 60));
  const minutos = Math.floor((segundosTotal % (60 * 60)) / 60);
  const segundos = segundosTotal % 60;

  return { dias, horas, minutos, segundos };
}

function atualizarTemporizador() {
  const tempo = calcularTempoRestante(dataFutura);

  document.getElementById('dias').textContent = tempo.dias.toString().padStart(2, '0');
  document.getElementById('horas').textContent = tempo.horas.toString().padStart(2, '0');
  document.getElementById('minutos').textContent = tempo.minutos.toString().padStart(2, '0');
  document.getElementById('segundos').textContent = tempo.segundos.toString().padStart(2, '0');
}

setInterval(atualizarTemporizador, 1000);

atualizarTemporizador();

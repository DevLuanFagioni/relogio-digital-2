
function atualizaRelogio() {
  const data = new Date()
  const horas = data.getHours().toString().padStart(2, "0");
  const minutos = data.getMinutes().toString().padStart(2, "0");
  const segundos = data.getSeconds().toString().padStart(2, "0");
  
  const elementoHora = document.getElementById("horas")
  const elementoMinuto = document.getElementById("minutos")
  const elementoSegundos = document.getElementById("segundos")

  elementoHora.textContent = horas
  elementoMinuto.textContent = minutos
  elementoSegundos.textContent = segundos
}

atualizaRelogio()
setInterval(atualizaRelogio, 1000)
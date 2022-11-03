function runPlay(){
  let botonMascotaJugador = document.getElementById("boton-mascota");
botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
}

function seleccionarMascotaJugador() {
  let inputHipodoge = document.getElementById("hipodoge")
  let inputCapipepo = document.getElementById("capipepo")
  let inputRatigueya = document.getElementById("ratigueya")
  
  if (inputHipodoge.checked){
    alert("Personaje hipodoge")
  }
  else if (inputCapipepo.checked){
    alert("Personaje Capipepo")
  }
  else if (inputRatigueya.checked){
    alert("personaje Ratigueya")
  }
}
window.addEventListener('load', runPlay)
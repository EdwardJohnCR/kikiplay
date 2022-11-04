function runPlay(){
  let botonMascotaJugador = document.getElementById("selectButton");
botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
}

function seleccionarMascotaJugador() {
  let inputHipodoge = document.getElementById("hipodoge")
  let inputCapipepo = document.getElementById("capipepo")
  let inputRatigueya = document.getElementById("ratigueya")
  let spanPetPlayer = document.getElementById('petPlayer')
  let spanSelectPetView = document.getElementById('petPlayer')
  let spanLifePetPlaye = document.getElementById('lifePetPlayer')
  if (inputHipodoge.checked){
    spanPetPlayer.innerHTML = 'Hipodoge'
    spanLifePetPlaye.innerHTML = '3'
  }
  else if (inputCapipepo.checked){
    spanPetPlayer.innerHTML = 'Capipepo'
    spanLifePetPlaye.innerHTML = '3'
  }
  else if (inputRatigueya.checked){
    spanPetPlayer.innerHTML = 'Ratigueya'
    spanLifePetPlaye.innerHTML = '3'
  }
  else{
    spanSelectPetView.innerHTML = 'Selecione una mascota'
    spanLifePetPlaye.innerHTML = '<====='
  } 
}
window.addEventListener('load', runPlay)



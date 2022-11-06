let attackPlayer;

function runPlay() {
  let buttonPetPlayer = document.getElementById("selectPetPlayer");
  buttonPetPlayer.addEventListener("click", selectPetPlayer);

  let btnFire;
  let btnWater;
  let btnEarth;
}

function selectPetPlayer() {
  let inputHipodoge = document.getElementById("hipodoge");
  let inputCapipepo = document.getElementById("capipepo");
  let inputRatigueya = document.getElementById("ratigueya");
  let spanPetPlayer = document.getElementById("petPlayer");
  let spanSelectPetView = document.getElementById("petPlayer");
  let spanLifePetPlaye = document.getElementById("lifePetPlayer");
  if (inputHipodoge.checked) {
    spanPetPlayer.innerHTML = "Hipodoge";
    spanLifePetPlaye.innerHTML = "3";
  } else if (inputCapipepo.checked) {
    spanPetPlayer.innerHTML = "Capipepo";
    spanLifePetPlaye.innerHTML = "3";
  } else if (inputRatigueya.checked) {
    spanPetPlayer.innerHTML = "Ratigueya";
    spanLifePetPlaye.innerHTML = "3";
  } else {
    alert("Selecciona una mascota");
    spanSelectPetView.innerHTML = "Selecione una mascota";
    spanLifePetPlaye.innerHTML = "<=====";
  }
  petEnemyRandom();
}
function petEnemyRandom() {
  let attackRandom = randomEnemyAttack(1, 3);
  let spanPetEnemy = document.getElementById("petEnemy");
  let spanLifePetEnemy = document.getElementById("lifePetEnemy");

  if (attackRandom == 1) {
    spanPetEnemy.innerHTML = "Hipodoge";
    spanLifePetEnemy.innerHTML = "3";
    /*Hipodpge*/
  } else if (attackRandom == 2) {
    spanPetEnemy.innerHTML = "Capipepo";
    spanLifePetEnemy.innerHTML = "3";
    /*Capipepo*/
  } else {
    spanPetEnemy.innerHTML = "Ratigueya";
    spanLifePetEnemy.innerHTML = "3";
    /*Ratigueya*/
  }
}

function randomEnemyAttack(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", runPlay);

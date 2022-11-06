//funtion Global
let attackPlayer;

//Listener the event
function runPlay() {
  let buttonPetPlayer = document.getElementById("buttonSelect");
  buttonPetPlayer.addEventListener("click", selectPetPlayer);
  btnFire.addEventListener("click", attackFire);

  let btnFire = document.getElementById("buttonFire");
  btnFire.addEventListener("click", attackFire);
  let btnWater = document.getElementById("buttonWater");
  btnWater.addEventListener("click", attackWater);
  let btnEarth = document.getElementById("buttonEarth");
  btnEarth.addEventListener("click", attackEarth);
}
//select character
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
  attackEnemyRandom();
}
//randon enemy
function petEnemyRandom() {
  let enemyRandom = randonData(1, 3);
  let spanPetEnemy = document.getElementById("petEnemy");
  let spanLifePetEnemy = document.getElementById("lifePetEnemy");

  if (enemyRandom == 1) {
    spanPetEnemy.innerHTML = "Hipodoge";
    spanLifePetEnemy.innerHTML = "3";
    /*Hipodpge*/
  } else if (enemyRandom == 2) {
    spanPetEnemy.innerHTML = "Capipepo";
    spanLifePetEnemy.innerHTML = "3";
    /*Capipepo*/
  } else {
    spanPetEnemy.innerHTML = "Ratigueya";
    spanLifePetEnemy.innerHTML = "3";
    /*Ratigueya*/
  }
}

function attackEnemyRandom() {
  let attackRandom = randonData(1, 3);
  let spanViewAttack = document.getElementById("atackRandomEnemy");

  if (attackRandom == 1) {
    spanViewAttack.innerHTML = "Fuego";
    /*Fuego*/
  } else if (attackRandom == 2) {
    spanViewAttack.innerHTML = "Agua";
    /*Agua*/
  } else {
    spanViewAttack.innerHTML = "Earth";
    /*tierra*/
  }
}
//Attack to variable global
function attackFire() {
  attackPlayer = "Fire";
  alert(attackPlayer);
}
function attackWater() {
  attackPlayer = "Water";
  alert(attackPlayer);
}
function attackEarth() {
  attackPlayer = "Earth";
  alert(attackPlayer);
}

function randonData(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", runPlay);

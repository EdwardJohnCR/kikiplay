//funtion Global
let attackPlayer;
let attackEnemy;

//Listener the event
function runPlay() {
  let buttonPetPlayer = document.getElementById("buttonSelect");
  buttonPetPlayer.addEventListener("click", selectPetPlayer);

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
  
  if (attackRandom == 1) {
    attackEnemy = "Fuego";
    /*Fuego*/
  } else if (attackRandom == 2) {
    attackEnemy = "Agua";
    /*Agua*/
  } else {
    attackEnemy = "Earth";
    /*tierra*/
  }
}
4
//Attack to variable global

function attackFire() {
  attackPlayer = "Fuego";
  attackEnemyRandom();
}
function attackWater() {
  attackPlayer = "Agua";
  attackEnemyRandom();
}
function attackEarth() {
  attackPlayer = "Tierra";
  attackEnemyRandom();
}

function createMessage(){
  let paragraph = document.createElement('p')
  paragraph.innerHTML = 'Tu mascota atacó con' + attackPlayer + ', la mascota del enemigo atacó con' + attackEnemy '- PENDIENTE'
}

function randonData(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", runPlay);

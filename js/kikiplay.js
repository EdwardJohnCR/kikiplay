//funtion Global
let attackPlayer;
let attackEnemy;
let lifePlayer = 3;
let lifeEnemy = 3;

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
    attackEnemy = "Tierra";
    /*tierra*/
  }
  combat();
}
function combat() {
  let spanLifePetPlaye = document.getElementById("lifePetPlayer");
  let spanLifePetEnemy = document.getElementById("lifePetEnemy");

  if (attackEnemy == attackPlayer) {
    createMessage("EMPATE");
  } else if (attackPlayer == "Fuego" && attackEnemy == "Tierra") {
    createMessage("GANASTE");
  } else if (attackPlayer == "Agua" && attackEnemy == "Fuego") {
    createMessage("GANASTE");
  } else if (attackPlayer == "Tierra" && attackEnemy == "Agua") {
    createMessage("GANASTE");
  } else {
    createMessage("PERDISTE");
    lifePlayer--;
    spanLifePetEnemy.innerHTML = lifePlayer;
  }
}
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

function createMessage(result) {
  let sectionMessage = document.getElementById("messages");

  let paragraph = document.createElement("p");
  paragraph.innerHTML =
    "Tu mascota atacó con " +
    attackPlayer +
    ", la mascota del enemigo atacó con " +
    attackEnemy +
    " " +
    result;

  sectionMessage.appendChild(paragraph);
}

function randonData(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", runPlay);

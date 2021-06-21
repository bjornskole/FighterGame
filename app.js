// model

const player = {
  healtVal: 100,
  HealtBarIndex: 40,
  HealtBar: 40,
  attackPower: 25,
  anim: {
    punch: {
      pic1: `<img class="player" src="./assets/player/Karakter1.png" /> `,
      pic2: `<img class="player" src="./assets/player/Karakter2.png" /> `,
      pic3: `<img class="player" src="./assets/player/Karakter3.png" /> `,
    },
    shot: "./assets/player/fireball2.png",
  },
};
const computer = {
  healtVal: 150,
  HealtBarIndex: 40,
  HealtBar: 40,
  attackPower: 35,
  anim: {
    punch: {
      pic1: `<img class="computer" src="./assets/computer/CkBlue1.png" /> `,
      pic2: `<img class="computer" src="./assets/computer/CkBlue2.png" /> `,
      pic3: `<img class="computer" src="./assets/computer/CkBlue3.png" /> `,
    },
    shot: "./assets/computer/Cfireball2.png",
  },
};
let chosenArena = false;
let playerPic = player.anim.punch.pic1;
let computerPic = computer.anim.punch.pic1;
let playerShot = {
  pic: player.anim.shot,
  styleType: "height",
  styleOption: "left",
  move: 0,
};
let computerShot = {
  pic: computer.anim.shot,
  styleType: "height",
  styleOption: "right",
  move: 0,
};

const arena = {
  arena1: `<img class="arena" src="http://imgs.abduzeedo.com/files/articles/wicked-fighting-game-background-gifs/emBDw7Sa.gif" />`,
  arena2: `<img class="arena" src="http://imgs.abduzeedo.com/files/articles/wicked-fighting-game-background-gifs/HfCURPUa.gif" />`,
  arena3: `<img class="arena" src="http://imgs.abduzeedo.com/files/articles/wicked-fighting-game-background-gifs/jxoPOUxa.gif" />`,
  arena4: `<img class="arena" src="http://imgs.abduzeedo.com/files/articles/wicked-fighting-game-background-gifs/nYuVFMIa.gif" />`,
};
let callBack = "Attack or try blocking";
// View
app();
function app() {
  chosenArena === false
    ? (document.getElementById("Team").innerHTML = `
    <div class="frontPage" >
    <h1 class="header">Choose arena</h1>
    <div class="arenaBtns" >
    <button onclick="choseArena(arena.arena1)"><img class="arenaBtn" src="http://imgs.abduzeedo.com/files/articles/wicked-fighting-game-background-gifs/emBDw7Sa.gif" /></button>
    <button onclick="choseArena(arena.arena2)"><img class="arenaBtn" src="http://imgs.abduzeedo.com/files/articles/wicked-fighting-game-background-gifs/HfCURPUa.gif" /></button>
    <button onclick="choseArena(arena.arena3)"><img class="arenaBtn" src="http://imgs.abduzeedo.com/files/articles/wicked-fighting-game-background-gifs/jxoPOUxa.gif" /></button>
    <button onclick="choseArena(arena.arena4)"><img class="arenaBtn" src="http://imgs.abduzeedo.com/files/articles/wicked-fighting-game-background-gifs/nYuVFMIa.gif" /></button>
    </div>
    </div>
    `)
    : player.HealtBar <= 0
    ? ((document.getElementById("Team").innerHTML = `
    <div class="score" style="color: red">
       <h1>You loose</h1>
       </br>
       <button onclick="location.reload();">Play again</button>
    </div>
    `),
      (computer.HealtBar += 1))
    : computer.HealtBar <= 0
    ? ((document.getElementById("Team").innerHTML = `
    <div class="score" style="color: green">
       <h1>You Win</h1> </br>
       <button onclick="location.reload();">Play again</button>
    </div>
    `),
      (player.HealtBar += 1))
    : (document.getElementById("Team").innerHTML = `
    <div class="page">
        <div class="mainContainer">
        <div class="top-section">
        ${chosenArena}
        ${playerPic}
        <img  id="plShot" class="shot" style="${playerShot.styleType}: ${playerShot.move}%"  src="${playerShot.pic}" />
        <div class="playerHealtBar" style="width: ${player.HealtBar}%" ></div>
        ${computerPic}
        <img class="cshot" style="${computerShot.styleType}: ${computerShot.move}%"  src="${computerShot.pic}" />
        <div class="computerHealtBar" style="width: ${computer.HealtBar}%"></div>
        </div>
        <div class="btnss">
        <p class="callback">${callBack}</p>
        <div class="btnCard">
        <button onclick="attack()">Attack</button>
        <button id="blck" onclick="block()">Block</button>
        </div>
        </div>
        </div>
    </div>
    `);
}

// Controller
function attack() {
  callBack = "Attack or try blocking";
  setTimeout(function () {
    playerPic = player.anim.punch.pic2;
    app();
  }, 200);
  setTimeout(function () {
    playerPic = player.anim.punch.pic3;
    shotHandler(playerShot);
    app();
  }, 1000);
  setTimeout(function () {
    playerPic = player.anim.punch.pic1;
    computerAttack();
    healthHandler(computer, player);
    app();
  }, 1500);
  app();
}
//
function block() {
  callBack = "Attack or try blocking";
  let random = Math.floor(Math.random() * 2);
  random === 1
    ? (setTimeout(function () {
        computerPic = computer.anim.punch.pic2;
        app();
      }, 200),
      setTimeout(function () {
        computerPic = computer.anim.punch.pic3;
        shotHandler(computerShot);
        app();
      }, 1000),
      setTimeout(function () {
        computerPic = computer.anim.punch.pic1;
        healthHandler(player, computer, "increment");
        callBack = "perfect block! you gain health";
        app();
      }, 1500),
      app())
    : (setTimeout(function () {
        computerPic = computer.anim.punch.pic2;
        app();
      }, 200),
      setTimeout(function () {
        computerPic = computer.anim.punch.pic3;
        shotHandler(computerShot);
        app();
      }, 1000),
      setTimeout(function () {
        computerPic = computer.anim.punch.pic1;
        healthHandler(player, computer, "no-increment");
        callBack = "Missed block! you loose health";
        app();
      }, 1500),
      app());
}

//
function computerAttack() {
  playerPic = player.anim.punch.pic1;
  app();
  setTimeout(function () {
    computerPic = computer.anim.punch.pic2;
    app();
  }, 1500);
  setTimeout(function () {
    computerPic = computer.anim.punch.pic3;
    shotHandler(computerShot);
    app();
  }, 1800);
  setTimeout(function () {
    computerPic = computer.anim.punch.pic1;
    let randomShot = Math.floor(Math.random() * 5);
    console.log(randomShot);
    randomShot === 2
      ? ((callBack = "Computer missed"), app())
      : (healthHandler(player, computer), app());
    app();
  }, 2500);
  app();
}

function shotHandler(val) {
  Shotcalibrator(val);
  let id = setInterval(frame, 100);
  function frame() {
    val.move > 70
      ? (clearInterval(id),
        (val.move = 18),
        Shotcalibrator(val, "disable"),
        app())
      : ((val.move += 10), app());
  }
}

function Shotcalibrator(item, val) {
  val === "disable"
    ? ((item.styleType = "height"), (item.move = 0))
    : ((item.styleType = item.styleOption), (item.move = 18));
}

function healthHandler(val, secVal, indec) {
  indec === "increment" && val.HealtBar <= 35
    ? (val.HealtBar =
        val.HealtBar + (secVal.attackPower * val.HealtBarIndex) / val.healtVal)
    : indec === "no-increment" && val.HealtBar <= 35
    ? (val.HealtBar = val.HealtBar - 5)
    : (val.HealtBar =
        val.HealtBar - (secVal.attackPower * val.HealtBarIndex) / val.healtVal);
  app();
}
function choseArena(value) {
  chosenArena = value;
  app();
}

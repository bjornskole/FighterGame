// model

const player = {
  playerVal: 200,
  playerHealt: 200,
  attackPower: 5,
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
  playerVal: 200,
  playerHealt: 200,
  attackPower: 5,
  anim: {
    punch: {
      pic1: `<img class="computer" src="./assets/computer/CkBlue1.png" /> `,
      pic2: `<img class="computer" src="./assets/computer/CkBlue2.png" /> `,
      pic3: `<img class="computer" src="./assets/computer/CkBlue3.png" /> `,
    },
    shot: "./assets/computer/Cfireball2.png",
  },
};
const some = `<div>hello</div>`;

let playerPic = player.anim.punch.pic1;
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
let computerPic = computer.anim.punch.pic1;

const arena = {
  arena1: `<img class="arena" src="http://imgs.abduzeedo.com/files/articles/wicked-fighting-game-background-gifs/emBDw7Sa.gif" />`,
  arena2: `<img class="arena" src="http://imgs.abduzeedo.com/files/articles/wicked-fighting-game-background-gifs/HfCURPUa.gif" />`,
};
// View
app();
function app() {
  document.getElementById("Team").innerHTML = `
    <div class="page">
        <div class="mainContainer">
        <div class="top-section">
        ${arena.arena1}
        ${playerPic}
        <img  id="plShot" class="shot" style="${playerShot.styleType}: ${playerShot.move}%"  src="${playerShot.pic}" />
        ${computerPic}
        <img class="cshot" style="${computerShot.styleType}: ${computerShot.move}%"  src="${computerShot.pic}" />
        </div>
        <div class="btnCard">
        <div class="playerHealtBar" style="width: ${computer.computerHealt}"></div>
        <button onclick="attack()">attack</button>
        </div>
        </div>
    </div>
    `;
}

// Controller
function attack() {
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
    app();
  }, 1500);
  app();
}
// new

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
function computerS() {
  let id = setInterval(frame, 100);
  function frame() {
    computerShot.move > 70
      ? (clearInterval(id), (computerShot.move = 18), app())
      : ((computerShot.move += 10), app());
  }
}

function Shotcalibrator(item, val) {
  val === "disable"
    ? ((item.styleType = "height"), (item.move = 0))
    : ((item.styleType = item.styleOption), (item.move = 18));
}

// model
const player = {
  playerHealt: "100%",
  attackPower: "10%",
};
const computer = {
  difficulty: easy,
  computerHealt: "100%",
  attackPower: "20%",
};
const playerWeapons = [
  {
    weaponOne: item,
    attackPower: "1%",
  },
  {
    weaponTwo: item,
    attackPower: "10%",
    // attacksReamaining: 2,
  },
];
const arena = {
  arena1:
    "http://imgs.abduzeedo.com/files/articles/wicked-fighting-game-background-gifs/emBDw7Sa.gif",
  arena2:
    "http://imgs.abduzeedo.com/files/articles/wicked-fighting-game-background-gifs/HfCURPUa.gif",
};
// View
app();
function app() {
  document.getElementById("Team").innerHTML = `
    <div class="page">
        <div class="mainContainer">
        <div class="arena"><img src="${arena.arena1}"/></div>
        <div class="btnCard"></div>
        </div>
    </div>
    `;
}
// Controller

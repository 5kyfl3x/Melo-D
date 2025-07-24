const toggleButton = document.getElementById("toggle-btn");
const sidebar = document.getElementById("sidebar");
const containers = document.querySelectorAll(".container");

function toggleSidebar() {
  sidebar.classList.toggle("close");
  toggleButton.classList.toggle("rotate");

  Array.from(sidebar.getElementsByClassName("show")).forEach((ul) => {
    ul.classList.remove("show");
    ul.previousElementSibling.classList.remove("rotate");
  });
}

function toggleSubMenu(button) {
  button.nextElementSibling.classList.toggle("show");
  button.classList.toggle("rotate");

  if (sidebar.classList.contains("close")) {
    sidebar.classList.toggle("close");
    toggleButton.classList.toggle("rotate");
  }
}

// var player = {
//   pAud: null,
//   pList: null,
//   pNow: 0,

//   init: () => {
//     player.hTog = document.getElementById("playTog");

//     player.pAud = new Audio();
//     player.pList = document.querySelectorAll("#playlist div");

//     let pp = () =>
//       (player.htog.className = player.pAud.paused
//         ? "icon-pause2"
//         : "icon-play3");
//     player.pAud.onplay = pp;
//     player.pAud.onpause = pp;

//     for (let [i, song] of Object.entries(player.pList)) {
//       song.onclick = () => player.load(i);
//     }
//   },

//   load: (song) => {
//     if (!player.pAud.paused) {
//       player.pAud.pause();
//     }

//     player.htog.onclick = "";

//     player.pNow = song;

//     for (let song of player.pList) {
//       song.classlist.remove("current");
//     }
//     let selected = player.pList[player.pNow];
//     selected.classList.add("current");

//     player.pAud.src = "Music/" + selected.dataset.src;
//     player.pAud.oncanplaythrough = () => {
//       player.hTog.onclick = () => {
//         if (player.pAud.paused) {
//           player.pAud.play();
//         } else {
//           player.pAud.pause();
//         }
//       };
//       player.pAud.play();
//     };
//   },
// };
// window.addEventListener("load", player.init);


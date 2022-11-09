let flag = false;
let playerWon;
let winningCountP1 = 0;
let winningCountP2 = 0;
let count = 0;
let winMat = [
  [2, 3, 4],
  [5, 6, 7],
  [8, 9, -1],
];
// const reset = [
//   [2, 3, 4],
//   [5, 6, 7],
//   [8, 9, -1],
// ];
let funcArr = [];
for (let i = 0; i < 9; i++) {
  let ani = `ani${i}`;
  ani = () => {
    animation(i);
  };
  funcArr.push(ani);
}
for (let i = 0; i < 9; i++) {
  let box = document.getElementById(`box${i + 1}`);
  box.addEventListener("click", funcArr[i], { once: true });
}
var vert = 'Restart'.split("").join("<br/>")
let btn = document.getElementById("vert")
btn.innerHTML = vert
document.getElementsByClassName('score')[0].innerHTML = winningCountP1;
document.getElementsByClassName('score')[1].innerHTML = winningCountP2;

//----------------------- function declaration-------------------------------------- 
function win() {
  if (winMat[0][0] == winMat[0][1] && winMat[0][1] == winMat[0][2]) {
    flag = true;
    playerWon = winMat[0][0]; 
  }
  if (winMat[0][0] == winMat[1][0] && winMat[1][0] == winMat[2][0]) {
    flag = true;
    playerWon = winMat[0][0];
  }
  if (winMat[0][0] == winMat[1][1] && winMat[1][1] == winMat[2][2]) {
    flag = true;
    playerWon = winMat[0][0];
  }
  if (winMat[0][2] == winMat[1][1] && winMat[1][1] == winMat[2][0]) {
    flag = true;
    playerWon = winMat[0][2];
  }
  if (winMat[2][2] == winMat[2][1] && winMat[2][1] == winMat[2][0]) {
    flag = true;
    playerWon = winMat[2][2];
  }
  if (winMat[2][2] == winMat[1][2] && winMat[1][2] == winMat[0][2]) {
    flag = true;
    playerWon = winMat[2][2];
  }
  if (winMat[1][0] == winMat[1][1] && winMat[1][1] == winMat[1][2]) {
    flag = true;
    playerWon = winMat[1][0];
  }
  if (winMat[0][1] == winMat[1][1] && winMat[1][1] == winMat[2][1]) {
    flag = true;
    playerWon = winMat[1][1];
  }
  if (flag == true) {
    if (playerWon == 1) {
      winningCountP1++;
      count = 0;
      winMat = [
        [2, 3, 4],
        [5, 6, 7],
        [8, 9, -1],
      ];
      flag = false;
      setTimeout(removeO, 6000);
      setTimeout(addX, 4300);
      setTimeout(addBannaer, 9000, "X wins!");
      setTimeout(gameReset, 10000);
      setTimeout(removeX, 11000);
      setTimeout(removeBannaer, 11000);
    }
    if (playerWon == 0) {
      winningCountP2++;
      count = 0;
      winMat = [
        [2, 3, 4],
        [5, 6, 7],
        [8, 9, -1],
      ];
      flag = false;
      setTimeout(removeX, 6000);
      setTimeout(addO, 5000);
      setTimeout(addBannaer, 9000, "O wins!");
      setTimeout(gameReset, 12000);
      setTimeout(removeO, 12000);
      setTimeout(removeBannaer, 12000);
    }
  }
  if (count == 9 && flag == false) {
    
    count = 0;
    
    winMat = [
      [2, 3, 4],
      [5, 6, 7],
      [8, 9, -1],
    ];
    
    setTimeout(addBannaer, 4500, "Draw!");
    setTimeout(gameReset, 6000);
    setTimeout(removeO, 12000);
    setTimeout(removeX, 12000);
    setTimeout(removeBannaer, 12000);
  }
  setTimeout(leaderBoard, 7000);
}
 function leaderBoard(){
  document.getElementsByClassName('score')[0].innerHTML = winningCountP1;
document.getElementsByClassName('score')[1].innerHTML = winningCountP2;
}
function removeO() {
  let ani = document.getElementsByClassName("fa-o");
  for (let i = 0; i < ani.length; i++) {
    ani[i].style = "none";
  }
}
function removeX() {
  let ani = document.getElementsByClassName("fa-xmark");
  for (let i = 0; i < ani.length; i++) {
    ani[i].style = "none";
  }
}
function addX() {
  let ani = document.getElementsByClassName("fa-xmark");
  for (let i = 0; i < ani.length; i++) {
    ani[i].style = `animation: x${i + 1} 4s   1  forwards;`;
  }
}
function addO() {
  let ani = document.getElementsByClassName("fa-o");
  for (let i = 0; i < ani.length; i++) {
    ani[i].style = `animation: o${i + 1} 4s   1  forwards;`;
  }
}
function removeBannaer() {
  let ele = document.getElementById("winner");
  ele.style = "none";
}
function addBannaer(winner) {
  let ele = document.getElementById("winner");
  ele.textContent = winner;
  ele.style = "animation: bounce2 2s ease-in    forwards;";
}
function gameReset() {
  for (let i = 0; i < 9; i++) {
    let box = document.getElementById(`box${i + 1}`);
    box.removeEventListener("click", funcArr[i], { once: true });
    box.addEventListener("click", funcArr[i], { once: true });
  }
}
function animation(i) {
  if (i >= 0 && i < 3) {
    if (flag == false) {
      if (count % 2 == 0) {
        document.getElementsByClassName(`x${i + 1}`)[0].style = `animation: x${
          i + 1
        } 4s   1  forwards;`;
        winMat[i][0] = 1;
      } else if (count % 2 !== 0) {
        document.getElementsByClassName(`o${i + 1}`)[0].style = `animation: o${
          i + 1
        } 4s   1  forwards;`;
        winMat[i][0] = 0;
      }

      count++;
      win();
    }
  }
  if (i >= 3 && i < 6) {
    if (flag == false) {
      if (count % 2 == 0) {
        document.getElementsByClassName(`x${i + 1}`)[0].style = `animation: x${
          i + 1
        } 4s   1  forwards;`;
        winMat[i - 3][1] = 1;
      } else if (count % 2 !== 0) {
        document.getElementsByClassName(`o${i + 1}`)[0].style = `animation: o${
          i + 1
        } 4s   1  forwards;`;
        winMat[i - 3][1] = 0;
      }

      count++;
      win();
    }
  }
  if (i >= 6) {
    if (flag == false) {
      if (count % 2 == 0) {
        document.getElementsByClassName(`x${i + 1}`)[0].style = `animation: x${
          i + 1
        } 4s   1  forwards;`;
        winMat[i - 6][2] = 1;
      } else if (count % 2 !== 0) {
        document.getElementsByClassName(`o${i + 1}`)[0].style = `animation: o${
          i + 1
        } 4s   1  forwards;`;
        winMat[i - 6][2] = 0;
      }

      count++;
      win();
    }
  }
}

let turn = "X";
let title = document.querySelector(".title");
let container = document.querySelector(".container");
let btn = document.querySelector("button");
let square = [];
function game(id) {
  let element = document.getElementById(id);
  if (turn === "X" && element.innerHTML === "") {
    element.innerHTML = "X";
    turn = "O";
    title.innerHTML = "O";
  } else if (turn === "O" && element.innerHTML === "") {
    element.innerHTML = "O";
    turn = "X";
    title.innerHTML = "X";
  }
  winner();
}
function addWinner(num1, num2, num3) {
  title.innerHTML = `${square[num1]} Winner`;
  document.getElementById(`item` + num1).style.backgroundColor = "#fff";
  document.getElementById(`item` + num2).style.backgroundColor = "#fff";
  document.getElementById(`item` + num3).style.backgroundColor = "#fff";
  document.getElementById(`item` + num1).style.color = "#000";
  document.getElementById(`item` + num2).style.color = "#000";
  document.getElementById(`item` + num3).style.color = "#000";
}
function cancelButton(num1, num2, num3, num4, num5, num6) {
  document.getElementById(`item${num1}`).style.pointerEvents = "none";
  document.getElementById(`item${num2}`).style.pointerEvents = "none";
  document.getElementById(`item${num3}`).style.pointerEvents = "none";
  document.getElementById(`item${num4}`).style.pointerEvents = "none";
  document.getElementById(`item${num5}`).style.pointerEvents = "none";
  document.getElementById(`item${num6}`).style.pointerEvents = "none";
}
function winner() {
  for (let i = 1; i < 10; i++) {
    square[i] = document.getElementById(`item${i}`).innerHTML;
  }
  if (square[1] === square[2] && square[2] === square[3] && square[2] != "") {
    btn.style.visibility = "visible";
    addWinner(1, 2, 3);
    cancelButton(4, 5, 6, 7, 8, 9);
  } else if (
    square[4] === square[5] &&
    square[5] === square[6] &&
    square[4] != ""
  ) {
    btn.style.visibility = "visible";
    addWinner(4, 5, 6);
    cancelButton(1, 2, 3, 7, 8, 9);
  } else if (
    square[7] === square[8] &&
    square[8] === square[9] &&
    square[7] != ""
  ) {
    btn.style.visibility = "visible";
    addWinner(7, 8, 9);
    cancelButton(1, 2, 3, 4, 5, 6);
  } else if (
    square[1] === square[4] &&
    square[4] === square[7] &&
    square[4] != ""
  ) {
    btn.style.visibility = "visible";
    addWinner(1, 4, 7);
    cancelButton(2, 3, 5, 6, 8, 9);
  } else if (
    square[2] === square[5] &&
    square[5] === square[8] &&
    square[5] != ""
  ) {
    btn.style.visibility = "visible";
    addWinner(2, 5, 8);
    cancelButton(1, 3, 4, 6, 7, 9);
  } else if (
    square[3] === square[6] &&
    square[6] === square[9] &&
    square[6] != ""
  ) {
    btn.style.visibility = "visible";
    addWinner(3, 6, 9);
    cancelButton(1, 2, 4, 5, 7, 8);
  } else if (
    square[1] === square[5] &&
    square[5] === square[9] &&
    square[5] != ""
  ) {
    btn.style.visibility = "visible";
    addWinner(1, 5, 9);
    cancelButton(2, 3, 4, 6, 7, 8);
  } else if (
    square[3] === square[5] &&
    square[5] === square[7] &&
    square[5] != ""
  ) {
    btn.style.visibility = "visible";
    addWinner(3, 5, 7);
    cancelButton(1, 2, 4, 6, 8, 9);
  } else if (
    square[1] != "" &&
    square[2] != "" &&
    square[3] != "" &&
    square[4] != "" &&
    square[5] != "" &&
    square[6] != "" &&
    square[7] != "" &&
    square[8] != "" &&
    square[9] != ""
  ) {
    title.innerHTML = "DRAW";
    btn.style.visibility = "visible";
  }
}

container.addEventListener("click", function (e) {
  game(e.target.id);
});

btn.onclick = function () {
  setTimeout(() => {
    location.reload();
  }, 100);
};

const options = [
  {
    name: "Rock",
    image: "./images/rock.png",
  },
  {
    name: "Scissors",
    image: "./images/scissors.png",
  },
  {
    name: "Paper",
    image: "./images/paper.png",
  },
];
const score = document.getElementById("score");

const rockCard = document.getElementById("rockCard");
const paperCard = document.getElementById("paperCard");
const scissorsCard = document.getElementById("scissorsCard");

const computersChoice = document.querySelector("#computersChoice img");
const computerImage = document.getElementById("computerImage");

const restartBtn = document.getElementById("restartBtn");

let currentScore = 0;

rockCard.onclick = function () {
  let title = document.getElementsByClassName("card-title")[0].innerHTML;
  playRound(title);
};

paperCard.onclick = function () {
  let title = document.getElementsByClassName("card-title")[1].innerHTML;
  playRound(title);
};

scissorsCard.onclick = function () {
  let title = document.getElementsByClassName("card-title")[2].innerHTML;
  playRound(title);
};

function playRound(title) {
  let rand = Math.floor(Math.random() * options.length);
  computersChoice.setAttribute("src", options[rand].image);
  let computerTitle = options[rand].name;
  calculateScore(title, computerTitle);
}

function calculateScore(title, computerTitle) {
  if (computerTitle == "Rock") {
    if (title == "Scissors") {
      currentScore++;
    }
  }

  score.innerText = currentScore;
}

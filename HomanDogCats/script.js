/*
Cilj ovog zadatka je konverzija ljudskih (human) godina u godine psa ili mace.

Korisnik unosi godine covjeka. Klikom na dugme `Calculate`, treba da se izracunaju godine psa i mace i to prema slijedecim
pravilima:

Cat Years
- 15 cat years for first year.
- +9 cat years for second year.
- +4 cat years for each year after that

Dog Years
- 15 dog years for first year
- +9 dog years for second year
- +5 dog years for each year after that

Nakon sto ste izracunali koliko godina ima maca, a koliko pas, trebate ucitati odgovarajucu sliku iz `images` foldera koja
predstavlja starost zivotinje (primjetite image tagove sa idem `catImg` i `dogImg`). Slika treba biti ucitana prema slijedecim
pravilima:

Cat
- Baby cat: godine <= 24
- Adult cat: godine > 24 i godine <= 44
- Old cat: godine > 44

Dog
- Baby dog: godine <= 24
- Adult dog: godine > 24 i godine <= 59
- Old dog: godine > 59

Takodjer ne zaboravite odraditi validaciju na samoj formi za unos godina. Klikom na dugme `Calculate` prije samog racunanja,
treba provjeriti da li su godine uopste unesene i da li su broj. U `index.html` cete primjetiti `humanYearsError` div. Ovaj div
sadrzi u sebi error poruku koju je potrebno prikazati ako godine nisu validne. Poruku mozete prikazati ako joj sklonite klasu
`hide`, i obratno sakriti je ako joj dodate klasu `hide`.
*/

const humanYearsInput = document.getElementById("humanYears");
const humanYearsError = document.getElementById("humanYearsError");

const calculateBtn = document.getElementById("calculateBtn");

const dogImg = document.getElementById("dogImg");
const dogYears = document.getElementById("dogYears");

const catImg = document.getElementById("catImg");
const catYears = document.getElementById("catYears");

calculateBtn.onclick = function () {
  let humanYears = parseInt(humanYearsInput.value);

  if (!isNaN(humanYears)) {
    humanYearsError.classList.add("hide");
    calculateCatYears(humanYears);
    calculateDogYears(humanYears);
  } else {
    humanYearsError.classList.remove("hide");
  }
};
calculateBtn.onclick = function () {
  let humanYears = humanYearsInput.value;
  humanYearsError.classList.add("hide");
  if (!humanYears || isNaN(humanYears)) {
    humanYearsError.classList.remove("hide");
  } else {
    calculateAges();
  }
};

function calculateAges() {
  let humanYears = humanYearsInput.value && parseFloat(humanYearsInput.value);
  let dogY = dogYears.value;
  let catY = catYears.value;

  if (humanYears === 1) {
    catY = 15;
  } else if (humanYears === 2) {
    catY = 24;
  } else {
    catY = 24 + (humanYears - 2) * 4;
  }

  catYears.innerText = catY;

  if (humanYears === 0) {
    dogY = 0;
  } else if (humanYears === 1) {
    dogY = 15;
  } else if (humanYears === 2) {
    dogY = 24;
  } else {
    dogY = 24 + (humanYears - 2) * 5;
  }

  dogYears.innerText = dogY;

  setImage(catY, dogY);
}

function setImage(catY, dogY) {
  if (catY <= 24) {
    catImg.setAttribute("src", "images/babyCat.png");
  } else if (catY > 24 && catY <= 59) {
    catImg.setAttribute("src", "images/adultCat.gif");
  } else {
    catImg.setAttribute("src", "images/oldCat.jpeg");
  }

  if (dogY <= 24) {
    dogImg.setAttribute("src", "images/babyDog.webp");
  } else if (dogY > 24 && dogY <= 59) {
    dogImg.setAttribute("src", "images/adultDog.png");
  } else {
    dogImg.setAttribute("src", "./images/oldDog.png");
  }
}

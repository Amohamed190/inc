// INCREMENTING VARIABLES & RANDOM VALUES

// 1. Saving elements as variables cleans up your code.
let counter = 0;

var displayEl = document.getElementById("display");
var plus1Btn = document.getElementById("plus1");
var minus10Btn = document.getElementById("minus10");
var minus1Btn = document.getElementById("minus1");
var minus50Btn = document.getElementById("minus50");
var plus10Btn = document.getElementById("plus10");
var plus50Btn = document.getElementById("plus50");

var stringInEl = document.getElementById("strIn");
var stringOutEl = document.getElementById("strOut");

// 2. Incrementing. The ++, --, +=, and -= operators are used to update variables without losing what was there before
// let x = 5;
// x = x + 1; // x becomes 6
// x++ // x becomes 7
// x+=10 // x becomes 17

// let y = 50;
// y = y - 5; // y becomes 45
// y--; // y becomes 44
// y -=10; // y becomes 34

plus1Btn.addEventListener("click", add1);
minus10Btn.addEventListener("click", sub10);
minus1Btn.addEventListener("click", sub1);
minus50Btn.addEventListener("click", sub50);
plus10Btn.addEventListener("click", add10);
plus50Btn.addEventListener("click", add50);

function add1() {
  counter++;
  displayEl.innerHTML = counter;
}

function sub10() {
  counter -= 10;
  displayEl.innerHTML = counter;
}

function sub1() {
  counter--;
  displayEl.innerHTML = counter;
}

function sub50() {
  counter -= 50;
  displayEl.innerHTML = counter;
}

function add10() {
  counter += 10;
  displayEl.innerHTML = counter;
}

function add50() {
  counter += 50;
  displayEl.innerHTML = counter;
}

// 3. The += operator also works to update strings. Also, the "change" event can remove the need for buttons!
stringInEl.addEventListener("change", updateStory);
var story = "Once upon a time, ";

function updateStory() {
  var newWord = stringInEl.value;

  stringInEl.value = ""; // clears the input

  story += newWord + " ";

  stringOutEl.innerHTML = story;
}

// 4. Math.random() is used to bring RNG (random number generator) to your applications.
var rand1Btn = document.getElementById("rand1");
var rand2Btn = document.getElementById("rand2");
var rand3Btn = document.getElementById("rand3");
var rand1OutEl = document.getElementById("rand1-out");
var rand2OutEl = document.getElementById("rand2-out");
var rand3OutEl = document.getElementById("rand3-out");

rand1Btn.addEventListener("click", showRand1);
rand2Btn.addEventListener("click", showRand2);

function showRand1() {
  var rand = Math.random();
  rand = rand.toFixed(3);
  rand1OutEl.innerHTML = rand;
}
function showRand2() {
  console.log("hello");
  var rand = Math.random() * 100;
  rand = Math.floor(rand);
  rand2OutEl.innerHTML = rand;
}

rand3Btn.addEventListener("click", showRand3);

function showRand3() {
  var rand = Math.random() * (5 - -5) + -5;
  rand = rand.toFixed(3);
  rand3OutEl.innerHTML = rand;
}

import { latinToMorse } from "./dictionaire.js";
import { morseToLatin } from "./dictionaire.js";

const traduction = document.getElementById("traduction");
const btnTraduction = document.getElementById("btnTraduction");
const btnSwitch = document.getElementById("switch");
const H1 = document.getElementById("H1");
let togglebtn = true;

function getLatinCharacterList(string) {
  let arrays = [];
  for (let i = 0; i < string.length; i++) {
    arrays.push(string[i]);
  }
  return arrays;
}

function translateLatinCharacter(Character) {
  return latinToMorse[Character.toUpperCase()];
}
function encode(string) {
  let encoded = "";
  let arrays = getLatinCharacterList(string);
  for (let i = 0; i < arrays.length; i++) {
    encoded += translateLatinCharacter(arrays[i]) + " ";
  }
  return encoded;
}

function getMorseCharacterList(string) {
  return string.split(" ");
}
function translateMorseCharacter(Character) {
  return morseToLatin[Character];
}
function decode(string) {
  let decoded = "";
  let arrays = getMorseCharacterList(string);
  for (let i = 0; i < arrays.length; i++) {
    decoded += translateMorseCharacter(arrays[i]);
  }
  return decoded.toLowerCase();
}

btnTraduction.addEventListener("click", () => {
  let input = document.getElementById("input").value;
  if (togglebtn == true) {
    traduction.innerText = encode(input);
  } else {
    traduction.innerText = decode(input);
  }
});

btnSwitch.addEventListener("click", () => {
  if (togglebtn == true) {
    togglebtn = false;
    H1.innerText = "traducteur morse vers latin";
    let traduire = document.getElementById("input").value;
    document.getElementById("input").value = traduction.innerText;
    traduction.innerText = traduire;
  } else if (togglebtn == false) {
    togglebtn = true;
    H1.innerText = "traducteur latin vers morse";
    let traduire = document.getElementById("input").value;
    document.getElementById("input").value = traduction.innerText;
    traduction.innerText = traduire;
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    btnTraduction.click();
  }
});

// console.log(encode("hello world"))
// console.log(decode(".... . .-.. .-.. --- / .-- --- .-. .-.. -.."))

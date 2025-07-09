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
  if (string != "") {
    let encoded = "";
    let arrays = getLatinCharacterList(string);
    for (let i = 0; i < arrays.length; i++) {
      encoded += translateLatinCharacter(arrays[i]) + " ";
    }
    return encoded;
  }
}

function getMorseCharacterList(string) {
  return string.split(" ");
}
function translateMorseCharacter(Character) {
  return morseToLatin[Character];
}
function decode(string) {
  if (string != "") {
    let decoded = "";
    let arrays = getMorseCharacterList(string);
    for (let i = 0; i < arrays.length; i++) {
      decoded += translateMorseCharacter(arrays[i]);
    }
    return decoded.toLowerCase();
  }
}
function isMorse(input) {
  for (let i = 0; i < input.length; i++) {
    if (
      input[i] != "/" &&
      input[i] != "." &&
      input[i] != "-" &&
      input[i] != " "
    ) {
      return false;
    }
  }
  return true;
}

btnTraduction.addEventListener("click", () => {
  let input = document.getElementById("input").value;
  if (input != "") {
    if (togglebtn == true) {
      if (isMorse(input) == true) {
        togglebtn = false;
        H1.innerText = "Traducteur morse vers latin";
        btnTraduction.click();
      } else {
        traduction.innerText = encode(input);
      }
    } else {
      if (isMorse(input) == false) {
        togglebtn = true;
        H1.innerText = "Traducteur latin vers morse";
        btnTraduction.click();
      } else {
        traduction.innerText = decode(input);
      }
    }
  }
});

btnSwitch.addEventListener("click", () => {
  if (togglebtn == true) {
    togglebtn = false;
    H1.innerText = "Traducteur morse vers latin";
    document.getElementById("input").value = traduction.innerText;
    btnTraduction.click();
  } else if (togglebtn == false) {
    togglebtn = true;
    H1.innerText = "Traducteur latin vers morse";
    document.getElementById("input").value = traduction.innerText;
    btnTraduction.click();
  }
});

let allumettes = 50;
let multiplayer = confirm("voulez vous jouez en multijoueur ?");
let nbPlayer = "";
play();

function multiplayers(nb) {
  soustrairAllumettes(player(nb));
  alert(`il reste ${allumettes} allumettes`);
  if (allumettes <= 0) {
    alert(`joueur ${nb} a gagné`);
  }
}

function soustrairAllumettes(nbAllumettes) {
  allumettes -= nbAllumettes;
}

function player(nb) {
  while (true) {
    let nbUser = prompt(
      `joueur${nb} combien d'allumettes souhaite tu retirer ? tu peut retiré jusqu'a 6 allumettes`
    );
    if (nbUser > 6 || nbUser < 1) {
      alert("j'ai dis entre 1 et 6 allumettes");
    } else if (nbUser > allumettes) {
      alert(`il reste seulement ${allumettes} allumettes`);
    } else {
      return nbUser;
    }
  }
}
function bot() {
  let nbRandom = ((Math.random().toFixed(1) * 10) % 6) + 1;
  if (allumettes <= 6) {
    nbRandom = allumettes;
  }
  return nbRandom;
}

function play() {
  if (multiplayer == true) {
    while (true){
        nbPlayer = prompt(`vous voulez jouer a combien de joueur`);
        if(nbPlayer>=2){
            break
        }else{
            alert(`il faut minimum 2 joueur`)
        }
    }
  }
  let game = true;
  while (game == true) {
    multiplayers(1);
    if (allumettes <= 0) {
      game = false;
    }
    if (multiplayer == false) {
      let nbRandom = bot();
      soustrairAllumettes(nbRandom);
      alert(
        `l'adversaire retire ${nbRandom} allumettes il en reste ${allumettes}`
      );
      if (allumettes <= 0) {
        alert(`vous avez perdu`);
        game = false;
      }
    } else {
      for (i = 2; i <= nbPlayer; i++) {
        multiplayers(i);
        if (allumettes <= 0) {
          game = false;
          break;
        }
      }
    }
  }
}

// for (index=0; index<100; index++){
//     console.log((Math.random().toFixed(1) * 10) % 6) + 1;
// }

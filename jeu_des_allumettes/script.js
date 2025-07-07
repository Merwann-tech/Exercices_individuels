let allumettes = 50;
let multiplayer = confirm("voulez vous jouez a deux joueur?");
play();

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
  let game = true;
  while (game == true) {
    soustrairAllumettes(player(1));
    alert(`il reste ${allumettes} allumettes`);
    if (allumettes <= 0) {
      alert(`joueur 1 a gagné`);
      game = false;
    } else {
      if (multiplayer == true) {
        soustrairAllumettes(player(2));
        alert(`il reste ${allumettes} allumettes`);
        if (allumettes <= 0) {
          alert(`joueur 2 a gagné`);
          game = false;
        }
      } else {
        let nbRandom = bot();
        soustrairAllumettes(nbRandom);
        alert(
          `l'adversaire retire ${nbRandom} allumettes il en reste ${allumettes}`
        );
        if (allumettes <= 0) {
          alert(`vous avez perdu`);
          game = false;
        }
      }
    }
  }
}

// for (index=0; index<100; index++){
//     console.log((Math.random()%6)+1)
// }

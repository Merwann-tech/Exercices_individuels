let allumettes = 50;
let multiplayer = confirm("Voulez-vous jouer en multijoueur ?");
let nbPlayer = "";
play();

function nbPlayers() {
  if (multiplayer == true) {
    while (true) {
      nbPlayer = prompt(`À combien de joueurs voulez-vous jouer ?`);
      if (nbPlayer >= 2) {
        break;
      } else {
        alert(`Il faut au minimum 2 joueurs.`);
      }
    }
  }
}

function multiplayers(nb) {
  soustrairAllumettes(player(nb));
  alert(`Il reste ${allumettes} allumettes.`);
  if (allumettes <= 0) {
    alert(`Le joueur ${nb} a gagné.`);
  }
}

function soustrairAllumettes(nbAllumettes) {
  allumettes -= nbAllumettes;
}

function player(nb) {
  while (true) {
    let nbUser = prompt(
      `Joueur ${nb} : combien d'allumettes souhaitez-vous retirer ? Vous pouvez retirer jusqu'à 6 allumettes.`
    );
    if (nbUser > 6 || nbUser < 1) {
      alert("Veuillez choisir entre 1 et 6 allumettes.");
    } else if (nbUser > allumettes) {
      alert(`Il reste seulement ${allumettes} allumettes.`);
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
  nbPlayers();
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
        `L'adversaire retire ${nbRandom} allumettes. Il en reste ${allumettes}.`
      );
      if (allumettes <= 0) {
        alert(`Vous avez perdu.`);
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

function isValidDate(Date) {
  Date = Date.split("/");
  if (999 < Date[2] && Date[2] < 10000) {
    if (Date[1] < 13 && Date[1] > 0) {
      if (maxDaysInMonth(Date[0], Date[1], Date[2]) == true) {
        return true;
      }
    }
  }
  return false;
}

function maxDaysInMonth(day, month, annee) {
  const month30 = ["04", "06", "09", "11"];
  if (day > 0 && day <= 31) {
    if (day <= 28) {
      return true;
    } else if (day <= 29) {
      if (month != "02") {
        return true;
      } else if ((annee % 4) == 0) {
        return true;
      }
    } else if (day <= 30) {
      if (month != "02") {
        return true;
      }
    } else if (day <= 31) {
      if (!month30.includes(month)) {
        return true;
      }
    }
  }
  return false;
}

function isPalindrome(Palindrome) {
  let kayak = 0;
  for (let i = 0; i < Palindrome.length; i++) {
    if (Palindrome[i] == Palindrome[Palindrome.length - 1 - i]) {
      kayak++;
    }
  }
  if (kayak == Palindrome.length) {
    return true;
  } else {
    return false;
  }
}

function isDatePalindrome(Date) {
  if (isValidDate(Date) == true) {
    Date = Date.split("/").join("");
    return isPalindrome(Date);
  }
  return false;
}

function getNextPalindromes(nb) {
  let i = 0;
  let nbPalindromes = 0;
  while (nbPalindromes < nb) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    const jour = String(date.getDate()).padStart(2, "0");
    const mois = String(date.getMonth() + 1).padStart(2, "0");
    const annee = date.getFullYear();

    const dateFormattee = `${jour}/${mois}/${annee}`;
    if (isDatePalindrome(dateFormattee) == true) {
      console.log(dateFormattee);
      nbPalindromes++;
    }
    if (isValidDate(dateFormattee) == false) {
      break;
    }
    i++;
  }
}

getNextPalindromes(999999);



// function isPalindrome(Date) {
//   Date = Date.split("/");
//   let kay = Date[0] + Date[1];
//   let yak = Date[2];
//   let kayak = 0;
//   for (let i = 0; i < 4; i++) {
//     if (kay[i] == yak[3 - i]) {
//       kayak++;
//     }
//   }
//   if (kayak == 4) {
//     return true;
//   } else {
//     return false;
//   }
// }

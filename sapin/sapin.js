

function afficherTriangleDroite(n) {
    let ligne = "\\"
    console.log(ligne)
    for (let i = 2; i <= n; i++) {
        ligne = "*" + ligne
        console.log(ligne)
    }
}

// afficherTriangleDroite(5)

function afficherTriangleGauche(n) {
    for (let i1 = 1; i1 <= n; i1++) {
        let ligne = "/"
        for (let i = (n + 1 - i1); i >= 1; i--) {
            ligne = " " + ligne
        }
        for (let i = i1; i > 1; i--) {
            ligne = ligne + "*"
        }
        console.log(ligne)
    }
}

// afficherTriangleGauche(5)







function afficherEtoiles(n, espacement) {
    let ligne = ""
    for (let i = 1; i <= n; i++) {
        ligne += "*"
    }
    for (let i = 1; i <= espacement; i++) {
        ligne = " " + ligne
    }
    console.log(ligne)
}

// afficherEtoiles(2)
// afficherEtoiles(5)


function afficherRectangle(hauteur, largeur, espacement) {
    for (let i = 1; i <= hauteur; i++) {
        afficherEtoiles(largeur, espacement)
    }
}

// afficherRectangle(5, 5)


function afficherEtage(hauteur, pointe_offset, espacement,decoration) {
    for (let i1 = 1 + pointe_offset; i1 <= hauteur + pointe_offset; i1++) {
        let ligne = "/"
        for (let i = (espacement + hauteur + pointe_offset - i1); i >= 1; i--) {
            ligne = " " + ligne
        }
        for (let i = i1; i > 1; i--) {
            random = getRandomInt(100)
            if (random < decoration) {
                if (random <= decoration/2) {
                    ligne = ligne + "+"
                } else {
                    ligne = ligne + "o"
                }
            } else {
                ligne = ligne + "*"
            }
        }
        ligne += "|"
        for (let i = i1; i > 1; i--) {
            random = getRandomInt(100)
            if (random < decoration) {
                if (random <= decoration/2) {
                    ligne = ligne + "+"
                } else {
                    ligne = ligne + "o"
                }
            } else {
                ligne = ligne + "*"
            }
        }
        ligne += "\\"
        console.log(ligne)
    }
}

// afficherEtage(3, 0, 4)
// afficherEtage(3, 2, 2)
// afficherEtage(3, 4, 0)

function forceOdd(n) {
    return n | 1;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function afficherSapin(etages, hauteur_etage,pourcentageDeco) {
    let decalage = 1
    let etoile = "+"
    let centre = hauteur_etage * etages + hauteur_etage
    for (let i = 0; i < centre; i++) {
        etoile = " " + etoile
    }
    console.log(etoile)
    let pointe_offset = 0
    let espacement = hauteur_etage * etages
    for (let i = etages; i >= 1; i--) {
        afficherEtage(hauteur_etage, pointe_offset, espacement,pourcentageDeco)
        espacement = espacement - hauteur_etage + decalage
        pointe_offset = pointe_offset + hauteur_etage - decalage
    }
    let largeur = forceOdd((etages * hauteur_etage) / 2)
    let hauteur = largeur / 2
    let centreTron = Math.ceil(centre - largeur / 2)
    afficherRectangle(hauteur, largeur, centreTron)
}

afficherSapin(10,10,10)



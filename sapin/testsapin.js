

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

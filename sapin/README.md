# 🎄 Générateur de Sapin en JavaScript

## 📌 Enoncé

Nous allons utiliser les boucles et les imbrications de boucles pour construire un beau sapin, roi des forêts 🎄.

**Objectif :** Écrire un programme en **JavaScript** qui génère un sapin en ASCII, avec plusieurs fonctions pour organiser le code.  
Le sapin doit comporter une pointe, plusieurs étages alignés, un tronc, et des décorations aléatoires (`o` et `+`).

Exemple attendu :

```
       + 
      /|\
     /*|*\
    /**|**\
    /*o|**\
   /***|***\
  /**+*|*o**\
  /****|****\
 /***o*|**+**\
/*o*+**|***o**\
      ###
      ###
      ###
```

---

## 🛠️ Étapes de réalisation

1. **Afficher une ligne d’étoiles**  
   → `afficherEtoiles(n)`

2. **Afficher un rectangle d’étoiles**  
   → `afficherRectangle(hauteur, largeur)`

3. **Construire un triangle d’étoiles**  
   → `afficherTriangleDroite(n)` et `afficherTriangleGauche(n)`

4. **Assembler les deux triangles et la pointe du sapin**  
   → `afficherEtage(hauteur, pointe_offset, espacement, decoration)`

5. **Assembler plusieurs étages pour former un sapin complet**  
   → `afficherSapin(etages, hauteur_etage, pourcentageDeco)`

6. **Ajouter un tronc et des décorations**  
   - `+` pour l’étoile en haut  
   - `o` et `+` insérés aléatoirement avec `Math.random()`  

---

## 🚀 Utilisation

### 1. Cloner le projet
```bash
git clone https://github.com/ton-pseudo/sapin-js.git
cd sapin-js
```

### 2. Lancer le script
Avec Node.js :
```bash
node sapin.js
```

---

## 📂 Fonctions principales

- `afficherEtoiles(n)` → affiche `n` étoiles sur une ligne.
- `afficherRectangle(hauteur, largeur, espacement)` → affiche un rectangle d’étoiles.
- `afficherTriangleDroite(n)` → affiche un triangle aligné à droite.
- `afficherTriangleGauche(n)` → affiche un triangle aligné à gauche.
- `afficherEtage(hauteur, pointe_offset, espacement, decoration)` → affiche un étage du sapin avec décoration.
- `afficherSapin(etages, hauteur_etage, pourcentageDeco)` → assemble tous les éléments pour former un sapin complet.

---

## ✨ Exemple

```js
// Sapin de 10 étages, chaque étage de hauteur 10, avec 10% de décorations
afficherSapin(10, 10, 10)
```

Affichera un grand sapin décoré dans la console 🎄

---

## 🔮 Améliorations possibles

- Permettre à l’utilisateur de choisir les paramètres (`prompt` ou arguments).
- Ajouter plusieurs sapins côte à côte.
- Varier la densité et le type de décorations.
- Exporter le sapin dans un fichier `.txt`.

---

## 📚 Contraintes

- Langage : **JavaScript**
- Utiliser **des fonctions** pour organiser le code
- Utiliser des **boucles imbriquées**
- S’inspirer de la progression étape par étape (triangle → étage → sapin complet)

Bienvenue au mastermind vous avez 12 essaie pour deviner la couleurs et l'ordre de 4 couleurs
voulez-vous jouez a la version difficile oui/non
=> oui
Les couleurs disponibles sont rouge vert bleu jaune rose noir orange violet
Ecrivez vos couleur séparer par un espace

=> rouge bleu vert jaune
il y a 2 couleur correct et bien placé
il y a 1 couleur correct mais male placé
réponse incorect il vous reste 11 essaie
...
Améliorations possibles
Ajouter une interface graphique pour rendre le jeu plus visuel et interactif.

Permettre des combinaisons avec des couleurs répétées.

Implémenter une option pour que l’ordinateur devine la combinaison du joueur.

yaml
Copier le code

---

Si tu veux, je peux aussi te **faire une version encore plus stylée avec badges GitHub et emojis pour chaque section**, ce qui donne un rendu très professionnel pour un dépôt.  

Veux‑tu que je fasse ça ?






Vous avez dit :
oui


ChatGPT a dit :
Parfait ! Voici une version améliorée et stylée en Markdown avec badges et emojis pour ton README :

markdown
Copier le code
# 🎨 Mastermind en Python

![Python](https://img.shields.io/badge/python-3.11-blue?logo=python&logoColor=white)
![Licence](https://img.shields.io/badge/license-MIT-green)

## 📝 Description

Ce projet est une implémentation du jeu classique **Mastermind** en Python.  
Le jeu oppose un **codemaker** (l'ordinateur) et un **codebreaker** (le joueur) :

- Le codemaker choisit une combinaison de couleurs.
- Le codebreaker doit deviner cette combinaison dans le bon ordre.
- Après chaque proposition, le joueur reçoit un retour sur :
  - ✅ Couleurs correctes et bien placées
  - ⚠️ Couleurs correctes mais mal placées

Le jeu propose une version simplifiée et une version "difficile" avec plus de couleurs.

---

## 🎯 Fonctionnalités

Le programme inclut plusieurs fonctions pour gérer le jeu :

1. **`genereListRandom()`** : Génère aléatoirement une combinaison de 4 couleurs parmi 8 possibles.  
2. **`verifierCouleur(combinaison)`** : Vérifie que la combinaison du joueur contient uniquement les couleurs disponibles.  
3. **`verifierReponse(combinaison)`** : Retourne `True` si la combinaison proposée correspond au code secret.  
4. **`couleurEnCommuns(combinaison)`** : Compte le nombre de couleurs correctes mais mal placées.  
5. **`couleurBienPlacer(combinaison)`** : Compte le nombre de couleurs correctes et bien placées.  
6. **`fomaterReponse(combinaison)`** : Formate la réponse du joueur en liste de couleurs.  
7. **`lancerJeux()`** : Lance et gère l’ensemble du jeu, les essais et les retours au joueur.

---

## 🎮 Règles du jeu

- La combinaison à deviner comporte **4 couleurs**.  
- Le joueur a **12 essais** pour deviner correctement.  
- Modes disponibles :
  - **Version normale** : retour sous forme de chiffres (`0` = couleur incorrecte, `1` = couleur correcte mais mal placée, `2` = couleur correcte et bien placée).  
  - **Version difficile** : retour sous forme de texte indiquant le nombre de couleurs bien placées et mal placées.

---

## 🌈 Couleurs disponibles

rouge, bleu, vert, jaune, orange, violet, rose, noir

yaml
Copier le code

---

## 💻 Installation et utilisation

1. **Cloner le projet** ou télécharger le fichier Python.  
2. **Exécuter le script** avec Python 3 :

```bash
python mastermind.py
Suivre les instructions à l’écran pour choisir la difficulté et proposer des combinaisons.

🕹️ Exemple de partie
python-repl
Copier le code
Bienvenue au mastermind vous avez 12 essaie pour deviner la couleurs et l'ordre de 4 couleurs
voulez-vous jouez a la version difficile oui/non
=> oui
Les couleurs disponibles sont rouge vert bleu jaune rose noir orange violet
Ecrivez vos couleur séparer par un espace

=> rouge bleu vert jaune
il y a 2 couleur correct et bien placé
il y a 1 couleur correct mais male placé
réponse incorect il vous reste 11 essaie
...
🚀 Améliorations possibles
Ajouter une interface graphique pour rendre le jeu plus visuel et interactif.

Permettre des combinaisons avec des couleurs répétées.

Implémenter une option pour que l’ordinateur devine la combinaison du joueur.

📄 Licence
MIT License © 2025
Mastermind en Python
Description

Ce projet est une implémentation du jeu classique Mastermind en Python. Le jeu oppose un codemaker (l'ordinateur) et un codebreaker (le joueur) :

Le codemaker choisit une combinaison de couleurs.

Le codebreaker doit deviner cette combinaison en respectant l’ordre des couleurs.

Après chaque proposition, le joueur reçoit un retour sur :

le nombre de couleurs correctes et bien placées,

le nombre de bonnes couleurs mal placées.

Le jeu propose une version simplifiée et une version "difficile" avec plus de couleurs.

Fonctionnalités

Le programme inclut plusieurs fonctions pour gérer le jeu :

genereListRandom()
Génère aléatoirement une combinaison de 4 couleurs parmi 8 possibles.

verifierCouleur(combinaison)
Vérifie que la combinaison du joueur contient uniquement les couleurs disponibles.

verifierReponse(combinaison)
Retourne True si la combinaison proposée correspond au code secret, sinon False.

couleurEnCommuns(combinaison)
Compte le nombre de couleurs correctes mais mal placées.

couleurBienPlacer(combinaison)
Compte le nombre de couleurs correctes et bien placées.

fomaterReponse(combinaison)
Formate la réponse du joueur (entrée utilisateur) en liste de couleurs.

lancerJeux()
Lance et gère l’ensemble du jeu, les essais et les retours au joueur.

Règles du jeu

La combinaison à deviner comporte 4 couleurs.

Le joueur a 12 essais pour deviner correctement.

Le joueur peut choisir :

Version normale : retour sous forme de chiffres (0 = couleur incorrecte, 1 = couleur correcte mais mal placée, 2 = couleur correcte et bien placée).

Version difficile : retour sous forme de texte indiquant le nombre de couleurs bien placées et mal placées.

Couleurs disponibles
rouge, bleu, vert, jaune, orange, violet, rose, noir

Installation et utilisation

Cloner le projet ou télécharger le fichier Python.

Exécuter le script avec Python 3 :

python mastermind.py


Suivre les instructions à l’écran pour choisir la difficulté et proposer des combinaisons.

Exemple de partie
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

Si tu veux, je peux te générer une version Markdown optimisée avec badges et sections stylisées prête à mettre sur GitHub pour que ça ait l’air professionnel. Veux‑tu que je fasse ça ?
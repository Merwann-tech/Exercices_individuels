import random

couleur = ["rouge", "bleu", "vert", "jaune", "orange", "violet", "rose", "noir"]
resultat = []
totalEssaie = 12
essaie = 0 
info = []
difficulter = ""


def genereListRandom():
    global resultat
    resultat = []
    for i in range(4):
        nbRandom = random.randint(0, 7)
        resultat.append(couleur[nbRandom])
    return resultat

def verifierCouleur(combinaison) :
    return set(combinaison).issubset(couleur) 

def verifierReponse(combinaison) :
    if combinaison == resultat :
        return True
    else :
        return False
    
def couleurEnCommuns(combinaison) :
    global info
    global difficulter
    info = [0,0,0,0]
    nbcouleurEnCommuns = 0
    resultatTemp = resultat.copy()
    for i in range(len(combinaison)) :
        if combinaison[i] in resultatTemp :
            if difficulter == "oui" :
                resultatTemp.remove(combinaison[i])
                nbcouleurEnCommuns += 1
            else:
                info[i] += 1
    return nbcouleurEnCommuns

def couleurBienPlacer(combinaison) :
    global info
    nbcouleurBienPlacer = 0
    for i in range(len(combinaison)) :
        if combinaison[i] == resultat[i]:
            nbcouleurBienPlacer += 1
            info[i] += 1
    return nbcouleurBienPlacer

def fomaterReponse(combinaison) :
    combinaisonFormater = combinaison.split(" ")
    return combinaisonFormater

def lancerJeux() :
    global difficulter
    genereListRandom()
    essaie = 0
    reponseCorrect = False
    print("Bienvenue au mastermind vous avez 12 essaie pour deviner la couleurs et l'ordre de 4 couleurs")
    print("voulez-vous jouez a la version difficile oui/non")
    print()
    choixDifficulter = False
    while choixDifficulter == False:
        difficulter = input("=>")
        if difficulter == "oui" :
            print("Les couleurs disponibles sont rouge vert bleu jaune rose noir orange violet")
            print("Ecrivez vos couleur séparer par un espace")
            print()
            choixDifficulter = True
        elif difficulter == "non" :
            print("Les couleurs disponibles sont rouge vert bleu jaune rose noir orange violet")
            print("Ecrivez vos couleur séparer par un espace")
            print("0=couleur incorrecte")
            print("1=couleur correcte mais male placer")
            print("2=couleur correcte et bien placer")
            print()
            choixDifficulter = True
        else :
            print("Répondez oui ou non")
            print()
    while reponseCorrect == False :
        essaie += 1
        if essaie == totalEssaie :
            print("Perdu tu as utiliser tout tes essaie")
            print(f"le resultat êtais {resultat[0]}/{resultat[1]}/{resultat[2]}/{resultat[3]}")
            reponseCorrect = True
        combinaison = input("=>")
        combinaisonFormater = fomaterReponse(combinaison)
        if verifierCouleur(combinaisonFormater) == True :
            if len(combinaisonFormater) == len(resultat) :
                if verifierReponse(combinaisonFormater) == True :
                    print(f"bien jouer tu as reussie en seulement {essaie} essaie")
                    reponseCorrect = True
                else :
                    nbcouleurEnCommuns = couleurEnCommuns(combinaisonFormater)
                    nbcouleurBienPlacer = couleurBienPlacer(combinaisonFormater)
                    if difficulter == "oui" :
                        print(f"il y a {nbcouleurBienPlacer} couleur correct et bien placé ")
                        print(f"il y a {nbcouleurEnCommuns - nbcouleurBienPlacer} couleur correct mais male placé ")
                        print(f"réponse incorect il vous reste {totalEssaie - essaie} essaie")
                        print()
                    else :
                        print(info)
                        print(f"réponse incorect il vous reste {totalEssaie - essaie} essaie")
                        print()
            else :
                print(f"vous avez poposer trop de couleur il vous reste {totalEssaie - essaie} essaie")
                print()
        else :
            print(f"les couleur choisie ne sont pas dans les couleur proposé ou dans le bon format il vous reste {totalEssaie - essaie} essaie")
            print()

lancerJeux() 










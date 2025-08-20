Bien sûr ! Voici le README.md prêt à copier-coller directement :

# Projet SQL : Base de données Edusign

## Contexte et objectifs

L’objectif de ce projet est de se familiariser avec les bases de SQL à travers la création d’une base de données simple et relationnelle pour l’application fictive **Edusign**.  

Le projet est découpé en trois grandes étapes :  

1. **Premiers pas** : Comprendre l’importance de découper ses tables et créer un schéma simple.  
2. **Structuration** : Créer des tables relationnelles pour réduire la redondance des données.  
3. **Requêtes** : Réaliser des requêtes SQL de différents niveaux (facile, moyen, moyen+).  

---

## Étape 1 : Premiers pas

On commence avec une table unique **edusign** regroupant toutes les informations sur les apprenants et la date de signature.  

### Observation

- La table initiale contient des données redondantes (nom, prénom et email répétés pour chaque signature).  
- Cette redondance est inefficace et peu pratique pour l’exploitation des données.  

---

## Étape 2 : Structuration de la base de données

Pour améliorer la structure :  

1. Création de la table **users** pour référencer les apprenants :  

```sql
CREATE TABLE users(
    id INTEGER PRIMARY KEY,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    email TEXT UNIQUE
);


Création de la table edusign avec une référence vers users :

CREATE TABLE edusign(
    id INTEGER PRIMARY KEY,
    user_id INTEGER NOT NULL,
    date_signature DATETIME NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);


Insertion de données fictives pour tester la base :

INSERT INTO users (firstname, lastname, email) VALUES ('Ada', 'Lovelace', 'ada@test.fr');
INSERT INTO users (firstname, lastname, email) VALUES ('Beatrice', 'Worsley', 'bea@test.fr');
INSERT INTO users (firstname, lastname, email) VALUES ('Bella', 'Guerin', 'bella@test.fr');
INSERT INTO users (firstname, lastname, email) VALUES ('Barbara', 'Chase', 'barbara@test.fr');

Étape 3 : Requêtes SQL
Niveau facile

Sélection de toutes les lignes de users :

SELECT * FROM users;


Sélection de la ligne où le prénom est Ada :

SELECT * FROM users WHERE firstname = 'Ada';


Sélection des lignes dont le prénom commence par "B" :

SELECT * FROM users WHERE firstname LIKE 'B%';


Comptage des lignes de la table users :

SELECT COUNT(*) FROM users;


Comptage des lignes dont le prénom commence par "B" :

SELECT COUNT(*) FROM users WHERE firstname LIKE 'B%';


Affichage uniquement des prénoms :

SELECT firstname FROM users;

Niveau moyen

Insertion des signatures dans edusign :

INSERT INTO edusign (user_id, date_signature) VALUES (1, '2024-05-30 09:30:00');
INSERT INTO edusign (user_id, date_signature) VALUES (3, '2024-05-30 09:30:00');
INSERT INTO edusign (user_id, date_signature) SELECT id, '2024-09-01 09:30:00' FROM users;


Sélection de toutes les lignes de edusign ordonnées par date puis par ID :

SELECT * FROM edusign ORDER BY date_signature DESC, id ASC;


Sélection des lignes pour la date 2024-05-30 09:30:00 :

SELECT * FROM edusign WHERE date_signature = '2024-05-30 09:30:00';

Niveau moyen+ (bonus)

Nombre d’apprenants par date :

SELECT date(date_signature) AS date_sign,
       COUNT(user_id) AS nb_apprenants
FROM edusign
GROUP BY date(date_signature)
ORDER BY date_sign ASC;


Nombre de signatures pour l’apprenant Bella :

SELECT COUNT(*) AS volume
FROM edusign e
JOIN users u ON e.user_id = u.id
WHERE u.firstname = 'Bella';

Remarques et bonnes pratiques

Conventions : nommage en snake_case pour les colonnes et tables.

Clés primaires et étrangères : permettent de maintenir l’intégrité des données.

Redondance : séparer les informations personnelles des données transactionnelles évite la duplication et facilite les requêtes.

Testez vos requêtes avec des données fictives avant d’insérer en production.

Conclusion

Ce projet permet de :

Comprendre les bases de la modélisation relationnelle.

Pratiquer la création de tables et l’insertion de données.

Maîtriser les requêtes SQL de différents niveaux de complexité.

Appliquer les bonnes pratiques pour concevoir une base de données efficace et maintenable.
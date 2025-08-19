DROP TABLE IF EXISTS edusign;
DROP TABLE IF EXISTS users;

CREATE TABLE edusign(
    id INTEGER PRIMARY KEY,
    user_id INTEGER NOT NULL,
    date_signature DATETIME NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE TABLE users(
    user_id INTEGER PRIMARY KEY,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    email TEXT UNIQUE
);


INSERT INTO users (firstname, lastname, email) VALUES ('Ada', 'Lovelace', 'ada@test.fr');
INSERT INTO users (firstname, lastname, email) VALUES ('Beatrice', 'Worsley', 'bea@test.fr');
INSERT INTO users (firstname, lastname, email) VALUES ('Bella', 'Guerin', 'bella@test.fr');
INSERT INTO users (firstname, lastname, email) VALUES ('Barbara', 'Chase', 'barbara@test.fr');


SELECT * FROM users;
SELECT * FROM users WHERE firstname = 'Ada';
SELECT * FROM users WHERE firstname LIKE 'B%';
SELECT COUNT(*) FROM users;
SELECT COUNT(*) FROM users WHERE firstname LIKE 'B%';
SELECT firstname FROM users;

INSERT INTO edusign (user_id, date_signature) VALUES (1, '2024-05-30 09:30:00');
INSERT INTO edusign (user_id, date_signature) VALUES (3, '2024-05-30 09:30:00');
INSERT INTO edusign (user_id, date_signature) SELECT user_id, '2024-09-01 09:30:00' FROM users;
SELECT * FROM edusign ORDER BY date_signature DESC, id asc;
SELECT * FROM edusign WHERE date_signature = '2024-05-30 09:30:00';
SELECT COUNT(*) FROM edusign;

SELECT date(date_signature) AS date_sign,
       COUNT(user_id) AS nb_apprenants
FROM edusign
GROUP BY date(date_signature)
ORDER BY date_sign ASC;

SELECT COUNT(*) AS volume
FROM edusign e
JOIN users u ON e.user_id = u.user_id
WHERE u.firstname = 'Bella';

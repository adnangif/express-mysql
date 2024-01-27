CREATE SCHEMA notesdb;
USE notesdb;

CREATE TABLE notes(
id integer AUTO_INCREMENT,
first_name VARCHAR(40),
last_name VARCHAR(40) NOT NULL,
age integer NOT NULL,
PRIMARY KEY(id)
);
    DROP DATABASE IF EXISTS burgers_db;
    CREATE DATABASE burgers_db;
    USE burgers_db;

-- Created the table "schools" 
CREATE TABLE burgers
(
  id int NOT NULL AUTO_INCREMENT,
    burgers_name  varchar(150) NOT NULL,
    devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

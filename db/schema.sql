    CREATE DATABASE burgers_db;
    USE burgers_db;

-- Created the table "schools" 
CREATE TABLE burgers
(
  id int AUTO_INCREMENT,
  burgers_name varchar (150) NOT NULL,
  devoured BOOLEAN,
  PRIMARY KEY (id)
);

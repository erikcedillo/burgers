USE burgers_db;
INSERT INTO burgers (burger_name)
 VALUES ('cheeseburger');
INSERT INTO burgers (burger_name) 
VALUES ('baconburger');
INSERT INTO burgers (burger_name, devoured)
 VALUES ('quarterpounder', true);

 SELECT * FROM burgers;
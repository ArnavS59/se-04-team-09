CREATE DATABASE if not exists flaskapp;
USE flaskapp;

CREATE TABLE Game (
	session_id INT AUTO_INCREMENT,
	session_length INT NOT NULL,
	distributor_present BOOLEAN NOT NULL,
	wholesaler_present BOOLEAN NOT NULL,
	holding_cost FLOAT NOT NULL,
	backlog_cost FLOAT NOT NULL,
	-- active BOOLEAN NOT NULL,
	info_sharing BOOLEAN NOT NULL,
	-- info_delay INT NOT NULL,
	rounds_completed INT NOT NULL,
	-- is_default_game BOOLEAN NOT NULL,
	starting_inventory INT NOT NULL,
	PRIMARY KEY (session_id)
);

ALTER TABLE Game AUTO_INCREMENT=1;

CREATE TABLE User (
	id INT AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL,
	password VARCHAR(50) NOT NULL,
	isInstruct TINYINT(1),
	PRIMARY KEY (id)
);

ALTER TABLE User AUTO_INCREMENT=100;

CREATE TABLE Player (
	id INT NOT NULL REFERENCES User ON DELETE CASCADE,
	role INT,
	PRIMARY KEY (id)	
);


CREATE TABLE Instructor (
	id INT NOT NULL REFERENCES User ON DELETE CASCADE,
	my_default_game VARCHAR(20),
	PRIMARY KEY (id)
);

CREATE TABLE Round_History (
	p_id INT NOT NULL,
	week INT,
	inventory INT,
	backorder INT,
	order_request INT,
	shipped_out INT,
	FOREIGN KEY (p_id) REFERENCES Player(id) ON DELETE CASCADE
);

CREATE TABLE Demand_Pattern (
	id INT NOT NULL,
	name INT NOT NULL,
	weeks INT NOT NULL,
	owned_by INT NOT NULL,
	FOREIGN KEY (owned_by) REFERENCES User(id) ON DELETE CASCADE,
	PRIMARY KEY (id)
);

CREATE TABLE Demand (
	pattern_id INT NOT NULL,
	week INT NOT NULL,
	demand INT NOT NULL,
	FOREIGN KEY (pattern_id) REFERENCES Demand_Pattern(id) ON DELETE CASCADE
);

CREATE TABLE Instructs (
	i_id INT NOT NULL,
	p_id INT NOT NULL,
	FOREIGN KEY (i_id) REFERENCES Instructor(id) ON DELETE CASCADE,
	FOREIGN KEY (p_id) REFERENCES Player(id) ON DELETE CASCADE,
	PRIMARY KEY (i_id,p_id)
);

CREATE TABLE Monitors (
	i_id INT NOT NULL,
	g_id INT NOT NULL,
	FOREIGN KEY (i_id) REFERENCES Instructor(id) ON DELETE CASCADE,
	FOREIGN KEY (g_id) REFERENCES Game(session_id) ON DELETE CASCADE,	
	PRIMARY KEY (i_id,g_id)

);

CREATE TABLE Used_In (
	pattern_id INT NOT NULL,
	g_id INT NOT NULL,
	FOREIGN KEY (pattern_id) REFERENCES Demand_Pattern(id) ON DELETE CASCADE,
	FOREIGN KEY (g_id) REFERENCES Game(session_id) ON DELETE CASCADE,
	PRIMARY KEY (g_id,pattern_id)
);

CREATE TABLE Plays_In (
	p_id INT NOT NULL,
	g_id INT NOT NULL,
	FOREIGN KEY (p_id) REFERENCES Player(id) ON DELETE CASCADE,
	FOREIGN KEY (g_id) REFERENCES Game(session_id) ON DELETE CASCADE,
	PRIMARY KEY (p_id,g_id)
);
CREATE TABLE Game (
	session_id VARCHAR(20) NOT NULL,
	session_length INT NOT NULL,
	distributor_present BOOLEAN NOT NULL,
	wholesaler_present BOOLEAN NOT NULL,
	holding_cost FLOAT NOT NULL,
	backlog_cost FLOAT NOT NULL,
	active BOOLEAN NOT NULL,
	info_sharing BOOLEAN NOT NULL,
	info_delay INT NOT NULL,
	rounds_completed INT NOT NULL,
	is_default_game BOOLEAN NOT NULL,
	starting_inventory INT NOT NULL,
	PRIMARY KEY (session_id)
);

CREATE TABLE User (
	id VARCHAR(20) NOT NULL,
	name VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL,
	password VARCHAR(50) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE Player (
	id VARCHAR(20) NOT NULL REFERENCES User ON DELETE CASCADE,
	current_game VARCHAR(20),
	role INT,
	FOREIGN KEY (current_game) REFERENCES Game(session_id) ON DELETE SET NULL,
	PRIMARY KEY (id)	
);

CREATE TABLE Instructor (
	id VARCHAR(20) NOT NULL REFERENCES User ON DELETE CASCADE,
	my_default_game VARCHAR(20),
	FOREIGN KEY (my_default_game) REFERENCES Game(session_id) ON DELETE SET NULL,
	PRIMARY KEY (id)
);

CREATE TABLE Round_History (
	p_id VARCHAR(20),
	week INT,
	inventory INT,
	backorder INT,
	order_request INT,
	shipped_out INT,
    g_id VARCHAR(20),
    p_role INT
	FOREIGN KEY (p_id) REFERENCES Player(id) ON DELETE CASCADE
    FOREIGN KEY (g_id) REFERENCES Game(session_id) ON DELETE CASCADE
);

CREATE TABLE Demand_Pattern (
	id VARCHAR(20) NOT NULL,
	name VARCHAR(50) NOT NULL,
	weeks INT NOT NULL,
	owned_by VARCHAR(20),
	FOREIGN KEY (owned_by) REFERENCES User(id) ON DELETE SET NULL,
	PRIMARY KEY (id)
);

CREATE TABLE Demand (
	pattern_id VARCHAR(20) NOT NULL,
	week INT NOT NULL,
	demand INT NOT NULL,
	FOREIGN KEY (pattern_id) REFERENCES Demand_Pattern(id) ON DELETE CASCADE
);

CREATE TABLE Instructs (
	i_id VARCHAR(20) NOT NULL,
	p_id VARCHAR(20) NOT NULL,
	FOREIGN KEY (i_id) REFERENCES Instructor(id) ON DELETE CASCADE,
	FOREIGN KEY (p_id) REFERENCES Player(id) ON DELETE CASCADE
);

CREATE TABLE Monitors (
	i_id VARCHAR(20) NOT NULL,
	g_id VARCHAR(20) NOT NULL,
	FOREIGN KEY (i_id) REFERENCES Instructor(id) ON DELETE CASCADE,
	FOREIGN KEY (g_id) REFERENCES Game(session_id) ON DELETE CASCADE	
);

CREATE TABLE Used_In (
	pattern_id VARCHAR(20) NOT NULL,
	g_id VARCHAR(20) NOT NULL,
	FOREIGN KEY (pattern_id) REFERENCES Demand_Pattern(id) ON DELETE CASCADE,
	FOREIGN KEY (g_id) REFERENCES Game(session_id) ON DELETE CASCADE	
);

CREATE TABLE Plays_In (
	g_id VARCHAR(20) NOT NULL,
	p_id VARCHAR(20) NOT NULL,
	FOREIGN KEY (g_id) REFERENCES Game(session_id) ON DELETE CASCADE,
	FOREIGN KEY (p_id) REFERENCES Player(id) ON DELETE CASCADE
);
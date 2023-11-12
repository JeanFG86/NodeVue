drop table if exists j.card;
drop table if exists j.column;
drop table if exists j.board;

create table j.board (
	id_board serial primary key,
	name text
);

create table j.column (
	id_column serial primary key,
	id_board integer references j.board (id_board),
	name text,
	has_estimative boolean
);

create table j.card (
	id_card serial primary key,
	id_column integer references j.column (id_column),
	title text,
	estimative integer,
	color text,
	index integer
);

insert into j.board (name) values ('Projeto 1');
insert into j.column (id_board, name, has_estimative) values (1, 'Coluna A', true);
insert into j.column (id_board, name, has_estimative) values (1, 'Coluna B', true);
insert into j.column (id_board, name, has_estimative) values (1, 'Coluna C', true);
insert into j.card (id_column, title, color, estimative) values (1, 'Atividade 1', 'blue', 3);
insert into j.card (id_column, title, color, estimative) values (1, 'Atividade 2', 'yellow', 2);
insert into j.card (id_column, title, color, estimative) values (1, 'Atividade 3', 'red', 1);
insert into j.card (id_column, title, color, estimative) values (1, 'Atividade 4', 'green', 2);
insert into j.card (id_column, title, color, estimative) values (1, 'Atividade 5', 'orange', 5);
insert into j.card (id_column, title, color, estimative) values (1, 'Atividade 6', 'white', 6);
insert into j.board (name) values ('Projeto 2');
insert into j.column (id_board, name, has_estimative) values (2, 'Coluna A', true);
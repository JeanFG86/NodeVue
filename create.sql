--drop table j.card;
--drop table j.column;
--drop table j.board;

create table j.board(
    id_board serial primary key,
    name text
);

create table j.column(
    id_column serial primary key,
    id_board integer references j.board(id_board),
    name text,
    has_estimative boolean
);

create table j.card(
    id_card serial primary key,
    id_column integer references j.column(id_column),
    title text,
    estimative integer
);

insert into j.board(id_board, name) values (1, 'Project 1');
insert into j.column(id_column, id_board, name, has_estimative) values (1, 1, 'Column A', true);
insert into j.column(id_column, id_board, name, has_estimative) values (2, 1, 'Column B', true);
insert into j.column(id_column, id_board, name, has_estimative) values (3, 1, 'Column C', true);
insert into j.card(id_card, id_column, title, estimative) values (1, 1, 'Activity 1', 3);
insert into j.card(id_card, id_column, title, estimative) values (2, 1, 'Activity 2', 2);
insert into j.card(id_card, id_column, title, estimative) values (3, 1, 'Activity 3', 1);
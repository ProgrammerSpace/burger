drop database if exists burgers_db;
create database burgers_db;
use burgers_db;

create table burger(
id integer primary key auto_increment not null,
burger_name varchar(50) not null,
devoured boolean default false
);
create database dokkat_database;

use dokkat_database;

create table dokkat_records (
    user varchar(50) primary key,
    points int(10) not null
);

create user dokkat_user@localhost identified by 'katdok';

grant select, insert on dokkat_database.dokkat_records to dokkat_user@localhost;
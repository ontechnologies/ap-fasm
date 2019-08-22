export const CREATE_USER_TABLE = 
`CREATE TABLE IF NOT EXISTS users
(
    userid uuid primary key,
    firstname varchar(30) not null,
    lastname varchar(30) not null,
    role varchar(9),
    department varchar(5),
    username varchar(30),
    userpassword varchar(15) not null
)`;

export const DELTE_USER_TABLE = 
`drop table users`;

export const SELECT_USER = 
`select * from users where username=$1`;

export const CREAT_USER = 
`insert into user (firstname, lastname, role, department, username, userpassword)
values($1,$2,$3,$4, $5, $6)`;

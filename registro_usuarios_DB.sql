create database proyectoJava_24111;
use proyectoJava_24111;

CREATE TABLE registroUsuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(20) NOT NULL,
    fechaNacimiento DATE NOT NULL,
    pais varchar(20) NOT NULL
);

select * from registroUsuarios;

CREATE TABLE login (
	id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(50),
    password VARCHAR(50)
);

insert into login (email, password) values ('admin@prueba.com', 'admin');
select * from login;
drop database Lanchonete;
create database Lanchonete;

use Lanchonete;

create table clientes (
   id int not null auto_increment,
   nome varchar(200) not null,
   endereco varchar(200) not null,
   telefone varchar(11) not null,
   email varchar(150) not null unique,
   cpf varchar(11) not null unique,
   senha varchar(150) not null,
   primary key(id)
);

create table produtos (
   id int not null auto_increment,
   nome varchar(200) not null,
   valor decimal(18,2) not null,
   descricao varchar(200) not null,
   imagem varchar(120) not null,
   primary key(id)
);
create table pedidos(
   id int not null auto_increment,
   status varchar(200) not null,
    clientes_id int not null,
   primary key(id),
   constraint fk_clientes_pedidos
          foreign key (clientes_id)
          references clientes(id) 
);

create table interacao (
    produtos_id int not null,
    pedidos_id int not null,
    quantidade varchar(100) not null,
    preco decimal(18,2) not null,
    primary key(produtos_id, pedidos_id),
    constraint fk_produtos_interacao
         foreign key (produtos_id)
         references produtos(id),
    constraint fk_pedidos_interacao
         foreign key (pedidos_id)
         references pedidos(id)
);





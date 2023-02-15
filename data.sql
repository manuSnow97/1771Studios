insert into categoria_usuario (id, categoria)
values (default, 'administrador');

insert into categoria_usuario (id, categoria)
values (default, 'cliente');

insert into cursos values (default, 'guitarra', '1 mes', 4.500);

update cursos set precio = 4500 where id = 1;

insert into cursos values (default, 'bajo', '1 mes', 4500);

insert into cursos values (default, 'canto', '1 mes', 4000);

insert into cursos values (default, 'bateria', '1 mes', 5000);

insert into cursos values (default, 'teclado', '1 mes', 4000);

insert into salas values (default, 'Sala Platinum', '38 mts2', '4 horas', 40000);

insert into salas values (default, 'Sala Gold', '46 mts2', '4 horas', 45000);

insert into salas values (default, 'Sala Premium', '52 mts2', '4 horas', 50000);

insert into usuarios values (default, 'Manuel', 'Nieva', 'Av. Del Libertador', 'CABA', 'CABA', 'Argentina', '1430', '1561534641', 'manuore97@gmail.com', '1234');

alter table cursos add images text not null;

update cursos set images = 'images/clase guitarra.jpeg' where id = 1;

update cursos set images = 'images/clase bajo.png' where id = 2;

update cursos set images = 'images/clase canto.jpeg' where id = 3;

update cursos set images = 'images/clase bateria.jpeg' where id = 4;

update cursos set images = 'images/clase teclado.png' where id = 5;

alter table salas add images text not null;

update salas set images = 'images/Sala Platinum.jpeg' where id = 1;

update salas set images = 'images/Sala Gold.jpeg' where id = 2;

update salas set images = 'images/Sala Premium.jpeg' where id = 3;

alter table salas add descripcion text not null;

update salas set descripcion = 'Bateria TAMA Superstar Custom Amplificador de guitarra Orange Dual Terror con Cabina Orange 4x12 Amplificador de guitarra Marshall DSL100 con cabina Marshall 1960A 4x12 Amplificador de bajo Ampeg PF500 con Cabina Ampeg 800 watts. Monitores Cerwin Vega (PA+Drum Fill+ Sub-Woofer) Consola Digital Line 6 M20d' where id = 1;

update salas set descripcion = 'Bateria YAMAHA Stage Amplificador de guitarra Yamaha GA Series GA-15 5x15 Amplificador Fender Champion 20 para guitarra 32.5 cm de alto x 35 cm de ancho x 19 cm de profundidad Amplificador Ampeg Bassamp Series BA-108 Transistor para bajo 42.7 cm de alto x 38.1 cm de ancho x 30.5 cm de profundidad Monitores Cerwin Vega (PA+Drum Fill+ Sub-Woofer) Consola Digital Line 6 M20d' where id = 2;

update salas set descripcion = 'Pearl Export Lacquer 5-Pc. Shell Pack Hardware Teclado Musical Casio Ctk-3500 Amplificador de guitarra Yamaha GA Series GA-15 5x15 Amplificador Fender Champion 20 para guitarra 32.5 cm de alto x 35 cm de ancho x 19 cm de profundidad Amplificador Ampeg Bassamp Series BA-108 Transistor para bajo 42.7 cm de alto x 38.1 cm de ancho x 30.5 cm de profundidad Monitores Cerwin Vega (PA+Drum Fill+ Sub-Woofer) Consola Digital Line 6 M20d' where id = 3;

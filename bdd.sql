--
-- code pour la création des tables 
--
/*
CREATE TABLE montre ( 
id_montre uuid default uuid_generate_v4(), 
ecran varchar, 
bracelet varchar, 
boitier varchar, 
commande bool, 
id_materiaux_boitier uuid, 
id_materiaux_bracelets uuid, 
id_user uuid default uid(), 
PRIMARY KEY (id_montre), 
FOREIGN KEY (id_materiaux_boitier) REFERENCES materiaux (id_materiaux),
FOREIGN KEY (id_materiaux_bracelets) REFERENCES materiaux (id_materiaux),
FOREIGN KEY (id_user) REFERENCES auth.users (id) 
);

CREATE TABLE materiaux ( 
id_materiaux_boitier uuid default uuid_generate_v4(), 
id_materiaux_bracelets uuid default uuid_generate_v4(), 
libelle varchar, 
url varchar, 
PRIMARY KEY (id_materiaux_boitier),
PRIMARY KEY (id_materiaux_bracelets) 
);
*/  


--
-- code pour la création des vues
--
/* 
create VIEW allCuir as 
select "montre".* 
from "materiaux", "montre" 
where "materiaux".id_materiaux = "montre".id_materiaux 
and "materiaux"."libelle" = 'cuir'; 

create VIEW allCaoutchouc as 
select "montre".* 
from "materiaux", "montre"
where "materiaux".id_materiaux = "montre".id_materiaux 
and "materiaux"."libelle" = 'Caoutchouc'; 

create VIEW allAcier as 
select "montre".*
from "materiaux", "montre" 
where "materiaux".id_materiaux = "montre".id_materiaux 
and "materiaux"."libelle" = 'acier';

create VIEW allMateriaux as 
select * 
from "materiaux";
*/


--
-- code pour la création des policies
--
/*
Table montre : Editing policy from public.montre
    Enable read access for all users
    /rien
    true

    Enable insert for authenticated users only
    authenticated
    true

    Enable update for users based on email
    /rien
    (uid() = id_user)
    (uid() IN ( SELECT montre_1.id_user
            FROM montre montre_1))

    Enable delete for users based on user_id
    /rien
    (uid() = id_user)

Table materiaux : Editing policy from public.materiaux
    Enable read access for all users
    /rien
    true
*/
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  lastname VARCHAR(50) NOT NULL,
  firstname VARCHAR(50) NOT NULL,
  mail VARCHAR(100) NOT NULL UNIQUE,
  phone_number VARCHAR(20) NOT NULL,
  password VARCHAR(100) DEFAULT NULL,
  allergie VARCHAR(100) DEFAULT NULL,
  is_registered BOOLEAN DEFAULT false,
  is_admin BOOLEAN DEFAULT false
);

-- Password: motDePassePourAdmin
INSERT INTO users (lastname, firstname, mail, phone_number, password, is_admin)
  VALUES ('Admin', 'Super', 'admin@lequaiantique.com', '0123456789', '$2b$10$g43UtJPQW1F05yV0JjimWukqjsz01EMGlaO/Gse7loc7aixri5SZC', true);


CREATE TABLE booking (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_user INT,
  seat INT NOT NULL,
  reservation_date DATE NOT NULL,
  reservation_hour TIME NOT NULL,
  FOREIGN KEY (id_user) REFERENCES users(id)
);

CREATE TABLE schedules (
  id INT AUTO_INCREMENT PRIMARY KEY,
  day varchar(20) NOT NULL,
  opened_hour_lunch varchar(20) DEFAULT NULL,
  closed_hour_lunch varchar(20) DEFAULT NULL,
  opened_hour_diner varchar(20) DEFAULT NULL,
  closed_hour_diner varchar(20) DEFAULT NULL
);

INSERT INTO schedules (day_reservation, opened_hour_lunch, closed_hour_lunch, opened_hour_diner, closed_hour_diner)
VALUES
  ('lundi', '12:00:00', '14:00:00', '19:00:00', '22:00:00'),
  ('mardi', '12:00:00', '14:00:00', '19:00:00', '21:00:00'),
  ('mercredi', NULL, NULL, NULL, NULL),
  ('jeudi', '12:00:00', '14:00:00', '19:00:00', '21:00:00'),
  ('vendredi', '12:00:00', '14:00:00', '19:00:00', '21:00:00'),
  ('samedi', NULL, NULL, '19:00:00', '21:00:00'),
  ('dimanche', NULL, NULL, '19:00:00', '21:00:00');

CREATE TABLE food_list (
  id INT AUTO_INCREMENT PRIMARY KEY,
  food_type varchar(20) NOT NULL,
  title varchar(255) NOT NULL,
  description text,
  price decimal(10,2) NOT NULL,
  currency varchar(3) NOT NULL,
  image_url varchar(255) DEFAULT NULL,
  is_exposed tinyint(1) NOT NULL
);

INSERT INTO food_list (food_type, title, description, price, currency, image_url, is_exposed)
VALUES
  ('entrée', 'FOIE GRAS MAISON', 'Foie gras de canard mariné au cognac et porto, chutney de mangue et toasts', 25.00, 'EUR', '../../../assets/food1.png', 0),
  ('entrée', 'GASPACHO MAISON', 'Gaspacho de tomates et féta, croûtons de pain dorés', 10.00, 'EUR', '../../../assets/food2.png', 0),
  ('entrée', 'SAUMON MAISON', 'Sashimi de saumon et radis, crème de fenouil au sésame et croustillant aux algues', 18.00, 'EUR', '../../../assets/food3.png', 0),
  ('plat', 'BOEUF MAISON', 'Steak de bœuf charolais assaisonné en cuisine et frites', 30.00, 'EUR', '../../../assets/food4.png', 1),
  ('plat', 'DORADE MAISON', 'Filet de dorade royale grillé, fèves, noix de cajou et pommes de terre au beurre citronné', 38.00, 'EUR', '../../../assets/food5.png', 1),
  ('plat', 'TARTIFLETTE MAISON', 'Pommes de terre nappées de reblochon, oignons, lardons, crème', 30.00, 'EUR', '../../../assets/food6.png', 1),
  ('dessert', 'OPERA MAISON', 'Opéra du Quai Antique, croquant à la praline et chocolat noir', 12.00, 'EUR', '../../../assets/food7.png', 0),
  ('dessert', 'PANNA COTTA MAISON', 'Panna cotta à la vanille, compotée de cerises à l’amaretto et amandes', 12.00, 'EUR', '../../../assets/food8.png', 0),
  ('dessert', 'BRIOCHE MAISON', 'Saint-Génix, brioche aux pralines roses croquantes', 12.00, 'EUR', '../../../assets/food9.png', 0),
  ('boisson', 'BIERE MAISON', 'Bière blonde ou brune brassée de la région, 33cl', 6.00, 'EUR', '../../../assets/food10.png', 0),
  ('boisson', 'JUS DE FRUITS MAISON', 'Jus pressé avec les fruits de saison, 33cl', 8.00, 'EUR', '../../../assets/food12.png', 0),
  ('boisson', 'VIN MAISON', 'Vin rouge de notre région, 25cl', 8.00, 'EUR', '../../../assets/food11.png', 0);


CREATE TABLE menu_list (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title varchar(255) NOT NULL,
  description text NOT NULL,
  price decimal(10,2) NOT NULL,
  currency varchar(10) NOT NULL,
  image_url varchar(255) DEFAULT NULL
);

INSERT INTO menu_list (title, description, price, currency, image_url)
VALUES
  ('MENU DEJEUNER', 'Entrée et plat du jour OU Plat du jour et dessert. Du lundi au Vendredi, hors jours fériés et weekend. Boissons non comprises*', 39.99, 'EUR', '../../../assets/menu1.png'),
  ('MENU DINER', 'Une Entrée, le plat du jour et un dessert. Du lundi au Vendredi, hors jours fériés et weekend. Boissons non comprises *', 79.00, 'EUR', '../../../assets/menu2.png'),
  ('Menu enfant', 'Une Entrée (salade de tomates ou quiche lorraine)+ Un Plat (steak haché ou poulet rôti, frites ou haricots verts)+ Un Dessert (mousse ou chocolat ou boule de glace vanille)', 29.00, 'EUR', '../../../assets/menu3.png');

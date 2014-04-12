-- MySQL dump 10.13  Distrib 5.6.15, for osx10.9 (x86_64)
--
-- Host: localhost    Database: mc536
-- ------------------------------------------------------
-- Server version	5.6.15

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `amizade`
--

DROP TABLE IF EXISTS `amizade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `amizade` (
  `solicitante` varchar(50) NOT NULL,
  `solicitado` varchar(50) NOT NULL,
  PRIMARY KEY (`solicitante`,`solicitado`),
  KEY `solicitado` (`solicitado`),
  CONSTRAINT `amizade_ibfk_1` FOREIGN KEY (`solicitante`) REFERENCES `usuario` (`login`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `amizade_ibfk_2` FOREIGN KEY (`solicitado`) REFERENCES `usuario` (`login`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `amizade`
--

LOCK TABLES `amizade` WRITE;
/*!40000 ALTER TABLE `amizade` DISABLE KEYS */;
INSERT INTO `amizade` VALUES ('ramonmaciel','andreiauratsuka'),('caiopalissari','andresantanche'),('diegorocha','andresantanche'),('diegosanches','andresantanche'),('elvisrabello','andresantanche'),('felipehiga','andresantanche'),('fernandogoncalves','andresantanche'),('fernandohoyo','andresantanche'),('guilhermemazzariol','andresantanche'),('ivancerboncini','andresantanche'),('juceliofonseca','andresantanche'),('lucasbatista','andresantanche'),('pedroalmeida','andresantanche'),('thiagobalbo','andresantanche'),('tiagoferreira','andresantanche'),('tomasqueiroga','andresantanche'),('willianszati','andresantanche'),('caioteixeira','caiopalissari'),('diegorocha','caiopalissari'),('diegosanches','caiopalissari'),('fernandogoncalves','caiopalissari'),('guilhermemazzariol','caiopalissari'),('juceliofonseca','caiopalissari'),('tomasqueiroga','caiopalissari'),('caiopalissari','caioteixeira'),('diegorocha','caioteixeira'),('elisadellarriva','caioteixeira'),('fernandogoncalves','caioteixeira'),('guilhermemazzariol','caioteixeira'),('juceliofonseca','caioteixeira'),('pedroalmeida','caioteixeira'),('tomasqueiroga','caioteixeira'),('caiopalissari','cibellebegalli'),('caioteixeira','cibellebegalli'),('diegorocha','cibellebegalli'),('elisadellarriva','cibellebegalli'),('fernandogoncalves','cibellebegalli'),('guilhermemazzariol','cibellebegalli'),('juceliofonseca','cibellebegalli'),('pedroalmeida','cibellebegalli'),('tomasqueiroga','cibellebegalli'),('diegosanches','danielferreira'),('eduardapodesta','danielferreira'),('tiagoferreira','danielferreira'),('caioteixeira','diegorocha'),('fernandogoncalves','diegorocha'),('guilhermemazzariol','diegorocha'),('juceliofonseca','diegorocha'),('tomasqueiroga','diegorocha'),('willianszati','diegorocha'),('lucaslima','diegosanches'),('tiagoferreira','diegosanches'),('ivancerboncini','eduardapodesta'),('caiopalissari','elisadellarriva'),('caioteixeira','elisadellarriva'),('diegorocha','elisadellarriva'),('fernandogoncalves','elisadellarriva'),('guilhermemazzariol','elisadellarriva'),('juceliofonseca','elisadellarriva'),('pedroalmeida','elisadellarriva'),('tomasqueiroga','elisadellarriva'),('diegorocha','elvisrabello'),('felipehiga','elvisrabello'),('fernandohoyo','elvisrabello'),('guilhermemazzariol','elvisrabello'),('juceliofonseca','elvisrabello'),('tiagoferreira','elvisrabello'),('tomasqueiroga','elvisrabello'),('caioteixeira','fabiolira'),('diegorocha','fabiolira'),('elvisrabello','fabiolira'),('fernandogoncalves','fabiolira'),('guilhermemazzariol','fabiolira'),('juceliofonseca','fabiolira'),('tomasqueiroga','fabiolira'),('willianszati','fabiolira'),('caiopalissari','felipecaminada'),('caioteixeira','felipecaminada'),('diegorocha','felipecaminada'),('elvisrabello','felipecaminada'),('fernandogoncalves','felipecaminada'),('juceliofonseca','felipecaminada'),('tomasqueiroga','felipecaminada'),('viniciussantos','felipecaminada'),('elvisrabello','felipehiga'),('joaodalben','felipehiga'),('willianszati','felipehiga'),('caiopalissari','fellipecaetano'),('caioteixeira','fellipecaetano'),('diegorocha','fellipecaetano'),('fernandogoncalves','fellipecaetano'),('guilhermemazzariol','fellipecaetano'),('juceliofonseca','fellipecaetano'),('tomasqueiroga','fellipecaetano'),('caiopalissari','fernandogoncalves'),('caioteixeira','fernandogoncalves'),('diegorocha','fernandogoncalves'),('elvisrabello','fernandogoncalves'),('guilhermemazzariol','fernandogoncalves'),('juceliofonseca','fernandogoncalves'),('lucianosabenca','fernandogoncalves'),('tomasqueiroga','fernandogoncalves'),('elvisrabello','fernandohoyo'),('diegosanches','fernandothiers'),('fernandohoyo','fernandothiers'),('lucaslima','fernandothiers'),('tiagoferreira','fernandothiers'),('andreiauratsuka','gabrielbezerra'),('joaodalben','gabrielbezerra'),('juceliofonseca','gabrielbezerra'),('willianszati','gabrielbezerra'),('caiopalissari','guilhermemazzariol'),('caioteixeira','guilhermemazzariol'),('diegorocha','guilhermemazzariol'),('elisadellarriva','guilhermemazzariol'),('elvisrabello','guilhermemazzariol'),('fernandogoncalves','guilhermemazzariol'),('juceliofonseca','guilhermemazzariol'),('tomasqueiroga','guilhermemazzariol'),('caioteixeira','guilhermemendes'),('diegorocha','guilhermemendes'),('elvisrabello','guilhermemendes'),('fernandogoncalves','guilhermemendes'),('guilhermemazzariol','guilhermemendes'),('juceliofonseca','guilhermemendes'),('tomasqueiroga','guilhermemendes'),('willianszati','guilhermemendes'),('caiopalissari','gustavonunes'),('caioteixeira','gustavonunes'),('diegorocha','gustavonunes'),('elisadellarriva','gustavonunes'),('fernandogoncalves','gustavonunes'),('juceliofonseca','gustavonunes'),('pedroalmeida','gustavonunes'),('tomasqueiroga','gustavonunes'),('felipehiga','joaodalben'),('gabrielbezerra','joaodalben'),('juceliofonseca','joaodalben'),('willianszati','joaodalben'),('caiopalissari','juceliofonseca'),('caioteixeira','juceliofonseca'),('diegorocha','juceliofonseca'),('elvisrabello','juceliofonseca'),('fernandogoncalves','juceliofonseca'),('guilhermemazzariol','juceliofonseca'),('joaodalben','juceliofonseca'),('tomasqueiroga','juceliofonseca'),('diegosanches','leonnardorabello'),('lucaslima','leonnardorabello'),('tiagoferreira','leonnardorabello'),('caiopalissari','luanbicesto'),('caioteixeira','luanbicesto'),('diegorocha','luanbicesto'),('elisadellarriva','luanbicesto'),('fernandogoncalves','luanbicesto'),('guilhermemazzariol','luanbicesto'),('juceliofonseca','luanbicesto'),('lucianosabenca','luanbicesto'),('tomasqueiroga','luanbicesto'),('willianszati','luanbicesto'),('ivancerboncini','lucasbatista'),('juceliofonseca','lucasbatista'),('thiagobalbo','lucasbatista'),('tiagoferreira','lucasbatista'),('diegosanches','lucaslima'),('tiagoferreira','lucaslima'),('caiopalissari','lucianosabenca'),('caioteixeira','lucianosabenca'),('diegorocha','lucianosabenca'),('fernandogoncalves','lucianosabenca'),('guilhermemazzariol','lucianosabenca'),('juceliofonseca','lucianosabenca'),('tomasqueiroga','lucianosabenca'),('fernandogoncalves','luizgomes'),('juceliofonseca','luizgomes'),('lucasbatista','luizgomes'),('gabrielbezerra','lukaslopes'),('caioteixeira','murilocruz'),('diegorocha','murilocruz'),('tomasqueiroga','murilocruz'),('diegosanches','nicholasmizoguchi'),('lucaslima','nicholasmizoguchi'),('tiagoferreira','nicholasmizoguchi'),('caiopalissari','pedroalmeida'),('caioteixeira','pedroalmeida'),('diegorocha','pedroalmeida'),('elisadellarriva','pedroalmeida'),('juceliofonseca','pedroalmeida'),('tomasqueiroga','pedroalmeida'),('caiopalissari','rafaelgarcia'),('caioteixeira','rafaelgarcia'),('diegorocha','rafaelgarcia'),('fernandogoncalves','rafaelgarcia'),('juceliofonseca','rafaelgarcia'),('tomasqueiroga','rafaelgarcia'),('diegosanches','rafaelxavier'),('fernandohoyo','rafaelxavier'),('lucasbatista','rafaelxavier'),('andreiauratsuka','ramonmaciel'),('diegosanches','ramonmaciel'),('lucaslima','ramonmaciel'),('thiagobalbo','ramonmaciel'),('tiagoferreira','ramonmaciel'),('diegosanches','tiagoferreira'),('lucaslima','tiagoferreira'),('ramonmaciel','tiagoferreira'),('caiopalissari','tomasqueiroga'),('caioteixeira','tomasqueiroga'),('diegorocha','tomasqueiroga'),('elisadellarriva','tomasqueiroga'),('elvisrabello','tomasqueiroga'),('fernandogoncalves','tomasqueiroga'),('guilhermemazzariol','tomasqueiroga'),('juceliofonseca','tomasqueiroga'),('thiagobalbo','victortavares'),('felipecaminada','viniciussantos'),('felipehiga','willianszati'),('gabrielbezerra','willianszati'),('joaodalben','willianszati'),('diegosanches','wilsonneto'),('thiagobalbo','wilsonneto'),('tiagoferreira','wilsonneto');
/*!40000 ALTER TABLE `amizade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `artista`
--

DROP TABLE IF EXISTS `artista`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `artista` (
  `nome_artistico` varchar(100) NOT NULL,
  `pais_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`nome_artistico`),
  KEY `pais_id` (`pais_id`),
  CONSTRAINT `artista_ibfk_1` FOREIGN KEY (`pais_id`) REFERENCES `pais` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artista`
--

LOCK TABLES `artista` WRITE;
/*!40000 ALTER TABLE `artista` DISABLE KEYS */;
INSERT INTO `artista` VALUES ('%C3%89_o_Tchan',NULL),('%C3%98rjan_Nilsen',NULL),('30_Seconds_to_Mars',NULL),('3OH!3',NULL),('3_Doors_Down',NULL),('50_cent',NULL),('A-ha',NULL),('ABBA',NULL),('Above_%26_Beyond_(band)',NULL),('AC-DC',NULL),('Acid_Black_Cherry',NULL),('Aerosmith',NULL),('AFI_(band)',NULL),('Alanis_Morissette',NULL),('Albert_Hammond,_Jr.',NULL),('Alex_M.O.R.P.H.',NULL),('Alice_in_Chains',NULL),('Alt-J',NULL),('Aly_%26_Fila',NULL),('Andrew_Rayel',NULL),('Andy_Moor_(DJ)',NULL),('Angra_(band)',NULL),('Arcade_Fire',NULL),('Arctic_Monkeys',NULL),('Armin_van_Buuren',NULL),('Arty_(musician)',NULL),('Audioslave',NULL),('Avantasia',NULL),('Avenged_Sevenfold',NULL),('Avicii',NULL),('Avril_Lavigne',NULL),('A_Pink',NULL),('Babyshambles',NULL),('Backstreet_Boys',NULL),('Badlands_(American_band)',NULL),('Bad_Brains',NULL),('Bad_Company',NULL),('Banda_Calypso',NULL),('Beatles',NULL),('Best_Coast',NULL),('Beyonce',NULL),('Bj%C3%B6rk',NULL),('Black_Drawing_Chalks',NULL),('Black_Flag',NULL),('Black_keys',NULL),('Black_Label_Society',NULL),('Black_Sabbath',NULL),('Blind_Guardian',NULL),('Blink-182',NULL),('Bob_Dylan',NULL),('Bob_Marley',NULL),('Bombay_Bicycle_Club',NULL),('Bon_Iver',NULL),('Bon_jovi',NULL),('Breakbot',NULL),('Britney_Spears',NULL),('Bruno_e_Marrone',NULL),('C%C3%A9u',NULL),('Cage_the_Elephant',NULL),('Cake',NULL),('Canon_Blue',NULL),('Cansei_de_ser_sexy',NULL),('Capital_Inicial',NULL),('Carissa%27s_Wierd',NULL),('Cat_Stevens',NULL),('Charlie_Brown_Jr.',NULL),('Charlie_Parker',NULL),('Chet_Baker',NULL),('Chiclete_com_banana',NULL),('Chico_Buarque',NULL),('Chit%C3%A3ozinho_e_Xoror%C3%B3',NULL),('Chris_Brown',NULL),('Chris_cornell',NULL),('Clarice_Falc%C3%A3o',NULL),('Claudia_Leitte',NULL),('Coldplay',NULL),('Courteeners',NULL),('Creed_(band)',NULL),('Crystal_Castles_(band)',NULL),('CSS_(band)',NULL),('Cults_(band)',NULL),('Daft_punk',NULL),('Dash_Berlin',NULL),('David_Guetta',NULL),('David_Matthews_Band',NULL),('DC',NULL),('Deadmau5',NULL),('Death',NULL),('Deep_purple',NULL),('Delta_Spirit',NULL),('Detektivbyr%C3%A5n',NULL),('Dire_Straits',NULL),('Down',NULL),('Dream_Theater',NULL),('Eagles_(band)',NULL),('Eddie_Van_Halen',NULL),('Edguy',NULL),('Electric_light_orchestra',NULL),('Ellie_Goulding',NULL),('Elton_John',NULL),('Elvis_Presley',NULL),('Eminem',NULL),('Engenheiros_do_Hawaii',NULL),('Enrique_Iglesias',NULL),('Enya',NULL),('Eric_clapton',NULL),('Evanescence',NULL),('Exodus',NULL),('Explosions_in_the_Sky',NULL),('Fall_Out_Boy',NULL),('Fernando_e_Sorocaba',NULL),('Ferry_corsten',NULL),('Fleetwood_Mac',NULL),('Florence_and_the_Machine',NULL),('Flo_Rida',NULL),('Foals',NULL),('Foo_Fighters',NULL),('Foster_the_people',NULL),('Franz_Ferdinand_(band)',NULL),('Fratellis',NULL),('Ghost_BC',NULL),('Giuseppe_Ottaviani',NULL),('Godsmack',NULL),('Goo_Goo_Dolls',NULL),('Gorillaz',NULL),('Guns_N\'_Roses',NULL),('Gusttavo_Lima',NULL),('Haim_(band)',NULL),('Hans_Zimmer',NULL),('Hardwell',NULL),('Hatebreed',NULL),('Helloween',NULL),('Iced_Earth',NULL),('Imagine_Dragons',NULL),('Interpol_(band)',NULL),('Ira_(band)',NULL),('Iron_Maiden',NULL),('Jake_Bugg',NULL),('Jennifer_Lopez',NULL),('Jimi_Hendrix',NULL),('Johnny_Cash',NULL),('John_Coltrane',NULL),('John_O%27Callaghan_(musician)',NULL),('John_Williams',NULL),('Jonas_Brothers',NULL),('Jorge_e_Mateus',NULL),('Jorn_van_Deynhoven',NULL),('Jota_Quest',NULL),('Journey_(band)',NULL),('Julian_Casablancas',NULL),('Justice',NULL),('Justin_Bieber',NULL),('Kaiser_Chiefs',NULL),('Kakkmaddafakka',NULL),('Kansas_(band)',NULL),('Karnivool',NULL),('Kasabian',NULL),('Katy_Perry',NULL),('Kesha',NULL),('Kid_Cudi',NULL),('Kings_of_Convenience',NULL),('King_Crimson',NULL),('Kiss_(band)',NULL),('Kiss_band',NULL),('Korpiklaani',NULL),('Kreator',NULL),('Krisiun',NULL),('Lady_Gaga',NULL),('Leandro_e_Leonardo',NULL),('Led_Zepellin',NULL),('Legi%C3%A3o_Urbana',NULL),('Legiao_urbana',NULL),('Linkin_Park',NULL),('Little_Joy',NULL),('Living_Colour',NULL),('Locksley_(band)',NULL),('Los_Hermanos',NULL),('Luan_Santana',NULL),('Lulu_Santos',NULL),('Lynrd_Skynyrd',NULL),('Lynyrd_Skynyrd',NULL),('M83_(band)',NULL),('Macaco_Bong',NULL),('Macklemore',NULL),('Madonna_(entertainer)',NULL),('Mamonas_Assassinas',NULL),('Markus_Schulz',NULL),('Maroon_5',NULL),('Matanza_(band)',NULL),('Matchbox_20',NULL),('MC_Daleste',NULL),('Megadeth',NULL),('Mega_deth',NULL),('Men_at_Work',NULL),('Metallica',NULL),('MGMT',NULL),('Michael_Jackson',NULL),('Miles_Davis',NULL),('Miley_Cyrus',NULL),('Minor_Threat',NULL),('Moby',NULL),('Motorhead',NULL),('Muse',NULL),('Muse_(band)',NULL),('Nando_Reis',NULL),('Ne-yo',NULL),('Neil_Young',NULL),('Nervo_(duo)',NULL),('Neutral_Milk_Hotel',NULL),('Nickelback',NULL),('Nightmare_(Japanese_band)',NULL),('Nightwish',NULL),('Nine_Inch_Nails',NULL),('Nirvana_(band)',NULL),('Oasis_(band)',NULL),('OceanLab',NULL),('Oficina_G3',NULL),('Of_Monsters_and_Men',NULL),('One_Direction',NULL),('Orange_Range',NULL),('Ozzy_Osbourne',NULL),('O_Rappa',NULL),('Pain_of_Salvation',NULL),('Panic!_at_the_Disco',NULL),('Pantera',NULL),('Paramore',NULL),('Passion_Pit',NULL),('Paulo_Vanzolini',NULL),('Paul_McCartney',NULL),('Paul_van_Dyk',NULL),('Pearl_Jam',NULL),('Phoenix_(band)',NULL),('Pink_floyd',NULL),('Pitbull_(rapper)',NULL),('Pixies',NULL),('Placebo_(band)',NULL),('Plain_White_T%27s',NULL),('Protest_the_Hero',NULL),('Queens_of_the_Stone_Age',NULL),('Raconteurs',NULL),('Radiohead',NULL),('Rage_Against_the_Machine',NULL),('Rammstein',NULL),('Ramones',NULL),('RATM',NULL),('Raul_Seixas',NULL),('Ray_Charles',NULL),('Rebbeca_Black',NULL),('Red_Hot_Chili_Peppers',NULL),('Rihanna',NULL),('Roberto_Carlos',NULL),('Rolling_Stones',NULL),('Roupa_Nova',NULL),('S%C3%B3_Pra_Contrariar',NULL),('Sander_van_Doorn',NULL),('Sandy_e_Junior',NULL),('Saosin',NULL),('Scorpions_(band)',NULL),('Sepultura',NULL),('Serafin_(band)',NULL),('Sex_Pistols',NULL),('Shakira',NULL),('Simon_and_Garfunkel',NULL),('Simon_Patterson_(musician)',NULL),('Skank_(band)',NULL),('Skid_row',NULL),('Slayer',NULL),('Snow_patrol',NULL),('Sonata_Arctica',NULL),('Soundgarden',NULL),('Sound_Horizon',NULL),('Spice_Girls',NULL),('Stone_Temple_Pilots',NULL),('Suicidal_Tendencies',NULL),('Sum_41',NULL),('Supertramp',NULL),('System_of_a_Down',NULL),('System_of_Down',NULL),('T.a.t.u.',NULL),('Tame_Impala',NULL),('Tesseract',NULL),('The_Allman_Brothers_Band',NULL),('The_Animals',NULL),('The_Beatles',NULL),('The_Black_Keys',NULL),('The_Calling',NULL),('The_Cribs',NULL),('The_Cure',NULL),('The_Doors',NULL),('The_Enemy_(UK_band)',NULL),('The_Films_(band)',NULL),('The_Flaming_Lips',NULL),('The_foo_fighters',NULL),('The_Fratellis',NULL),('The_Killers',NULL),('The_Kills',NULL),('The_Kooks',NULL),('The_Last_Shadow_Puppets',NULL),('The_libertines',NULL),('The_Mamas_%26_the_Papas',NULL),('The_Misfits',NULL),('The_National',NULL),('The_Offspring',NULL),('The_Paddingtons',NULL),('The_Pixies',NULL),('The_police',NULL),('The_Rolling_Stones',NULL),('The_Royalty',NULL),('The_Royal_Concept',NULL),('The_Safety_Fire',NULL),('The_Smiths',NULL),('The_Soft_Pack',NULL),('The_Strokes',NULL),('The_Trammps',NULL),('The_used',NULL),('The_Vaccines',NULL),('The_View_(band)',NULL),('The_Virgins',NULL),('The_White_Stripes',NULL),('The_Who',NULL),('The_xx',NULL),('Thin_Lizzy',NULL),('Third_Eye_Blind',NULL),('Ti%C3%ABsto',NULL),('Tiesto',NULL),('Tim_Maia',NULL),('Tit%C3%A3s',NULL),('Titas_(band)',NULL),('Tom_Jobim',NULL),('Tool_(band)',NULL),('Tribalistas_(band)',NULL),('Tuatha_de_Danann_(band)',NULL),('Twisted_Sister',NULL),('Two_Door_Cinema_Club',NULL),('Two_Steps_From_Hell',NULL),('U2',NULL),('Ummet_Ozcan',NULL),('Usher_(entertainer)',NULL),('Vampire_Weekend',NULL),('Van_halen',NULL),('Velvet_Revolver',NULL),('W%26W',NULL),('Weezer',NULL),('Whitesnake',NULL),('White_Lies_(band)',NULL),('White_Stripes',NULL),('X_japan',NULL),('Yes_band',NULL),('Ylvis',NULL),('Yousei_Teikoku',NULL),('Yui_(singer)',NULL),('Zedd_(musician)',NULL),('Zez%C3%A9_Di_Camargo_%26_Luciano',NULL),('ZZ_Top',NULL);
/*!40000 ALTER TABLE `artista` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `banda`
--

DROP TABLE IF EXISTS `banda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `banda` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `artista` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `artista` (`artista`),
  CONSTRAINT `banda_ibfk_1` FOREIGN KEY (`artista`) REFERENCES `artista` (`nome_artistico`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banda`
--

LOCK TABLES `banda` WRITE;
/*!40000 ALTER TABLE `banda` DISABLE KEYS */;
/*!40000 ALTER TABLE `banda` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bloqueio`
--

DROP TABLE IF EXISTS `bloqueio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bloqueio` (
  `bloqueante` varchar(50) NOT NULL,
  `bloqueado` varchar(50) NOT NULL,
  `razao_bloqueio_id` int(11) NOT NULL,
  PRIMARY KEY (`bloqueante`,`bloqueado`,`razao_bloqueio_id`),
  KEY `bloqueado` (`bloqueado`),
  CONSTRAINT `bloqueio_ibfk_1` FOREIGN KEY (`bloqueante`) REFERENCES `usuario` (`login`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bloqueio_ibfk_2` FOREIGN KEY (`bloqueado`) REFERENCES `usuario` (`login`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bloqueio`
--

LOCK TABLES `bloqueio` WRITE;
/*!40000 ALTER TABLE `bloqueio` DISABLE KEYS */;
/*!40000 ALTER TABLE `bloqueio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cantor`
--

DROP TABLE IF EXISTS `cantor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cantor` (
  `artista` varchar(100) NOT NULL,
  `musico_id` int(11) NOT NULL,
  PRIMARY KEY (`artista`,`musico_id`),
  KEY `musico_id` (`musico_id`),
  CONSTRAINT `cantor_ibfk_1` FOREIGN KEY (`artista`) REFERENCES `artista` (`nome_artistico`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `cantor_ibfk_2` FOREIGN KEY (`musico_id`) REFERENCES `musico` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cantor`
--

LOCK TABLES `cantor` WRITE;
/*!40000 ALTER TABLE `cantor` DISABLE KEYS */;
/*!40000 ALTER TABLE `cantor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cidade`
--

DROP TABLE IF EXISTS `cidade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cidade` (
  `nome` varchar(100) NOT NULL,
  `estado_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`nome`),
  KEY `estado_id` (`estado_id`),
  CONSTRAINT `cidade_ibfk_1` FOREIGN KEY (`estado_id`) REFERENCES `estado` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cidade`
--

LOCK TABLES `cidade` WRITE;
/*!40000 ALTER TABLE `cidade` DISABLE KEYS */;
INSERT INTO `cidade` VALUES ('',NULL),('campinas',NULL);
/*!40000 ALTER TABLE `cidade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `curtida`
--

DROP TABLE IF EXISTS `curtida`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `curtida` (
  `usuario` varchar(50) NOT NULL,
  `artista` varchar(100) NOT NULL,
  `nota` int(11) NOT NULL,
  PRIMARY KEY (`usuario`,`artista`),
  KEY `artista` (`artista`),
  CONSTRAINT `curtida_ibfk_1` FOREIGN KEY (`usuario`) REFERENCES `usuario` (`login`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `curtida_ibfk_2` FOREIGN KEY (`artista`) REFERENCES `artista` (`nome_artistico`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `curtida`
--

LOCK TABLES `curtida` WRITE;
/*!40000 ALTER TABLE `curtida` DISABLE KEYS */;
INSERT INTO `curtida` VALUES ('andreiauratsuka','Acid_Black_Cherry',3),('andreiauratsuka','Gorillaz',3),('andreiauratsuka','Nightmare_(Japanese_band)',3),('andreiauratsuka','Orange_Range',3),('andreiauratsuka','Paul_McCartney',4),('andreiauratsuka','Sound_Horizon',3),('andreiauratsuka','The_Beatles',4),('caiopalissari','Arctic_monkeys',4),('caiopalissari','Imagine_Dragons',2),('caiopalissari','Los_Hermanos',3),('caiopalissari','Muse_(band)',3),('caiopalissari','Nine_inch_nails',1),('caiopalissari','Nirvana_(band)',4),('caiopalissari','Placebo_(band)',5),('caiopalissari','Queens_of_the_stone_age',5),('caiopalissari','Radiohead',1),('caiopalissari','The_Black_Keys',5),('caiopalissari','The_Kooks',2),('caiopalissari','The_Strokes',3),('caioteixeira','A_Pink',2),('caioteixeira','Claudia_Leitte',1),('caioteixeira','Deadmau5',3),('caioteixeira','Eminem',4),('caioteixeira','Linkin_Park',4),('caioteixeira','Two_Steps_From_Hell',5),('caioteixeira','Yousei_Teikoku',5),('caioteixeira','Zedd_(musician)',5),('diegorocha','AC-DC',4),('diegorocha','Helloween',3),('diegorocha','Iron_Maiden',4),('diegorocha','Karnivool',5),('diegorocha','Metallica',4),('diegorocha','Pain_of_Salvation',5),('diegorocha','Paramore',4),('diegorocha','Protest_the_Hero',5),('diegorocha','Tesseract',5),('diegorocha','The_Safety_Fire',5),('diegosanches','Aerosmith',5),('diegosanches','Arctic_monkeys',4),('diegosanches','Audioslave',5),('diegosanches','Avicii',4),('diegosanches','Bon_jovi',4),('diegosanches','Chris_cornell',4),('diegosanches','Daft_punk',5),('diegosanches','Eric_clapton',4),('diegosanches','Florence_and_the_Machine',5),('diegosanches','Hardwell',4),('diegosanches','Linkin_park',5),('diegosanches','Maroon_5',5),('diegosanches','Matchbox_20',4),('diegosanches','Muse_(band)',5),('diegosanches','Nickelback',4),('diegosanches','Nine_Inch_Nails',4),('diegosanches','Oasis_(band)',5),('diegosanches','Pink_Floyd',5),('diegosanches','Red_Hot_Chili_Peppers',4),('diegosanches','The_Offspring',4),('diegosanches','Zedd_(musician)',4),('eduardapodesta','Alanis_Morissette',5),('eduardapodesta','Britney_Spears',4),('eduardapodesta','C%C3%A9u',4),('eduardapodesta','Clarice_Falc%C3%A3o',5),('eduardapodesta','Fernando_e_Sorocaba',4),('eduardapodesta','Los_Hermanos',5),('eduardapodesta','Metallica',4),('eduardapodesta','Nirvana_(band)',4),('eduardapodesta','O_Rappa',5),('eduardapodesta','Shakira',5),('elvisrabello','Alice_in_Chains',5),('elvisrabello','Badlands_(American_band)',5),('elvisrabello','Bad_Company',5),('elvisrabello','Deadmau5',5),('elvisrabello','Explosions_in_the_Sky',5),('elvisrabello','Metallica',5),('elvisrabello','Pink_Floyd',5),('elvisrabello','Radiohead',5),('elvisrabello','Serafin_(band)',5),('elvisrabello','Soundgarden',5),('elvisrabello','Stone_Temple_Pilots',5),('elvisrabello','The_Strokes',5),('elvisrabello','Third_Eye_Blind',4),('elvisrabello','Tool_(band)',5),('elvisrabello','Velvet_Revolver',4),('fabiolira','3_Doors_Down',4),('fabiolira','AC-DC',5),('fabiolira','Aerosmith',5),('fabiolira','Black_Sabbath',4),('fabiolira','Capital_Inicial',5),('fabiolira','Coldplay',4),('fabiolira','Creed_(band)',5),('fabiolira','Foo_Fighters',5),('fabiolira','Goo_Goo_Dolls',4),('fabiolira','Ira_(band)',4),('fabiolira','Iron_Maiden',5),('fabiolira','Kansas_(band)',4),('fabiolira','Kiss_(band)',5),('fabiolira','Legiao_urbana',5),('fabiolira','Linkin_park',4),('fabiolira','Living_Colour',4),('fabiolira','Mamonas_Assassinas',4),('fabiolira','Metallica',5),('fabiolira','Nickelback',5),('fabiolira','Nirvana_(band)',5),('fabiolira','Oasis_(band)',4),('fabiolira','Ozzy_Osbourne',4),('fabiolira','Pearl_Jam',4),('fabiolira','Queens_of_the_Stone_Age',4),('fabiolira','Rage_Against_the_Machine',4),('fabiolira','Raul_Seixas',4),('fabiolira','Red_Hot_Chili_Peppers',5),('fabiolira','Sex_pistols',4),('fabiolira','Skid_row',5),('fabiolira','The_Calling',4),('fabiolira','The_Killers',4),('fabiolira','The_Offspring',5),('fabiolira','The_police',4),('fabiolira','The_Rolling_Stones',4),('fabiolira','The_White_Stripes',4),('fabiolira','Thin_Lizzy',4),('fabiolira','Titas_(band)',4),('fabiolira','Twisted_Sister',4),('fabiolira','U2',4),('fabiolira','Van_halen',4),('fabiolira','Whitesnake',5),('fabiolira','Yes_band',4),('felipecaminada','Arctic_monkeys',2),('felipecaminada','Avantasia',4),('felipecaminada','Beatles',3),('felipecaminada','Blind_guardian',5),('felipecaminada','Bon_jovi',4),('felipecaminada','DC',5),('felipecaminada','Dream_Theater',4),('felipecaminada','Eddie_Van_Halen',4),('felipecaminada','Edguy',5),('felipecaminada','Eric_clapton',3),('felipecaminada','Foster_the_people',3),('felipecaminada','Iron_Maiden',5),('felipecaminada','Metallica',4),('felipecaminada','Motorhead',2),('felipecaminada','Ramones',3),('felipecaminada','Rolling_Stones',2),('felipecaminada','Sonata_Arctica',5),('felipecaminada','The_doors',4),('felipecaminada','The_foo_fighters',3),('felipecaminada','U2',2),('felipehiga','Armin_van_buuren',5),('felipehiga','Avicii',5),('felipehiga','Charlie_Brown_Jr.',4),('felipehiga','Deadmau5',4),('felipehiga','Linkin_park',5),('felipehiga','Red_Hot_Chili_Peppers',5),('felipehiga','Tiesto',4),('felipehiga','X_japan',4),('felipehiga','Yui_(singer)',3),('felipehiga','Zedd_(musician)',4),('fellipecaetano','Alice_In_Chains',5),('fellipecaetano','Arcade_Fire',5),('fellipecaetano','Arctic_Monkeys',5),('fellipecaetano','Bad_Brains',4),('fellipecaetano','Black_Drawing_Chalks',4),('fellipecaetano','Black_Flag',5),('fellipecaetano','Black_Label_Society',5),('fellipecaetano','Black_Sabbath',5),('fellipecaetano','Blind_Guardian',5),('fellipecaetano','Death',5),('fellipecaetano','Down',5),('fellipecaetano','Exodus',4),('fellipecaetano','Hatebreed',4),('fellipecaetano','Iced_Earth',4),('fellipecaetano','Jimi_Hendrix',5),('fellipecaetano','Kreator',4),('fellipecaetano','Krisiun',5),('fellipecaetano','Lynyrd_Skynyrd',5),('fellipecaetano','Macaco_Bong',5),('fellipecaetano','Miles_Davis',4),('fellipecaetano','Minor_Threat',4),('fellipecaetano','Nine_Inch_Nails',5),('fellipecaetano','Pantera',5),('fellipecaetano','Queens_of_the_Stone_Age',5),('fellipecaetano','Radiohead',5),('fellipecaetano','Slayer',5),('fellipecaetano','Tame_Impala',5),('fellipecaetano','The_Allman_Brothers_Band',5),('fellipecaetano','The_Misfits',5),('fellipecaetano','The_National',4),('fernandogoncalves','Bruno_e_Marrone',5),('fernandogoncalves','Chit%C3%A3ozinho_e_Xoror%C3%B3',5),('fernandogoncalves','Elvis_Presley',5),('fernandogoncalves','Gusttavo_Lima',5),('fernandogoncalves','Jorge_e_Mateus',4),('fernandogoncalves','Leandro_e_Leonardo',5),('fernandogoncalves','Legi%C3%A3o_Urbana',4),('fernandogoncalves','Luan_Santana',4),('fernandogoncalves','Lulu_Santos',3),('fernandogoncalves','Mamonas_Assassinas',5),('fernandogoncalves','Roberto_Carlos',4),('fernandogoncalves','Roupa_Nova',4),('fernandogoncalves','S%C3%B3_Pra_Contrariar',4),('fernandogoncalves','Skank_(band)',5),('fernandogoncalves','Tit%C3%A3s',4),('fernandogoncalves','Tribalistas_(band)',5),('fernandogoncalves','Zez%C3%A9_Di_Camargo_%26_Luciano',5),('fernandohoyo','Daft_punk',4),('fernandohoyo','Godsmack',3),('fernandohoyo','Matanza_(band)',3),('fernandohoyo','Pink_floyd',4),('fernandohoyo','RATM',4),('fernandohoyo','Sepultura',4),('fernandohoyo','Shakira',5),('fernandohoyo','Suicidal_Tendencies',3),('gabrielbezerra','Beatles',5),('gabrielbezerra','Deep_Purple',5),('gabrielbezerra','Enya',4),('gabrielbezerra','Iron_Maiden',3),('gabrielbezerra','Linkin_park',5),('gabrielbezerra','Red_Hot_Chili_Peppers',5),('gabrielbezerra','U2',5),('guilhermemazzariol','Aerosmith',5),('guilhermemazzariol','Kiss_(band)',4),('guilhermemazzariol','Nando_Reis',3),('guilhermemazzariol','Paulo_Vanzolini',3),('guilhermemendes','Aerosmith',5),('guilhermemendes','Banda_Calypso',1),('guilhermemendes','Bon_jovi',4),('guilhermemendes','Engenheiros_do_Hawaii',5),('guilhermemendes','Evanescence',4),('guilhermemendes','Foo_Fighters',3),('guilhermemendes','Imagine_Dragons',4),('guilhermemendes','Jonas_Brothers',1),('guilhermemendes','Kiss_(band)',4),('guilhermemendes','Legi%C3%A3o_Urbana',5),('guilhermemendes','Metallica',5),('guilhermemendes','Nightwish',3),('guilhermemendes','Red_Hot_Chili_Peppers',4),('guilhermemendes','Whitesnake',4),('gustavonunes','%C3%89_o_Tchan',1),('gustavonunes','3OH!3',4),('gustavonunes','50_cent',1),('gustavonunes','ABBA',1),('gustavonunes','AFI_(band)',5),('gustavonunes','Avril_Lavigne',5),('gustavonunes','Backstreet_boys',1),('gustavonunes','Black_Sabbath',1),('gustavonunes','Bon_jovi',1),('gustavonunes','Britney_Spears',3),('gustavonunes','Capital_Inicial',4),('gustavonunes','Coldplay',3),('gustavonunes','Crystal_Castles_(band)',5),('gustavonunes','Elton_John',1),('gustavonunes','Eminem',3),('gustavonunes','Evanescence',2),('gustavonunes','Fall_Out_Boy',4),('gustavonunes','Jennifer_Lopez',1),('gustavonunes','Kesha',2),('gustavonunes','Kiss_band',1),('gustavonunes','Lady_Gaga',3),('gustavonunes','Leandro_e_Leonardo',5),('gustavonunes','Madonna_(entertainer)',2),('gustavonunes','Maroon_5',3),('gustavonunes','Miley_cyrus',4),('gustavonunes','Panic!_at_the_Disco',4),('gustavonunes','Paramore',3),('gustavonunes','Phoenix_(band)',5),('gustavonunes','Plain_White_T%27s',5),('gustavonunes','Rihanna',5),('gustavonunes','Saosin',5),('gustavonunes','Spice_girls',1),('gustavonunes','Sum_41',5),('gustavonunes','T.a.t.u.',5),('gustavonunes','The_Killers',5),('gustavonunes','The_smiths',4),('gustavonunes','The_Strokes',5),('gustavonunes','The_used',4),('gustavonunes','Usher_(entertainer)',3),('ivancerboncini','Aerosmith',3),('ivancerboncini','Black_Sabbath',5),('ivancerboncini','Bob_Dylan',5),('ivancerboncini','Bon_Jovi',3),('ivancerboncini','DC',5),('ivancerboncini','Deep_Purple',4),('ivancerboncini','Fleetwood_Mac',3),('ivancerboncini','Helloween',2),('ivancerboncini','King_Crimson',4),('ivancerboncini','Moby',5),('ivancerboncini','Neil_Young',4),('ivancerboncini','Pink_Floyd',5),('joaodalben','Angra_(band)',4),('joaodalben','Arctic_Monkeys',4),('joaodalben','Blink-182',3),('joaodalben','Bob_Marley',5),('joaodalben','Chico_Buarque',4),('joaodalben','Hans_Zimmer',5),('joaodalben','Korpiklaani',4),('joaodalben','Los_Hermanos',3),('joaodalben','Pearl_Jam',4),('joaodalben','Pixies',3),('joaodalben','Tuatha_de_Danann_(band)',5),('juceliofonseca','Chris_Brown',4),('juceliofonseca','David_Guetta',4),('juceliofonseca','Enrique_Iglesias',4),('juceliofonseca','Flo_Rida',4),('juceliofonseca','Gusttavo_Lima',3),('juceliofonseca','Jorge_e_Mateus',3),('juceliofonseca','Jota_Quest',4),('juceliofonseca','Linkin_Park',5),('juceliofonseca','Luan_Santana',4),('juceliofonseca','Ne-yo',4),('juceliofonseca','Paramore',4),('juceliofonseca','Pitbull_(rapper)',3),('juceliofonseca','Rihanna',4),('juceliofonseca','Ylvis',4),('luanbicesto','A-ha',3),('luanbicesto','Capital_Inicial',4),('luanbicesto','Dire_Straits',5),('luanbicesto','Ghost_BC',1),('luanbicesto','Linkin_Park',5),('luanbicesto','Mamonas_Assassinas',5),('luanbicesto','MC_Daleste',1),('luanbicesto','Oficina_G3',4),('luanbicesto','Tom_Jobim',4),('lucasbatista','Chiclete_com_banana',5),('lucasbatista','Lady_Gaga',1),('lucaslima','%C3%98rjan_Nilsen',5),('lucaslima','Above_%26_Beyond_(band)',5),('lucaslima','Aerosmith',3),('lucaslima','Alex_M.O.R.P.H.',4),('lucaslima','Aly_%26_Fila',4),('lucaslima','Andrew_Rayel',4),('lucaslima','Andy_Moor_(DJ)',3),('lucaslima','Armin_van_Buuren',5),('lucaslima','Arty_(musician)',3),('lucaslima','Avicii',4),('lucaslima','Beatles',5),('lucaslima','Coldplay',3),('lucaslima','Daft_punk',4),('lucaslima','Dash_Berlin',5),('lucaslima','Deadmau5',3),('lucaslima','Deep_purple',4),('lucaslima','Eagles_(band)',3),('lucaslima','Electric_light_orchestra',4),('lucaslima','Elton_john',3),('lucaslima','Eric_clapton',4),('lucaslima','Ferry_corsten',3),('lucaslima','Foo_Fighters',5),('lucaslima','Giuseppe_Ottaviani',5),('lucaslima','Hans_zimmer',5),('lucaslima','Hardwell',3),('lucaslima','John_O%27Callaghan_(musician)',4),('lucaslima','John_williams',4),('lucaslima','Jorn_van_Deynhoven',4),('lucaslima','Journey_(band)',3),('lucaslima','Lynrd_Skynyrd',3),('lucaslima','Markus_Schulz',4),('lucaslima','Metallica',3),('lucaslima','Nervo_(duo)',4),('lucaslima','Nirvana_(band)',3),('lucaslima','Oasis_(band)',3),('lucaslima','OceanLab',5),('lucaslima','Paul_van_Dyk',4),('lucaslima','Pearl_Jam',4),('lucaslima','Pink_Floyd',5),('lucaslima','Radiohead',3),('lucaslima','Sander_van_Doorn',3),('lucaslima','Simon_Patterson_(musician)',4),('lucaslima','Supertramp',4),('lucaslima','The_Doors',3),('lucaslima','The_Killers',3),('lucaslima','The_Trammps',3),('lucaslima','The_Who',4),('lucaslima','Ti%C3%ABsto',4),('lucaslima','Tim_Maia',4),('lucaslima','Ummet_Ozcan',3),('lucaslima','W%26W',3),('lucaslima','Zedd_(musician)',4),('lucaslima','Zz_top',4),('lucianosabenca','Banda_Calypso',1),('lucianosabenca','Cat_Stevens',4),('lucianosabenca','Dream_Theater',5),('lucianosabenca','Engenheiros_do_Hawaii',5),('lucianosabenca','Foo_Fighters',4),('lucianosabenca','Ghost_BC',4),('lucianosabenca','Los_Hermanos',5),('lucianosabenca','Megadeth',5),('lucianosabenca','System_of_a_Down',4),('pedroalmeida','30_Seconds_to_Mars',4),('pedroalmeida','Abba',5),('pedroalmeida','AFI_(band)',4),('pedroalmeida','Avril_Lavigne',2),('pedroalmeida','Backstreet_Boys',1),('pedroalmeida','Beyonce',2),('pedroalmeida','Black_keys',5),('pedroalmeida','Bombay_Bicycle_Club',5),('pedroalmeida','Bon_jovi',1),('pedroalmeida','Canon_Blue',5),('pedroalmeida','Cansei_de_ser_sexy',3),('pedroalmeida','Chris_Brown',1),('pedroalmeida','Daft_punk',5),('pedroalmeida','Ellie_Goulding',3),('pedroalmeida','Eminem',1),('pedroalmeida','Evanescence',1),('pedroalmeida','Foals',5),('pedroalmeida','Foster_the_People',5),('pedroalmeida','Imagine_Dragons',5),('pedroalmeida','Katy_Perry',2),('pedroalmeida','Kiss_(band)',1),('pedroalmeida','Leandro_e_Leonardo',1),('pedroalmeida','Madonna_(entertainer)',3),('pedroalmeida','Michael_Jackson',5),('pedroalmeida','Muse',4),('pedroalmeida','Nickelback',1),('pedroalmeida','Paramore',5),('pedroalmeida','Phoenix_(band)',5),('pedroalmeida','Rihanna',2),('pedroalmeida','Sandy_e_Junior',4),('pedroalmeida','Spice_Girls',1),('pedroalmeida','System_of_a_Down',5),('pedroalmeida','The_Killers',5),('pedroalmeida','The_Strokes',5),('pedroalmeida','The_xx',5),('pedroalmeida','Two_Door_Cinema_Club',5),('pedroalmeida','Vampire_Weekend',5),('rafaelgarcia','Albert_Hammond,_Jr.',5),('rafaelgarcia','Alt-J',3),('rafaelgarcia','Arcade_Fire',4),('rafaelgarcia','Arctic_Monkeys',5),('rafaelgarcia','Babyshambles',3),('rafaelgarcia','Best_Coast',3),('rafaelgarcia','Bj%C3%B6rk',3),('rafaelgarcia','Bombay_Bicycle_Club',4),('rafaelgarcia','Bon_Iver',3),('rafaelgarcia','Breakbot',4),('rafaelgarcia','Cage_the_Elephant',3),('rafaelgarcia','Cake',4),('rafaelgarcia','Carissa%27s_Wierd',4),('rafaelgarcia','Courteeners',4),('rafaelgarcia','Crystal_Castles_(band)',3),('rafaelgarcia','CSS_(band)',3),('rafaelgarcia','Cults_(band)',4),('rafaelgarcia','Daft_Punk',5),('rafaelgarcia','Delta_Spirit',4),('rafaelgarcia','Detektivbyr%C3%A5n',4),('rafaelgarcia','Florence_and_the_Machine',3),('rafaelgarcia','Foals',4),('rafaelgarcia','Foster_the_People',4),('rafaelgarcia','Franz_Ferdinand_(band)',4),('rafaelgarcia','Gorillaz',3),('rafaelgarcia','Haim_(band)',3),('rafaelgarcia','Interpol_(band)',4),('rafaelgarcia','Jake_Bugg',4),('rafaelgarcia','Julian_Casablancas',5),('rafaelgarcia','Justice',4),('rafaelgarcia','Justin_Bieber',1),('rafaelgarcia','Kaiser_Chiefs',5),('rafaelgarcia','Kakkmaddafakka',4),('rafaelgarcia','Kasabian',4),('rafaelgarcia','Kid_Cudi',3),('rafaelgarcia','Kings_of_Convenience',4),('rafaelgarcia','Linkin_Park',3),('rafaelgarcia','Little_Joy',5),('rafaelgarcia','Locksley_(band)',5),('rafaelgarcia','Los_Hermanos',3),('rafaelgarcia','M83_(band)',3),('rafaelgarcia','MGMT',3),('rafaelgarcia','Miley_Cyrus',2),('rafaelgarcia','Muse',4),('rafaelgarcia','Neutral_Milk_Hotel',4),('rafaelgarcia','Of_Monsters_and_Men',4),('rafaelgarcia','One_Direction',1),('rafaelgarcia','Passion_Pit',3),('rafaelgarcia','Phoenix_(band)',4),('rafaelgarcia','Queens_of_the_Stone_Age',4),('rafaelgarcia','Raconteurs',4),('rafaelgarcia','Radiohead',4),('rafaelgarcia','Rebbeca_Black',1),('rafaelgarcia','System_of_a_Down',5),('rafaelgarcia','Tame_Impala',4),('rafaelgarcia','The_Beatles',5),('rafaelgarcia','The_Black_Keys',4),('rafaelgarcia','The_Cribs',5),('rafaelgarcia','The_Enemy_(UK_band)',4),('rafaelgarcia','The_Films_(band)',3),('rafaelgarcia','The_Flaming_Lips',3),('rafaelgarcia','The_Fratellis',4),('rafaelgarcia','The_Killers',5),('rafaelgarcia','The_Kills',4),('rafaelgarcia','The_Kooks',4),('rafaelgarcia','The_Last_Shadow_Puppets',4),('rafaelgarcia','The_libertines',4),('rafaelgarcia','The_Offspring',3),('rafaelgarcia','The_Paddingtons',4),('rafaelgarcia','The_Pixies',4),('rafaelgarcia','The_Royalty',3),('rafaelgarcia','The_Royal_Concept',5),('rafaelgarcia','The_Soft_Pack',4),('rafaelgarcia','The_Strokes',5),('rafaelgarcia','The_Vaccines',4),('rafaelgarcia','The_View_(band)',3),('rafaelgarcia','The_Virgins',3),('rafaelgarcia','The_xx',4),('rafaelgarcia','Vampire_Weekend',4),('rafaelgarcia','Weezer',4),('rafaelgarcia','White_Lies_(band)',4),('rafaelgarcia','White_Stripes',4),('ramonmaciel','Arctic_Monkeys',4),('ramonmaciel','Avicii',3),('ramonmaciel','Coldplay',1),('ramonmaciel','Fratellis',5),('ramonmaciel','Macklemore',4),('ramonmaciel','Men_at_Work',4),('ramonmaciel','Phoenix_(band)',5),('ramonmaciel','Vampire_Weekend',5),('tiagoferreira','Aerosmith',3),('tiagoferreira','Beatles',5),('tiagoferreira','Bob_Dylan',5),('tiagoferreira','Charlie_Parker',5),('tiagoferreira','Chet_Baker',5),('tiagoferreira','Daft_Punk',4),('tiagoferreira','David_Matthews_Band',4),('tiagoferreira','DC',4),('tiagoferreira','Deep_Purple',4),('tiagoferreira','Eagles_(band)',3),('tiagoferreira','Elton_John',5),('tiagoferreira','Elvis_Presley',3),('tiagoferreira','Eric_Clapton',5),('tiagoferreira','Foo_Fighters',4),('tiagoferreira','Iron_Maiden',3),('tiagoferreira','Johnny_Cash',5),('tiagoferreira','John_Coltrane',5),('tiagoferreira','John_Williams',5),('tiagoferreira','Legi%C3%A3o_Urbana',5),('tiagoferreira','Metallica',4),('tiagoferreira','Miles_Davis',5),('tiagoferreira','Muse',5),('tiagoferreira','Nine_Inch_Nails',2),('tiagoferreira','Nirvana_(band)',3),('tiagoferreira','Oasis_(band)',4),('tiagoferreira','Pearl_Jam',4),('tiagoferreira','Pink_Floyd',5),('tiagoferreira','Radiohead',4),('tiagoferreira','Ray_Charles',4),('tiagoferreira','Red_Hot_Chili_Peppers',4),('tiagoferreira','Rolling_Stones',4),('tiagoferreira','Sex_Pistols',3),('tiagoferreira','Simon_and_Garfunkel',5),('tiagoferreira','The_Animals',3),('tiagoferreira','The_Cure',3),('tiagoferreira','The_Doors',5),('tiagoferreira','The_Killers',5),('tiagoferreira','The_Mamas_%26_the_Papas',4),('tiagoferreira','The_Smiths',4),('tiagoferreira','The_Who',5),('tiagoferreira','Tim_Maia',4),('tiagoferreira','ZZ_Top',4),('tomasqueiroga','Arctic_Monkeys',5),('tomasqueiroga','DC',4),('tomasqueiroga','Linkin_Park',5),('tomasqueiroga','Muse_(band)',3),('tomasqueiroga','Radiohead',2),('tomasqueiroga','Snow_patrol',3),('tomasqueiroga','System_of_Down',4),('tomasqueiroga','The_Beatles',5),('tomasqueiroga','The_Black_Keys',4),('tomasqueiroga','The_Strokes',5),('viniciussantos','Dream_theater',5),('viniciussantos','Led_Zepellin',4),('viniciussantos','Mega_deth',4),('viniciussantos','Metallica',5),('willianszati','Aerosmith',2),('willianszati','Avenged_Sevenfold',5),('willianszati','Black_Label_Society',5),('willianszati','Coldplay',2),('willianszati','DC',3),('willianszati','Guns_N\'_Roses',3),('willianszati','Iron_Maiden',4),('willianszati','Metallica',4),('willianszati','Ozzy_Osbourne',5),('willianszati','Pearl_Jam',4),('willianszati','Pink_Floyd',4),('willianszati','Rage_Against_the_Machine',2),('willianszati','Rammstein',4),('willianszati','Scorpions_(band)',3),('willianszati','System_of_a_Down',3),('willianszati','The_Doors',3);
/*!40000 ALTER TABLE `curtida` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estado`
--

DROP TABLE IF EXISTS `estado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `estado` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `pais_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `pais_id` (`pais_id`),
  CONSTRAINT `estado_ibfk_1` FOREIGN KEY (`pais_id`) REFERENCES `pais` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estado`
--

LOCK TABLES `estado` WRITE;
/*!40000 ALTER TABLE `estado` DISABLE KEYS */;
/*!40000 ALTER TABLE `estado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genero_artista`
--

DROP TABLE IF EXISTS `genero_artista`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `genero_artista` (
  `genero_id` int(11) NOT NULL,
  `artista` varchar(100) NOT NULL,
  PRIMARY KEY (`genero_id`,`artista`),
  KEY `artista` (`artista`),
  CONSTRAINT `genero_artista_ibfk_1` FOREIGN KEY (`genero_id`) REFERENCES `genero_musical` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `genero_artista_ibfk_2` FOREIGN KEY (`artista`) REFERENCES `artista` (`nome_artistico`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genero_artista`
--

LOCK TABLES `genero_artista` WRITE;
/*!40000 ALTER TABLE `genero_artista` DISABLE KEYS */;
/*!40000 ALTER TABLE `genero_artista` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genero_musical`
--

DROP TABLE IF EXISTS `genero_musical`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `genero_musical` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genero_musical`
--

LOCK TABLES `genero_musical` WRITE;
/*!40000 ALTER TABLE `genero_musical` DISABLE KEYS */;
/*!40000 ALTER TABLE `genero_musical` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `integrante`
--

DROP TABLE IF EXISTS `integrante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `integrante` (
  `banda_id` int(11) NOT NULL,
  `musico_id` int(11) NOT NULL,
  PRIMARY KEY (`banda_id`,`musico_id`),
  KEY `musico_id` (`musico_id`),
  CONSTRAINT `integrante_ibfk_1` FOREIGN KEY (`banda_id`) REFERENCES `banda` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `integrante_ibfk_2` FOREIGN KEY (`musico_id`) REFERENCES `musico` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `integrante`
--

LOCK TABLES `integrante` WRITE;
/*!40000 ALTER TABLE `integrante` DISABLE KEYS */;
/*!40000 ALTER TABLE `integrante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `musico`
--

DROP TABLE IF EXISTS `musico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `musico` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome_real` varchar(100) NOT NULL,
  `data_nascimento` date DEFAULT NULL,
  `estilo` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `musico`
--

LOCK TABLES `musico` WRITE;
/*!40000 ALTER TABLE `musico` DISABLE KEYS */;
/*!40000 ALTER TABLE `musico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pais`
--

DROP TABLE IF EXISTS `pais`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pais` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nome` (`nome`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pais`
--

LOCK TABLES `pais` WRITE;
/*!40000 ALTER TABLE `pais` DISABLE KEYS */;
/*!40000 ALTER TABLE `pais` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `razao_bloqueio`
--

DROP TABLE IF EXISTS `razao_bloqueio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `razao_bloqueio` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` int(11) NOT NULL,
  `descricao` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `razao_bloqueio`
--

LOCK TABLES `razao_bloqueio` WRITE;
/*!40000 ALTER TABLE `razao_bloqueio` DISABLE KEYS */;
/*!40000 ALTER TABLE `razao_bloqueio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `login` varchar(50) NOT NULL,
  `uri` varchar(255) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `cidade` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`login`),
  UNIQUE KEY `uri` (`uri`),
  KEY `cidade` (`cidade`),
  CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`cidade`) REFERENCES `cidade` (`nome`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES ('andreiauratsuka','http://www.ic.unicamp.br/MC536/2014/1/andreiauratsuka','andreia yukie uratsuka',''),('andresantanche','http://www.ic.unicamp.br/MC536/2014/1/andresantanche','andre santanche',''),('caiopalissari','http://www.ic.unicamp.br/MC536/2014/1/caiopalissari','caio vinicius uvini palissari',''),('caioteixeira','http://www.ic.unicamp.br/MC536/2014/1/caioteixeira','caio teixeira',''),('cibellebegalli','http://www.ic.unicamp.br/MC536/2014/1/cibellebegalli','cibelle begalli',''),('danielferreira','http://www.ic.unicamp.br/MC536/2014/1/danielferreira','daniel breves ferreira',''),('diegorocha','http://www.ic.unicamp.br/MC536/2014/1/diegorocha','diego rocha',''),('diegosanches','http://www.ic.unicamp.br/MC536/2014/1/diegosanches','Diego Sanches','Campinas'),('eduardapodesta','http://www.ic.unicamp.br/MC536/2014/1/eduardapodesta','eduarda viana podesta',''),('elisadellarriva','http://www.ic.unicamp.br/MC536/2014/1/elisadellarriva','elisa dellarriva',''),('elvisrabello','http://www.ic.unicamp.br/MC536/2014/1/elvisrabello','elvis rabello',''),('erikaalbizzati','http://www.ic.unicamp.br/MC536/2014/1/erikaalbizzati','erika couto albizzati',''),('fabiolira','http://www.ic.unicamp.br/MC536/2014/1/fabiolira','fabio maffei lira',''),('felipecaminada','http://www.ic.unicamp.br/MC536/2014/1/felipecaminada','felipe caminada',''),('felipehiga','http://www.ic.unicamp.br/MC536/2014/1/felipehiga','felipe kenji higa',''),('fellipecaetano','http://www.ic.unicamp.br/MC536/2014/1/fellipecaetano','fellipe santiago scarpa caetano',''),('fernandogoncalves','http://www.ic.unicamp.br/MC536/2014/1/fernandogoncalves','fernando henrique dos santos goncalves',''),('fernandohoyo','http://www.ic.unicamp.br/MC536/2014/1/fernandohoyo','fernando luiz del hoyo','campinas'),('fernandothiers','http://www.ic.unicamp.br/MC536/2014/1/fernandothiers','fernando barbosa thiers',''),('gabrielbezerra','http://www.ic.unicamp.br/MC536/2014/1/gabrielbezerra','gabriel massaki wakano bezerra',''),('guilhermemazzariol','http://www.ic.unicamp.br/MC536/2014/1/guilhermemazzariol','guilherme sbrolini mazzariol',''),('guilhermemendes','http://www.ic.unicamp.br/MC536/2014/1/guilhermemendes','guilherme da rocha alves mendes',''),('gustavonunes','http://www.ic.unicamp.br/MC536/2014/1/gustavonunes','gustavo cesar nunes',''),('ivancerboncini','http://www.ic.unicamp.br/MC536/2014/1/ivancerboncini','ivan de campos cerboncini',''),('joaodalben','http://www.ic.unicamp.br/MC536/2014/1/joaodalben','joao henrique dalben',''),('juceliofonseca','http://www.ic.unicamp.br/MC536/2014/1/juceliofonseca','jucelio evangelista fonseca',''),('leonardosilva','http://www.ic.unicamp.br/MC536/2014/1/leonardosilva','leonardo de oliveira silva',''),('leonnardorabello','http://www.ic.unicamp.br/MC536/2014/1/leonnardorabello','leonnardo chagas rabello',''),('luanbicesto','http://www.ic.unicamp.br/MC536/2014/1/luanbicesto','luan gustavo bicesto',''),('lucasbatista','http://www.ic.unicamp.br/MC536/2014/1/lucasbatista','lucas oliveira batista',''),('lucaslima','http://www.ic.unicamp.br/MC536/2014/1/lucaslima','Lucas Domingues Lima','Campinas'),('lucasmello','http://www.ic.unicamp.br/MC536/2014/1/lucasmello','lucas de campos mello',''),('lucianosabenca','http://www.ic.unicamp.br/MC536/2014/1/lucianosabenca','luciano padua sabenca',''),('luizgomes','http://www.ic.unicamp.br/MC536/2014/1/luizgomes','Luiz Celso Gomes Jr',''),('lukaslopes','http://www.ic.unicamp.br/MC536/2014/1/lukaslopes','lukas antunes lopes',''),('murilocruz','http://www.ic.unicamp.br/MC536/2014/1/murilocruz','murilo de lima cruz',''),('nicholasmizoguchi','http://www.ic.unicamp.br/MC536/2014/1/nicholasmizoguchi','nicholas matuzita mizoguchi',''),('pedroalmeida','http://www.ic.unicamp.br/MC536/2014/1/pedroalmeida','pedro cordeiro de almeida',''),('rafaelgarcia','http://www.ic.unicamp.br/MC536/2014/1/rafaelgarcia','rafael matheus garcia',''),('rafaelxavier','http://www.ic.unicamp.br/MC536/2014/1/rafaelxavier','rafael xavier',''),('ramonmaciel','http://www.ic.unicamp.br/MC536/2014/1/ramonmaciel','ramon carvalho maciel',''),('raphaelfranco','http://www.ic.unicamp.br/MC536/2014/1/raphaelfranco','raphael marques franco',''),('thiagobalbo','http://www.ic.unicamp.br/MC536/2014/1/thiagobalbo','thiago duarte balbo',''),('tiagoferreira','http://www.ic.unicamp.br/MC536/2014/1/tiagoferreira','tiago de lima ferreira',''),('tomasqueiroga','http://www.ic.unicamp.br/MC536/2014/1/tomasqueiroga','tomas silva queiroga',''),('tuliosilva','http://www.ic.unicamp.br/MC536/2014/1/tuliosilva','tulio bazan da silva',''),('victorsilva','http://www.ic.unicamp.br/MC536/2014/1/victorsilva','victor akira hassuda silva',''),('victortavares','http://www.ic.unicamp.br/MC536/2014/1/victortavares','victor guilherme oliveira semedo tavares',''),('viniciussantos','http://www.ic.unicamp.br/MC536/2014/1/viniciussantos','Vinicius Pereira dos Santos','Campinas'),('willianszati','http://www.ic.unicamp.br/MC536/2014/1/willianszati','willians hidalgo zati',''),('wilsonneto','http://www.ic.unicamp.br/MC536/2014/1/wilsonneto','wilson jose prata neto','');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2014-04-04 18:42:57

-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         5.7.21-log - MySQL Community Server (GPL)
-- SO del servidor:              Win64
-- HeidiSQL Versión:             9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Volcando estructura para tabla project3.spanish_places
CREATE TABLE IF NOT EXISTS `spanish_places` (
  `id` int(11) DEFAULT NULL,
  `name` varchar(1000) DEFAULT NULL,
  `latitude` varchar(1000) DEFAULT NULL,
  `longitude` varchar(1000) DEFAULT NULL,
  `parentid` varchar(1000) DEFAULT NULL,
  `type` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla project3.spanish_places: ~82 rows (aproximadamente)
/*!40000 ALTER TABLE `spanish_places` DISABLE KEYS */;
REPLACE INTO `spanish_places` (`id`, `name`, `latitude`, `longitude`, `parentid`, `type`) VALUES
	(2187, 'Barcelona Institute of Science and Technology (BIST)', '41.3888281', '2.1491666', NULL, 'Elixir'),
	(595, 'Barcelona Supercomputing Center', '41.3893997', '2.116153', NULL, 'Elixir'),
	(20233, 'Center for Research in Agricultural Genomics (CSIC', '40.4411076', '-3.6861518', '2259', NULL),
	(7045, 'Center for Research in Agricultural Genomics CRAG (CSIC', '40.4411076', '-3.6861518', '2259', NULL),
	(20240, 'Center for Research in Agricultural Genomics CSIC', '40.4411076', '-3.6861518', '2259', NULL),
	(7606, 'Centre de Recerca en Agrigenòmica (Consorci CSIC', '40.4411076', '-3.6861518', '2259', NULL),
	(8100, 'Centre de Recerca en Agrigenòmica CSIC', '40.4411076', '-3.6861518', '2259', NULL),
	(285, 'Centre for Genomic Regulation (CRG)', '41.3853788', '2.1940517', NULL, 'Elixir'),
	(6351, 'Centre for Research in Agricultural Genomics (CRAG) CSIC', '40.4411076', '-3.6861518', '2259', NULL),
	(20307, 'Centre for Research in Agricultural Genomics (CRAG-CSIC)', '41.497474', '2.108141', NULL, 'Other'),
	(6457, 'Centre for Research in Agricultural Genomics CRAG (CSIC', '40.4411076', '-3.6861518', '2259', NULL),
	(20239, 'Centre for Research in Agricultural Genomics CSIC', '40.4411076', '-3.6861518', '2259', NULL),
	(20308, 'Centro Andaluz de Biología Molecular y Medicina Regenerativa (CSIC-USE-UPO)', '37.411416', '-6.005799', NULL, 'Other'),
	(20309, 'Centro de Biología Molecular Severo Ochoa (CBMSO-CSIC)', '40.550082', '-3.690524', NULL, 'Other'),
	(3630, 'Centro Nacional de Biotecnología (CSIC)', '40.544571', '-3.69018', '2259', NULL),
	(9711, 'Centro Nacional de Biotecnología/CSIC', '40.544571', '-3.69018', '2259', NULL),
	(20310, 'CNB (CSIC)', '40.544669', '-3.690266', NULL, 'Elixir'),
	(20125, 'Consejo Superior de Investigaciones Científicas (CSIC)', '40.4411076', '-3.6861518', '2259', NULL),
	(4114, 'Consejo Superior de Investigaciones Científicas (CSIC)/Universidad de Salamanca', '40.9697705', '-5.6828056', '2259', NULL),
	(7181, 'Consejo Superior de Investigaciones Científicas/ Universidad de Salamanca (CSIC/USAL)', '40.9697705', '-5.6828056', '2259', NULL),
	(17295, 'CSIC', '40.4411076', '-3.6861518', '2259', NULL),
	(2259, 'CSIC (Spanish National Research Council)', '40.4411076', '-3.6861518', NULL, 'Other'),
	(10020, 'CSIC and Institute for Research in Biomedicine', '41.382955', '2.1157382', '2259', NULL),
	(785, 'CSIC/Universidad Autonoma de Madrid', '40.482911', '-3.691782', '2259', NULL),
	(20248, 'Hospital Universitario Virgen del Rocío/CSIC', '', '', '2259', NULL),
	(20311, 'IBFG (CSIC)', '40.969795', '-5.682816', NULL, 'Other'),
	(20312, 'IBMCC (CSIC)', '40.96402', '-5.677614', NULL, 'Other'),
	(20313, 'IBVF (CSIC)', '37.411751', '-6.006817', NULL, 'Other'),
	(618, 'Institute for Research in Biomedicine (IRB Barcelona)', '41.3822262', '2.1181', NULL, 'Elixir'),
	(20236, 'Institute of Agrochemistry and Food Technology (CSIC)', '40.4411076', '-3.6861518', '2259', NULL),
	(8520, 'Institute of Aquaculture Torre de la Sal (CSIC)', '40.137962', '0.165536', '2259', NULL),
	(20316, 'Institute of Aquaculture Torre de la Sal (CSIC-)', '40.137962', '0.165536', NULL, 'Other'),
	(20237, 'Institute of Evolutionary Biology (CSIC', '40.4411076', '-3.6861518', '2259', NULL),
	(20317, 'Instituto de Investigaciones Biomedicas Alberto Sols (CSIC-UAM)', '40.482927', '-3.691803', NULL, 'Other'),
	(20318, 'Instituto de Investigaciones Marinas (CSIC)', '42.225824', '-8.752204', NULL, 'Other'),
	(20319, 'Misión Biológica de Galicia (CSIC)', '42.405435', '-8.642674', NULL, 'Other'),
	(10827, 'Molecular Biology Institute of Barcelona (CSIC)', '41.382623', '2.118456', '2259', NULL),
	(20321, 'Molecular Biology Institute of Barcelona (CSIC-)', '41.382623', '2.118456', NULL, 'Elixir'),
	(20251, 'National Center of Biotechnology (CSIC)', '40.4411076', '-3.6861518', '2259', NULL),
	(500, 'Spanish National Cancer Research Center (CNIO)', '40.476268', '-3.693884', NULL, 'Elixir'),
	(8529, 'Spanish National Research Council (CSIC)', '40.4411076', '-3.6861518', '2259', NULL),
	(638, 'Universidad Autónoma de Madrid', '40.5466983', '-3.6943619', NULL, 'Other'),
	(11802, 'Universidad Autónoma de Madrid/CSIC', '40.482911', '-3.691782', '785', NULL),
	(376, 'Universidad Complutense de Madrid', '40.4478246', '-3.7285872', NULL, 'Other'),
	(1147, 'Universidad de Granada', '37.1846223', '-3.6006329', NULL, 'Other'),
	(20034, 'Universidad de Salamanca (CSIC', '40.96402', '-5.677614', '1612', NULL),
	(12393, 'Universidad de Salamanca/CSIC', '40.96402', '-5.677614', '1612', NULL),
	(2138, 'Universidad de Sevilla', '37.3807579', '-5.9912307', NULL, 'Other'),
	(2139, 'Universidad Pablo de Olavide (CSIC', '40.4411076', '-3.6861518', '2259', NULL),
	(752, 'Universidad Politécnica de Valencia', '39.481059', '-0.341067', NULL, 'Other'),
	(20228, 'Universitat de Barcelona and Centre for Research in Agricultural Genomics (CSIC', '', '', '20201', NULL),
	(600, 'Universitat Politècnica de Catalunya', '41.388004', '2.1132804', NULL, 'Other'),
	(561, 'Universitat Pompeu Fabra', '41.3789689', '2.1797941', NULL, 'Elixir'),
	(230, 'University of Barcelona', '41.386608', '2.16402', NULL, 'Elixir'),
	(1557, 'University of Malaga', '36.7199506', '-4.4160927', NULL, 'Other'),
	(1022, 'University of Navarra', '42.8014859', '-1.6597295', NULL, 'Other'),
	(4078, 'University of Salamanca', '40.9613376', '-5.6669251', NULL, 'Other'),
	(4208, 'University of Valencia', '39.4793254', '-0.3593863', NULL, 'Other'),
	(1710, 'University of Vigo', '42.1694839', '-8.6834785', NULL, 'Other'),
	(NULL, 'Institucio Catalana de Recerca i Estudis Avancats (ICREA)', '41.391115', '2.179451', NULL, 'Elixir'),
	(NULL, 'Universitat Autònoma de Barcelona', '41.501914', '2.104863', NULL, 'Elixir'),
	(NULL, 'Hospital Virgen del Rocío', '37.361783', '-5.980261', NULL, 'Other'),
	(NULL, 'Bellvitge Biomedical Research Institute (IDIBELL)', '41.345187', '2.110295', NULL, 'Elixir'),
	(NULL, 'Centro de Investigación Príncipe Felipe (CIPF)', '39.452', '-0.344', NULL, 'Elixir'),
	(NULL, 'Vall d\'Hebron Research Institute', '41.426', '2.141', NULL, 'Elixir'),
	(NULL, 'Hospital Universitario La Paz', '40.481', '-3.687', NULL, 'Elixir'),
	(NULL, 'Jaume I University', '39.994', '-0.068', NULL, 'Other'),
	(NULL, 'Institut d\'Investigacions Biomèdiques August Pi i Sunyer (IDIBAPS)', '41.388', '2.150', NULL, 'Elixir'),
	(NULL, 'Hospital Clinic', '41.389', '2.152', NULL, 'Elixir'),
	(NULL, 'Universidad de Salamanca', '40.961', '-5.666', NULL, 'Other'),
	(NULL, 'Universidad de Córdoba', '37.88', '-4.78', NULL, 'Other'),
	(NULL, 'Universitat Oberta de Catalunya', '41.406', '2.194', NULL, 'Other'),
	(NULL, 'Hospital Sant Joan de Déu', '41.384', '2.102', NULL, 'Elixir'),
	(NULL, 'Universidad de Oviedo', '43.354', '-5.868', NULL, 'Other'),
	(NULL, 'Universidad del País Vasco', '43.33', '-2.967', NULL, 'Other'),
	(NULL, 'University of Santiago de Compostela', '42.888', '-8.544', NULL, 'Other'),
	(NULL, 'University of Córdoba', '37.884', '-4.788', NULL, 'Other'),
	(NULL, 'University of Girona', '41.963', '2.83', NULL, 'Other'),
	(NULL, 'University of Cantabria', '43.471', '-3.804', NULL, 'Other'),
	(NULL, 'University of Jaen', '37.788', '-3.777', NULL, 'Other'),
	(NULL, 'Centro de Investigaciones Biológicas (CSIC)', '40.447', '-3.721', NULL, 'Elixir');
/*!40000 ALTER TABLE `spanish_places` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

-- phpMyAdmin SQL Dump
-- version 4.6.6deb5ubuntu0.5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 30-06-2021 a las 22:55:52
-- Versión del servidor: 5.7.34-0ubuntu0.18.04.1
-- Versión de PHP: 7.2.24-0ubuntu0.18.04.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `freedbtech_ruthiedb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `comment` varchar(500) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `comments`
--

INSERT INTO `comments` (`id`, `name`, `email`, `comment`, `createdAt`, `updatedAt`) VALUES
(1, 'Julieta Salinas', 'julietassalinas@hotmail.com', 'TOMA PUTA', NULL, NULL),
(2, 'Juan (@gertdelpozo)', 'jmfrey@gmail.com', 'Hasta ahora de lo mejor que encontré en OkCupid :P\r\nGracias', NULL, NULL),
(3, 'Lando', 'come@calz.on', '¡Moy bueno!\r\n\r\nLe agregaría un par de easter eggs / actividades / puntos extra para quien vea el código o inspeccione los elementos ;-)\r\n\r\nSaludos,', NULL, NULL),
(4, 'Camaron Camarada', 'test@test.test', 'test@test.test', '2021-03-25 00:25:16', '2021-03-25 00:25:16');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `desafio01` int(11) DEFAULT '0',
  `desafio02` int(11) DEFAULT '0',
  `desafio03` int(11) DEFAULT '0',
  `desafio04` int(11) DEFAULT '0',
  `desafio05` int(11) DEFAULT '0',
  `desafio06` int(11) DEFAULT '0',
  `desafio07` int(11) DEFAULT '0',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `desafio01`, `desafio02`, `desafio03`, `desafio04`, `desafio05`, `desafio06`, `desafio07`, `createdAt`, `updatedAt`) VALUES
(1, 'Max Power', 50, 0, 0, 0, 0, 40, 150, NULL, NULL),
(2, 'nombre generado por computadora', 50, 0, 0, 0, 0, 0, 0, NULL, NULL),
(3, 'Diebsas', 0, 0, 0, 0, 0, 0, 0, NULL, NULL),
(4, 'Pablo', 0, 0, 0, 0, 0, 0, 0, NULL, NULL),
(5, 'Gati', 0, 0, 0, 0, 0, 0, 0, NULL, NULL),
(6, 'Booby Curvas', 50, 30, 0, 0, 0, 0, 0, NULL, NULL),
(7, 'Cris', 0, 0, 0, 0, 0, 0, 0, NULL, NULL),
(8, 'Leonardo', 0, 0, 0, 0, 0, 0, 0, NULL, NULL),
(9, 'Leonardo', 0, 0, 0, 0, 0, 0, 0, NULL, NULL),
(10, 'Leonardo', 50, 0, 0, 0, 0, 0, 0, NULL, NULL),
(11, 'Leonardo', 50, 0, 0, 0, 0, 0, 0, NULL, NULL),
(12, 'Leonardo', 50, 30, 0, 0, 0, 0, 0, NULL, NULL),
(13, 'Leonardo', 50, 30, 0, 0, 0, 0, 0, NULL, NULL),
(14, 'Cosme Fulanito', 50, 0, 0, 0, 0, 0, 0, NULL, NULL),
(15, 'Flor', 50, 30, 60, 100, 20, 40, 0, NULL, NULL),
(16, 'Leonardo', 50, 30, 60, 100, 20, 40, 0, NULL, NULL),
(17, 'Julieta', 50, 30, 60, 100, 20, 40, 150, NULL, NULL),
(18, 'uwu', 50, 0, 0, 0, 0, 0, 0, NULL, NULL),
(19, 'Nicolás', 50, 30, 60, 100, 20, 40, 150, NULL, NULL),
(20, 'Edna K', 50, 30, 0, 0, 0, 0, 0, NULL, NULL),
(21, 'Santi S', 0, 0, 0, 0, 0, 0, 0, NULL, NULL),
(22, 'adelodio', 50, 30, 0, 0, 0, 0, 0, NULL, NULL),
(23, 'Santi 2', 50, 30, 60, 0, 0, 0, 0, NULL, NULL),
(24, 'Leslie ', 50, 30, 0, 0, 0, 0, 0, NULL, NULL),
(25, 'Karina', 0, 0, 0, 0, 0, 0, 0, NULL, NULL),
(26, 'Paco', 50, 30, 0, 0, 0, 0, 0, NULL, NULL),
(27, 'Sofi', 50, 30, 0, 0, 0, 0, 0, NULL, NULL),
(28, 'Sofi', 50, 30, 60, 0, 0, 0, 0, NULL, NULL),
(29, 'Manuela', 50, 0, 0, 0, 0, 0, 0, NULL, NULL),
(30, 'Carolina', 0, 0, 0, 0, 0, 0, 0, NULL, NULL),
(31, 'Lean', 0, 0, 0, 0, 0, 0, 0, NULL, NULL),
(32, 'Pol', 0, 0, 0, 0, 0, 0, 0, NULL, NULL),
(33, 'Nicolás', 50, 0, 0, 0, 0, 0, 0, NULL, NULL),
(34, 'Cazaputas42', 50, 0, 0, 0, 0, 0, 0, NULL, NULL),
(35, 'Booby Curvas', 0, 0, 0, 0, 0, 0, 0, NULL, NULL),
(36, 'gert', 50, 30, 60, 100, 20, 40, 0, NULL, NULL),
(37, 'Fede', 0, 0, 0, 0, 0, 0, 0, NULL, NULL),
(38, 'Cosme Fulanito', 50, 0, 0, 0, 0, 0, 0, NULL, NULL),
(39, 'Yosta', 0, 0, 0, 0, 0, 0, 0, NULL, NULL),
(40, 'loquesestaralpedo', 0, 0, 0, 0, 0, 0, 0, NULL, NULL),
(41, 'Jota', 0, 0, 0, 0, 0, 0, 0, NULL, NULL),
(42, 'Androcles', 50, 0, 0, 0, 0, 0, 0, NULL, NULL),
(43, 'come_calzones', 0, 0, 0, 0, 0, 0, 0, NULL, NULL),
(44, 'come_calzones', 50, 30, 60, 100, 20, 40, 150, NULL, NULL),
(45, 'promovi2', 50, 30, 60, 100, 20, 40, 150, NULL, NULL),
(46, 'Cosme Fulanito', 0, 0, 0, 0, 0, 0, 0, NULL, NULL),
(47, 'Sebastian', 50, 30, 0, 0, 0, 0, 0, NULL, NULL),
(48, 'Nachino', 0, 0, 0, 0, 0, 0, 0, NULL, NULL),
(49, 'Mauro', 0, 0, 0, 0, 0, 0, 0, NULL, NULL),
(50, 'Mauro', 0, 0, 0, 0, 0, 0, 0, NULL, NULL),
(51, 'Iñaki', 50, 30, 0, 0, 0, 0, 0, NULL, NULL),
(52, 'Nachino', 0, 0, 0, 0, 0, 0, 0, NULL, NULL),
(53, 'Nachino', 50, 30, 0, 0, 0, 0, 0, NULL, NULL),
(54, 'nombre generado por computadora', 0, 0, 0, 0, 0, 0, 0, NULL, NULL),
(55, 'Nachino', 50, 30, 0, 0, 0, 0, 0, NULL, NULL),
(56, 'Gus', 0, 0, 0, 0, 0, 0, 0, NULL, NULL),
(57, 'tt', 50, 30, 0, 0, 0, 0, 0, NULL, NULL),
(58, 'Juan martin', 50, 0, 0, 0, 0, 0, 0, NULL, NULL),
(59, 'el pela 1', 0, 0, 0, 0, 0, 0, 0, NULL, NULL),
(60, 'Mario ano', 0, 0, 0, 0, 0, 0, 0, NULL, NULL),
(61, 'nombre generado por computadora', 50, 30, 0, 0, 0, 0, 0, NULL, NULL),
(62, 'nombre generado por computadora', 50, 30, 0, 0, 0, 0, 0, NULL, NULL),
(63, 'Admin', 50, 30, 0, 0, 0, 0, 0, NULL, NULL),
(64, 'Admin', 50, 30, 0, 0, 0, 0, 0, NULL, NULL),
(65, 'Admin', 50, 30, 0, 0, 0, 0, 0, NULL, NULL),
(66, 'admin', 50, 30, 60, 0, 0, 0, 0, NULL, NULL),
(67, 'Booby Curvas', 0, 0, 0, 0, 0, 0, 0, '2021-03-24 22:20:55', '2021-03-24 22:20:55'),
(68, 'Camaron Camarada', 50, 30, 0, 0, 0, 0, 150, '2021-03-25 00:21:45', '2021-03-25 00:24:49'),
(69, 'Cristian', 50, 0, 0, 0, 0, 0, 0, '2021-03-25 01:10:57', '2021-03-25 01:13:05'),
(70, 'Pablo', 0, 0, 0, 0, 0, 0, 0, '2021-03-26 08:17:23', '2021-03-26 08:17:23'),
(71, 'fedelen', 50, 30, 0, 0, 0, 0, 0, '2021-03-26 20:57:33', '2021-03-26 21:08:50'),
(72, 'Max Power', 50, 30, 0, 0, 0, 0, 0, '2021-03-26 21:06:32', '2021-03-26 21:07:10'),
(73, 'fede', 50, 0, 0, 0, 0, 0, 0, '2021-03-29 20:43:17', '2021-03-29 20:44:30'),
(74, 'fede', 50, 30, 60, 0, 0, 0, 0, '2021-03-29 20:49:32', '2021-03-29 20:54:18'),
(75, 'Dario', 0, 0, 0, 0, 0, 0, 0, '2021-04-01 15:49:41', '2021-04-01 15:49:41'),
(76, 'Dante', 50, 30, 0, 0, 0, 0, 0, '2021-04-01 18:43:53', '2021-04-01 18:51:02'),
(77, 'Homero Thompson', 50, 30, 0, 0, 0, 0, 0, '2021-04-03 03:24:05', '2021-04-03 03:34:11'),
(78, 'Xapi', 0, 0, 0, 0, 0, 0, 0, '2021-04-09 00:36:40', '2021-04-09 00:36:40'),
(79, 'Xapi', 50, 0, 0, 0, 0, 0, 0, '2021-04-09 00:39:06', '2021-04-09 00:39:11'),
(80, 'Booby Curvas', 0, 0, 0, 0, 0, 0, 0, '2021-04-17 02:15:35', '2021-04-17 02:15:35'),
(81, 'pinpon', 0, 0, 0, 0, 0, 0, 0, '2021-04-17 02:30:24', '2021-04-17 02:30:24'),
(82, 'Pechugas Larú', 50, 30, 60, 100, 20, 40, 0, '2021-04-17 03:05:27', '2021-04-17 04:02:07'),
(83, 'Goina', 50, 30, 60, 100, 20, 0, 150, '2021-04-19 19:15:15', '2021-04-19 20:12:08'),
(84, 'Homero Thompson', 50, 0, 0, 0, 0, 0, 0, '2021-04-19 22:30:20', '2021-04-19 22:32:49'),
(85, 'nombre generado por computadora', 50, 30, 60, 100, 20, 40, 0, '2021-04-19 22:34:48', '2021-04-19 22:48:17'),
(86, 'Schmoina', 50, 30, 60, 100, 20, 40, 0, '2021-04-20 13:52:13', '2021-04-20 13:54:19'),
(87, 'leo', 0, 0, 0, 0, 0, 0, 0, '2021-04-22 02:41:32', '2021-04-22 02:41:32'),
(88, 'Pedo', 50, 0, 0, 0, 0, 0, 0, '2021-04-22 13:08:37', '2021-04-22 13:12:52'),
(89, 'Pedos', 50, 30, 60, 0, 0, 0, 0, '2021-04-22 13:54:23', '2021-04-22 14:08:03'),
(90, 'Lalo landa', 0, 0, 0, 0, 0, 0, 0, '2021-04-23 00:39:56', '2021-04-23 00:39:56'),
(92, 'Come Calzón', 100, 0, 0, 0, 0, 40, 0, '2021-04-24 14:36:12', '2021-04-24 14:37:21'),
(93, 'mi agujero', 100, 0, 0, 0, 0, 0, 0, '2021-04-25 22:44:48', '2021-04-25 22:45:39'),
(94, 'Max Power', 0, 0, 0, 0, 0, 0, 0, '2021-04-25 22:48:03', '2021-04-25 22:48:03'),
(95, 't1nch0x', 0, 0, 0, 0, 0, 0, 0, '2021-04-27 17:43:25', '2021-04-27 17:43:25'),
(96, 'Agus', 50, 0, 0, 0, 0, 0, 0, '2021-04-29 11:25:23', '2021-04-29 11:53:13'),
(97, 'Agus', 50, 1000, 60, 0, 0, 0, 0, '2021-04-29 17:41:00', '2021-04-29 18:04:56'),
(98, 'Lucho', 50, 1000, 0, 0, 0, 0, 0, '2021-04-29 22:04:29', '2021-04-29 22:04:46'),
(99, 'Cosme Fulanito', 50, 1000, 60, 100, 20, 40, 0, '2021-05-01 21:42:32', '2021-05-01 21:51:22'),
(100, 'emi', 50, 0, 0, 0, 0, 0, 0, '2021-05-01 21:53:15', '2021-05-01 21:55:26'),
(101, 'Edna K', 0, 0, 0, 0, 0, 0, 0, '2021-05-01 21:53:49', '2021-05-01 21:53:49'),
(102, 'Come Calzón', 0, 0, 0, 0, 0, 0, 0, '2021-05-01 21:53:49', '2021-05-01 21:53:49'),
(103, 'Quimey', 0, 0, 0, 0, 0, 0, 0, '2021-05-05 03:15:37', '2021-05-05 03:15:37'),
(104, 'Joaquin', 50, 0, 0, 0, 0, 0, 0, '2021-05-06 23:58:23', '2021-05-07 00:01:20'),
(105, 'Tasslehoff', 0, 0, 0, 0, 0, 0, 0, '2021-05-11 02:23:46', '2021-05-11 02:23:46'),
(106, 'PechugasLaru', 50, 0, 0, 0, 0, 0, 0, '2021-05-11 23:21:57', '2021-05-11 23:26:01'),
(107, 'Germán', 50, 0, 0, 0, 0, 0, 0, '2021-05-14 04:30:04', '2021-05-14 04:34:41'),
(108, 'Germán', 50, 30, 60, 100, 20, 40, 0, '2021-05-14 04:41:15', '2021-05-14 05:04:44'),
(109, 'NicoLunatic0', 0, 0, 0, 0, 0, 0, 0, '2021-05-15 05:07:16', '2021-05-15 05:07:16'),
(110, 'Pechugas Larú', 0, 0, 0, 0, 0, 0, 0, '2021-05-19 02:51:26', '2021-05-19 02:51:26'),
(111, 'wala', 0, 0, 0, 0, 0, 0, 0, '2021-05-25 13:22:01', '2021-05-25 13:22:01'),
(112, 'wala', 0, 0, 0, 0, 0, 0, 0, '2021-05-25 13:27:16', '2021-05-25 13:27:16'),
(113, 'Jose', 0, 0, 0, 0, 0, 0, 0, '2021-05-30 23:10:12', '2021-05-30 23:10:12'),
(114, 'Sarlanga', 0, 0, 0, 0, 0, 0, 0, '2021-05-31 18:06:29', '2021-05-31 18:06:29'),
(115, 'Lucho', 0, 0, 0, 0, 0, 0, 0, '2021-06-05 03:11:59', '2021-06-05 03:11:59'),
(116, 'Hugo', 50, 0, 0, 0, 0, 0, 0, '2021-06-09 02:55:08', '2021-06-09 03:00:48'),
(117, 'Nix', 0, 0, 0, 0, 0, 0, 0, '2021-06-12 04:55:12', '2021-06-12 04:55:12'),
(118, 'Pablo', 0, 0, 0, 0, 0, 0, 0, '2021-06-14 02:57:23', '2021-06-14 02:57:23'),
(119, 'Iván', 0, 0, 0, 0, 0, 0, 0, '2021-06-16 19:16:51', '2021-06-16 19:16:51'),
(120, 'señor thompson', 50, 30, 60, 0, 0, 0, 0, '2021-06-18 02:04:15', '2021-06-18 02:16:51'),
(121, 'Pechugas Larú', 0, 0, 0, 0, 0, 0, 0, '2021-06-20 13:05:59', '2021-06-20 13:05:59'),
(122, 'Felo', 0, 0, 0, 0, 0, 0, 0, '2021-06-24 10:39:11', '2021-06-24 10:39:11');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=123;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

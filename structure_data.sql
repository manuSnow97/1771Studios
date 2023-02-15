-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-11-2022 a las 23:05:04
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `1771studios`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria_usuario`
--

CREATE TABLE `categoria_usuario` (
  `id` int(10) NOT NULL,
  `categoria` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categoria_usuario`
--

INSERT INTO `categoria_usuario` (`id`, `categoria`) VALUES
(1, 'administrador'),
(2, 'cliente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cursos`
--

CREATE TABLE `cursos` (
  `id` int(10) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `duracion` text NOT NULL,
  `precio` decimal(10,0) NOT NULL,
  `images` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cursos`
--

INSERT INTO `cursos` (`id`, `titulo`, `duracion`, `precio`, `images`) VALUES
(1, 'Guitarra', '1 mes', '4500', 0x636c6173652067756974617272612e6a706567),
(2, 'Bajo', '1 mes', '4500', 0x636c6173652062616a6f2e706e67),
(3, 'Canto', '1 mes', '4000', 0x636c6173652063616e746f2e6a706567),
(4, 'Bateria', '1 mes', '5000', 0x636c61736520626174657269612e6a706567),
(5, 'Teclado', '1 mes', '4000', 0x636c617365207465636c61646f2e706e67);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `salas`
--

CREATE TABLE `salas` (
  `id` int(10) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `metros_cuadrados` text NOT NULL,
  `turno_sala` varchar(30) NOT NULL,
  `precio` decimal(10,0) NOT NULL,
  `images` blob NOT NULL,
  `descripcion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `salas`
--

INSERT INTO `salas` (`id`, `titulo`, `metros_cuadrados`, `turno_sala`, `precio`, `images`, `descripcion`) VALUES
(1, 'Sala Platinum', '38 mts2', '4 horas', '40000', 0x53616c6120506c6174696e756d2e6a706567, 'Bateria TAMA Superstar Custom Amplificador de guitarra Orange Dual Terror con Cabina Orange 4x12 Amplificador de guitarra Marshall DSL100 con cabina Marshall 1960A 4x12 Amplificador de bajo Ampeg PF500 con Cabina Ampeg 800 watts. Monitores Cerwin Vega (PA+Drum Fill+ Sub-Woofer) Consola Digital Line 6 M20d'),
(2, 'Sala Gold', '46 mts2', '4 horas', '45000', 0x53616c6120476f6c642e6a706567, 'Bateria YAMAHA Stage Amplificador de guitarra Yamaha GA Series GA-15 5x15 Amplificador Fender Champion 20 para guitarra 32.5 cm de alto x 35 cm de ancho x 19 cm de profundidad Amplificador Ampeg Bassamp Series BA-108 Transistor para bajo 42.7 cm de alto x 38.1 cm de ancho x 30.5 cm de profundidad Monitores Cerwin Vega (PA+Drum Fill+ Sub-Woofer) Consola Digital Line 6 M20d'),
(3, 'Sala Premium', '52 mts2', '4 horas', '50000', 0x53616c61205072656d69756d2e6a706567, 'Pearl Export Lacquer 5-Pc. Shell Pack Hardware Teclado Musical Casio Ctk-3500 Amplificador de guitarra Yamaha GA Series GA-15 5x15 Amplificador Fender Champion 20 para guitarra 32.5 cm de alto x 35 cm de ancho x 19 cm de profundidad Amplificador Ampeg Bassamp Series BA-108 Transistor para bajo 42.7 cm de alto x 38.1 cm de ancho x 30.5 cm de profundidad Monitores Cerwin Vega (PA+Drum Fill+ Sub-Woofer) Consola Digital Line 6 M20d');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(128) NOT NULL,
  `apellido` varchar(128) NOT NULL,
  `direccion` text NOT NULL,
  `ciudad` varchar(255) NOT NULL,
  `estado_provincia` varchar(255) NOT NULL,
  `pais` varchar(255) NOT NULL,
  `codigo_postal` varchar(10) NOT NULL,
  `telefono` varchar(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` text NOT NULL,
  `profile_image` blob NOT NULL,
  `categoria_usuario_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `direccion`, `ciudad`, `estado_provincia`, `pais`, `codigo_postal`, `telefono`, `email`, `password`, `profile_image`, `categoria_usuario_id`) VALUES
(1, 'Manuel', 'Nieva', 'Av. Del Libertador', 'CABA', 'CABA', 'Argentina', '1430', '1561534641', 'manuore97@gmail.com', '1234', '', 1),
(5, 'Gaston', 'Jmenez', 'Av. Del Libertador 888', 'CABA', 'CABA', 'Argentina', '1428', '01165432678', 'gas97@gmail.com', '$2a$10$s/p5PmGx16T692kIGhFet.wUAvrB3lNUCbG3sWa3mMaxaSbXbAGVO', 0x736e6f776d616e752e6a7067, 2),
(6, 'Gaston', 'Jmenez', 'Av. Del Libertador 888', 'CABA', 'CABA', 'Argentina', '1428', '01165432678', 'gas97@gmail.com', '$2a$10$JUA.Hw2IxS3PiZk7mA0srOxlkJyU0sX0wujrgXwCGPFqA7vFEuSLW', '', 2),
(7, 'pablo', 'sosc', 'nuñes 234', 'CABA', 'CABA', 'Argentina', '2234', '01146378493', 'socsa7@gmail.com', '$2a$10$rlW0.b6lzT3EbxqGty7kG.HcsQr7ptqIp182l5KHv4Bs3dtbY4uHW', '', 2),
(8, 'pep', 'jans', 'saavedra 475', 'CABA', 'CABA', 'Argentina', '1432', '1190876532', 'pajs@gmail.com', '$2a$10$to7hcCnf8QtKwGKz1ZxTHeKGyImkUlyW9nGHBOcp.LyYZEqrV0feq', 0x70726f66696c655f696d6167652d31363637343436303836313533, 2),
(9, 'Gast', 'Jmenez', 'Av. Del Libertador 888', 'CABA', 'CABA', 'Argentina', '1428', '1123658793', 'jjf@gmail.com', '$2a$10$gTOhzSSCXN1OmcFnyl4Bb.T5JY/lRPDyJKmN8/1.rfnd4d/LdtaGm', 0x70726f66696c655f696d6167652d31363637343436313834353037, 2),
(10, 'lop', 'pala', 'Av. Del Libertador 8432', 'CABA', 'CABA', 'Argentina', '1428', '1134726590', 'lpa@gmail.com', '$2a$10$kxnTQUMU2xYtk3F5pOlN4uIsZc/.dk1ix/OPJrWluXsk1d/y/KN/.', 0x313636373434363736323032392d373030783531315f536c69646572496e746572696f722e6a7067, 2),
(11, 'jaz', 'pinci', 'Av. Del Libertador 5878', 'CABA', 'CABA', 'Argentina', '1428', '1178569045', 'jazpinci@gmail.com', '$2a$10$PwX2dCh44x4ZqlDbPUnDQOdo7GOJslwyGwqKopkOeii4fAcQaP4TW', 0x313636373434383735383938392d57494e5f32303231303230345f32335f30335f32355f50726f2e6a7067, 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria_usuario`
--
ALTER TABLE `categoria_usuario`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cursos`
--
ALTER TABLE `cursos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `salas`
--
ALTER TABLE `salas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoria_usuario_id` (`categoria_usuario_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoria_usuario`
--
ALTER TABLE `categoria_usuario`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `cursos`
--
ALTER TABLE `cursos`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `salas`
--
ALTER TABLE `salas`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`categoria_usuario_id`) REFERENCES `categoria_usuario` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
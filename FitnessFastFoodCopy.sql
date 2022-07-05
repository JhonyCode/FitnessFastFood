-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 01-07-2022 a las 14:20:19
-- Versión del servidor: 8.0.29-0ubuntu0.20.04.3
-- Versión de PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `FitnessFastFoodCopy`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `id` int NOT NULL,
  `nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id`, `nombre`, `descripcion`) VALUES
(1, 'Desayunos', 'Descripción Número 0'),
(2, 'Meriendas', 'Descripción Número 1'),
(3, 'Comidas', 'Descripción Número 2'),
(4, 'Cenas', 'Descripción Número 3'),
(5, 'Snacks', 'Descripción Número 4');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentario`
--

CREATE TABLE `comentario` (
  `id` int NOT NULL,
  `fecha` datetime NOT NULL,
  `texto` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `comentario`
--

INSERT INTO `comentario` (`id`, `fecha`, `texto`) VALUES
(1, '2022-06-23 15:51:43', 'Proteinas	61 gramos\r\nCarbohidratos	34 gramos\r\nGrasas	19 gramos\r\nCalorias Totales	551 calorias'),
(2, '2022-06-23 15:51:43', 'Proteinas	79 gramos\r\nCarbohidratos	24 gramos\r\nGrasas	21 gramos\r\nCalorias Totales	602 calorias'),
(3, '2022-06-23 15:51:43', 'Proteinas	60 gramos\r\nCarbohidratos	33 gramos\r\nGrasas	27 gramos\r\nCalorias Totales	614 caloria'),
(4, '2022-06-23 15:51:43', 'Proteinas	58 gramos\r\nCarbohidratos	52 gramos\r\nGrasas	22 gramos\r\nCalorias Totales	'),
(5, '2022-06-23 15:51:43', 'Texto de prueba0'),
(6, '2022-06-23 15:51:43', 'Texto de prueba1'),
(7, '2022-06-23 15:51:43', 'Texto de prueba0'),
(8, '2022-06-23 15:51:43', 'Texto de prueba1'),
(9, '2022-06-23 15:51:43', 'Texto de prueba0'),
(10, '2022-06-23 15:51:43', 'Texto de prueba1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contacto`
--

CREATE TABLE `contacto` (
  `id` int NOT NULL,
  `usuario_id` int DEFAULT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mensaje` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `doctrine_migration_versions`
--

CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `messenger_messages`
--

CREATE TABLE `messenger_messages` (
  `id` bigint NOT NULL,
  `body` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `headers` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue_name` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `available_at` datetime NOT NULL,
  `delivered_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publicaciones`
--

CREATE TABLE `publicaciones` (
  `id` int NOT NULL,
  `categoria_id` int DEFAULT NULL,
  `comentario_id` int DEFAULT NULL,
  `usuario_id` int DEFAULT NULL,
  `estado` int NOT NULL,
  `resumen` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `titulo` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `imagen` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `valoracion_id` int DEFAULT NULL,
  `ingredientes` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `publicaciones`
--

INSERT INTO `publicaciones` (`id`, `categoria_id`, `comentario_id`, `usuario_id`, `estado`, `resumen`, `slug`, `titulo`, `imagen`, `valoracion_id`, `ingredientes`) VALUES
(1, 1, 1, 1, 1, 'Mida y pese ingredientes.\r\nMezcle en una licuadora y disfrute. Solo en 5 minutos!', 'publicacion62b46fef15a91', 'Batido de proteinas con crema de cacahuete', 'batidocacahuete.jpg', 2, '0.5 x Banana.\r\n250 ml Lacteos - Leche Entera.\r\n0.5 cdm Nueces - Crema De Cacahuete.\r\n2 Cazos proteina whey.'),
(2, 2, 2, 6, 1, 'Pesar y cortar los ingredientes. Cocine el arroz según las instrucciones hasta que el agua se absorba por completo.\r\n2Retire el salmón de la lata y escúrralo. Cueza las verduras al vapor hasta que estén tiernas.\r\n3Cubra el arroz con verduras y salmón.\r\n4Disfruta.', 'publicacion62b46fef15cda', 'Salmón con arroz', 'salmon.jpg', 3, '315 g Pescados - Salmon Rosado (Enlatado)\r\n235 g Vegetales Mixtos (De Tu Eleccion)\r\n100 g Arroz Silvestre (Peso Cocido )'),
(3, 4, 3, 7, 1, 'Cortar y pesar todos los ingredientes. Precalentar un horno a 180 grados.\r\nRetire el salmon de la lata.\r\nHornee la batata en el horno durante 30-40 minutos hasta que este suave y dorada.\r\nRetire del horno. Cocine las verduras al vapor y sirva junto con la batata y el salmon.\r\nCubrir con queso y disfrutar', 'publicacion62b46fef16bcb', 'Salmón con patata y queso', 'samon1.jpg', 6, '315 g Pescados - Salmon Rosado (Enlatado)\r\n235 g Vegetales Mixtos (De Tu Eleccion)\r\n100 g Arroz Silvestre (Peso Cocido )'),
(4, 5, 4, 6, 1, 'Pesar todos los ingredientes.\r\nMezclar la proteína en polvo y la leche\r\nMezclar los frutos rojos, la avena y la leche con proteinas.\r\nRefrigerar durante la noche, por la mañana, cubrir con anacardos.\r\nDisfrutar.', 'publicacion62b46fef16be2', 'Avena y anacardos', 'avena.jpg', 7, '70 g Avena (Peso Crudo)\r\n2 cazo Proteina En Polvo (Million Whey)\r\n25 g Mix De Frutos Rojos\r\n300 ml Anarcados (Sin Azucar)\r\n15 g Nueces - Anacardos'),
(14, 1, 1, 1, 1, 'Mida y pese ingredientes.\r\nMezcle en una licuadora y disfrute. Solo en 5 minutos!', 'publicacion62b46fef15a91', 'Batido de proteinas con crema de cacahuete', 'batidocacahuete.jpg', 2, '0.5 x Banana.\r\n250 ml Lacteos - Leche Entera.\r\n0.5 cdm Nueces - Crema De Cacahuete.\r\n2 Cazos proteina whey.'),
(15, 2, 2, 6, 1, 'Pesar y cortar los ingredientes. Cocine el arroz según las instrucciones hasta que el agua se absorba por completo.\r\n2Retire el salmón de la lata y escúrralo. Cueza las verduras al vapor hasta que estén tiernas.\r\n3Cubra el arroz con verduras y salmón.\r\n4Disfruta.', 'publicacion62b46fef15cda', 'Salmón con arroz', 'salmon.jpg', 3, '315 g Pescados - Salmon Rosado (Enlatado)\r\n235 g Vegetales Mixtos (De Tu Eleccion)\r\n100 g Arroz Silvestre (Peso Cocido )'),
(16, 4, 3, 7, 1, 'Cortar y pesar todos los ingredientes. Precalentar un horno a 180 grados.\r\nRetire el salmon de la lata.\r\nHornee la batata en el horno durante 30-40 minutos hasta que este suave y dorada.\r\nRetire del horno. Cocine las verduras al vapor y sirva junto con la batata y el salmon.\r\nCubrir con queso y disfrutar', 'publicacion62b46fef16bcb', 'Salmón con patata y queso', 'samon1.jpg', 6, '315 g Pescados - Salmon Rosado (Enlatado)\r\n235 g Vegetales Mixtos (De Tu Eleccion)\r\n100 g Arroz Silvestre (Peso Cocido )'),
(18, 5, 4, 6, 1, 'Pesar todos los ingredientes.\r\nMezclar la proteína en polvo y la leche\r\nMezclar los frutos rojos, la avena y la leche con proteinas.\r\nRefrigerar durante la noche, por la mañana, cubrir con anacardos.\r\nDisfrutar.', 'publicacion62b46fef16be2', 'Avena y anacardos', 'avena.jpg', 7, '70 g Avena (Peso Crudo)\r\n2 cazo Proteina En Polvo (Million Whey)\r\n25 g Mix De Frutos Rojos\r\n300 ml Anarcados (Sin Azucar)\r\n15 g Nueces - Anacardos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `refresh_tokens`
--

CREATE TABLE `refresh_tokens` (
  `id` int NOT NULL,
  `refresh_token` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `valid` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `refresh_tokens`
--

INSERT INTO `refresh_tokens` (`id`, `refresh_token`, `username`, `valid`) VALUES
(1, 'fa5c79850d620f767496ce31cb65353f5ed752f38df8d78b0b831ef12c188ad160408085a28862088019a6d54c01026f69336181bbd73a672eadaf9be4db9078', 'usuario@usuario.com', '2022-07-23 15:57:11'),
(2, 'f85dac65a11ab21f426dbf95fc06560cbfd5ff2a7d9740faebdcb14e8d9e0e2d2028df3664336035bbbe31392d78ea71fb87f55642c7719d7ad22b6ba306e381', 'usuario@usuario.com', '2022-07-23 15:57:36'),
(3, '09dc65cb011c3e9e99c37aa5ef38ea78875d81e7d43b4d53c7c9cc6e31db3a611660aefbc2afe28310b8fecef13dc741e88441e044f07e7751d724e67cc5154e', 'user@user.com', '2022-07-23 19:21:14'),
(4, 'd89d9f7b5de325445fd402afc3b50c2c39b7cc0e1a29acd318c4bb1428436dbaf5c367ecf45b22387fecda274856190e7ee8c4522ae7ac5ad8e72f426e5484bc', 'user@user.com', '2022-07-23 19:24:13'),
(5, 'd12486ef41ab93d57c55471df0e0567fe152ad34c6da6e29ea5060ca0a0960d962b2bfb03fb71f38520a38701b3c31b1d8658afc6f502f94a6660ed091f78005', 'user@user.com', '2022-07-23 19:26:10'),
(6, 'fdabbd73ab2dbf129e952bcba4b346ec23283cb24d302b6c217dd5619ac9faf620ddb785df6fa9e3515b3df5034e9c0b9c563792244cc448a9359b26b4f11cd7', 'user@user.com', '2022-07-24 13:35:16'),
(7, 'f8a820ee26d501603cb71cc5c9a5201c39d17548fa600fd7d9c767049ff6a86362d212260c866fb9b9ae2da5627e496484d5d73a8f949fb7790e37bc313f1f2a', 'user@user.com', '2022-07-24 13:37:03'),
(8, 'bd0fa029edd766c090d2f81c5c39865f5208925bf1409724142bcc9a04130cbb2f1a5f7fb7453dc14d18f42ff9b59492ffcbf8052139f3b3ce68ae55b64f6f7b', 'user@user.com', '2022-07-24 13:37:59'),
(9, 'e9bef45922fae23a0bf40c11c9c1b8a71ad5c1d8c794146c8bee905fb3de158111768963d336dcdd4d23d87dc22bf4d8a6bd8ee8c684f6408b2a7b88a38de40e', 'user@user.com', '2022-07-24 13:39:23'),
(10, '6e820d2b6b3aecd0d297fb9472ab44535538318408b57bf971b929b2bb4d71a3dc07cbf275fcf52a0fc994439b0825f06ac8fb969f2713c722d6c0ef8c2ff441', 'user@user.com', '2022-07-24 13:39:58'),
(11, '617352894d3b394e2faf9e15f8c0df0e431f6911a37245f1c61e8d37c853d26d60132aa0ad5772a0aef439a6d0cc495fc2af5a05a5efeefed39f82ca67872981', 'user@user.com', '2022-07-24 13:40:33'),
(12, 'c0cbf8950b837349af48f0fa250e17ee9817971d3caf0f7086aaee4e042ae8faa8fec77ed17a287bbc2ae5c4764fa3ca4dbef0b259771e919db8c7615d9c413d', 'user@user.com', '2022-07-24 13:40:34'),
(13, 'fc316b0822d6803edeec986680445e4170341c2745bcb4c10ad3db99c846be060b1328fd8cb91ac72a709f06e9b0fb2a6e3d12b2e77945140a67288e0668e6e4', 'user@user.com', '2022-07-24 13:58:57'),
(14, '5e621fb59ae477c862f5f46c0c3edabf36dde5edd281b9924743725a19e075af999fd1ab927047fca9f80a0af40e069139baf0c08688dc5fe5decdb22aea6c4e', 'user@user.com', '2022-07-24 14:52:33'),
(15, '8945cadc3f22b0b1c40687f7e3a76308ca693ad63427955a88e50ac38e20f5d884f819f5593e8b66d59b5004b52c196d3eb79ac4990fa63147283d8d56d7b4db', 'user@user.com', '2022-07-24 16:06:26'),
(16, '25b52a9712fa6afeef0632e9feb1ee100196cadcf7e2f450b1c125cf304144b880700cf263a5107b8f1913c111a19e30a04a90c02113281637a2bd32ccdbab11', 'user@user.com', '2022-07-24 16:07:16'),
(17, '0e637559031909acec797bd95a55912ee066e45fc9e791836d678afe8c4f08d693e2ed92fb443a1f2e505818243f20075a6745e8ec7e30a1829b537cc003e708', 'user@user.com', '2022-07-24 16:09:36'),
(18, '390b203fb7686bfe52ebe11e63e75e5cf596a4d93bdbb64cd44a9b7758b3c9ee67431e6e2b82d7e121e2526244b5730c73cece12e1eac45d7e9aa11d5786695b', 'user@user.com', '2022-07-24 16:13:18'),
(19, 'bc9990a6ab49855d276539e304c965721af4b5e8738b68384cefe3e28c9bbab2cc3de2af2673038f1e9b452cd8b556273c5530f3a8a3df92c25253cccbab13a6', 'user@user.com', '2022-07-24 18:20:05'),
(20, '4e7a00a633784e92ff765e87e8aac9e1e5eaaab4d41e232f42307bfb66c43eab8b14b48e044c2bc919a7f12cd8ce722ba3e8a66021464838b7d92d5ba63f7d3f', 'user@user.com', '2022-07-27 14:20:43'),
(21, 'efdf60701be18902b776f581e2a7a114baf5972b0150b9062d07274b710ccd6ecf12bde8de9ef02a32956adde2de1181592e567d934a7e348c7ec33612e0e2f5', 'user@user.com', '2022-07-27 14:21:50'),
(22, '23b2ae34b2a36faf5eca0363c8355fdad58dc3e98193f53cad5b449605e804f6814f955fa8a51130cf0ade4ac8b3564c86e6fdeb3f9272dcaa6e35c149b36b75', 'user@user.com', '2022-07-27 14:43:51'),
(23, 'a70e164013169056ae72a6cec1698a1443d052448e53a0a1d0600b13a6ee04ab7a8a10eb11b2d65d6e0063d3d431b84a7a8f52884898b543c2bfc04460986f91', 'user@user.com', '2022-07-27 14:46:11'),
(24, '96b17c6e7e2afa4da8adf79e1b0e463ea4a58288eda1b42c565863fb7437c99ab3dd7c76ba75e2408cfe9ffec9d60d144faee7db5efa0da4e4a03e12c998eac6', 'user@user.com', '2022-07-27 16:07:59'),
(25, '1a166bf32505c448549d65b34b5434381edfc5dc2e425b6f1dc064aef185a137c166bef53e8965fcb87b63fd7664cc129d0839d44503bc4ba18c600127addbe2', 'user@user.com', '2022-07-27 16:17:41'),
(26, '61b1f668eb2970a3e526e5d814b2800c0e086575276dace75ddfaec384b47b188f055ac3ee29d28df853abae8c01e483a3c314925b9b16e5c43e02d3b2d4d137', 'user@user.com', '2022-07-27 16:40:05'),
(27, '260e2770c3ceca34bb65defc493b64b91eda5a1909cb194c6ab36368fd7cf0ffdb1e395eed7b5da81e63b6687d4ba71d6181c2fffc0a2ee53fa6b188a8d42efd', 'user@user.com', '2022-07-27 17:58:08'),
(28, '279aba958dcfb952186678eeb4513424007a05d85b77ab6b20442ebed4199a9db57a4d3a474ddb3ac9e7a081f8b7390d8369992040f64046dfa5d633027cd437', 'usuario1@usuario.com', '2022-07-30 18:21:43'),
(29, 'd9709947c7a0e35e4717f455201f5a201dc8eaf4dd11a814fec6c0bd7fbc9b1c35fadb86bae53f66103ac67785b68fdf30b87d1af45beffb52283ede71b64a2e', 'usuario1@usuario.com', '2022-07-30 18:22:34'),
(30, 'c305bc412bda750dcfa4924d339fe9f3df9cea2726ec6f9d63959e5231c48cb951e06a553d907e8358b8b2d8675bdb10826f57aa26b643ad63c22b63d4ebe280', 'usuario1@usuario.com', '2022-07-30 18:50:44'),
(31, '0ab0ce3186d2e5d94d5e1d527980498200bbe3415e2381ca43a836454d95813f5f5a6c8ff7fff6183e45abc76f50b43fb30bae5452956a06f5da020d938ce59b', 'user@user.com', '2022-07-31 11:11:11'),
(32, 'c78c4a04c2fd64b4a224d82a959e31d94554f0244d91228b6b15e012d51efab0b4acc697938827379b9bb8c056dfa327871e1f461d9d580ff31b4b5c5443b120', 'user@user.com', '2022-07-31 11:12:19'),
(33, '2e6da4322f78923e42780b09da912618159e8fa88a8f5e89fb57184857f2289b7f575d07fee66d96bb7b1d4464c1ad768f685bfcd3a8ea505fe49612fbfe7e65', 'user@user.com', '2022-07-31 14:00:35'),
(34, '67ff738f50adebb40c5905eff152596c708fbebda410871c92c6b1da7e593ea98ea4c15cf2958c17466c519db1d99938d8e6e934f16b90b031af44a2c0ca7e30', 'user@user.com', '2022-07-31 14:07:47'),
(35, 'ee6ce1ab1be72f667cc82bca29b05e6053768a8e8b20825ded395fd507a400919c58e0475c49ae717da5a3c66ac6bf15eb5abfda73aa233ea7837bb07e0bc0a5', 'user@user.com', '2022-07-31 14:08:18'),
(36, '7c632502b082d04ae25305de24ad69f4148a6216ac1bc0e8cea978725bbea4cdf2e4f4641d558232538790b3ab0ea0f022d240b35ae117dd5fa66a84cb9c3b64', 'user@user.com', '2022-07-31 14:09:50');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int NOT NULL,
  `email` varchar(180) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` json NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `perfil` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `email`, `roles`, `password`, `nombre`, `perfil`) VALUES
(1, 'usuario@usuario.com', '[]', '$2y$13$ZNOVWVVF1G.X8iCTGd3JA.kNq7r4HsxsXlxG/QLOg4SXVxVtTbtAu', 'Jonathan', 'perfil1.png'),
(2, 'user@user.com', '[\"ROLE_SUPERADMIN\"]', '$2y$13$ZNOVWVVF1G.X8iCTGd3JA.kNq7r4HsxsXlxG/QLOg4SXVxVtTbtAu', 'abc', 'perfil2.png'),
(3, 'jhonyganehd@gmail.com', '[]', '$2y$13$9B37C5lOA.2M/WZj9JjdHeBSP/WPFlpLrwPD97HuYKESl7Khj29lS', 'Jonathan', 'perfil1.png'),
(5, 'usuario1@usuario.com', '[]', '$2y$13$ndAT73MOjrkwNSw1ps3PKe9FWFzgPHsQdxV8Y2Im2MaaSQdQcCuli', 'Usuario', 'perfil2.png'),
(6, 'users@users.com', '[]', '$2y$13$givb8sU.vABN4u/U0qT4CezhokdmkqP7c.XJcWOh9scT1y6iVnCbe', 'Usuario', NULL),
(7, 'usuarios@usuarios.com', '[]', '$2y$13$HbUOOYPiq7yeroQGhjEp/uoO/cX6JWSexnmg1AnumN2wS4o/mr2De', 'Usuario1', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `valoraciones`
--

CREATE TABLE `valoraciones` (
  `id` int NOT NULL,
  `publicacion_id` int DEFAULT NULL,
  `numero` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `valoraciones`
--

INSERT INTO `valoraciones` (`id`, `publicacion_id`, `numero`) VALUES
(1, 1, 3),
(2, 2, 2),
(3, 3, 5),
(4, 4, 6),
(5, 5, 7),
(6, 6, 4),
(7, 7, 1),
(8, 8, 2),
(9, 9, 3),
(10, 10, 4);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `comentario`
--
ALTER TABLE `comentario`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `contacto`
--
ALTER TABLE `contacto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_2741493CDB38439E` (`usuario_id`);

--
-- Indices de la tabla `doctrine_migration_versions`
--
ALTER TABLE `doctrine_migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Indices de la tabla `messenger_messages`
--
ALTER TABLE `messenger_messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_75EA56E0FB7336F0` (`queue_name`),
  ADD KEY `IDX_75EA56E0E3BD61CE` (`available_at`),
  ADD KEY `IDX_75EA56E016BA31DB` (`delivered_at`);

--
-- Indices de la tabla `publicaciones`
--
ALTER TABLE `publicaciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_A3A706C03397707A` (`categoria_id`),
  ADD KEY `IDX_A3A706C0F3F2D7EC` (`comentario_id`),
  ADD KEY `IDX_A3A706C0DB38439E` (`usuario_id`),
  ADD KEY `IDX_A3A706C0D29AA1AC` (`valoracion_id`);

--
-- Indices de la tabla `refresh_tokens`
--
ALTER TABLE `refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_9BACE7E1C74F2195` (`refresh_token`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_2265B05DE7927C74` (`email`);

--
-- Indices de la tabla `valoraciones`
--
ALTER TABLE `valoraciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_408506679ACBB5E7` (`publicacion_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `comentario`
--
ALTER TABLE `comentario`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `contacto`
--
ALTER TABLE `contacto`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `messenger_messages`
--
ALTER TABLE `messenger_messages`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `publicaciones`
--
ALTER TABLE `publicaciones`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `refresh_tokens`
--
ALTER TABLE `refresh_tokens`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `valoraciones`
--
ALTER TABLE `valoraciones`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `contacto`
--
ALTER TABLE `contacto`
  ADD CONSTRAINT `FK_2741493CDB38439E` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`);

--
-- Filtros para la tabla `publicaciones`
--
ALTER TABLE `publicaciones`
  ADD CONSTRAINT `FK_A3A706C03397707A` FOREIGN KEY (`categoria_id`) REFERENCES `categoria` (`id`),
  ADD CONSTRAINT `FK_A3A706C0D29AA1AC` FOREIGN KEY (`valoracion_id`) REFERENCES `valoraciones` (`id`),
  ADD CONSTRAINT `FK_A3A706C0DB38439E` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`),
  ADD CONSTRAINT `FK_A3A706C0F3F2D7EC` FOREIGN KEY (`comentario_id`) REFERENCES `comentario` (`id`);

--
-- Filtros para la tabla `valoraciones`
--
ALTER TABLE `valoraciones`
  ADD CONSTRAINT `FK_408506679ACBB5E7` FOREIGN KEY (`publicacion_id`) REFERENCES `publicaciones` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

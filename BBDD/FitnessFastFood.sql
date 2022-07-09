-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 09-07-2022 a las 11:58:43
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
-- Base de datos: `FitnessFastFood`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `id` int NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contacto`
--

CREATE TABLE `contacto` (
  `id` int NOT NULL,
  `usuario_id` int DEFAULT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mensaje` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `contacto`
--

INSERT INTO `contacto` (`id`, `usuario_id`, `nombre`, `mensaje`, `email`) VALUES
(4, NULL, 'mensaje', 'Mensaje', 'email@em'),
(5, NULL, '1', '1', '1@1.c');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `doctrine_migration_versions`
--

CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `messenger_messages`
--

CREATE TABLE `messenger_messages` (
  `id` bigint NOT NULL,
  `body` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `headers` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue_name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
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
  `usuario_id` int DEFAULT NULL,
  `valoracion_id` int DEFAULT NULL,
  `resumen` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `titulo` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `imagen` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ingredientes` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `valor_nutricional` longtext COLLATE utf8mb4_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `publicaciones`
--

INSERT INTO `publicaciones` (`id`, `categoria_id`, `usuario_id`, `valoracion_id`, `resumen`, `slug`, `titulo`, `imagen`, `ingredientes`, `valor_nutricional`) VALUES
(3, NULL, 6, NULL, 'Mix all ingredients and enjoy.', 'publicacion62c72fbf93100', 'Tuna salad', '62c7fda82d383_pexels-trang-doan-.jpg', 'Tuna, avocado, tomatoe and mixed salad.', 'Carbs: 50g\r\nProtein: 30g\r\nSugar: 0\r\nkcals: 150'),
(11, NULL, 6, NULL, 'Mix all ingredients and enjoy.', 'publicacion62c72fbf93100', 'Egg with avocado toast', '62c8057c3248b_pexels-foodie-factor-.jpg', 'Tuna, avocado, tomatoe and mixed salad.', 'Carbs: 50g\r\nProtein: 30g\r\nSugar: 0\r\nkcals: 150'),
(16, NULL, 6, NULL, 'Mix all ingredients and enjoy.', 'publicacion62c72fbf93100', 'Protein shake with blueberries', '62c80598e7f96_pexels-pixabay-.jpg', 'Tuna, avocado, tomatoe and mixed salad.', 'Carbs: 50g\r\nProtein: 30g\r\nSugar: 0\r\nkcals: 150'),
(20, NULL, 6, NULL, 'Mix all ingredients and enjoy.', 'publicacion62c72fbf93100', 'Oatmeal', '62c805a4609f5_pexels-daria-shevtsova-.jpg', 'Tuna, avocado, tomatoe and mixed salad.', 'Carbs: 50g\r\nProtein: 30g\r\nSugar: 0\r\nkcals: 150'),
(23, NULL, 7, NULL, 'Mix all ingredients and enjoy.', 'publicacion62c72fbf93100', 'Tuna salad', '62c80b7ca252f_pexels-pixabay-.jpg', 'Tuna, avocado, tomatoe and mixed salad.', 'Carbs: 50g\r\nProtein: 30g\r\nSugar: 0\r\nkcals: 150'),
(24, NULL, 8, NULL, 'Mix all ingredients and enjoy.', 'publicacion62c72fbf93100', 'Egg with avocado toast', '62c8057c3248b_pexels-foodie-factor-.jpg', 'Tuna, avocado, tomatoe and mixed salad.', 'Carbs: 50g\r\nProtein: 30g\r\nSugar: 0\r\nkcals: 150'),
(25, NULL, 4, NULL, 'Mix all ingredients and enjoy.', 'publicacion62c72fbf93100', 'Protein shake with blueberries', '62c80598e7f96_pexels-pixabay-.jpg', 'Tuna, avocado, tomatoe and mixed salad.', 'Carbs: 50g\r\nProtein: 30g\r\nSugar: 0\r\nkcals: 150'),
(26, NULL, 8, NULL, 'Mix all ingredients and enjoy.', 'publicacion62c72fbf93100', 'Oatmeal', '62c805a4609f5_pexels-daria-shevtsova-.jpg', 'Tuna, avocado, tomatoe and mixed salad.', 'Carbs: 50g\r\nProtein: 30g\r\nSugar: 0\r\nkcals: 150'),
(27, NULL, 4, NULL, 'Mix all ingredients and enjoy.', 'publicacion62c72fbf93100', 'Tuna salad', '62c7fda82d383_pexels-trang-doan-.jpg', 'Tuna, avocado, tomatoe and mixed salad.', 'Carbs: 50g\r\nProtein: 30g\r\nSugar: 0\r\nkcals: 150'),
(28, NULL, 7, NULL, 'Mix all ingredients and enjoy.', 'publicacion62c72fbf93100', 'Egg with avocado toast', '62c80b71545df_pexels-daria-shevtsova-.jpg', 'Tuna, avocado, tomatoe and mixed salad.', 'Carbs: 50g\r\nProtein: 30g\r\nSugar: 0\r\nkcals: 150'),
(29, NULL, 8, NULL, 'Mix all ingredients and enjoy.', 'publicacion62c72fbf93100', 'Protein shake with blueberries', '62c80598e7f96_pexels-pixabay-.jpg', 'Tuna, avocado, tomatoe and mixed salad.', 'Carbs: 50g\r\nProtein: 30g\r\nSugar: 0\r\nkcals: 150'),
(30, NULL, 6, NULL, 'Mix all ingredients and enjoy.', 'publicacion62c72fbf93100', 'Oatmeals breakfast', '62c87d84250b3_pexels-karen-reyes-.jpg', 'Tuna, avocado, tomatoe and mixed salad.', 'Carbs: 50g\r\nProtein: 30g\r\nSugar: 0\r\nkcals: 150');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `refresh_tokens`
--

CREATE TABLE `refresh_tokens` (
  `id` int NOT NULL,
  `refresh_token` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `valid` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `refresh_tokens`
--

INSERT INTO `refresh_tokens` (`id`, `refresh_token`, `username`, `valid`) VALUES
(1, '4020a937db9ba9101c4505d5ada84d717d74cc4073d1be896c8f53ae9586e39609b61dd1e65ceb135bfae9eaf3df93cc80d67a881b11bead44f090292ac07116', 'user@user.com', '2022-08-06 22:29:00'),
(2, '75b040d79079cd4623b13d8ec1986d3d2cad677a8301cd366959c52ee7a3a589119c9b13eea0ec2deacb4998ce35a926a5cb5c155f37cbcb6995cd776857817b', 'user@user.com', '2022-08-06 22:29:10'),
(3, '053b6fd8a1ec3d2ac0be401df396dd184d403ffcc4d9a4a8b7a5c36411395f3e866e13a6da822f29b1dd4c7fc169474fa620363e222b2cc8ec0bba4f52ef5a32', 'user@user.com', '2022-08-06 22:30:00'),
(4, '179ffbfaa8a80bb3388d8ad41a37213b966ff4ae3922ea0daf2362d566ab07d40c0cd98f675d21ab201c7b6d37c11b49e7bb91f0fb4d2e9dfc3f206965b5ae58', 'user@user.com', '2022-08-06 22:30:08'),
(5, '7483a924b0192b6edda558027fd97444360fe3e46891993c81894a7e6fd2a9a72f65814e7eccb6d4def33454ce44e9e8699b09ae950840a52be17649aab38bf3', 'user@user.com', '2022-08-06 22:44:03'),
(6, 'fd8480eac20fbaba3a12babd488c74cbbb696a98d9129918ac9ddde09101af4722c48c50a28d25392768b499a966937f36ae323d414f66c0924b4eaa0322a753', 'user@user.com', '2022-08-06 22:47:29'),
(7, '7158dc7f4072cf9136b8db45b1782f7844444bbba5b0fc5e9d7bf9b481ee694109386796e189267c13bf1e5ff8ac4da5a2e0d38c6d1cf29c13b5b6eef175e4c1', 'user@user.com', '2022-08-06 22:47:36'),
(8, '6766f80e1446c9c117143221118a246bb3526c05f7a9c0d4776f6281b8cba835b26a15570771b5cf5252a88757db183fc4eaf7739a4c8b838de0a08826483659', 'user@user.com', '2022-08-06 22:47:51'),
(9, '060468eacdec931f61a7fb2a40a26ec60cdee78bfe786cd7843a1e06a5b3c296b99e90b54fea018b78bd24dcb97a99369036bc19ba2c6425ae58dfab4355eda1', 'us@us.com', '2022-08-06 22:49:27'),
(10, '9ad4c1add09aec4bd8a90ed3992fc8da80d0b6084afb8bf5d085445c72aba067d92fc8613ae8f6a9684be137dce52bd4f14e7feb30815f7c2f039faf3f95c48c', 'us@us.com', '2022-08-06 22:49:47'),
(11, 'f86b617f1c29924ab281e81c28d12a1c8c10568ec8c7ec1b35e121245fc4e7d5280a4a153520fcc76d8686ef4ed60e8309ffbc9061db7db656e61def4ff21ee7', 'user@user.com', '2022-08-07 11:24:03'),
(12, '260c42d8af12fc4702916e6828b2c676affb0a7a4158a6ad068dcffc85a38d7ddf85735b61b2c18cb7eb3475daa36b4936ec87b73b0419bf868886e8871bcba3', 'us@us.com', '2022-08-07 12:02:18'),
(13, '88bef98c1ecddd19527795978e409f192692a948995622952d156dd24238c52e2967c71ffaefef9b5ea68c4bfdda9bf3eb6efac9d82767d7c6d46ff7a83a854d', 'us@us.com', '2022-08-07 12:05:43'),
(14, '11a028da872af22e4757a481e25e9dcd2d804c77288360ea2a739140138d41dc4779fe5dc8a97f905d2293efce90cf346e3b4cc17d7d838c9ec0f2bc3e30c121', 'us@us.com', '2022-08-07 12:09:51'),
(15, 'c873802a13aed0bfbc45cd6d4ef2be6caeaf9d97d4b74cc4c95091000f6d08dfe2f86bd2c9fced725d19ff598ce63b9313e153aad3d0f0768db60b05108e79c7', 'us@us.com', '2022-08-07 12:10:02'),
(16, 'c140eb139d7554164bfa02dd76db7cbebd94282f9447cf271ba553c6458c0a2fc72042997fd1795897f8e24dc4f6217dd19309c0c948836251debeb456aa04c7', 'us@us.com', '2022-08-07 12:10:17'),
(17, '60d0a1a6ddeccc24e2d63f54d79393d593dae775593f9b1568369650b930a2b65c460803c78ca489b3f817687df022ec9ee7dfcf64ac7fa3b8baa684e1473a6a', 'us1@us.com', '2022-08-07 12:11:50'),
(18, 'b26b5e897562415d7beba11ffb8c40995a4fa0b493698479ae1435567f9ff24f7fd5f082b662b237e98a069ae578b51a40d1b7f64a4a46c80ddf4e31235203b1', 'us2@us.com', '2022-08-07 12:13:55'),
(19, 'c824eabe0612bbc5ae9d70810205f24497d62735ee327c6dcd3a80d4b11566fdcf51c53085102530df4f07081ffed928aff1536b3545e2cf6bcda25176aac408', 'us1@us.com', '2022-08-07 12:15:09'),
(20, '649b0ee0c22164915882863ddbe3e5bc6ecb3d46b9fedcd50788ebb3d6d154060717d4056a9bc5a86ef9a0a4277d35ba8f2bd5dc56328e98ded8b6209f027c1c', 'us1@us.com', '2022-08-07 12:16:27'),
(21, '2a1c27f83b7c943a623d2305785da2bb8b4b35bc1d6864d7000f942dbdec5592b475d3957f156e8527782f2c431574f300905c4e4b8810abe896ae718376ebbf', 'us@us.com', '2022-08-07 12:16:42'),
(22, '7f2bb785025dc4312e9526bd7abd0d841002080e41a530296923c0ccb4c3c438c0e5a58fc3152bfaf9cacdebb08355aab14ed6f4b7ec7457f69b17fcbf8dac53', 'us@us.com', '2022-08-07 12:18:00'),
(23, '1f91e1587c9d400ec25da02a5871ac9aaae739bfc9ebeba4fa4646459fcd548ab3eb3bd5b68c10733f057c507c90bcd2eb6a677947888500c35fd200da327c61', 'us1@us.com', '2022-08-07 12:45:42'),
(24, 'd7f03430b1432f3bd77fd6d9366406dd7aafd76b78d0dd3f2365992c5e1ef6011272f7515d9fc7a0bb3f40b822dd9c58ce1dc92d1454749410fcb7d685c422de', 'us3@us.com', '2022-08-07 12:51:16'),
(25, 'b602f081bd06b0f9ebf1025d340e7de96e49425e176de3a1b4d7a0b2a4310a614633c38a99686453f22749b397e7919db7bbcd11fab717dad8efe4ff71e70008', 'us3@us.com', '2022-08-07 12:52:22'),
(26, 'b3a4723a5ea707d8cc5e8d29522a1e843fbea9c30dba3079bc586dc56808cde2d0c63af8f6e1b438add9f05dcbde74a05cafa2e53df2655e99f9663081bca881', 'us@us.com', '2022-08-07 13:01:00'),
(27, '6ef09bcfb9d1425041b6310a5ced4415c7d54b3a70814bff59bc348e5e874557f9b3d55e969568808f065a9cfc0a4e7bd41aaffb1d619606dc1823093a6bccfd', 'us@us.com', '2022-08-07 13:02:07'),
(28, 'e9193d7ebae1d13b9337884349845dee5dfb775b9517c401c88fe0e2fb239eeb25fa9961fc34a4f74a1b5405a1ae3894b67e288afb9f01c5dba5c3de90fa4f4f', 'us@us.com', '2022-08-07 14:00:34'),
(29, 'e6da2786b340a3e326d8283cb7044d79b392df5a2d086239780123a5d61a220a20110ff7b50bf770337d6e92a10b7b6bce088c6e5ae3e47bcdf4b1250a59acf0', 'us@us.com', '2022-08-07 14:00:46'),
(30, 'c6ab4c0efffba77afd979d29303f1406785825beeb789e0b1af9069e8bc74c9028682d1d6ba95103d732e1af432cb5223247da15d671e2c99ab6acc68e59d41b', 'us@us.com', '2022-08-07 20:53:22'),
(31, 'ac0a36dabe456cc480e3f9d33d4c276297facf86bd868b7ab8c168f6a01712de9af8a05dd08f08b1f1a48dd544a9088d25157205e472490674e724264ab8383f', 'us@us.com', '2022-08-07 20:54:29'),
(32, '9cc3ab7c332c093aaa5ddbd791a7a0ff8f041bde3c6daeaa785e06b7fd26b561e766e6a26d3a5c9ee249dc323a3f8cd8eee3060d7109eb662d90f6cc6e1a2d7d', 'us@us.com', '2022-08-08 11:39:20'),
(33, '0a744ee5bdc3ff282c1fb410289a20698abdaddd6da64b9e14e808451625bf4e68737d2658d9c66a8ce3798e14b1fdac1bcaf15a89dc20de7bac4e0d14d25488', 'us@us.com', '2022-08-08 11:39:46'),
(34, '3cf1d7a884d81c0755fb1213e9617f6cbce63b0a22241bf15af3aea198cc981b89d1300ccd79a5c6d73b77a24d70e8aad2f040a6bc0f2cfc849cfc26108b5844', 'us@us.com', '2022-08-08 11:47:23');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int NOT NULL,
  `email` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` json NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `perfil` longtext COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `email`, `roles`, `password`, `nombre`, `perfil`) VALUES
(4, 'user@user.com', '[]', '$2y$13$Xq2NeQXOe3hCDUWQGU9r6.i2OKPlqBbhHloS1lq/6K6dSb/UU1n8q', 'Miguel Ángel guitierrez', '62c74676423ad_png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png'),
(6, 'us@us.com', '[]', '$2y$13$ZOZuO8P/wohfNK49iQTTpeyouinPfx2vNODS7s1rmhcGM8YhNV/He', 'Ramon', '62c94ce161c81_pexels-bruno-salvadori-.jpg'),
(7, 'us1@us.com', '[]', '$2y$13$8ihkIVBdFjhklDGwR9WIluB7bzPLdezUuH0Ue/3OqTge60/CLHAA.', 'Cristina', '62c803faa6f90_pexels-george-dolgikh-giftpunditscom-.jpg'),
(8, 'us2@us.com', '[]', '$2y$13$0qiy1frJ6HSoThM46Ts8pOIZ.oV9KjzGhTyMOMIvHcqEWtbuQtiZ6', 'Andrea Picquado', '62c8035c36117_pexels-andrea-piacquadio-.jpg'),
(9, 'us3@us.com', '[]', '$2y$13$syW.a6N70YHM2cd56e79C.DYw/OzUddT61n.bRi6oJWa2ckKXtc7O', 'Juanma', '62c80c1b8299d_perfil.png');

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
(2, 2, 0),
(3, 3, 0),
(4, 4, 0),
(5, 5, 0),
(6, 6, 0),
(7, 7, 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
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
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `contacto`
--
ALTER TABLE `contacto`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `messenger_messages`
--
ALTER TABLE `messenger_messages`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `publicaciones`
--
ALTER TABLE `publicaciones`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT de la tabla `refresh_tokens`
--
ALTER TABLE `refresh_tokens`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `valoraciones`
--
ALTER TABLE `valoraciones`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

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
  ADD CONSTRAINT `FK_A3A706C0DB38439E` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`);

--
-- Filtros para la tabla `valoraciones`
--
ALTER TABLE `valoraciones`
  ADD CONSTRAINT `FK_408506679ACBB5E7` FOREIGN KEY (`publicacion_id`) REFERENCES `publicaciones` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

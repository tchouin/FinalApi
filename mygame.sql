-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le :  ven. 14 mai 2021 à 00:13
-- Version du serveur :  8.0.18
-- Version de PHP :  7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `mygame`
--

-- --------------------------------------------------------

--
-- Structure de la table `ennemi`
--

CREATE TABLE `ennemi` (
  `id` int(11) NOT NULL,
  `weapon_id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `difficulty` int(11) NOT NULL,
  `level` int(11) NOT NULL,
  `type` varchar(50) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `ennemi`
--

INSERT INTO `ennemi` (`id`, `weapon_id`, `name`, `difficulty`, `level`, `type`) VALUES
(1, 0, 'Master P9mm', 1, 10, 'Charger');

-- --------------------------------------------------------

--
-- Structure de la table `playerstats`
--

CREATE TABLE `playerstats` (
  `id` int(11) NOT NULL,
  `level` int(10) UNSIGNED ZEROFILL NOT NULL,
  `victory` int(10) UNSIGNED ZEROFILL NOT NULL,
  `defeat` int(10) UNSIGNED ZEROFILL NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(75) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'nono'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'test', '$2y$10$HaLXSzTovW30/vuNr5gl..2nvQZl1lFlwRbOaOClh2NlCOH7nUTse');

-- --------------------------------------------------------

--
-- Structure de la table `weapon`
--

CREATE TABLE `weapon` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `type` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `damage` int(10) UNSIGNED ZEROFILL NOT NULL,
  `max_ammo` int(10) UNSIGNED ZEROFILL NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `weapon`
--

INSERT INTO `weapon` (`id`, `name`, `type`, `damage`, `max_ammo`) VALUES
(1, 'P9mm', 'pistol', 0000000050, 0000000020),
(2, 'Master P9mm', 'pistol', 0000000050, 0000000020);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `ennemi`
--
ALTER TABLE `ennemi`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `playerstats`
--
ALTER TABLE `playerstats`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Index pour la table `weapon`
--
ALTER TABLE `weapon`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `ennemi`
--
ALTER TABLE `ennemi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `playerstats`
--
ALTER TABLE `playerstats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `weapon`
--
ALTER TABLE `weapon`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

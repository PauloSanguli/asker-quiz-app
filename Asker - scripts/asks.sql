-- Active: 1691238524811@@localhost@3306@asker
USE `asker`;
SET CHARSET utf8mb4;


CREATE TABLE IF NOT EXISTS `mathematics` (
	`statement` TEXT NOT NULL,
	`ask_a` TEXT NOT NULL,
  	`ask_b` TEXT NOT NULL,
    `ask_c` TEXT NOT NULL,
  	`ask_d` TEXT NOT NULL,
    `ask_correct` TEXT NOT NULL,
    `level` INT NOT NULL
);

CREATE TABLE IF NOT EXISTS `logic` (
	`statement` TEXT NOT NULL,
	`ask_a` TEXT NOT NULL,
  	`ask_b` TEXT NOT NULL,
    `ask_c` TEXT NOT NULL,
  	`ask_d` TEXT NOT NULL,
    `ask_correct` TEXT NOT NULL,
    `level` INT NOT NULL
);

CREATE TABLE IF NOT EXISTS `culture` (
	`statement` TEXT NOT NULL,
	`ask_a` TEXT NOT NULL,
  	`ask_b` TEXT NOT NULL,
    `ask_c` TEXT NOT NULL,
  	`ask_d` TEXT NOT NULL,
    `ask_correct` TEXT NOT NULL,
    `level` INT NOT NULL
);

CREATE TABLE IF NOT EXISTS `history` (
	`statement` TEXT NOT NULL,
	`ask_a` TEXT NOT NULL,
  	`ask_b` TEXT NOT NULL,
    `ask_c` TEXT NOT NULL,
  	`ask_d` TEXT NOT NULL,
    `ask_correct` TEXT NOT NULL,
    `level` INT NOT NULL
);

CREATE TABLE IF NOT EXISTS `geography` (
	`statement` TEXT NOT NULL,
	`ask_a` TEXT NOT NULL,
  	`ask_b` TEXT NOT NULL,
    `ask_c` TEXT NOT NULL,
  	`ask_d` TEXT NOT NULL,
    `ask_correct` TEXT NOT NULL,
    `level` INT NOT NULL
);

CREATE TABLE IF NOT EXISTS `countrys` (
	`statement` TEXT NOT NULL,
	`ask_a` TEXT NOT NULL,
  	`ask_b` TEXT NOT NULL,
    `ask_c` TEXT NOT NULL,
  	`ask_d` TEXT NOT NULL,
    `ask_correct` TEXT NOT NULL,
    `level` INT NOT NULL
);
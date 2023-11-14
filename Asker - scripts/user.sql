USE `asker`;
SET CHARSET utf8mb4;

DROP TABLE `customer_user`;
CREATE TABLE IF NOT EXISTS `customer_user` (
	`id` INT(11) AUTO_INCREMENT,
    `customer_name` CHAR(20) UNIQUE NOT NULL,
    `customer_age` INT NOT NULL,
    `customer_score` TEXT DEFAULT "0",
    PRIMARY KEY(`id`)
);


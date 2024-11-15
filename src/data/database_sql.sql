-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `userid` CHAR(36) NOT NULL DEFAULT 'uuid()',
  `username` VARCHAR(20) NOT NULL,
  `password` VARCHAR(20) NOT NULL,
  `last_visited` TIMESTAMP NULL,
  PRIMARY KEY (`userid`),
  UNIQUE INDEX `id_UNIQUE` (`userid` ASC) VISIBLE,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`mineral`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`mineral` (
  `userid` CHAR(36) NOT NULL,
  `diamond` INT NULL DEFAULT 0,
  `emerald` INT NULL DEFAULT 0,
  `ruby` INT NULL DEFAULT 0,
  `opal` INT NULL DEFAULT 0,
  `quartz` INT NULL DEFAULT 0,
  `topaz` INT NULL DEFAULT 0,
  `gold` INT NULL DEFAULT 0,
  `silver` INT NULL DEFAULT 0,
  `bronze` INT NULL DEFAULT 0,
  PRIMARY KEY (`userid`),
  INDEX `fk_mineral_user_idx` (`userid` ASC) VISIBLE,
  CONSTRAINT `fk_mineral_user`
    FOREIGN KEY (`userid`)
    REFERENCES `mydb`.`user` (`userid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

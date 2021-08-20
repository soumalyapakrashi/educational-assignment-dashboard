CREATE TABLE `Department` (
    `ID` INT AUTO_INCREMENT,
    `Name` VARCHAR(100),
    PRIMARY KEY (`ID`)
);

CREATE TABLE `Administrator` (
    `ID` VARCHAR(100),
    `Name` VARCHAR(100),
    `Picture` VARCHAR(255),
    `Position` VARCHAR(100),
    `Phone` VARCHAR(20),
    `Email` VARCHAR(100) UNIQUE,
    `Password` VARCHAR(40),
    PRIMARY KEY (`ID`)
);

CREATE TABLE `Professor` (
    `ID` VARCHAR(100),
    `Name` VARCHAR(100),
    `Picture` VARCHAR(100),
    `Department` INT,
    `Designation` VARCHAR(20),
    `Achievements` JSON,
    `Phone` VARCHAR(20),
    `Email` VARCHAR(100) UNIQUE,
    `Password` VARCHAR(40),
    PRIMARY KEY (`ID`),
    FOREIGN KEY (`Department`) REFERENCES `Department`(`ID`)
);

CREATE TABLE `Subject` (
    `ID` INT AUTO_INCREMENT,
    `Name` VARCHAR(100),
    `Course` INT,
    PRIMARY KEY (`ID`),
    FOREIGN KEY (`Course`) REFERENCES `Course`(`ID`)
);

CREATE TABLE `Syllabus` (
    `ID` INT AUTO_INCREMENT,
    `Subject` INT,
    `Content` VARCHAR(100),
    PRIMARY KEY (`ID`),
    FOREIGN KEY (`Subject`) REFERENCES `Subject`(`ID`)
);

CREATE TABLE `Conversations` (
    `ID` INT AUTO_INCREMENT,
    `Text` TEXT,
    `From` VARCHAR(100),
    `To` VARCHAR(100),
    `Time` DATETIME,
    PRIMARY KEY (`ID`)
);

CREATE TABLE `Events` (
    `ID` INT AUTO_INCREMENT,
    `Name` VARCHAR(100),
    `Department` INT,
    PRIMARY KEY (`ID`),
    FOREIGN KEY (`Department`) REFERENCES `Department`(`ID`)
);

CREATE TABLE `Course` (
    `ID` INT AUTO_INCREMENT,
    `Name` VARCHAR(100),
    `Department` INT,
    PRIMARY KEY (`ID`),
    FOREIGN KEY (`Department`) REFERENCES `Department`(`ID`)
);

CREATE TABLE `Student` (
    `ID` VARCHAR(100),
    `Registration` VARCHAR(50),
    `Roll` VARCHAR(50),
    `Name` VARCHAR(100),
    `Picture` VARCHAR(255),
    `Batch` YEAR,
    `Department` INT,
    `Course` INT,
    `Phone` VARCHAR(20),
    `Email` VARCHAR(100) UNIQUE,
    `Password` VARCHAR(40),
    PRIMARY KEY (`ID`),
    FOREIGN KEY (`Department`) REFERENCES `Department`(`ID`),
    FOREIGN KEY (`Course`) REFERENCES `Course`(`ID`)
);

CREATE TABLE `Report` (
    `ID` INT AUTO_INCREMENT,
    `Student` VARCHAR(100),
    `Course` INT,
    `Content` VARCHAR(100),
    PRIMARY KEY (`ID`),
    FOREIGN KEY (`Student`) REFERENCES `Student`(`ID`),
    FOREIGN KEY (`Course`) REFERENCES `Course`(`ID`)
);

CREATE TABLE `Assignment` (
    `ID` INT AUTO_INCREMENT,
    `Student` VARCHAR(100),
    `Professor` VARCHAR(100),
    `Subject` INT,
    `Marks` FLOAT,
    `Date` DATETIME,
    `Type` VARCHAR(20),
    PRIMARY KEY (`ID`),
    FOREIGN KEY (`Student`) REFERENCES `Student`(`ID`),
    FOREIGN KEY (`Professor`) REFERENCES `Professor`(`ID`),
    FOREIGN KEY (`Subject`) REFERENCES `Subject`(`ID`)
);

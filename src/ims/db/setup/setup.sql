-- Here reg_no of any student is considered to be a fixed string of 10 characters. This is why we have chosen to use CHAR.
-- roll_no can be present at any instant or not. It can so happen that the roll nos has not been generated yet.
-- picture will store the path where the file is stored.
-- batch represents the year from when the course has started.
-- stream refers to stuffs like Computer Science, Economics, etc.
-- course refers to stuffs like M.Sc, B.Sc, etc.
-- In phone we have 2 parts. The first part is the 3 digit (or 2) country code; 2nd is the 10 digit number. So 3 + 10 = 13 locations.
-- We are creating index over stream and course because most of our queries are gonna be like 'find me M.Sc students of Computer Science.
-- The default index done by MySQL is based on a B-Tree structure.

CREATE TABLE student (
    id INT AUTO_INCREMENT,
    reg_no CHAR(10) NOT NULL,
    roll_no VARCHAR(10),
    name VARCHAR(100) NOT NULL,
    picture VARCHAR(255),
    batch YEAR NOT NULL,
    stream VARCHAR(20) NOT NULL,
    course VARCHAR(10) NOT NULL,
    address VARCHAR(255) NOT NULL,
    phone CHAR(13) NOT NULL,
    email VARCHAR(255) NOT NULL,
    marks_obtained INT,
    total_marks INT,
    PRIMARY KEY (id),
    INDEX (stream, course),
    CHECK (marks_obtained > 0 AND total_marks > 0),
    UNIQUE (reg_no)
);

-- designation refers to stuffs like 'Mr.', 'Dr.', 'Prof.', etc.
-- We are not generating an index here because it is assumed that this table will not be queried by our system too often.
-- Teachers are not expected to leave and join every now and then. From the IMS point of view, this may be required for some
-- other reason, but we are not concerned about that here. Here, as far as our EAD system is concerned, we do not require frequent access.
CREATE TABLE professor (
    id INT AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    picture VARCHAR(255),
    stream VARCHAR(20) NOT NULL,
    designation VARCHAR(10) NOT NULL,
    address VARCHAR(255) NOT NULL,
    phone CHAR(13) NOT NULL,
    email VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE (phone, email)
);

-- description stores what the project is on. A brief description of the project.
-- type stores the type of project, that is, a research paper, or an app, etc.
CREATE TABLE achievement (
    id INT AUTO_INCREMENT,
    professor_id INT,
    description VARCHAR(100) NOT NULL,
    type VARCHAR(50) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (professor_id) REFERENCES professor(id)
);

-- position refers to the job description of the admin, that is, manager, technical assistant, etc.
-- Here also, an index is not required due to reasons as mentioned before.
CREATE TABLE administrator (
    id INT AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    picture VARCHAR(255),
    position VARCHAR(50) NOT NULL,
    address VARCHAR(255) NOT NULL,
    phone CHAR(13) NOT NULL,
    email VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE (phone, email)
);

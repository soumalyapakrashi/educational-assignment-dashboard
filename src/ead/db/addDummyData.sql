-- Add dummy data to DEPARTMENT table
INSERT INTO `department` (`ID`, `Name`) VALUES
(1, 'Computer Science'),
(2, 'Physics');


-- Add dummy data to COURSE table
INSERT INTO `course` (`ID`, `Name`, `Department`) VALUES
(1, 'Master of Science', 1);


-- Add dummy data to SUBJECT table
INSERT INTO `subject` (`ID`, `Name`, `PaperType`, `TotalMarks`, `Course`) VALUES
(1, 'Advances In Computer Architecture', 'Theory', 100, 1),
(2, 'Advances in Data Structure', 'Theory', 100, 1),
(3, 'Data Structure', 'Practical', 100, 1),
(4, 'Advances in Database Management System', 'Theory', 100, 1),
(5, 'Data Communication', 'Theory', 100, 1),
(6, 'Database Management System', 'Practical', 100, 1),
(7, 'Computer Networks', 'Theory', 100, 1),
(8, 'Object Oriented Systems', 'Theory', 100, 1),
(9, 'Object Oriented Program and System', 'Practical', 100, 1),
(10, 'Design and Analysis of Algorithms', 'Theory', 100, 1),
(11, 'Software Engineering', 'Theory', 100, 1),
(12, 'Software Engineering', 'Practical', 100, 1);


-- Add dummy data to STUDENT table
INSERT INTO `student` (`ID`, `Registration`, `Roll`, `Name`, `Picture`, `Batch`, `Department`, `Course`, `Phone`, `Email`, `Password`) VALUES
('S-1de5156c-45bb-4361-8692-dc1666a80c95', '77affac4-ff8f-11eb-abfb-bf0369914a93', '77affac4-ff8f-11eb-abfb-bf0369914a93', 'Soumalya Pakrashi', 'F:\\Programs\\Projects\\educational-assignment-dashboard\\object_storage\\pictures\\77affac5-ff8f-11eb-abfb-bf0369914a93.jpeg', 2020, 1, 1, '+91 1234-567-890', 'soumalyapakrashi@gmail.com', 'password'),
('S-8004b582-a39b-4b30-a9fb-88cb7e5b906d', '77afd3b0-ff8f-11eb-abfb-bf0369914a93', '77afd3b0-ff8f-11eb-abfb-bf0369914a93', 'Samayita Majumdar', 'F:\\Programs\\Projects\\educational-assignment-dashboard\\object_storage\\pictures\\77afd3b1-ff8f-11eb-abfb-bf0369914a93.jpeg', 2020, 1, 1, '+91 1234-567-890', 'samayitamajumdar@gmail.com', 'password'),
('S-98919d6d-e318-4b91-8c92-cf9ce2634557', '77af8590-ff8f-11eb-abfb-bf0369914a93', '77af8590-ff8f-11eb-abfb-bf0369914a93', 'Sampreeti Sarkar', 'F:\\Programs\\Projects\\educational-assignment-dashboard\\object_storage\\pictures\\77af8591-ff8f-11eb-abfb-bf0369914a93.jpeg', 2020, 1, 1, '+91 1234-567-890', 'sampreetisarkar@gmail.com', 'password'),
('S-abad206b-0f00-46d0-a691-496184124f43', '77affac2-ff8f-11eb-abfb-bf0369914a93', '77affac2-ff8f-11eb-abfb-bf0369914a93', 'Vaishali Mondal', 'F:\\Programs\\Projects\\educational-assignment-dashboard\\object_storage\\pictures\\77affac3-ff8f-11eb-abfb-bf0369914a93.jpeg', 2020, 1, 1, '+91 1234-567-890', 'vaishalimondal@gmail.com', 'password'),
('S-de8a6405-3363-4cde-9617-9f0ed8e26df1', '77afd3b2-ff8f-11eb-abfb-bf0369914a93', '77afd3b2-ff8f-11eb-abfb-bf0369914a93', 'Rupal Mondal', 'F:\\Programs\\Projects\\educational-assignment-dashboard\\object_storage\\pictures\\77afd3b3-ff8f-11eb-abfb-bf0369914a93.jpeg', 2020, 1, 1, '+91 1234-567-890', 'rupalmondal@gmail.com', 'password'),
('S-ff4daf94-3b29-4a0b-b2c8-8ea696284002', '77affac0-ff8f-11eb-abfb-bf0369914a93', '77affac0-ff8f-11eb-abfb-bf0369914a93', 'Rimi Mondal', 'F:\\Programs\\Projects\\educational-assignment-dashboard\\object_storage\\pictures\\77affac1-ff8f-11eb-abfb-bf0369914a93.jpeg', 2020, 1, 1, '+91 1234-567-890', 'rimimondal@gmail.com', 'password');


-- Add dummy data to PROFESSOR table
INSERT INTO `professor` (`ID`, `Name`, `Picture`, `Department`, `Designation`, `Achievements`, `Phone`, `Email`, `Password`) VALUES
('P-5ac0a88a-9ef5-4765-b8b3-d7841fb4c7b7', 'Nabendu Chaki', 'F:\\Programs\\Projects\\educational-assignment-dashboard\\object_storage\\pictures\\39357720-ff94-11eb-bc4.jpeg', 1, 'Prof.', NULL, '+91 1234-567-890', 'nabenduchaki@gmail.com', 'password'),
('P-b0975d6a-1dae-4a60-9919-5f2f06cd71f2', 'Sankhayan Chowdhury', 'F:\\Programs\\Projects\\educational-assignment-dashboard\\object_storage\\pictures\\39359e30-ff94-11eb-bc4.jpeg', 1, 'Prof.', NULL, '+91 1234-567-890', 'sankhayanchowdhury@gmail.com', 'password');


-- Add dummy data to ADMINISTRATOR table
INSERT INTO `administrator` (`ID`, `Name`, `Picture`, `Position`, `Phone`, `Email`, `Password`) VALUES
('A-0e5686fb-f09f-4daa-b375-daf33f3455a1', 'Dishari Chatterjee', 'F:\\Programs\\Projects\\educational-assignment-dashboard\\object_storage\\pictures\\c1c814d0-ff94-11eb-bada-e967ef78531b.jpeg', 'Moderator', '+91 1234-567-890', 'disharichatterjee@gmail.com', 'password'),
('A-a4e16882-cf4f-4823-8af6-46420df8d4fb', 'Santanu Nag', 'F:\\Programs\\Projects\\educational-assignment-dashboard\\object_storage\\pictures\\c1c7edc0-ff94-11eb-bada-e967ef78531b.jpeg', 'Moderator', '+91 1234-567-890', 'santanunag@gmail.com', 'password');

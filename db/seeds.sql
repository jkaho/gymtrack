-- Instructors --

INSERT INTO users (`id`,`firstName`,`lastName`,`dob`,`email`,`password`,`instructor`,`createdAt`,`updatedAt`)
VALUES (1,'Tom','Smith','1992-03-29','tom-smith@gmail.com','$2a$10$K0IXp/vLJzx6fUbOFU/tdO8wmB.ruvEmFduQu3mJh9L1zkiVdTrlG',1,'2021-03-15 09:06:20','2021-03-15 09:06:20');

INSERT INTO users (`id`,`firstName`,`lastName`,`dob`,`email`,`password`,`instructor`,`createdAt`,`updatedAt`)
VALUES (2,'Jackson','Rocci','1984-12-12','jrocci@gmail.com','$2a$10$BZ0uSkVslz0XsdBrK7j0/.zerbEZf/FMGDGYDzzDNuzGPhdmlFWBi',1,'2021-03-15 09:06:20','2021-03-15 09:06:20');

INSERT INTO users (`id`,`firstName`,`lastName`,`dob`,`email`,`password`,`instructor`,`createdAt`,`updatedAt`)
VALUES (3,'Emily','Zhang','1995-04-01','em-zhang-1995@yahoo.com','$2a$10$yW04z7PF/ZA3TMwIfp205uf6IeLgMViDoLaVdtQ6Arcct6QCAzGqC',1,'2021-03-15 09:06:20','2021-03-15 09:06:20');

-- Members --

INSERT INTO users (`id`,`firstName`,`lastName`,`dob`,`email`,`password`,`instructor`,`createdAt`,`updatedAt`)
VALUES (4,'James','Miller','1984-03-21','james.miller.work@gmail.com','$2a$10$OX/JvpS4S4pn5HPSepGKYOuMTHfbKvdKnIGHWOykKmAjJ6XR7Gf1y',0,'2021-03-15 09:06:20','2021-03-15 09:06:20');

INSERT INTO users (`id`,`firstName`,`lastName`,`dob`,`email`,`password`,`instructor`,`createdAt`,`updatedAt`)
VALUES (5,'Delilah','Garcia','1973-01-08','del-gar@gmail.com','$2a$10$k/VBI1UAa44GuNV9T9mWYerZy2r1O/tiarGtK5l0RadujfA9FfDrm',0,'2021-03-15 09:06:20','2021-03-15 09:06:20');

INSERT INTO users (`id`,`firstName`,`lastName`,`dob`,`email`,`password`,`instructor`,`createdAt`,`updatedAt`)
VALUES (6,'Polly','Choi','1999-08-17','pol-choi@yahoo.com','$2a$10$DdHqKkGFYz28I3xLOW3reem996yc0vP/28FIIgnHOTMaTwIWpGJci',0,'2021-03-15 09:06:20','2021-03-15 09:06:20');

INSERT INTO users (`id`,`firstName`,`lastName`,`dob`,`email`,`password`,`instructor`,`createdAt`,`updatedAt`)
VALUES (7,'Chelsea','Fernando','1993-11-17','chelsea-f-29@gmail.com','$2a$10$ko3SjK9I7sCgZn8JZRS1O.mMX2wQJmA./3r0T4soY7aOjcaAXkiUW',0,'2021-03-15 09:06:20','2021-03-15 09:06:20');

-- Classes -- 

INSERT INTO classes (name, description, startTime, endTime, price, createdAt, updatedAt, instructorId)
VALUES ("Saturday Spin", "Spin description", "2021-03-02 10:30:00", "2021-04-02 11:30:00", 50, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1);

INSERT INTO classes (name, description, startTime, endTime, price, createdAt, updatedAt, instructorId)
VALUES ("Yoga For All", "Yoga description", "2021-03-02 11:30:00", "2021-04-02 13:00:00", 25, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2);

INSERT INTO classes (name, description, startTime, endTime, price, createdAt, updatedAt, instructorId)
VALUES ("Zumba", "Zumba description", "2021-03-03 13:30:00", "2021-04-02 14:30:00", 30, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2);

INSERT INTO classes (name, description, startTime, endTime, price, createdAt, updatedAt, instructorId)
VALUES ("Basic Training", "Basic Training description", "2021-03-03 14:00:00", "2021-04-02 16:00:00", 55, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 3);

-- User Classes --

INSERT INTO userClasses (createdAt, updatedAt, userId, classId)
VALUES (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1, 1);

INSERT INTO userClasses (createdAt, updatedAt, userId, classId)
VALUES (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1, 2);

INSERT INTO userClasses (createdAt, updatedAt, userId, classId)
VALUES (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2, 1);

INSERT INTO userClasses (createdAt, updatedAt, userId, classId)
VALUES (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2, 4);

INSERT INTO userClasses (createdAt, updatedAt, userId, classId)
VALUES (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 3, 1);

INSERT INTO userClasses (createdAt, updatedAt, userId, classId)
VALUES (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 3, 3);

INSERT INTO userClasses (createdAt, updatedAt, userId, classId)
VALUES (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 4, 3);

-- Class Reviews -- 

INSERT INTO classReviews (title, review, rating, createdAt, updatedAt, authorId, classId)
VALUES ("Would recommend", "Spin class was great!", 5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1, 1);

INSERT INTO classReviews (title, review, rating, createdAt, updatedAt, authorId, classId)
VALUES ("Alright", "Yoga was okay. A bit too easy for my liking.", 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1, 2);

INSERT INTO classReviews (title, review, rating, createdAt, updatedAt, authorId, classId)
VALUES ("Amazing!!", "Best spin class I've been to.", 5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 3, 1);

INSERT INTO classReviews (title, review, rating, createdAt, updatedAt, authorId, classId)
VALUES ("Worth it.", "Basic Training was very helpful in building my fitness.", 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 4, 3);

-- Instructor Reviews --

INSERT INTO instructorReviews (title, review, rating, createdAt, updatedAt, authorId, instructorId)
VALUES ("SO GOOD", "Tom is an amazing spin instructor!", 5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1, 1);

INSERT INTO instructorReviews (title, review, rating, createdAt, updatedAt, authorId, instructorId)
VALUES ("Eh", "Emily was nice but seemed a bit clueless.", 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 4, 3);

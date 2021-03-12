-- Instructors --
INSERT INTO users (firstName, lastName, dob, email, password, createdAt, updatedAt, instructor)
VALUES ("Tom", "Smith", "1992-03-29", "tom-smith@gmail.com", "password12345", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, true);

INSERT INTO users (firstName, lastName, dob, email, password, createdAt, updatedAt, instructor)
VALUES ("Jackson", "Rocci", "1984-12-12", "jrocci@gmail.com", "aslfi13289A", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, true);

INSERT INTO users (firstName, lastName, dob, email, password, createdAt, updatedAt, instructor)
VALUES ("Emily", "Zhang", "1995-04-01", "em-zhang-1995@yahoo.com", "ememzhang99993129", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, true);

-- Members --
INSERT INTO users (firstName, lastName, dob, email, password, createdAt, updatedAt, instructor)
VALUES ("James", "Miller", "1984-03-21", "james.miller.work@gmail.com", "jj19920ja", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, false);

INSERT INTO users (firstName, lastName, dob, email, password, createdAt, updatedAt, instructor)
VALUES ("Delilah", "Garcia", "1973-01-08", "del-gar@gmail.com", "laldkjf91", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, false);

INSERT INTO users (firstName, lastName, dob, email, password, createdAt, updatedAt, instructor)
VALUES ("Polly", "Choi", "1999-08-17", "pol-choi@yahoo.com", "asdfkj129", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, false);

INSERT INTO users (firstName, lastName, dob, email, password, createdAt, updatedAt, instructor)
VALUES ("Chelsea", "Fernando", "1993-11-17", "chelsea-f-29@gmail.com", "daslfjei1", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, false);

-- Classes -- 
INSERT INTO classes (name, description, startTime, endTime, createdAt, updatedAt, instructorId)
VALUES ("Saturday Spin", "Spin description", "2021-03-02 10:30:00", "2021-04-02 11:30:00", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1);

INSERT INTO classes (name, description, startTime, endTime, createdAt, updatedAt, instructorId)
VALUES ("Yoga For All", "Yoga description", "2021-03-02 11:30:00", "2021-04-02 13:00:00", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2);

INSERT INTO classes (name, description, startTime, endTime, createdAt, updatedAt, instructorId)
VALUES ("Zumba", "Zumba description", "2021-03-03 13:30:00", "2021-04-02 14:30:00", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2);

INSERT INTO classes (name, description, startTime, endTime, createdAt, updatedAt, instructorId)
VALUES ("Basic Training", "Basic Training description", "2021-03-03 14:00:00", "2021-04-02 16:00:00", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 3);

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

INSERT INTO classReviews (review, rating, createdAt, updatedAt, authorId, classId)
VALUES ("Spin class was great!", 5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1, 1);

INSERT INTO classReviews (review, rating, createdAt, updatedAt, authorId, classId)
VALUES ("Yoga was okay. A bit too easy for my liking.", 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1, 2);

INSERT INTO classReviews (review, rating, createdAt, updatedAt, authorId, classId)
VALUES ("Best spin class I've been to.", 5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 3, 1);

INSERT INTO classReviews (review, rating, createdAt, updatedAt, authorId, classId)
VALUES ("Basic Training was very helpful in building my fitness.", 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 4, 3);

-- Instructor Reviews --

INSERT INTO instructorReviews (review, rating, createdAt, updatedAt, authorId, instructorId)
VALUES ("Tom is an amazing spin instructor!", 5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1, 1);

INSERT INTO instructorReviews (review, rating, createdAt, updatedAt, authorId, instructorId)
VALUES ("Emily was nice but seemed a bit clueless.", 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 4, 3);

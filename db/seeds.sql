-- Instructors --
INSERT INTO users (firstName, lastName, dob, email, password, instructor)
VALUES ("Tom", "Smith", "1992-03-29", "tom-smith@gmail.com", "password12345", true);

INSERT INTO users (firstName, lastName, dob, email, password, instructor)
VALUES ("Jackson", "Rocci", "1984-12-12", "jrocci@gmail.com", "aslfi13289A", true);

INSERT INTO users (firstName, lastName, dob, email, password, instructor)
VALUES ("Emily", "Zhang", "1995-04-01", "em-zhang-1995@yahoo.com", "ememzhang99993129", true);

-- Members --
INSERT INTO users (firstName, lastName, dob, email, password, instructor)
VALUES ("James", "Miller", "1984-03-21", "james.miller.work@gmail.com", "jj19920ja", false);

INSERT INTO users (firstName, lastName, dob, email, password, instructor)
VALUES ("Delilah", "Garcia", "1973-01-08", "del-gar@gmail.com", "laldkjf91", false);

INSERT INTO users (firstName, lastName, dob, email, password, instructor)
VALUES ("Polly", "Choi", "1999-08-17", "pol-choi@yahoo.com", "asdfkj129", false);

INSERT INTO users (firstName, lastName, dob, email, password, instructor)
VALUES ("Chelsea", "Fernando", "1993-11-17", "chelsea-f-29@gmail.com", "daslfjei1", false);

-- Classes -- 
INSERT INTO classes (name, description, startTime, endTime, instructorId)
VALUES ("Saturday Spin", "Spin description", "2021-03-02 10:30:00", "2021-04-02 11:30:00", 1);

INSERT INTO classes (name, description, startTime, endTime, instructorId)
VALUES ("Yoga For All", "Yoga description", "2021-03-02 11:30:00", "2021-04-02 13:00:00", 2);

INSERT INTO classes (name, description, startTime, endTime, instructorId)
VALUES ("Zumba", "Zumba description", "2021-03-03 13:30:00", "2021-04-02 14:30:00", 2);

INSERT INTO classes (name, description, startTime, endTime, instructorId)
VALUES ("Basic Training", "Basic Training description", "2021-03-03 14:00:00", "2021-04-02 16:00:00", 3);

-- User Classes --

INSERT INTO userClasses (userId, classId)
VALUES (1, 1);

INSERT INTO userClasses (userId, classId)
VALUES (1, 2);

INSERT INTO userClasses (userId, classId)
VALUES (2, 1);

INSERT INTO userClasses (userId, classId)
VALUES (2, 4);

INSERT INTO userClasses (userId, classId)
VALUES (3, 1);

INSERT INTO userClasses (userId, classId)
VALUES (3, 3);

INSERT INTO userClasses (userId, classId)
VALUES (4, 3);

-- Class Reviews -- 

INSERT INTO classReviews (review, rating, authorId, classId)
VALUES ("Spin class was great!", 5, 1, 1);

INSERT INTO classReviews (review, rating, authorId, classId)
VALUES ("Yoga was okay. A bit too easy for my liking.", 3, 1, 2);

INSERT INTO classReviews (review, rating, authorId, classId)
VALUES ("Best spin class I've been to.", 5, 3, 1);

INSERT INTO classReviews (review, rating, authorId, classId)
VALUES ("Basic Training was very helpful in building my fitness.", 4, 4, 3);

-- Instructor Reviews --

INSERT INTO classReviews (review, rating, authorId, instructorId)
VALUES ("Tom is an amazing spin instructor!", 5, 1, 1);

INSERT INTO classReviews (review, rating, authorId, instructorId)
VALUES ("Emily was nice but seemed a bit clueless.", 2, 4, 3);

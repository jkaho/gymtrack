const db = require("../models");

const instructors = [
  {
    firstName: "Tom",
    lastName: "Smith",
    dob: "1992-03-29",
    email: "tom-smith@gmail.com",
    password: "password12345"
  },
  {
    firstName: "Jackson",
    lastName: "Rocci",
    dob: "1984-12-12",
    email: "jrocci@gmail.com",
    password: "aslfi13289A"
  },
  {
    firstName: "Emily",
    lastName: "Zhang",
    dob: "1995-04-01",
    email: "em-zhang-1995@yahoo.com",
    password: "ememzhang99993129"
  }
];

const members = [
  {
    firstName: "James",
    lastName: "Miller",
    dob: "1984-03-21",
    email: "james.miller.work@gmail.com",
    password: "jj19920ja"
  },
  {
    firstName: "Delilah",
    lastName: "Garcia",
    dob: "1973-01-08",
    email: "del-gar@gmail.com",
    password: "laldkjf91"
  },
  {
    firstName: "Polly",
    lastName: "Choi",
    dob: "1999-08-17",
    email: "pol-choi@yahoo.com",
    password: "asdfkj129"
  },
  {
    firstName: "Chelsea",
    lastName: "Fernando",
    dob: "1993-11-17",
    email: "chelsea-f-29@gmail.com",
    password: "daslfjei1"
  }
];

module.exports = function() {
  instructors.forEach(instructor => {
    db.user.create({
      firstName: instructor.firstName,
      lastName: instructor.lastName,
      dob: instructor.dob,
      email: instructor.email,
      password: instructor.password,
      instructor: true
    });
  });
  members.forEach(member => {
    db.user.create({
      firstName: member.firstName,
      lastName: member.lastName,
      dob: member.dob,
      email: member.email,
      password: member.password,
      instructor: false
    });
  });
};

const loginTestData = {
  validUser: {
    username: 'Admin',
    password: 'admin123'
  },

  invalidUsername: {
    username: 'UnknownUser8472',
    password: 'admin123'
  },

  invalidPassword: {
    username: 'Admin',
    password: 'WrongPassword8472'
  },

  invalidUser: {
    username: 'UnknownUser8472',
    password: 'WrongPassword8472'
  }
};

module.exports = { loginTestData };

/*
| Test Case ID | Test Data Used  |
| ------------ | --------------- |
| TC-001       | validUser       |
| TC-002       | invalidUsername |
| TC-003       | invalidPassword |
| TC-004       | invalidUser     |
*/

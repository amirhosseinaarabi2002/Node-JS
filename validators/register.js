const Validator = require("fastest-validator");

const v = new Validator();

const schema = {
  name: {
    type: "string",
    min: 3,
    max: 12,
  },

  username: {
    type: "string",
    min: 5,
    max: 15,
  },

  email: {
    type: "string",
  },

  password: {
    type: "string",
    min: 8,
    max: 12,
  },
  confirmPassword: {
    type: "equal",
    field: "password",
  },

  $$strict: true, // no additional properties allowed
};

const check = v.compile(schema);

module.exports = check;
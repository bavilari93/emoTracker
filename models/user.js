const bcrypt = require('bcryptjs');

const db = require('../db/set-up');

const User = {};

function create (user) {
  console.log(user);
  const password = bcrypt.hashSync(user.password, 10);
  console.log(user);
  return db.oneOrNone(`
    INSERT INTO users
    (email, password)
    VALUES
    ($1, $2)
    RETURNING *;`,
    [user.email, password]
  );
};

function findByEmail (email) {
  return db.oneOrNone(`
    SELECT *
    FROM users
    WHERE email = $1;`,
    [email]
  );
};


module.exports = {create, findByEmail};
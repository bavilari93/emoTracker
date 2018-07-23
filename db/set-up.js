

	
const pgp = require('pg-promise')({}),
config = process.env.DATABASE_URL || 'postgres://frank@localhost:5432/emotracker',
db = pgp(config);

module.exports = db;
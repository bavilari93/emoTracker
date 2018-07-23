const db = require('../db/set-up');

// user 
const findAllByUser = (userId) =>{
	return db.any(`SELECT * FROM users WHERE id=$1`, [userId]);
}


module.exports = {findAllByUser}
const db = require('../db/set-up');

// user and destinations to display user/id
const findAllByUser = (userId) =>{
	return db.any(`SELECT * FROM emotion WHERE user_id=$1`, [userId]);
}

// create a new emotion 

const create = (emotion, userId) => {
	console.log('this is the info recied in create',emotion, userId);
	return db.one(`INSERT INTO emotion
		(user_id, type)
		VALUES($1, $2) RETURNING *`, 
		[userId,
		emotion.type]);
}

module.exports = {findAllByUser, create}
const db = require('../db/set-up');

// user and emotion to display user/id
const findAllByUser = (userId) =>{
	console.log('this is user Id', userId);
	return db.any(`SELECT type, EXTRACT(day FROM date)AS day, to_char((date)::date, 'month') from emotion WHERE date > now() -interval '1 week' and user_id=$1`, [userId]);
}
const findWeekByUser = (userId) =>{
	console.log(`this is the user Id ${userId}`);
	return db.any(`SELECT type, EXTRACT(day FROM date)AS day, to_char((date)::date, 'month') from emotion WHERE user_id=$1`, [userId]);
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

// number of emotion with out date
const mostEmotion = (userId) => {
	console.log(mostEmotion);
  return db.any(` SELECT type, COUNT(*) FROM emotion WHERE user_id= $1 GROUP BY type`, [userId]);
}

module.exports = {findAllByUser,findWeekByUser, create, mostEmotion}
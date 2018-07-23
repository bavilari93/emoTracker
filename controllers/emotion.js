const router = require('express').Router();
const emotion = require('../models/emotion.js')


router.get('/', (req, res) => {
    emotion
        .findAllByUser(req.user.id)
        .then(destination => {
        	console.log(destination)
            res.render('user/user', {
                destination: destination,
                email: req.user.email
            })
        })
        .catch(err => {
            console.log('error from profile', err);
        })
});

module.exports = router;

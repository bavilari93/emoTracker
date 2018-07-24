const router = require('express').Router();
const emotion = require('../models/emotion.js')


router.get('/', (req, res) => {
    console.log(res);
    emotion
        .findAllByUser(req.user.id)
        .then(emo => {
        	console.log(emo)
            res.render('user/user', {
                emo: emo,
                email: req.user.email
            })
        })
        .catch(err => {
            console.log('error from profile', err);
        })
});


// ///////// CRUD /////////////
router.post('/', (req, res) => {
    console.log('this is the id of the use', req.user.id);
    emotion
        .create(req.body , req.user.id)
        .then(emo =>{
            console.log('this is the json received', res.json(emo));
            res.json(emo);
        })
        .catch(err => {
            console.log('error from creating new emo', err);
        })
})

module.exports = router;

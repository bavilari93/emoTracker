const router = require('express').Router();
const emotion = require('../models/emotion.js')


router.get('/:id', (req, res) => {
    console.log('inside just onedestination in controllers',req.params.id);
    emotion
        .findAllByUser(req.params.id,req.user.id)
        .then(emo => {
        	console.log(emo)
            res.render('user/user', {
                emo: emo
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

const router = require('express').Router();
const Emotion = require('../models/emotion.js')


router.get('/', (req, res) => {
    console.log('inside just onedestination in controllers',req.user.id);
            res.render('user/user');
});

router.get('/user', (req, res) =>{
    console.log('indide of id of user', req.user.id);
    Emotion
        .findAllByUser(req.user.id)
        .then(emo => {
            // console.log('this is the info i get from find all', emo)
            res.render('index', {
                emo: emo, 
                email: req.user.email
            })
        })
        .catch(err => console.log(err));

});

router.get('/test', (req, res) => {
    console.log('this is test')
     console.log('indide of id of user', req.user.id);
    Emotion
        .findAllByUser(req.user.id)
        .then(emo => {
            // console.log('this is the info i get from find all', emo)
            res.json(emo)
        })
})

router.get('/top', (req, res) =>{
    Emotion
        .mostEmotion(req.user.id)
        .then(emo =>{
            res.json(emo)
        }).catch(err => console.log(err));
})

// ///////// CRUD /////////////
router.post('/', (req, res) => {
    console.log('this is the id of the use', req.user.id);
    Emotion
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

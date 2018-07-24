require('dotenv').config()
const express = require('express'), 
logger = require('morgan'),
bodyParser = require('body-parser'),
session= require('express-session'), 
cookieParser = require('cookie-parser'), 
mustacheExpress = require('mustache-express'), 
PORT = process.env.PORT || 9000,
app = express();

// indicate all the views 
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname+ '/views');
app.use(express.static(__dirname +'/public'));

// user session 
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));

// keep cookies and password - log in 
const auth = require('./services/auth');
app.use(auth.passportInstance);
app.use(auth.passportSession);

app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());

// controllers routing 
app.use('/user', require('./controllers/user'));
app.use('/emo',auth.restrict, require('./controllers/emotion'));

// have a restriction after clicking and then send info 
// with the new person who subscribed 
// the first route renders the index
app.get('/',(req, res)=>{
	// res.render('index');
})

app.listen(PORT, ()=> console.log(`Twingo listening 🌝 from ${PORT}`))
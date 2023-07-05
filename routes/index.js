var express = require('express');
let cookieParser= require('cookie-parser');
const { about, password, details, signup, login } = require('../controllers/indexcontroller');
let mongoose=require('mongoose')
mongoose.connect("mongodb+srv://tgreatuniversalltd:tobi123456789@cluster0.8boxx8a.mongodb.net/?retryWrites=true&w=majority")
let db= mongoose.connection;
db.once('open', function(){console.log('DATABASE CONNECTED');});
var router = express.Router();
var cors= require('cors')
var app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser);
var corsOptions = {
  origin:'*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/page', function(req, res, next) {
  res.send('hello world');
});
router.get('/about', about);
router.get('/password', password);
router.get('/details', details);
router.post('/signup', signup);
// router.post('/login', login);

module.exports = router;

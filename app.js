var express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const session = require('express-session');
var sqlite = require('sqlite3');
var cors = require('cors');

var app = express();

app.set('views', path.join(__dirname, 'views'));

app.set('view engine','ejs');

app.use(express.static(path.join(__dirname, 'public')));
var port = process.env.PORT || 3001;

// models
var models = require("./models");

// routes views
const ViewDicts = require('./routes/ViewDictsVw');
const ViewDict = require('./routes/ViewDict');
const ViewTyp = require('./routes/ViewTyp');
const myPage = require('./routes/page');
const ViewGamePointers = require('./routes/ViewGamePoints');

// routes json
const dict = require('./routes/Dict');
const type = require('./routes/Typ');
const dicts = require('./routes/dictsVw');
const user = require('./routes/user');
const login = require('./routes/login');
const password = require('./routes/password');
const userRole = require('./routes/userRoleVw');
const sessions = require('./routes/user_session');
const sessionVw = require('./routes/sessionVw');
const gamePoints = require('./routes/gamePointsVw');

//Sync Database
models.sequelize.sync({ force: false }).then(function() {
    console.log('connected to database')
}).catch(function(err) {
    console.log(err)
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());

// register routes views
app.use('/',myPage);
app.use('/ViewDicts', ViewDicts);
app.use('/ViewDict', ViewDict);
app.use('/ViewTyp', ViewTyp);
app.use('/ViewGamePoints',ViewGamePointers);

// register routes json
app.use('/dicts', dicts);
app.use('/dict', dict);
app.use('/type', type);
app.use('/user', user);
app.use('/login', login);
app.use('/password', password);
app.use('/userRole',userRole);
app.use('/session',sessions);
app.use('/sessionVw',sessionVw);
app.use('/gamePoints',gamePoints);

// index path
// app.get('/', function(req, res){
//     res.send('przełącznik między danymi:'
//     + '<br /><br /> słownik: ' +  ` <a  href="dict">dict</a>`
//     + '<br /><br /> typ słownika: ' +  ` <a  href="type">type</a>`

//     + '<br /><br /> cały słownik: ' +  ` <a  href="dicts">dicts</a>`
//     )
// });

app.listen(port, function(){
    console.log('app listening on port: '+port);
});

module.exports = app;
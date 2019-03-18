const express = require('express');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

let app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.use(express.static('./'));

app.get('/', (req, res) => {
    res.end('ok');
});

app.listen(8888, () => {
    console.log('Server stated listening port 8888');
});

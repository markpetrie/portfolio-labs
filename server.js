

const express = require('express');
const bodyParser = require('body-parser').urlencoded({ extended: true });
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));
app.get('/', function (request, response) {
    response.sendFile('/public/index.html', { root: '.' });
});

app.listen(PORT, function () {
    console.log('node server started successfully on port ' + PORT);
});
const portService = require('./helper/port-helper');
const express = require("express");
const app = express();
const defaultPort = 3000;
const portArg = process.argv[3];

require('./controllers/fcm-controller')(app);
require('./controllers/html-controller')(app);

let port = portService.configurePort(portArg, defaultPort);


app.listen(port, () => {
    console.log(`FCM app listening at http://localhost:${port}`)
});
const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;
const mainRouter = require("./routes/main");
const apiRouter = require("./routes/api")

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(express.static(__dirname + "/public/"))
app.use('/', mainRouter);
app.use('/api', apiRouter);

app.listen(PORT);
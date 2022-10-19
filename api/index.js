const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');

const illustrationRoutes = require("./routes/illustrationRoutes");
const loginRoutes = require("./routes/loginRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/illustrations", illustrationRoutes);
app.use("/login", loginRoutes);


app.listen(3300);
const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');

const illustrationRoutes = require("./routes/illustrationRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/illustrations", illustrationRoutes);
app.use("/forms", formRoutes);

app.listen(3300);

const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');

const illustrationRoutes = require("./routes/illustrationRoutes");
const userRoutes = require("./routes/userRoutes");
const formRoutes = require("./routes/formRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/illustrations", illustrationRoutes);
app.use("/user", userRoutes);
app.use("/forms", formRoutes);

app.listen(3300);

require('dotenv').config();
const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");
const path = require('path');
const db = require("./config/mongoose-connection");
const debug = require('debug')("development:app")

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
app.use(cookieParser());
app.set('view engine', 'ejs');

const ownersRouter = require("./routes/ownersRouter");
const productsRounter = require("./routes/productsRouter");
const usersRouter = require("./routes/usersRouter");

app.use('/owners',ownersRouter)
app.use('/products',productsRounter)
app.use('/users',usersRouter)




app.listen(process.env.PORT||3000)
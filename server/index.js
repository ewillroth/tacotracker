require('dotenv').config()
const express = require('express')
const session = require("express-session");
const { json } = require('body-parser')
const massive = require('massive')
const controller = require('./controller')
const app = express();


massive(process.env.CONNECTION_STRING)
.then(db => { 
	app.set('db', db);
	console.log('database connected');
	})
.catch(err=>console.log(err))

app.use(json())

app.use(
	session({
		secret: process.env.SECRET,
		resave: false,
		saveUninitialized: true,
		cookie: {
			maxAge: 1000 * 60 * 60 * 24 * 3
		}
	})
);

app.get('/api/tacos', controller.displayTacos)
app.post('/api/tacos', controller.addTacos)
app.put('/api/tacos', controller.editTacos)
app.delete('/api/tacos', controller.deleteTacos)

app.listen(process.env.PORT, console.log(`listening on port ${process.env.PORT}`))
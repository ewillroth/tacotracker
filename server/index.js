require('dotenv').config();
const express = require('express');
const session = require('express-session');
const { json } = require('body-parser');
const pgp = require('pg-promise')();
const controller = require('./controller');
const app = express();

const connection = {
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	database: 'tacotracker',
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
};

const db = pgp(connection);

app.set('db', db);
app.use(json());

app.use(
	session({
		secret: process.env.SECRET,
		resave: false,
		saveUninitialized: true,
		cookie: {
			maxAge: 1000 * 60 * 60 * 24 * 3,
		},
	})
);

app.get('/api/tacos', controller.displayTacos);
app.get('/api/tacocount', controller.countTacos);
app.post('/api/tacos', controller.addTacos);
app.put('/api/tacos', controller.editTacos);
app.delete('/api/tacos', controller.deleteTacos);
app.get('/api/user', controller.getUser);
app.put('/api/user', controller.updateUser);
app.get('/api/logout', controller.logout);

app.listen(process.env.PORT, console.log(`listening on port ${process.env.PORT}`));

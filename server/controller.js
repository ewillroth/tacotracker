const addTacos = async (req, res, next) => {
	const id = req.session.user ? req.session.user.uid : 0;
	try {
		const response = await req.app
			.get('db')
			.any('INSERT INTO tacos (quantity, rating, description, source, user_id) VALUES ($1,$2,$3,$4,$5);', [
				req.body.quantity,
				+req.body.rating,
				req.body.description,
				req.body.source,
				id,
			]);
		res.status(200).json(response);
	} catch (err) {
		res.status(400).json({ error: err });
	}
};
const displayTacos = async (req, res, next) => {
	try {
		const response = await req.app.get('db').any('SELECT * FROM tacos;');
		res.status(200).json(response);
	} catch (err) {
		res.status(400).json({ error: err });
	}
};
const editTacos = async (req, res, next) => {
	const id = req.session.user ? req.session.user.uid : 0;
	try {
		const update = await req.app
			.get('db')
			.none('UPDATE tacos SET quantity = $2, rating = $3, description = $4, source = $5, user_id = $6 WHERE id = $1', [
				req.body.id,
				req.body.quantity,
				req.body.rating,
				req.body.description,
				req.body.source,
				id,
			]);
		console.log(update);
		const response = await req.app.get('db').any('SELECT * FROM tacos;');
		res.status(200).json(response);
	} catch (err) {
		res.status(400).json({ error: err });
	}
};
const deleteTacos = async (req, res, next) => {
	try {
		const response = await req.app.get('db').any('DELETE FROM tacos WHERE id = $1;', [req.body.id]);
		res.status(200).json(response);
	} catch (err) {
		res.status(400).json({ error: err });
	}
};
const countTacos = async (req, res, next) => {
	//get taco count for current user if there is one
	//replace id with proper user_id on req.session.user once added
	const id = req.session.user ? req.session.user.uid : 0;
	try {
		const response = await req.app.get('db').any('SELECT sum(quantity) FROM tacos WHERE user_id = $1', [id]);
		res.status(200).json(response);
	} catch (err) {
		res.status(400).json({ error: err });
	}
};
const getUser = (req, res, next) => {
	res.send(req.session.user ? req.session.user : { name: 'guest' });
};
const updateUser = (req, res, next) => {
	req.session.user = req.body.user;
	res.send(req.session.user);
};
const logout = (req, res, next) => {
	req.session.destroy();
	res.status(200).send('Logout successful');
};

module.exports = {
	addTacos,
	displayTacos,
	editTacos,
	deleteTacos,
	countTacos,
	getUser,
	updateUser,
	logout,
};

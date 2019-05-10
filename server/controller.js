
const addTacos = (req,res,next) => {
	req.app.get("db").addTacos([req.body.quantity, +req.body.rating, req.body.description, req.body.source])
	.then(response => res.status(200).json(response))
	.catch(err => console.log(err))
}
const displayTacos = (req,res,next) => {
	req.app.get("db").displayTacos()
	.then(response => res.status(200).json(response))
	.catch(err => console.log(err))
}
const editTacos = (req,res,next) => {
	req.app.get("db").editTacos([req.body.id, req.body.quantity, req.body.rating, req.body.description, req.body.source])
	.then(response => res.status(200).json(response))
	.catch(err => console.log(err))
}
const deleteTacos = (req,res,next) => {
	req.app.get("db").deleteTacos(req.body.taco_id)
	.then(response => res.status(200).json(response))
	.catch(err => console.log(err))
}

const countTacos = (req,res,next) => {
	//get taco count for current user if there is one
	//replace id with proper user_id on req.session.user once added
	req.app.get('db').countTacos(req.session.user?req.session.user.id:0)
	.then(response=>res.status(200).json(response))
	.catch(err=>console.log(err))
}

const getUser = (req,res,next) => {
	res.send(req.session.user?req.session.user:{name: 'guest'})
}

module.exports = {
	addTacos,
	displayTacos,
	editTacos,
	deleteTacos,
	countTacos,
	getUser
};


const addTacos = (req,res,next) => {
	req.app.get("db").addTacos([req.body.quantity, req.body.rating, req.body.description, req.body.pic, req.body.from])
	.then(response => res.status(200).json(response))
	.catch(err => console.log(err))
}
const displayTacos = (req,res,next) => {
	req.app.get("db").displayTacos()
	.then(response => res.status(200).json(response))
	.catch(err => console.log(err))
}
const editTacos = (req,res,next) => {
	req.app.get("db").editTacos([req.body.taco_id, req.body.quantity, req.body.rating, req.body.description, req.body.pic, req.body.from])
	.then(response => res.status(200).json(response))
	.catch(err => console.log(err))
}
const deleteTacos = (req,res,next) => {
	req.app.get("db").deleteTacos(req.body.taco_id)
	.then(response => res.status(200).json(response))
	.catch(err => console.log(err))
}

module.exports = {
	addTacos,
	displayTacos,
	editTacos,
	deleteTacos
};

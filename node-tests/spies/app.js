let db = require('./db');


module.exports.handleSigup = (email, password) => {
	//check if email already exists

	db.saveUser({email, password})
	//save the user
	//send welcome email
};
const expect = require('expect');
const rewire = require('rewire');

//local module
let app = require('./app');

describe('App', function () {
	let db = {
		saveUser: expect.createSpy()	
	};
	app.__set__('db', db);
	
	it('should call the spy correctly', function () {
		let spy = expect.createSpy();
		spy('hoang anh');
		expect(spy).toHaveBeenCalledWith('hoang anh', 25);
	});

	it('should call saveUser with user object', function () {
		let email = 'hoanganh@gmail.com';
		let password = 'abc123';

		app.handleSigup(email, password);
		expect(db.saveUser).toHaveBeenCalledWith({email, password});
	});
});
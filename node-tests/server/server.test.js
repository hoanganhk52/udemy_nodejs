const request = require('supertest');
const app = require('./server').app;

describe('server', function () {
	describe('GET /', function() {
		it('respond hello world', function(done) {
			request(app)
				.get('/')
				.expect('hello world')
				.expect(200, done);
		});
	});
});


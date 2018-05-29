const expect = require('expect');
const utils = require('./utils');

const houseForSale = {
	bath: true,
	bedrooms: 4,
	kitchen: {
		amenities: ['oven', 'stove', 'washer'],
		area: 20,
		wallColor: 'white',
	},
};
const desiredHouse = {
	bath: false,
	kitchen: {
		amenities: ['oven', 'stove', 'washer'],
		wallColor: expect.stringMatching(/white|yellow/),
	},
};

describe('Utils', () => {
	it('should add two numbers', () => {
		let res = utils.add(33, 11);
		// expect({a: 1}).toEqual({a: 1});

	});


	it('should square a number', () => {
		let res = 9;

		expect(typeof res).toBe('number');
	});

	it('should expect some values', () => {
		// expect(12).not.toBe(11);

		expect({name: '1'}).not.toEqual({name: '2'});
	});

	it('the house has my desired features', () => {
		expect(houseForSale).not.toMatchObject(desiredHouse);
	});

	it('should async add two number', function (done){
		utils.asyncAdd(3, 4, sum => {
			expect(sum).toBe(7);
			done();
		});

	});
});






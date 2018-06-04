const axios = require('axios');

// const getExchangeRate = async (form, to) => {
// 	return axios.get('http://data.fixer.io/api/latest?access_key=f524b97d90777c20ce216ae879c35126&format=1').then((res) => {
// 		const euro = 1 / res.data.rates[form];
// 		return euro * res.data.rates[to];
// 	});
// };

const getExchangeRate = async (form, to) => {
	try {
		const res = await axios.get('http://data.fixer.io/api/latest?access_key=f524b97d90777c20ce216ae879c35126&format=1');
		const euro = 1 / res.data.rates[form.toUpperCase()];
		const rate = euro * res.data.rates[to.toUpperCase()];

		if (isNaN(rate)) {
			throw new Error();
		}

		return rate;
	} catch (e) {
		throw new Error(`Unable to get exchange rate for ${form} and ${to}`);
	}
};

const getCountries = async currencyCode => {
	try {
		const res = await axios.get('https://restcountries.eu/rest/v2/currency/' + currencyCode);
		return res.data.map(country => country.name);
	} catch (e) {
		throw new Error(`Unable to get countries that use ${currencyCode}`);
	}

};

const convertCurrency = async (from, to, amount) => {
	let rate = await getExchangeRate(from, to);
	let countries = await getCountries(to);
	return `${amount} ${from} is worth ${(rate * amount).toFixed(2)} ${to}. You can spend these in the following countries: ${countries.join(', ')}`;
};

convertCurrency('usd', 'lao', 20).then(message => {
	console.log(message);
}).catch(e => {
	console.log(e.message);
});
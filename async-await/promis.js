const users = [
	{
		id: 1,
		name: 'Andrew',
		schoolID: 101
	},
	{
		id: 2,
		name: 'Jessica',
		schoolID: 999
	}
];

const grades = [
	{
		id: 1,
		schoolID: 101,
		grade: 86
	},
	{
		id: 2,
		schoolID: 999,
		grade: 100
	},
	{
		id: 3,
		schoolID: 101,
		grade: 80
	}
];

const getUser = (id) => {
	return new Promise((resolve, reject) => {
		const user = users.find((user) => user.id === id);

		if (user) resolve(user);
		else reject(`Unable to find user with id of ${id}`);
	});
};

const getGrades = (schoolID) => {
	return new Promise((resolve, reject) => {
		resolve(grades.filter(grade => grade.schoolID === schoolID));
	});
};

const getStatus = userID => {
	let user;
	return getUser(userID).then(user1 => {
		user = user1;
		return getGrades(user.schoolID);
	}).then(grades => {
		let average = 0;

		if (grades.length > 0) {
			average = grades.map(grade => grade.grade).reduce((total, sum) => total + sum) / grades.length;
		}

		return `${user.name} has a ${average} in the class`;
	});
};

const getStatusAlt = async (userID) => {
	const user = await getUser(userID);
	const grades = await getGrades(user.schoolID);
	let average = 0;

	if (grades.length > 0) {
		average = grades.map(grade => grade.grade).reduce((total, sum) => total + sum) / grades.length;
	}

	return `${user.name} has a ${average} in the class`;
};

getStatusAlt(3).then((name) => {
	console.log(name);
}).catch((e) => {
	console.log(e);
});

// getStatus(2).then((status) => {
// 	console.log(status);
// }).catch((e) => {
// 	console.log(e);
// });
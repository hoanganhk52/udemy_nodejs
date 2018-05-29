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

const getStatus = (userID) => {
	return getUser(userID).then((user) => {

	});
};

getGrades(999).then((user) => {
	console.log(user);
}).catch((e) => {
	console.log(e);
});


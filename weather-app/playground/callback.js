let getUser = (id, callback) => {
    let user = {
        id: id,
        name: 'Hoang Anh'
    };
    callback(user);
};

getUser(31, (userObj) => {
    console.log(userObj);
});
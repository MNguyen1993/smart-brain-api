const handleProfileGet = (req, res, db) => {
	const { id } = req.params;
	db.select('*')
		.from('users')
		.where({ id })
		.then(user => {
			if (user.length) {
				res.json(user[0]);
			} else {
				res.status(400).json('Not found');
			}
		})
		.catch(err => res.status(400).json('error getting user'));
};

const handleProfileUpdate = (req, res, db) => {
	const { id } = req.params;
	const { name, age, email } = req.body.formInput;
	db('users')
		.where({ id: id })
		.update({ name: name, email: email })
		.then(response => {
			if (response) {
				res.json('success');
				return db('login')
					.where({ id: id })
					.update({ email: email });
			} else {
				res.status(400).json('Unable to update');
			}
		})
		.catch(err => res.status(500).json('Error updating user'));
};

module.exports = {
	handleProfileGet,
	handleProfileUpdate,
};

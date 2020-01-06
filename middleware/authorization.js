const { redisClient } = require('../controllers/signin');

const requireAuth = (req, res, next) => {
	const { authorization } = req.headers;
	if (!authorization) {
		return res.status(401).json('Unauthorized');
	}
	console.log(authorization);
	return redisClient.get(authorization, (err, reply) => {
		if (err || !reply) {
			res.status(401).json('Unauthorized');
		}
		console.log('you shall pass');
		return next();
	});
};

module.exports = {
	requireAuth,
};

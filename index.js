const email = require('./validators/email');

exports.create = function(options) {
	if(options.type === 'email') {
		return email(options);
	}
};
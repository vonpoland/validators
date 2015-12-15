function validateEmail(email) {
	var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	return re.test(email);
}

module.exports = function (options) {
	options = options || {};

	if(options.async) {
		return function (value) {
			return new Promise(function (resolve, reject) {
				if (validateEmail(value)) {
					resolve();
					return;
				}

				reject();
			});
		};
	}

	return validateEmail;
};
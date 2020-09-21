const encodeAuthKey = require('./encodeAuthKey');
const { EXAMPLE_USER_API_KEY } = require('../config');

const token = encodeAuthKey(EXAMPLE_USER_API_KEY);

module.exports = () => token;

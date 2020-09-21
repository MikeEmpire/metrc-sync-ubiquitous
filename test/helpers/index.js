const licenseNumber1 = 'A12-0000015-LIC';
const licenseNumber2 = 'CAL17-0000005';
const licenseNumber3 = 'A11-0000002-LIC';
const licenseNumber4 = 'CML17-0000001';
const licenseNumber5 = 'CDPH-0000003';
const licenseNumber6 = '008-0000010-LIC';

const url = 'https://sandbox-api-ca.metrc.com';
const getToken = require('./getToken');
const encodeAuthKey = require('./encodeAuthKey');

module.exports = {
  encodeAuthKey,
  getToken,
  licenseNumber1,
  licenseNumber2,
  licenseNumber3,
  licenseNumber4,
  licenseNumber5,
  licenseNumber6,
  url,
};

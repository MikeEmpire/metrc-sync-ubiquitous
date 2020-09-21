const { expect } = require('chai');
const rp = require('request-promise');

const { getToken } = require('./helpers');

const { licenseNumber4, url } = require('./helpers/index');

describe('User is able to interact with the lab tests methods in METRC', function() {
  let token;
  before(() => {
    token = getToken();
  });
  
  describe('User is able to retrieve all states of a lab tests (static array)', function() {
    it('Retrieves all states of lab tests', function() {
      const options = {
        uri: `${url}/labtests/v1/states`,
        headers: {
          authorization: token,
        },
        qs: {
          licenseNumber: licenseNumber4,
        },
        json: true,
      };
      return rp(options).then(function(data) {
        expect(data).to.be.a('Array');
      });
    });
  });
  
  describe('User is able to get all types of lab tests (static)', function() {
    it('Retrieves all types of lab tests', function() {
      const options = {
        uri: `${url}/labtests/v1/types`,
        headers: {
          authorization: token,
        },
        qs: {
          licenseNumber: licenseNumber4,
        },
        json: true,
      };
      return rp(options).then(function(data) {
        expect(data).to.be.a('Array');
      });
    });
  });

  // describe('User is able to record an update to a lab test', function() {
  //   it('Lab tests data is recorded');
  // });
});

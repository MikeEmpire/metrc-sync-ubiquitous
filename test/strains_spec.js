const { expect } = require('chai');
const rp = require('request-promise');

const { getToken } = require('./helpers');

const { licenseNumber4, url } = require('./helpers/index');
const id = '28802';
describe('User is able to interact with the strain methods available in METRC', function() {
  let token;
  before(() => {
    token = getToken();
  });
  describe('User is able to get active strains', function() {
    it('Retrieves all of the active strains', function() {
      const options = {
        uri: `${url}/strains/v1/active`,
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
  describe('User is able to get a strain by id', function() {
    it('Retrieves specific strain', function() {
      const options = {
        uri: `${url}/strains/v1/${id}`,
        headers: {
          authorization: token,
        },
        qs: {
          licenseNumber: licenseNumber4,
        },
        json: true,
      };
      return rp(options).then(function(data) {
        expect(data).to.be.a('Object');
      });
    });
  });
  // describe('User is able to create a strain', function() {
  //   it('Strain is created');
  // });
  // describe('User is able to update a strain', function() {
  //   it('Strain is updated');
  // });
  // describe('User is able to delete a strain', function() {
  //   it('Strain is deleted');
  // });
});

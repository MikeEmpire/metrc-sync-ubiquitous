const { expect } = require('chai');
const rp = require('request-promise');

const { getToken } = require('./helpers');

const { licenseNumber4, url } = require('./helpers/index');

const id = '21302'; // subject to change because api methods are retarded

describe('User is able to interact with the item methods available in METRC', function() {
  let token;
  before(() => {
    token = getToken();
  });
  describe('User is able to retrieve an item by Id', function() {
    it('Retrieves Item', function() {
      const options = {
        uri: `${url}/items/v1/${id}`,
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
  describe('User is able to retrieve active items', function() {
    it('retrieves all active items', function() {
      const options = {
        uri: `${url}/items/v1/active`,
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
  describe('User is able to retrieve all categories from items', function() {
    it('Retrieves item categories', function() {
      const options = {
        uri: `${url}/items/v1/categories`,
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
  // describe('User is able to create an item', function() {
  //   it('Creates an item');
  // });
  // describe('User is able to update an item', function() {
  //   it('Item is updated');
  // });
  // describe('User is able to delete an item by Id', function() {
  //   it('Item is deleted');
  // });
});

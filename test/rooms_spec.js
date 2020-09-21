const { expect } = require('chai');
const rp = require('request-promise');

const { getToken } = require('./helpers');

const { licenseNumber4, url } = require('./helpers/index');

const id = '26015';

describe('User is able to interact with the room methods available in METRC', function() {
  let token;
  before(() => {
    token = getToken();
  });
  describe('User is able to retrieve all rooms by id', function() {
    it('Retrieves room', function() {
      const options = {
        uri: `${url}/rooms/v1/${id}`,
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
  describe('User is able to retrieve all active rooms', function() {
    it('Retrieves all active rooms', function() {
      const options = {
        uri: `${url}/rooms/v1/active`,
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
  // describe('User is able to create a room in a facility', function() {
  //   it('Room is created');
  // });
  // describe('User is able to update a room', function() {
  //   it('Room is updated');
  // });
  // describe('User is able to delete a room', function() {
  //   it('Room is deleted');
  // });
});

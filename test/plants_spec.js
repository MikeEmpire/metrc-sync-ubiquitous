const { expect } = require('chai');
const rp = require('request-promise');

const { getToken } = require('./helpers');

const { licenseNumber4, url } = require('./helpers/index');
const id = '281290'; // used with license number 4
const label = '1A4FF0000000022000003340'; // used with license number 4
describe('User is able to interact with the plant methods', function() {
  let token;
  before(() => {
    token = getToken();
  });
  describe('User is able to retrieve plant by Id', function() {
    it('Plants are retrieved', function() {
      const options = {
        uri: `${url}/plants/v1/${id}`,
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
  describe('User is able to retrieve plants by label', function() {
    it('Plants are retrieved', function() {
      const options = {
        uri: `${url}/plants/v1/${label}`,
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
  describe('User is able to retrieve growth phases', function() {
    it('Plants are retrieved', function() {
      const options = {
        uri: `${url}/plants/v1/growthphases`,
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
  describe('User is able to get all plants in vegetative phase', function() {
    it('Plants are retrieved', function() {
      const options = {
        uri: `${url}/plants/v1/vegetative`,
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
  describe('User is able to retrieve plants in flowering phase', function() {
    it('Plants are retrieved', function() {
      const options = {
        uri: `${url}/plants/v1/flowering`,
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
  describe('User is able to retrieve all plants that are on hold', function() {
    it('Plants are retrieved', function() {
      const options = {
        uri: `${url}/plants/v1/onhold`,
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
  describe('User is able to retrieve all plants that are inactive', function() {
    it('Plants are retrieved', function() {
      const options = {
        uri: `${url}/plants/v1/inactive`,
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
  describe('User is able to get all waste methods', function() {
    it('Waste Methods are retrieved', function() {
      const options = {
        uri: `${url}/plants/v1/waste/methods`,
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
  describe('User is able to get all waste reasons', function() {
    it('Reasons are retrieved', function() {
      const options = {
        uri: `${url}/plants/v1/waste/reasons`,
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
  // describe('User is able to move plants', function() {
  //   it('Plants are moved');
  // });
  // describe('User is able to change growth phase of the plants', function() {
  //   it('Phase is changed for plant');
  // });
  // describe('User is able to destroy plants', function() {
  //   it('Plants are destroyed');
  // });
  // describe('User is able to create a planting', function() {
  //   it('Planting is created from palnt');
  // });
  // describe('User is able to manicure plants', function() {
  //   it('Plant is manicured');
  // });
  // describe('User is able to harvest plants', function() {
  //   it('Plant is harvested');
  // });
});

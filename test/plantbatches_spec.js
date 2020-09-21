const { expect } = require('chai');
const rp = require('request-promise');

const { getToken } = require('./helpers');

const { licenseNumber4, url } = require('./helpers/index');

const id = '30702'; // license number 4

describe('User is able to interact with the plant batch methods available in METRC', function() {
  let token;
  before(() => {
    token = getToken();
  });
  describe('User is able to retrieve a plant batch by id', function() {
    it('Retrieves plant batch', function() {
      const options = {
        uri: `${url}/plantbatches/v1/${id}`,
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

  describe('User is able to retrieve all active plant batches', function() {
    it('Retrieves active plant batches', function() {
      const options = {
        uri: `${url}/plantbatches/v1/active`,
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

  describe('User is able to retrieve all inactive plant batches', function() {
    it('Retrieves inactive plant batches', function() {
      const options = {
        uri: `${url}/plantbatches/v1/inactive`,
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

  describe('User is able to retrieve all types of plant batches', function() {
    it('Retrieves all types of plant batches', function() {
      const options = {
        uri: `${url}/plantbatches/v1/types`,
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

  // describe('User is able to create a planting', function() {
  //   it('Planting is created');
  // });
  // describe('User is able to create a package on a plant batch', function() {
  //   it('Package is created');
  // });
  // describe('User is able to change the growth phase of a plant batch', function() {
  //   it('Growth phase is changed');
  // });
  // describe('User is able to destroy a plant batch', function() {
  //   it('Plant batch is destroyed');
  // });
});

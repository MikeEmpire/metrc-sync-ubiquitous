const { expect } = require('chai');
const rp = require('request-promise');

const { getToken } = require('./helpers');

const { licenseNumber4, url } = require('./helpers/index');

const label = '1A4FF0100000022000003100'; // use with licensenumber 4
const id = '30901'; // use with licensenumber 4

describe('User is able to interact with the package methods available in METRC', function() {
  let token;
  before(() => {
    token = getToken();
  });

  describe('User is able to get a package by id', function() {
    it('Retrieves Package by Id', function() {
      const options = {
        uri: `${url}/packages/v1/${id}`,
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
  describe('User is able to retrieve a package by label', function() {
    it('Retrieves Package by label', function() {
      const options = {
        uri: `${url}/packages/v1/${label}`,
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
  describe('User is able to retrieve all active packages', function() {
    it('Retrieves all active packages', function() {
      const options = {
        uri: `${url}/packages/v1/active`,
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
  describe('User is able to retrieve all onhold packages', function() {
    it('Retrieves all on hold packages', function() {
      const options = {
        uri: `${url}/packages/v1/onhold`,
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
  describe('User is able to retrieve all inactive packages', function() {
    it('Retrieves all inactive packages', function() {
      const options = {
        uri: `${url}/packages/v1/inactive`,
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
  describe('User is able to retrieve all types of packages', function() {
    it('Retrieves all types of packages', function() {
      const options = {
        uri: `${url}/packages/v1/types`,
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
  describe('User is able to retrieve all reasons to adjust a package', function() {
    it('Retrieves all reasons', function() {
      const options = {
        uri: `${url}/packages/v1/adjust/reasons`,
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

  // describe('User is able to create a package', function() {
  //   it('Package is created');
  // });
  // describe('User is able to create a testing package', function() {
  //   it('Package is created');
  // });
  // describe('User is able to create a planting package', function() {
  //   it('Package is created');
  // });
  // describe('User is able to change information on a package (update using post method)', function() {
  //   it('Package information is adjusted');
  // });
  // describe('User is able to adjust a package', function() {
  //   it('Package is adjusted');
  // });
  // describe('User is able to finish a package', function() {
  //   it('Package is finished');
  // });
  // describe('User is able to unfinish a package', function() {
  //   it('Package is unfinished');
  // });
  // describe('User is able to remediate a package', function() {
  //   it('Package is remediated');
  // });
});

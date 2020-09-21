const { expect } = require('chai');
const rp = require('request-promise');

const { getToken } = require('./helpers');
const {
  goodActiveHarvestResponse,
  goodHarvestByIdResponse,
} = require('./helpers/harvests');

const { licenseNumber4, url } = require('./helpers/index');

describe('User is able to interact with the harvests in METRC', function() {
  let token;
  before(() => {
    token = getToken();
  });

  describe('User is able to retrieve all active harvests with correct data', function() {
    it('gets harvests', function() {

      const options = {
        uri: `${url}/harvests/v1/active`,
        headers: {
          authorization: token,
        },
        qs: {
          licenseNumber: licenseNumber4
        },
        json: true
      }
      return rp(options).then(function(data) {
        expect(data).to.be.a('Array')
      })
    });
  });
  
  describe('User is able to get all onhold harvests by license number', function() {
    it('gets onhold harvests', function () {
      const options = {
        uri: `${url}/harvests/v1/onhold`,
        headers: {
          authorization: token,
        },
        qs: {
          licenseNumber: licenseNumber4
        },
        json: true
      }
      return rp(options).then(function(data) {
        expect(data).to.be.a('Array')
        // check for strict equality
      })
    });
  });
  describe('User is able to get all inactive harvests', function() {
    it('gets inactive harvests', function() {
      const options = {
        uri: `${url}/harvests/v1/inactive`,
        headers: {
          authorization: token,
        },
        qs: {
          licenseNumber: licenseNumber4
        },
        json: true
      }
      return rp(options).then(function(data) {
        expect(data).to.be.a('Array')
        // check for strict equality
      })
    });
  });
  // describe('User is able to create a package from a harvest', function() {
  //   it('creates a package', function() {
  //     // const options = {
  //     //   method: 'POST',
  //     //   uri: `${url}/harvests/v1/create/packages`,
  //     //   headers: {
  //     //     authorization: token,
  //     //   },
  //     //   qs: {
  //     //     licenseNumber: licenseNumber4
  //     //   },
  //     //   json: true
  //     // }
  //     // return rp(options).then(function(data) {
  //     //   expect(data).to.be('')
  //     //   // check for strict equality
  //     // })
  //   });
  // });
  // describe('User is able to remove waste', function() {
  //   it('removes wastes');
  // });
  // describe('User is able to finish a harvest', function() {
  //   it('Harvest is finished and date is recorded');
  // });
  // describe('User is able to unfinish a harvest', function() {
  //   it('Harvest is now unfinished and date is recorded');
  // });
});

var assert = require('assert');
const { expect } = require('chai');
const rp = require('request-promise');

const { getToken } = require('./helpers');

const { licenseNumber1, url } = require('./helpers/index');

const receiptId = '4463';

describe('User is able to interact with the sales methods available in METRC', function() {
  let token;
  before(() => {
    token = getToken();
  });
  describe('User is able to get all customer types', function() {
    it('All customer types are retrieved', function() {
      const options = {
        uri: `${url}/sales/v1/customertypes`,
        headers: {
          authorization: token,
        },
        qs: {
          licenseNumber: licenseNumber1,
        },
        json: true,
      };
      return rp(options).then(function(data) {
        expect(data).to.be.a('Array');
      });
    });
  });
  // describe('User is able to get all receipts associated with a specific facility', function() {
  //   it('Retrieves all receipts', function() {
  //     const options = {
  //       uri: `${url}/sales/v1/receipts`,
  //       headers: {
  //         authorization: token,
  //       },
  //       qs: {
  //         licenseNumber: licenseNumber1,
  //       },
  //       json: true,
  //     };
  //     return rp(options).then(function(data) {
  //       expect(data).to.be.a('Array');
  //     });
  //   });
  // });
  describe('User is able to retrieve a receipt by id', function() {
    it('Receipt is retrieved', function() {
      const options = {
        uri: `${url}/sales/v1/receipts/${receiptId}`,
        headers: {
          authorization: token,
        },
        qs: {
          licenseNumber: licenseNumber1,
        },
        json: true,
      };
      return rp(options).then(function(data) {
        expect(data).to.be.a('Object');
      });
    });
  });
  // describe('Able to create a receipt', function() {
  //   it('Receipt is created and posted', function() {
  //     const options = {
  //       uri: `${url}/sales/v1/${id}`,
  //       headers: {
  //         authorization: token,
  //       },
  //       qs: {
  //         licenseNumber: licenseNumber1,
  //       },
  //       json: true,
  //     };
  //     return rp(options).then(function(data) {
  //       expect(data).to.be.a('Object');
  //     });
  //   });
  // });
  // describe('User is able to update a receipt', function() {
  //   it('Receipt is updated');
  // });
  // describe('User is able to delete a receipt', function() {
  //   it('Receipt is deleted');
  // });
  // describe('User is able to get all transactions', function() {
  //   it('Transactions are retrieved', function() {
  //     const options = {
  //       uri: `${url}/sales/v1/transactions`,
  //       headers: {
  //         authorization: token,
  //       },
  //       qs: {
  //         licenseNumber: licenseNumber1,
  //       },
  //       json: true,
  //     };
  //     return rp(options).then(function(data) {
  //       expect(data).to.be.a('Array');
  //     });
  //   });
  // });
  // describe('User is able to retrieve all transactions from a certain date', function() {
  //   it('Specific transactions are received', function() {
  //     const options = {
  //       uri: `${url}/sales/v1/transactions`,
  //       headers: {
  //         authorization: token,
  //       },
  //       qs: {
  //         licenseNumber: licenseNumber1,
  //       },
  //       json: true,
  //     };
  //     return rp(options).then(function(data) {
  //       expect(data).to.be.a('Array');
  //     });
  //   });
  // });
  // describe('User is able to create a transaction', function() {
  //   it('Transaction is created', function() {
  //     const options = {
  //       uri: `${url}/sales/v1/${id}`,
  //       headers: {
  //         authorization: token,
  //       },
  //       qs: {
  //         licenseNumber: licenseNumber1,
  //       },
  //       json: true,
  //     };
  //     return rp(options).then(function(data) {
  //       expect(data).to.be.a('Object');
  //     });
  //   });
  // });
  // describe('User is able to update a transaction', function() {
  //   it('Transaction is updated', function() {
  //     const options = {
  //       uri: `${url}/sales/v1/${id}`,
  //       headers: {
  //         authorization: token,
  //       },
  //       qs: {
  //         licenseNumber: licenseNumber1,
  //       },
  //       json: true,
  //     };
  //     return rp(options).then(function(data) {
  //       expect(data).to.be.a('Object');
  //     });
  //   });
  // });
});

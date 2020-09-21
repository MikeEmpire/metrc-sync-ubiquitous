// const { expect } = require('chai');
// const rp = require('request-promise');

// const { getToken } = require('./helpers');

// const { licenseNumber4, url } = require('./helpers/index');
// const rejectedId = '702';

// describe('User is able to interact with transfer methods available in METRC', function() {
//   describe('User is able to get all incoming transfers', function() {
//     it('Retrieves all incoming transfers', function() {
//       const options = {
//         uri: `${url}/transfers/v1/incoming`,
//         headers: {
//           authorization: token,
//         },
//         qs: {
//           licenseNumber: licenseNumber4,
//         },
//         json: true,
//       };
//       return rp(options).then(function(data) {
//         expect(data).to.be.a('Array');
//       });
//     });
//   });
//   describe('User is able to get all outgoing transfers', function() {
//     it('Retrieves all outoging transfers', function() {
//       const options = {
//         uri: `${url}/transfers/v1/outgoing`,
//         headers: {
//           authorization: token,
//         },
//         qs: {
//           licenseNumber: licenseNumber4,
//         },
//         json: true,
//       };
//       return rp(options).then(function(data) {
//         expect(data).to.be.a('Array');
//       });
//     });
//   });
//   describe('User is able to get all rejected transfers', function() {
//     it('Retrieves all rejected transfers', function() {
//       const options = {
//         uri: `${url}/transfers/v1/rejected`,
//         headers: {
//           authorization: token,
//         },
//         qs: {
//           licenseNumber: licenseNumber4,
//         },
//         json: true,
//       };
//       return rp(options).then(function(data) {
//         expect(data).to.be.a('Array');
//       });
//     });
//   });
//   describe('User is able to get a transfered delivery by Id', function() {
//     it('Transfered delivery by id is retrieved', function() {
//       const options = {
//         uri: `${url}/transfers/v1/active`,
//         headers: {
//           authorization: token,
//         },
//         qs: {
//           licenseNumber: licenseNumber4,
//         },
//         json: true,
//       };
//       return rp(options).then(function(data) {
//         expect(data).to.be.a('Array');
//       });
//     });
//   });
//   describe('User is able to get transfered delivered package by Id', function() {
//     it('Package is retrieved by id', function() {
//       const options = {
//         uri: `${url}/transfers/v1/active`,
//         headers: {
//           authorization: token,
//         },
//         qs: {
//           licenseNumber: licenseNumber4,
//         },
//         json: true,
//       };
//       return rp(options).then(function(data) {
//         expect(data).to.be.a('Array');
//       });
//     });
//   });
//   describe('User is able to get all transfered delivery package states', function() {
//     it('Retrieves all transferred delivery package states', function() {
//       const options = {
//         uri: `${url}/transfers/v1/active`,
//         headers: {
//           authorization: token,
//         },
//         qs: {
//           licenseNumber: licenseNumber4,
//         },
//         json: true,
//       };
//       return rp(options).then(function(data) {
//         expect(data).to.be.a('Array');
//       });
//     });
//   });
//   describe('User is able to create an external incoming transfer', function() {
//     it('External transfer is created');
//   });
//   describe('User is able to update an external incoming transfer', function() {
//     it('External Transfer is updated');
//   });
//   describe('User is able to get transfer template', function() {
//     it('Transfer templates are retrieved', function() {
//       const options = {
//         uri: `${url}/transfers/v1/active`,
//         headers: {
//           authorization: token,
//         },
//         qs: {
//           licenseNumber: licenseNumber4,
//         },
//         json: true,
//       };
//       return rp(options).then(function(data) {
//         expect(data).to.be.a('Array');
//       });
//     });
//   });
//   describe('User is able to create a transfer template', function() {
//     it('Transfer template is created');
//   });
//   describe('User is able to update a transfer template', function() {
//     it('Transfer template is updated');
//   });
//   describe('User is able to delete a transfer template', function() {
//     it('Transfer template is deleted');
//   });
// });

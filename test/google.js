'use strict';

var mock = require('mock-require');
var chai = require('chai');
var expect = chai.expect;

const googleMapsResults = require( './mock/google' );

mock('@google/maps', {
  createClient: function() {
    return {
      geocode: ( { address }, cb ) => cb( undefined, googleMapsResults[ address ] ),
    }
  },
});

const Google = require('../lib/google');
const google = new Google( {silent: true, key: 123} );
const googleNoOpt = new Google( );
const googleVerbose = new Google( {silent: false} );

describe('Google', function () {
  for( let name of Object.keys( googleMapsResults ) ) {
    it(`Test example for ${name}`, function (done) {
      google.geocode( name )
        .then( result => {
          const googleData = googleMapsResults[name].json.results[0];
          expect(result).to.have.property('lng').eql(googleData.geometry.location.lng);
          expect(result).to.have.property('lat').eql(googleData.geometry.location.lat);
          expect(result).to.have.property('formatted_address').eql(googleData.formatted_address);
          done();
        })
        .catch( error => {
          expect(error).to.eql('no data');
          done();
        })
    });
  }

  it(`Test example for verbose`, function (done) {
    const name = Object.keys( googleMapsResults )[ 0 ];
    googleVerbose.geocode( name )
      .then( result => {
        const googleData = googleMapsResults[name].json.results[0];
        expect(result).to.have.property('lng').eql(googleData.geometry.location.lng);
        expect(result).to.have.property('lat').eql(googleData.geometry.location.lat);
        expect(result).to.have.property('formatted_address').eql(googleData.formatted_address);
        done();
      })
  });

  it(`Test example for error`, function (done) {
    const name = Object.keys( googleMapsResults )[ 0 ];
    googleVerbose.geocode( name )
      .then( result => {
        const googleData = googleMapsResults[name].json.results[0];
        expect(result).to.have.property('lng').eql(googleData.geometry.location.lng);
        expect(result).to.have.property('lat').eql(googleData.geometry.location.lat);
        expect(result).to.have.property('formatted_address').eql(googleData.formatted_address);
        done();
      })
      .catch( error => {
        expect(error).to.eql('no data');
        done();
      })
  });

});

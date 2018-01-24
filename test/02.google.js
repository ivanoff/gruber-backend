'use strict';

var mock = require('mock-require');
var chai = require('chai');
var expect = chai.expect;

const { googleMapsResults, places } = require('./mock/google');

mock('@google/maps', {
  createClient: () => {
    return {
      geocode: ({ address }, cb) => cb(undefined, googleMapsResults[address]),
      placesAutoComplete: ({ input }, cb) => { cb(undefined, places[input]); },
    };
  },
});

const Google = require('../lib/google');
const google = new Google({ silent: true, key: 123 });
const googleNoOpt = new Google();
const googleVerbose = new Google({ silent: false });

describe('Google', function () {

  describe('geocode', function () {
    for (let name of Object.keys(googleMapsResults)) {
      it(`Test example for ${name}`, function (done) {
        google.geocode(name)
          .then(result => {
            const googleData = googleMapsResults[name].json.results[0];
            expect(result).to.have.property('lng').eql(googleData.geometry.location.lng);
            expect(result).to.have.property('lat').eql(googleData.geometry.location.lat);
            expect(result).to.have.property('formattedAddress').eql(googleData.formatted_address);
            done();
          })
          .catch(error => {
            expect(error).to.eql('no data');
            done();
          });
      });
    }

    it(`Test example for verbose`, function (done) {
      const name = Object.keys(googleMapsResults)[0];
      googleVerbose.geocode(name)
        .then(result => {
          const googleData = googleMapsResults[name].json.results[0];
          expect(result).to.have.property('lng').eql(googleData.geometry.location.lng);
          expect(result).to.have.property('lat').eql(googleData.geometry.location.lat);
          expect(result).to.have.property('formattedAddress').eql(googleData.formatted_address);
          done();
        });
    });

    it(`Test example for error`, function (done) {
      const name = Object.keys(googleMapsResults)[0];
      googleVerbose.geocode(name)
        .then(result => {
          const googleData = googleMapsResults[name].json.results[0];
          expect(result).to.have.property('lng').eql(googleData.geometry.location.lng);
          expect(result).to.have.property('lat').eql(googleData.geometry.location.lat);
          expect(result).to.have.property('formattedAddress').eql(googleData.formatted_address);
          done();
        })
        .catch(error => {
          expect(error).to.eql('no data');
          done();
        });
    });
  });

  describe('placesAutoComplete', function () {
      it('São Paulo - State of', function (done) {
        google.searchAddress('São Paulo - State of')
          .then(result => {
            expect(result).deep.eql([
              'Rua São Vicente de Paulo - Santa Cecilia, São Paulo - State of São Paulo, Brazil',
              'Sao Paulo, Valle Dorado, Tlalnepantla de Baz, State of Mexico, Mexico',
              'Rua Vicente Paula - Alvorada, Ibirité - State of Minas Gerais, Brazil',
              'Rua São Vicente de Paulo - Vila Argos Velha, Jundiaí - State of São Paulo, Brazil',
              'Travessa São Vicente de Paulo - Centro, São Bernardo do Campo - State of São Paulo, Brazil',
            ]);
            done();
          })
          .catch(done);
      });

      it('Marseille, 99 Rue Abbé', function (done) {
        google.searchAddress('Marseille, 99 Rue Abbé')
          .then(result => {
            expect(result).deep.eql([
              '99 Rue Abbé de l\'Épée, Marseille, France',
              '99 Rue Abbé Faria, Marseille, France',
              '99 Rue Abbé Féraud, Marseille, France',
              '99 Rue Abbé Dassy, Marseille, France',
              '99 Rue de l\'Abbé Féraud, Marseille, France',
            ]);
            done();
          })
          .catch(done);
      });
    });

});

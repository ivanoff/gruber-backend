'use strict';

var mock = require('mock-require');
var chai = require('chai');
var expect = chai.expect;

const uberResults = require('./mock/uber');

mock('uber-api', ({ server_token, version }) => {
  return {
    getPriceEstimate: ({ sLat, sLng, eLat, eLng }, cb) => {
      for (let results of uberResults) {
        const r = results.request;
        if (r.sLat == sLat && r.sLng == sLng && r.eLat == eLat && r.eLng == eLng)
          return cb(results.error, results.response);
      }

      cb('not found');
    },
  };
});

const Uber = require('../lib/uber');
const uber = new Uber();

describe('Uber', function () {
    it(`Test example for Germany`, function (done) {
      let from = 'Schwanthalerhöhe Munich, Germany';
      let to = 'Otto-Engl-Platz 81241 München, Germany';
      let res = { json: (result) => {
          expect(result).to.have.property('from').eql('Schwanthalerhöhe, Munich, Germany');
          expect(result).to.have.property('to').eql('Otto-Engl-Platz, 81241 München, Germany');
          expect(result).to.have.property('prices');
          expect(Array.isArray(result.prices)).to.eql(true);
          expect(result.prices.length).to.eql(3);
          expect(result.prices[0]).to.have.property('localized_display_name');
          done();
        }, };

      uber.estimate({ body: { from, to } }, res, done);
    });

    it(`Test example for search Marseille, 99 Rue Abbé`, function (done) {
      let res = { json: (result) => {
          expect(result).deep.eql([
            '99 Rue Abbé de l\'Épée, Marseille, France',
            '99 Rue Abbé Faria, Marseille, France',
            '99 Rue Abbé Féraud, Marseille, France',
            '99 Rue Abbé Dassy, Marseille, France',
            '99 Rue de l\'Abbé Féraud, Marseille, France',
          ]);
          done();
        }, };

      uber.searchAddress({ body: { text: 'Marseille, 99 Rue Abbé' } }, res, done);
    });

    it(`Test example for Long Distance`, function (done) {
      let from = 'Schwanthalerhöhe Munich, Germany';
      let to = "Marseille, France, 99 Rue Abbé de l'Épée";
      let res = {};
      uber.estimate({ body: { from, to } }, res, (err) => {
        expect(err).to.eql('Distance between two points exceeds 100 miles');
        done();
      });
    });
  });

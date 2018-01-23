'use strict';

const conf = require('../config');
const UberAPI = require('uber-api');
const Google = require('./google');
const google = new Google();

class Uber {

  constructor() {
    const server_token = process.env.UBER_SERVER_TOKEN || conf.uberServerToken;
    if (!server_token) console.error('UBER_SERVER_TOKEN is empty');
    this.uber = UberAPI({
      server_token,
      version: 'v1',
    });
  }

  searchAddress(req, res, next) {
    google.searchAddress( req.body.text )
      .then( data => res.json( data ) )
      .catch( next );
  }

  estimate(req, res, next) {
    const { from, to } = req.body;
    console.log(`[Uber] try to find path from: ${from}, to: ${to}`);
    if (!from) return next({ error: 'Start address exists' });
    if (!to) return next({ error: 'Destination address exists' });
    Promise.all([
      google.geocode(from),
      google.geocode(to),
    ]).then(stopPoints => {
      if (!stopPoints) return next({ error: 'No adresses found on the map' });
      if (!stopPoints[0]) return next({ error: 'Start address is not found on the map' });
      if (!stopPoints[1]) return next({ error: 'Destination address is not found on the map' });

      const [sLat, sLng, eLat, eLng] = [
        stopPoints[0].lat,
        stopPoints[0].lng,
        stopPoints[1].lat,
        stopPoints[1].lng,
      ];
      this.uber.getPriceEstimate({ sLat, sLng, eLat, eLng }, (err, data) => {
        if (err) {
          console.error(`[Uber] ${err.message}`);
          return next(err.message);
        }

        console.log(`[Uber] result count: ${data.prices.length}`);
        for (let price of data.prices) {
          price.localized_display_name = conf.prefix + price.localized_display_name;
          ['high_estimate', 'minimum', 'low_estimate'].map(key => {
            price[key] += conf.additional;
            if (price[key] < 0) price[key] = 0;
          });
        }

        res.json({
          from: stopPoints[0].formatted_address,
          to: stopPoints[1].formatted_address,
          prices: data.prices,
        });
      });
    })
    .catch(next);
  }

}

module.exports = exports = Uber;

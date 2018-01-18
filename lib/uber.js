'use strict';

const conf = require('../config');
const UberAPI = require('uber-api');
const Google = require('./google');
const google = new Google();

class Uber {

  constructor() {
    this.uber = UberAPI({
      server_token: process.env.UBER_SERVER_TOKEN || conf.uberServerToken,
      version: 'v1',
    });
  }

  estimate(req, res, next) {
    const { from, to } = req.body;
    console.log( `[Uber] try to find path from: ${from}, to: ${to}` );
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
        console.log( `[Uber] result count: ${ data.prices.length }` );
        for( let price of data.prices ){
          price.localized_display_name = conf.prefix + price.localized_display_name;
          [ 'high_estimate', 'minimum', 'low_estimate' ].map( key => {
            price[ key ] += conf.additional;
            if( price[ key ] < 0 ) price[ key ] = 0;
          } );
        }
        res.json( {
          from: stopPoints[0].formatted_address,
          to: stopPoints[1].formatted_address,
          prices: data.prices,
        } );
      });
    })
    .catch(next);
  }

}

module.exports = exports = Uber;

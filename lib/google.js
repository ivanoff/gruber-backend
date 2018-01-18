'use strict';

const conf = require('../config');
const GoogleMapsClient = require('@google/maps');

class Google {

  constructor() {
    this.googleMapsClient = GoogleMapsClient.createClient({
      key: process.env.GOOGLE_KEY || conf.googleKey,
    });
  }

  geocode(address) {
    console.log( `[Google] try to find ${address}` );
    return new Promise((resolve, reject) =>
      this.googleMapsClient.geocode({ address }, (err, response) => {
        if (err) reject(err);
        if (!response || !response.json || !response.json.results[0] ) return reject('no data');
        const { formatted_address, geometry } = response.json.results[0];
        console.log( `[Google] found ${formatted_address} ${geometry.location}` );
        resolve(Object.assign({}, geometry.location, { formatted_address }));
      })
    );
  }

}

module.exports = exports = Google;

'use strict';

const conf = require('../config');
const GoogleMapsClient = require('@google/maps');

class Google {

  constructor( opt ) {
    if( !opt ) opt = {};
    const key = process.env.GOOGLE_KEY || conf.googleKey || opt.key;
    if( !key ) console.error( 'GOOGLE_KEY is empty' );
    this.googleMapsClient = GoogleMapsClient.createClient( { key } );
    this.requestId = 0;
    this.silent = opt.silent;
  }

  log( ...data ) {
    data[ 0 ] = `[${data[0]}]`;
    data.unshift( `[Google]` );
    if( !this.silent ) console.log( ...data );
  }

  geocode(address) {
    const requestId = `${++this.requestId}`;
    this.log( requestId, `try to find ${address}` );
    return new Promise((resolve, reject) =>
      this.googleMapsClient.geocode({ address }, (err, response) => {
        if (err) reject(err);
        if (!response || !response.json || !response.json.results[0] ) return reject('no data');
        const { formatted_address, geometry } = response.json.results[0];
        this.log( requestId, `found ${formatted_address} ${geometry.location}` );
        resolve(Object.assign({}, geometry.location, { formatted_address }));
      })
    );
  }

}

module.exports = exports = Google;

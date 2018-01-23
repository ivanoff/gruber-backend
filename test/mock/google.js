'use strict';

module.exports = exports = {
  test: {
    status: 200,
    headers: {
        'content-type': 'application/json; charset=UTF-8',
        date: 'Mon, 22 Jan 2018 09:43:02 GMT',
        expires: 'Tue, 23 Jan 2018 09:43:02 GMT',
        'cache-control': 'public, max-age=86400',
        'access-control-allow-origin': '*',
        server: 'mafe',
        'x-xss-protection': '1; mode=block',
        'x-frame-options': 'SAMEORIGIN',
        'alt-svc': 'hq=":443"; ma=2592000; quic=51303431; quic=51303339; quic=51303338; quic=51303337; quic=51303335,quic=":443"; ma=2592000; v="41,39,38,37,35"',
        'accept-ranges': 'none',
        vary: 'Accept-Language,Accept-Encoding',
        connection: 'close',
      },
    json: {
        results: [
            {
                address_components: [
                    {
                        long_name: 'Southwest Clay Street',
                        short_name: 'SW Clay St',
                        types: [
                            'route',
                        ],
                      },
                    {
                        long_name: '116',
                        short_name: '116',
                        types: [
                            'street_number',
                        ],
                      },
                    {
                        long_name: 'Southwest Portland',
                        short_name: 'Southwest Portland',
                        types: [
                            'neighborhood',
                            'political',
                        ],
                      },
                    {
                        long_name: 'Portland',
                        short_name: 'Portland',
                        types: [
                            'locality',
                            'political',
                        ],
                      },
                    {
                        long_name: 'Multnomah County',
                        short_name: 'Multnomah County',
                        types: [
                            'administrative_area_level_2',
                            'political',
                        ],
                      },
                    {
                        long_name: 'Oregon',
                        short_name: 'OR',
                        types: [
                            'administrative_area_level_1',
                            'political',
                        ],
                      },
                    {
                        long_name: 'United States',
                        short_name: 'US',
                        types: [
                            'country',
                            'political',
                        ],
                      },
                    {
                        long_name: '97201',
                        short_name: '97201',
                        types: [
                            'postal_code',
                        ],
                      },
                    {
                        long_name: '5807',
                        short_name: '5807',
                        types: [
                            'postal_code_suffix',
                        ],
                      },
                ],
                formatted_address: '116 SW Clay St, Portland, OR 97201, USA',
                geometry: {
                    bounds: {
                        northeast: {
                            lat: 45.5125551,
                            lng: -122.6763478,
                          },
                        southwest: {
                            lat: 45.5118459,
                            lng: -122.6776574,
                          },
                      },
                    location: {
                        lat: 45.512101,
                        lng: -122.6770504,
                      },
                    location_type: 'ROOFTOP',
                    viewport: {
                        northeast: {
                            lat: 45.51354948029149,
                            lng: -122.6756536197085,
                          },
                        southwest: {
                            lat: 45.5108515197085,
                            lng: -122.6783515802915,
                          },
                      },
                  },
                place_id: 'ChIJRU4DjxEKlVQRUjU6_IsKl4E',
                types: [
                    'establishment',
                    'parking',
                    'point_of_interest',
                    'premise',
                ],
              },
        ],
        status: 'OK',
      },
    requestUrl: 'https://maps.googleapis.com/maps/api/geocode/json?address=test&key=AIzaSyDYmT8bnHQl71gUGrkc6sizLL79cr5NIuw',
    query: {
        address: 'test',
        key: 'AIzaSyDYmT8bnHQl71gUGrkc6sizLL79cr5NIuw',
      },
  },
  'New York': {
    status: 200,
    headers: {
        'content-type': 'application/json; charset=UTF-8',
        date: 'Mon, 22 Jan 2018 09:49:32 GMT',
        expires: 'Tue, 23 Jan 2018 09:49:32 GMT',
        'cache-control': 'public, max-age=86400',
        'access-control-allow-origin': '*',
        server: 'mafe',
        'x-xss-protection': '1; mode=block',
        'x-frame-options': 'SAMEORIGIN',
        'alt-svc': 'hq=":443"; ma=2592000; quic=51303431; quic=51303339; quic=51303338; quic=51303337; quic=51303335,quic=":443"; ma=2592000; v="41,39,38,37,35"',
        'accept-ranges': 'none',
        vary: 'Accept-Language,Accept-Encoding',
        connection: 'close',
      },
    json: {
        results: [
            {
                address_components: [
                    {
                        long_name: 'New York',
                        short_name: 'New York',
                        types: [
                            'locality',
                            'political',
                        ],
                      },
                    {
                        long_name: 'New York',
                        short_name: 'NY',
                        types: [
                            'administrative_area_level_1',
                            'political',
                        ],
                      },
                    {
                        long_name: 'United States',
                        short_name: 'US',
                        types: [
                            'country',
                            'political',
                        ],
                      },
                ],
                formatted_address: 'New York, NY, USA',
                geometry: {
                    bounds: {
                        northeast: {
                            lat: 40.9175771,
                            lng: -73.70027209999999,
                          },
                        southwest: {
                            lat: 40.4773991,
                            lng: -74.25908989999999,
                          },
                      },
                    location: {
                        lat: 40.7127753,
                        lng: -74.0059728,
                      },
                    location_type: 'APPROXIMATE',
                    viewport: {
                        northeast: {
                            lat: 40.9175771,
                            lng: -73.70027209999999,
                          },
                        southwest: {
                            lat: 40.4773991,
                            lng: -74.25908989999999,
                          },
                      },
                  },
                place_id: 'ChIJOwg_06VPwokRYv534QaPC8g',
                types: [
                    'locality',
                    'political',
                ],
              },
        ],
        status: 'OK',
      },
    requestUrl: 'https://maps.googleapis.com/maps/api/geocode/json?address=New%20York&key=AIzaSyDYmT8bnHQl71gUGrkc6sizLL79cr5NIuw',
    query: {
        address: 'New York',
        key: 'AIzaSyDYmT8bnHQl71gUGrkc6sizLL79cr5NIuw',
      },
  },
  'Sumarezinho São Paulo - State of São Paulo, 3': {
    status: 200,
    headers: {
        'content-type': 'application/json; charset=UTF-8',
        date: 'Mon, 22 Jan 2018 09:51:11 GMT',
        expires: 'Tue, 23 Jan 2018 09:51:11 GMT',
        'cache-control': 'public, max-age=86400',
        'access-control-allow-origin': '*',
        server: 'mafe',
        'x-xss-protection': '1; mode=block',
        'x-frame-options': 'SAMEORIGIN',
        'alt-svc': 'hq=":443"; ma=2592000; quic=51303431; quic=51303339; quic=51303338; quic=51303337; quic=51303335,quic=":443"; ma=2592000; v="41,39,38,37,35"',
        'accept-ranges': 'none',
        vary: 'Accept-Language,Accept-Encoding',
        connection: 'close',
      },
    json: {
        results: [
            {
                address_components: [
                    {
                        long_name: '1936',
                        short_name: '1936',
                        types: [
                            'street_number',
                        ],
                      },
                    {
                        long_name: 'Rua Heitor Penteado',
                        short_name: 'R. Heitor Penteado',
                        types: [
                            'route',
                        ],
                      },
                    {
                        long_name: 'Sumarezinho',
                        short_name: 'Sumarezinho',
                        types: [
                            'political',
                            'sublocality',
                            'sublocality_level_1',
                        ],
                      },
                    {
                        long_name: 'São Paulo',
                        short_name: 'São Paulo',
                        types: [
                            'administrative_area_level_2',
                            'political',
                        ],
                      },
                    {
                        long_name: 'São Paulo',
                        short_name: 'SP',
                        types: [
                            'administrative_area_level_1',
                            'political',
                        ],
                      },
                    {
                        long_name: 'Brazil',
                        short_name: 'BR',
                        types: [
                            'country',
                            'political',
                        ],
                      },
                    {
                        long_name: '05437-002',
                        short_name: '05437-002',
                        types: [
                            'postal_code',
                        ],
                      },
                ],
                formatted_address: 'R. Heitor Penteado, 1936 - Sumarezinho, São Paulo - SP, 05437-002, Brazil',
                geometry: {
                    location: {
                        lat: -23.54267,
                        lng: -46.695462,
                      },
                    location_type: 'ROOFTOP',
                    viewport: {
                        northeast: {
                            lat: -23.54132101970849,
                            lng: -46.6941130197085,
                          },
                        southwest: {
                            lat: -23.5440189802915,
                            lng: -46.6968109802915,
                          },
                      },
                  },
                place_id: 'ChIJAW3njsRXzpQRFjBPJ_LKUBs',
                types: [
                    'establishment',
                    'food',
                    'point_of_interest',
                    'restaurant',
                ],
              },
        ],
        status: 'OK',
      },
    requestUrl: 'https://maps.googleapis.com/maps/api/geocode/json?address=Sumarezinho%20S%C3%A3o%20Paulo%20-%20State%20of%20S%C3%A3o%20Paulo%2C%203&key=AIzaSyDYmT8bnHQl71gUGrkc6sizLL79cr5NIuw',
    query: {
        address: 'Sumarezinho São Paulo - State of São Paulo, 3',
        key: 'AIzaSyDYmT8bnHQl71gUGrkc6sizLL79cr5NIuw',
      },
  },
  'Schwanthalerhöhe Munich, Germany': {
    status: 200,
    headers: {
        'content-type': 'application/json; charset=UTF-8',
        date: 'Mon, 22 Jan 2018 09:53:11 GMT',
        expires: 'Tue, 23 Jan 2018 09:53:11 GMT',
        'cache-control': 'public, max-age=86400',
        'access-control-allow-origin': '*',
        server: 'mafe',
        'x-xss-protection': '1; mode=block',
        'x-frame-options': 'SAMEORIGIN',
        'alt-svc': 'hq=":443"; ma=2592000; quic=51303431; quic=51303339; quic=51303338; quic=51303337; quic=51303335,quic=":443"; ma=2592000; v="41,39,38,37,35"',
        'accept-ranges': 'none',
        vary: 'Accept-Language,Accept-Encoding',
        connection: 'close',
      },
    json: {
        results: [
            {
                address_components: [
                    {
                        long_name: 'Schwanthalerhöhe',
                        short_name: 'Schwanthalerhöhe',
                        types: [
                            'political',
                            'sublocality',
                            'sublocality_level_1',
                        ],
                      },
                    {
                        long_name: 'Munich',
                        short_name: 'Munich',
                        types: [
                            'locality',
                            'political',
                        ],
                      },
                    {
                        long_name: 'Upper Bavaria',
                        short_name: 'Upper Bavaria',
                        types: [
                            'administrative_area_level_2',
                            'political',
                        ],
                      },
                    {
                        long_name: 'Bavaria',
                        short_name: 'BY',
                        types: [
                            'administrative_area_level_1',
                            'political',
                        ],
                      },
                    {
                        long_name: 'Germany',
                        short_name: 'DE',
                        types: [
                            'country',
                            'political',
                        ],
                      },
                ],
                formatted_address: 'Schwanthalerhöhe, Munich, Germany',
                geometry: {
                    bounds: {
                        northeast: {
                            lat: 48.1424289,
                            lng: 11.5497968,
                          },
                        southwest: {
                            lat: 48.126615,
                            lng: 11.5263049,
                          },
                      },
                    location: {
                        lat: 48.13596159999999,
                        lng: 11.5382059,
                      },
                    location_type: 'APPROXIMATE',
                    viewport: {
                        northeast: {
                            lat: 48.1424289,
                            lng: 11.5497968,
                          },
                        southwest: {
                            lat: 48.126615,
                            lng: 11.5263049,
                          },
                      },
                  },
                place_id: 'ChIJc1gk3qjYnUcRYKU5CaQlHQU',
                types: [
                    'political',
                    'sublocality',
                    'sublocality_level_1',
                ],
              },
        ],
        status: 'OK',
      },
    requestUrl: 'https://maps.googleapis.com/maps/api/geocode/json?address=Schwanthalerh%C3%B6he%20Munich%2C%20Germany&key=AIzaSyDYmT8bnHQl71gUGrkc6sizLL79cr5NIuw',
    query: {
        address: 'Schwanthalerhöhe Munich, Germany',
        key: 'AIzaSyDYmT8bnHQl71gUGrkc6sizLL79cr5NIuw',
      },
  },
  'Otto-Engl-Platz 81241 München, Germany': {
    status: 200,
    headers: {
        'content-type': 'application/json; charset=UTF-8',
        date: 'Tue, 23 Jan 2018 10:58:08 GMT',
        expires: 'Wed, 24 Jan 2018 10:58:08 GMT',
        'cache-control': 'public, max-age=86400',
        'access-control-allow-origin': '*',
        server: 'mafe',
        'x-xss-protection': '1; mode=block',
        'x-frame-options': 'SAMEORIGIN',
        'alt-svc': 'hq=":443"; ma=2592000; quic=51303431; quic=51303339; quic=51303338; quic=51303337; quic=51303335,quic=":443"; ma=2592000; v="41,39,38,37,35"',
        'accept-ranges': 'none',
        vary: 'Accept-Language,Accept-Encoding',
        connection: 'close',
      },
    json: {
        results: [
            {
                address_components: [
                    {
                        long_name: 'Otto-Engl-Platz',
                        short_name: 'Otto-Engl-Platz',
                        types: [
                            'route',
                        ],
                      },
                    {
                        long_name: 'Pasing-Obermenzing',
                        short_name: 'Pasing-Obermenzing',
                        types: [
                            'political',
                            'sublocality',
                            'sublocality_level_1',
                        ],
                      },
                    {
                        long_name: 'München',
                        short_name: 'München',
                        types: [
                            'locality',
                            'political',
                        ],
                      },
                    {
                        long_name: 'Oberbayern',
                        short_name: 'Oberbayern',
                        types: [
                            'administrative_area_level_2',
                            'political',
                        ],
                      },
                    {
                        long_name: 'Bayern',
                        short_name: 'BY',
                        types: [
                            'administrative_area_level_1',
                            'political',
                        ],
                      },
                    {
                        long_name: 'Germany',
                        short_name: 'DE',
                        types: [
                            'country',
                            'political',
                        ],
                      },
                    {
                        long_name: '81241',
                        short_name: '81241',
                        types: [
                            'postal_code',
                        ],
                      },
                ],
                formatted_address: 'Otto-Engl-Platz, 81241 München, Germany',
                geometry: {
                    bounds: {
                        northeast: {
                            lat: 48.142681,
                            lng: 11.46408,
                          },
                        southwest: {
                            lat: 48.1403342,
                            lng: 11.46231,
                          },
                      },
                    location: {
                        lat: 48.1414755,
                        lng: 11.4630539,
                      },
                    location_type: 'GEOMETRIC_CENTER',
                    viewport: {
                        northeast: {
                            lat: 48.1428565802915,
                            lng: 11.4645439802915,
                          },
                        southwest: {
                            lat: 48.1401586197085,
                            lng: 11.4618460197085,
                          },
                      },
                  },
                place_id: 'ChIJDe79SAnYnUcRdn8OjjJnrqo',
                types: [
                    'route',
                ],
              },
        ],
        status: 'OK',
      },
    requestUrl: 'https://maps.googleapis.com/maps/api/geocode/json?address=Otto-Engl-Platz%2081241%20M%C3%BCnchen%2C%20Germany&key=AIzaSyDYmT7bnHQl31gUGrkc7sizLL79cr5NIuw',
    query: {
        address: 'Otto-Engl-Platz 81241 München, Germany',
        key: 'AIzaSyDYmT7bnHQl31gUGrkc7sizLL79cr5NIuw',
      },
  },
  "Marseille, France, 99 Rue Abbé de l'Épée": {
    status: 200,
    headers: {
        'content-type': 'application/json; charset=UTF-8',
        date: 'Mon, 22 Jan 2018 09:53:35 GMT',
        expires: 'Tue, 23 Jan 2018 09:53:35 GMT',
        'cache-control': 'public, max-age=86400',
        'access-control-allow-origin': '*',
        server: 'mafe',
        'x-xss-protection': '1; mode=block',
        'x-frame-options': 'SAMEORIGIN',
        'alt-svc': 'hq=":443"; ma=2592000; quic=51303431; quic=51303339; quic=51303338; quic=51303337; quic=51303335,quic=":443"; ma=2592000; v="41,39,38,37,35"',
        'accept-ranges': 'none',
        vary: 'Accept-Language,Accept-Encoding',
        connection: 'close',
      },
    json: {
        results: [
            {
                address_components: [
                    {
                        long_name: '99',
                        short_name: '99',
                        types: [
                            'street_number',
                        ],
                      },
                    {
                        long_name: "Rue Abbé de l'Épée",
                        short_name: "Rue Abbé de l'Épée",
                        types: [
                            'route',
                        ],
                      },
                    {
                        long_name: 'Marseille',
                        short_name: 'Marseille',
                        types: [
                            'locality',
                            'political',
                        ],
                      },
                    {
                        long_name: 'Bouches-du-Rhône',
                        short_name: 'Bouches-du-Rhône',
                        types: [
                            'administrative_area_level_2',
                            'political',
                        ],
                      },
                    {
                        long_name: "Provence-Alpes-Côte d'Azur",
                        short_name: "Provence-Alpes-Côte d'Azur",
                        types: [
                            'administrative_area_level_1',
                            'political',
                        ],
                      },
                    {
                        long_name: 'France',
                        short_name: 'FR',
                        types: [
                            'country',
                            'political',
                        ],
                      },
                    {
                        long_name: '13005',
                        short_name: '13005',
                        types: [
                            'postal_code',
                        ],
                      },
                ],
                formatted_address: "99 Rue Abbé de l'Épée, 13005 Marseille, France",
                geometry: {
                    location: {
                        lat: 43.29728679999999,
                        lng: 5.3931382,
                      },
                    location_type: 'ROOFTOP',
                    viewport: {
                        northeast: {
                            lat: 43.29863578029149,
                            lng: 5.394487180291502,
                          },
                        southwest: {
                            lat: 43.29593781970849,
                            lng: 5.391789219708498,
                          },
                      },
                  },
                place_id: 'ChIJJWGdb6DAyRIR7wZh-XZJ8MI',
                types: [
                    'street_address',
                ],
              },
        ],
        status: 'OK',
      },
    requestUrl: "https://maps.googleapis.com/maps/api/geocode/json?address=Marseille%2C%20France%2C%2099%20Rue%20Abb%C3%A9%20de%20l'%C3%89p%C3%A9e&key=AIzaSyDYmT8bnHQl71gUGrkc6sizLL79cr5NIuw",
    query: {
        address: "Marseille, France, 99 Rue Abbé de l'Épée",
        key: 'AIzaSyDYmT8bnHQl71gUGrkc6sizLL79cr5NIuw',
      },
  },

  asdfasdfasdf: {
    status: 200,
    headers: {
        'content-type': 'application/json; charset=UTF-8',
        date: 'Mon, 22 Jan 2018 09:54:07 GMT',
        expires: 'Tue, 23 Jan 2018 09:54:07 GMT',
        'cache-control': 'public, max-age=86400',
        'access-control-allow-origin': '*',
        server: 'mafe',
        'x-xss-protection': '1; mode=block',
        'x-frame-options': 'SAMEORIGIN',
        'alt-svc': 'hq=":443"; ma=2592000; quic=51303431; quic=51303339; quic=51303338; quic=51303337; quic=51303335,quic=":443"; ma=2592000; v="41,39,38,37,35"',
        'accept-ranges': 'none',
        vary: 'Accept-Language,Accept-Encoding',
        connection: 'close',
      },
    json: {
        results: [],
        status: 'ZERO_RESULTS',
      },
    requestUrl: 'https://maps.googleapis.com/maps/api/geocode/json?address=asdfasdfasdf&key=AIzaSyDYmT8bnHQl71gUGrkc6sizLL79cr5NIuw',
    query: {
        address: 'asdfasdfasdf',
        key: 'AIzaSyDYmT8bnHQl71gUGrkc6sizLL79cr5NIuw',
      },
  },

};

'use strict';

module.exports = exports = {
  googleMapsResults: {
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
  },

  places: {
    'São Paulo - State of' : {
 "status": 200,
 "headers": {
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 24 Jan 2018 18:00:54 GMT",
  "expires": "Wed, 24 Jan 2018 18:00:54 GMT",
  "cache-control": "private, max-age=300",
  "server": "scaffolding on HTTPServer2",
  "x-xss-protection": "1; mode=block",
  "x-frame-options": "SAMEORIGIN",
  "alt-svc": "hq=\":443\"; ma=2592000; quic=51303431; quic=51303339; quic=51303338; quic=51303337; quic=51303335,quic=\":443\"; ma=2592000; v=\"41,39,38,37,35\"",
  "accept-ranges": "none",
  "vary": "Accept-Language,Accept-Encoding",
  "connection": "close"
 },
 "json": {
  "predictions": [
   {
    "description": "Rua São Vicente de Paulo - Santa Cecilia, São Paulo - State of São Paulo, Brazil",
    "id": "446240b10e99056276a413bcd369877953a34561",
    "matched_substrings": [
     {
      "length": 24,
      "offset": 0
     },
     {
      "length": 8,
      "offset": 54
     }
    ],
    "place_id": "ElNSdWEgU8OjbyBWaWNlbnRlIGRlIFBhdWxvIC0gU2FudGEgQ2VjaWxpYSwgU8OjbyBQYXVsbyAtIFN0YXRlIG9mIFPDo28gUGF1bG8sIEJyYXppbA",
    "reference": "CmRXAAAAgeYUQkYTkBwUvBZUvpGjysqpvKIFwx9gfaKGH-Qk3hNL7XMf59_7WMUSuWu7EfWygzJiPG3oACBa2k6bJTKT8uMp-I9KzrvgPJVoIqrvUcQYX7lQCswxTB9smzIkRVEvEhCGatWk41GImxymguoaeWaxGhRUPSU5sDNhkli-IYs43jm5pLp1jA",
    "structured_formatting": {
     "main_text": "Rua São Vicente de Paulo",
     "main_text_matched_substrings": [
      {
       "length": 24,
       "offset": 0
      }
     ],
     "secondary_text": "Santa Cecilia, São Paulo - State of São Paulo, Brazil",
     "secondary_text_matched_substrings": [
      {
       "length": 8,
       "offset": 27
      }
     ]
    },
    "terms": [
     {
      "offset": 0,
      "value": "Rua São Vicente de Paulo"
     },
     {
      "offset": 27,
      "value": "Santa Cecilia"
     },
     {
      "offset": 42,
      "value": "São Paulo"
     },
     {
      "offset": 54,
      "value": "State of São Paulo"
     },
     {
      "offset": 74,
      "value": "Brazil"
     }
    ],
    "types": [
     "route",
     "geocode"
    ]
   },
   {
    "description": "Sao Paulo, Valle Dorado, Tlalnepantla de Baz, State of Mexico, Mexico",
    "id": "2a3381fc565a0c6690b97c4b856a386d9088aac0",
    "matched_substrings": [
     {
      "length": 9,
      "offset": 0
     },
     {
      "length": 8,
      "offset": 46
     }
    ],
    "place_id": "EkVTYW8gUGF1bG8sIFZhbGxlIERvcmFkbywgVGxhbG5lcGFudGxhIGRlIEJheiwgU3RhdGUgb2YgTWV4aWNvLCBNZXhpY28",
    "reference": "ClRJAAAAd62FCr8bn53Xtw-9RDr_dsMHpsZTCsXfsDSrJlhJrW_ViT9jAy-yel8tGR-NTn54xya7ZDr3wicLXDgzJSwN0xzpnD6-g7nGegOgy8SiBUoSEDF_HrgtTAHPQVQ-BbZZQIUaFBPHUGGpfdbEUe3G3oKUSduSBEzj",
    "structured_formatting": {
     "main_text": "Sao Paulo",
     "main_text_matched_substrings": [
      {
       "length": 9,
       "offset": 0
      }
     ],
     "secondary_text": "Valle Dorado, Tlalnepantla de Baz, State of Mexico, Mexico",
     "secondary_text_matched_substrings": [
      {
       "length": 8,
       "offset": 35
      }
     ]
    },
    "terms": [
     {
      "offset": 0,
      "value": "Sao Paulo"
     },
     {
      "offset": 11,
      "value": "Valle Dorado"
     },
     {
      "offset": 25,
      "value": "Tlalnepantla de Baz"
     },
     {
      "offset": 46,
      "value": "State of Mexico"
     },
     {
      "offset": 63,
      "value": "Mexico"
     }
    ],
    "types": [
     "route",
     "geocode"
    ]
   },
   {
    "description": "Rua Vicente Paula - Alvorada, Ibirité - State of Minas Gerais, Brazil",
    "id": "8fdc85b14d99e7d3fa61587489ecc6722f189343",
    "matched_substrings": [
     {
      "length": 17,
      "offset": 0
     },
     {
      "length": 8,
      "offset": 40
     }
    ],
    "place_id": "EkZSdWEgVmljZW50ZSBQYXVsYSAtIEFsdm9yYWRhLCBJYmlyaXTDqSAtIFN0YXRlIG9mIE1pbmFzIEdlcmFpcywgQnJhemls",
    "reference": "ClRKAAAAf6Zx0kOO4wIkAdVCq5TzBT2ZZzwEdtYyGYGK839bw5MgmbTm4-9UWsmrOaLLTx5OsMFm-HeNPkkdvx7Ck6dvwPIcO16Vdgxp_k-aYnRactwSEKhZuXJuJSgMk7RKJBJyzAQaFCd9MdaOIOe2SEJiJjqkUiVI3kII",
    "structured_formatting": {
     "main_text": "Rua Vicente Paula",
     "main_text_matched_substrings": [
      {
       "length": 17,
       "offset": 0
      }
     ],
     "secondary_text": "Alvorada, Ibirité - State of Minas Gerais, Brazil",
     "secondary_text_matched_substrings": [
      {
       "length": 8,
       "offset": 20
      }
     ]
    },
    "terms": [
     {
      "offset": 0,
      "value": "Rua Vicente Paula"
     },
     {
      "offset": 20,
      "value": "Alvorada"
     },
     {
      "offset": 30,
      "value": "Ibirité"
     },
     {
      "offset": 40,
      "value": "State of Minas Gerais"
     },
     {
      "offset": 63,
      "value": "Brazil"
     }
    ],
    "types": [
     "route",
     "geocode"
    ]
   },
   {
    "description": "Rua São Vicente de Paulo - Vila Argos Velha, Jundiaí - State of São Paulo, Brazil",
    "id": "12c8d5a04eb632dccbecdfd137a44313d198434a",
    "matched_substrings": [
     {
      "length": 24,
      "offset": 0
     },
     {
      "length": 8,
      "offset": 55
     }
    ],
    "place_id": "ElRSdWEgU8OjbyBWaWNlbnRlIGRlIFBhdWxvIC0gVmlsYSBBcmdvcyBWZWxoYSwgSnVuZGlhw60gLSBTdGF0ZSBvZiBTw6NvIFBhdWxvLCBCcmF6aWw",
    "reference": "CmRYAAAAMoDlm-J6V_5LcGsZ52iP8GGQFyadCm4Wf8e3GC4ldlaKwtfvDLJL_kaSnVWVv0T9DfV1BnmcitnnA9X_YX8vE-muMhQo1DsyGUZeDHD7ksrfg6cXlMrJIn-NCexQEJrdEhA6IUZqsLwev4nPchmdttp9GhTKSDh1ZxsxNTdeFIr94TG6yk-m0A",
    "structured_formatting": {
     "main_text": "Rua São Vicente de Paulo",
     "main_text_matched_substrings": [
      {
       "length": 24,
       "offset": 0
      }
     ],
     "secondary_text": "Vila Argos Velha, Jundiaí - State of São Paulo, Brazil",
     "secondary_text_matched_substrings": [
      {
       "length": 8,
       "offset": 28
      }
     ]
    },
    "terms": [
     {
      "offset": 0,
      "value": "Rua São Vicente de Paulo"
     },
     {
      "offset": 27,
      "value": "Vila Argos Velha"
     },
     {
      "offset": 45,
      "value": "Jundiaí"
     },
     {
      "offset": 55,
      "value": "State of São Paulo"
     },
     {
      "offset": 75,
      "value": "Brazil"
     }
    ],
    "types": [
     "route",
     "geocode"
    ]
   },
   {
    "description": "Travessa São Vicente de Paulo - Centro, São Bernardo do Campo - State of São Paulo, Brazil",
    "id": "159fe28a17b12bc71a7b60c9fd9b0d6e4fd98a9b",
    "matched_substrings": [
     {
      "length": 29,
      "offset": 0
     },
     {
      "length": 8,
      "offset": 64
     }
    ],
    "place_id": "El1UcmF2ZXNzYSBTw6NvIFZpY2VudGUgZGUgUGF1bG8gLSBDZW50cm8sIFPDo28gQmVybmFyZG8gZG8gQ2FtcG8gLSBTdGF0ZSBvZiBTw6NvIFBhdWxvLCBCcmF6aWw",
    "reference": "CnRhAAAAu_lDgwCdPur4lFuel2Z8nemHrzrA7AAwgfeZwJbzhd4BHOyUN7HGaNhpPZ1uCyIK6U955sxINFoXus-0ob77YZx6j0hgNEkzDzyw-XkV0LM2CVBfJghZ5FBYXEqO_NIOZaqvoIlXfFrMWRM6PsHK0hIQcSIfv-o8ASGqL-32S_UuDRoUZCmJRFKxKPEOdmH5oNLUTt4S9Yk",
    "structured_formatting": {
     "main_text": "Travessa São Vicente de Paulo",
     "main_text_matched_substrings": [
      {
       "length": 29,
       "offset": 0
      }
     ],
     "secondary_text": "Centro, São Bernardo do Campo - State of São Paulo, Brazil",
     "secondary_text_matched_substrings": [
      {
       "length": 8,
       "offset": 32
      }
     ]
    },
    "terms": [
     {
      "offset": 0,
      "value": "Travessa São Vicente de Paulo"
     },
     {
      "offset": 32,
      "value": "Centro"
     },
     {
      "offset": 40,
      "value": "São Bernardo do Campo"
     },
     {
      "offset": 64,
      "value": "State of São Paulo"
     },
     {
      "offset": 84,
      "value": "Brazil"
     }
    ],
    "types": [
     "route",
     "geocode"
    ]
   }
  ],
  "status": "OK"
 },
 "requestUrl": "https://maps.googleapis.com/maps/api/place/autocomplete/json?input=S%C3%A3o%20Paulo%20-%20State%20of&types=address&key=AIzaSyDYmT8bnHQl71gUGrkc6sizLL79cr5NIuw",
 "query": {
  "input": "São Paulo - State of",
  "types": "address",
  "key": "AIzaSyDYmT8bnHQl71gUGrkc6sizLL79cr5NIuw"
 }

    },
    'Marseille, 99 Rue Abbé' : {

 "status": 200,
 "headers": {
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 24 Jan 2018 18:09:18 GMT",
  "expires": "Wed, 24 Jan 2018 18:09:18 GMT",
  "cache-control": "private, max-age=300",
  "server": "scaffolding on HTTPServer2",
  "x-xss-protection": "1; mode=block",
  "x-frame-options": "SAMEORIGIN",
  "alt-svc": "hq=\":443\"; ma=2592000; quic=51303431; quic=51303339; quic=51303338; quic=51303337; quic=51303335,quic=\":443\"; ma=2592000; v=\"41,39,38,37,35\"",
  "accept-ranges": "none",
  "vary": "Accept-Language,Accept-Encoding",
  "connection": "close"
 },
 "json": {
  "predictions": [
   {
    "description": "99 Rue Abbé de l'Épée, Marseille, France",
    "id": "5635aac971723946635973faff8e2637d52303ce",
    "matched_substrings": [
     {
      "length": 2,
      "offset": 0
     },
     {
      "length": 8,
      "offset": 3
     },
     {
      "length": 9,
      "offset": 23
     }
    ],
    "place_id": "ChIJJWGdb6DAyRIR7wZh-XZJ8MI",
    "reference": "ClRDAAAA4ydJkkdOGRvEsuPO--sDAC7JmkgX_3lJk09cheT5V-0Du6rVpxri3926bI84eyKhQ-Ip4-S2OzFWlw33oYk_anBEnVlw8IFc7ifC62tZuTgSEB-IJ34FdTt07HsS3ZE6rkcaFMcjruVcRZjoKVt1jo4iggv_AhYn",
    "structured_formatting": {
     "main_text": "99 Rue Abbé de l'Épée",
     "main_text_matched_substrings": [
      {
       "length": 2,
       "offset": 0
      },
      {
       "length": 8,
       "offset": 3
      }
     ],
     "secondary_text": "Marseille, France",
     "secondary_text_matched_substrings": [
      {
       "length": 9,
       "offset": 0
      }
     ]
    },
    "terms": [
     {
      "offset": 0,
      "value": "99"
     },
     {
      "offset": 3,
      "value": "Rue Abbé de l'Épée"
     },
     {
      "offset": 23,
      "value": "Marseille"
     },
     {
      "offset": 34,
      "value": "France"
     }
    ],
    "types": [
     "street_address",
     "geocode"
    ]
   },
   {
    "description": "99 Rue Abbé Faria, Marseille, France",
    "id": "a1d55477699fad44dcce1ac0bf7baf130f0512d4",
    "matched_substrings": [
     {
      "length": 11,
      "offset": 0
     },
     {
      "length": 9,
      "offset": 19
     }
    ],
    "place_id": "EiU5OSBSdWUgQWJiw6kgRmFyaWEsIE1hcnNlaWxsZSwgRnJhbmNl",
    "reference": "CjQpAAAArFTFKAIiROmUwB_OaQZh_NDzqv2HuAo_zYLBpIJUGx6GwyeplON4w1A3Du_3_6ROEhCxyXxCGOWPFdDoBveMy1sJGhS6QXOjuge822GiqUZ4CAw7Bz1fYg",
    "structured_formatting": {
     "main_text": "99 Rue Abbé Faria",
     "main_text_matched_substrings": [
      {
       "length": 11,
       "offset": 0
      }
     ],
     "secondary_text": "Marseille, France",
     "secondary_text_matched_substrings": [
      {
       "length": 9,
       "offset": 0
      }
     ]
    },
    "terms": [
     {
      "offset": 0,
      "value": "99 Rue Abbé Faria"
     },
     {
      "offset": 19,
      "value": "Marseille"
     },
     {
      "offset": 30,
      "value": "France"
     }
    ],
    "types": [
     "route",
     "geocode"
    ]
   },
   {
    "description": "99 Rue Abbé Féraud, Marseille, France",
    "id": "96fec8e52576b0481042197be2abe71e12ce3a38",
    "matched_substrings": [
     {
      "length": 11,
      "offset": 0
     },
     {
      "length": 9,
      "offset": 20
     }
    ],
    "place_id": "Eic5OSBSdWUgQWJiw6kgRsOpcmF1ZCwgTWFyc2VpbGxlLCBGcmFuY2U",
    "reference": "CjQrAAAAGsQRoc7rHJDqijtuvrB18ZfqB6E8vkn4g1kfrHSb999QnBCyDdduOVURx35n3moPEhAZXQOqOfjuoA19WqyCjayWGhQ7YBKLxHVroht2N_zX-HAdTEIziQ",
    "structured_formatting": {
     "main_text": "99 Rue Abbé Féraud",
     "main_text_matched_substrings": [
      {
       "length": 11,
       "offset": 0
      }
     ],
     "secondary_text": "Marseille, France",
     "secondary_text_matched_substrings": [
      {
       "length": 9,
       "offset": 0
      }
     ]
    },
    "terms": [
     {
      "offset": 0,
      "value": "99 Rue Abbé Féraud"
     },
     {
      "offset": 20,
      "value": "Marseille"
     },
     {
      "offset": 31,
      "value": "France"
     }
    ],
    "types": [
     "route",
     "geocode"
    ]
   },
   {
    "description": "99 Rue Abbé Dassy, Marseille, France",
    "id": "9a45755d29309c8fc62ea88175c7cf3fd15995bb",
    "matched_substrings": [
     {
      "length": 11,
      "offset": 0
     },
     {
      "length": 9,
      "offset": 19
     }
    ],
    "place_id": "EiU5OSBSdWUgQWJiw6kgRGFzc3ksIE1hcnNlaWxsZSwgRnJhbmNl",
    "reference": "CjQpAAAAstCLxoI-4z9P6Y-we0eRpKi4x6KbcMmvOoo07bPp1EF-dBw-ln7a3Fa8eoe-VS_OEhCDJpcIY7kdAsmY-4Y56ItgGhR0UZQ0giExcPmF63hj_AK6oGDA5w",
    "structured_formatting": {
     "main_text": "99 Rue Abbé Dassy",
     "main_text_matched_substrings": [
      {
       "length": 11,
       "offset": 0
      }
     ],
     "secondary_text": "Marseille, France",
     "secondary_text_matched_substrings": [
      {
       "length": 9,
       "offset": 0
      }
     ]
    },
    "terms": [
     {
      "offset": 0,
      "value": "99 Rue Abbé Dassy"
     },
     {
      "offset": 19,
      "value": "Marseille"
     },
     {
      "offset": 30,
      "value": "France"
     }
    ],
    "types": [
     "route",
     "geocode"
    ]
   },
   {
    "description": "99 Rue de l'Abbé Féraud, Marseille, France",
    "id": "49bdf4300ea5284c0c3fcbd0123c70384dbb064d",
    "matched_substrings": [
     {
      "length": 23,
      "offset": 0
     },
     {
      "length": 9,
      "offset": 25
     }
    ],
    "place_id": "Eiw5OSBSdWUgZGUgbCdBYmLDqSBGw6lyYXVkLCBNYXJzZWlsbGUsIEZyYW5jZQ",
    "reference": "CjQwAAAAwEDiSBpj33BArtlkxZiX-gndtSCkS41fCXLTt42y-T-FmSch4WgpSsak5D6fi5kYEhDrjtv_I89CnlpkxJL1Q1kiGhT1_ksntngd7SfOc9IbgSBvCdOmwQ",
    "structured_formatting": {
     "main_text": "99 Rue de l'Abbé Féraud",
     "main_text_matched_substrings": [
      {
       "length": 23,
       "offset": 0
      }
     ],
     "secondary_text": "Marseille, France",
     "secondary_text_matched_substrings": [
      {
       "length": 9,
       "offset": 0
      }
     ]
    },
    "terms": [
     {
      "offset": 0,
      "value": "99 Rue de l'Abbé Féraud"
     },
     {
      "offset": 25,
      "value": "Marseille"
     },
     {
      "offset": 36,
      "value": "France"
     }
    ],
    "types": [
     "route",
     "geocode"
    ]
   }
  ],
  "status": "OK"
 },
 "requestUrl": "https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Marseille%2C%2099%20Rue%20Abb%C3%A9&types=address&key=AIzaSyDYmT8bnHQl71gUGrkc6sizLL79cr5NIuw",
 "query": {
  "input": "Marseille, 99 Rue Abbé",
  "types": "address",
  "key": "AIzaSyDYmT8bnHQl71gUGrkc6sizLL79cr5NIuw"
 }


    },
  },
};

'use strict';

module.exports = exports = [
  {
    request: {
      "sLat": 48.13596159999999,
      "sLng": 11.5382059,
      "eLat": 48.1414755,
      "eLng": 11.4630539
    },
    response: {
      "prices": [
        {
            "localized_display_name": "uberX",
            "distance": 4.34,
            "display_name": "uberX",
            "product_id": "bcb6224a-f21e-4cde-8e08-53cf9c98164d",
            "high_estimate": 14,
            "surge_multiplier": 1,
            "minimum": 5,
            "low_estimate": 14,
            "duration": 660,
            "estimate": "€13.44",
            "currency_code": "EUR"
        },
        {
            "localized_display_name": "UberBLACK",
            "distance": 4.34,
            "display_name": "UberBLACK",
            "product_id": "882477af-c51e-4069-b8f8-5a659db66cab",
            "high_estimate": 26,
            "surge_multiplier": 1,
            "minimum": 9,
            "low_estimate": 26,
            "duration": 660,
            "estimate": "€25.07",
            "currency_code": "EUR"
        },
        {
            "localized_display_name": "UberVan",
            "distance": 4.34,
            "display_name": "UberVan",
            "product_id": "a213b90a-47ef-49e4-ac93-8b8a1f563f2d",
            "high_estimate": 26,
            "surge_multiplier": 1,
            "minimum": 9,
            "low_estimate": 26,
            "duration": 660,
            "estimate": "€25.07",
            "currency_code": "EUR"
        }
      ],
      "rate_limit": {
        "limit": "2000",
        "remaining": "1999",
        "reset": "2018-01-23T12:00:00.000Z"
      }
    },
    error: null
  },
  {
    request: {
      "sLat": 48.13596159999999,
      "sLng": 11.5382059,
      "eLat": 43.29728679999999,
      "eLng": 5.3931382
    },
    response: null,
    error: {
      "fields": {
        "start_longitude": "Distance between two points exceeds 100 miles",
        "end_longitude": "Distance between two points exceeds 100 miles",
        "start_latitude": "Distance between two points exceeds 100 miles",
        "end_latitude": "Distance between two points exceeds 100 miles"
      },
      "message": "Distance between two points exceeds 100 miles",
      "code": "distance_exceeded"
    }
  }
];

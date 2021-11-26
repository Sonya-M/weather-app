/* Reverse geocoding 
Reverse geocoding allows to get name of the location (city name or area name) by using geografical coordinates (lat, lon). The limit parameter in the API call allows you to cap how many location names you will see in the API response.

How to make an API call
API call

http://api.openweathermap.org/geo/1.0/reverse?lat={lat}&lon={lon}&limit={limit}&appid={API key}

e.g.
http://api.openweathermap.org/geo/1.0/reverse?lat=51.5098&lon=-0.1180&limit=5&appid={API key}

Please note that the fields present will vary based on a country to which a location belongs as well as a specific location.
name Name of the found location
local_names
local_names.[language code] Name of the found location in different languages. The list of names can be different for different locations.
local_names.ascii Internal field
local_names.feature_name Internal field
lat Geographical coordinates of the found location (latitude)
lon Geographical coordinates of the found location (longitude)
country Country of the found location
state (where available) State of the found location

Example of API response:

  [
  {
    "name": "City of London",
    "local_names": {
      "ar": "مدينة لندن",
      "ascii": "City of London",
      "bg": "Сити",
      "ca": "La City",
      "de": "London City",
      "el": "Σίτι του Λονδίνου",
      "en": "City of London",
      "fa": "سیتی لندن",
      "feature_name": "City of London",
      "fi": "Lontoon City",
      "fr": "Cité de Londres",
      "gl": "Cidade de Londres",
      "he": "הסיטי של לונדון",
      "hi": "सिटी ऑफ़ लंदन",
      "id": "Kota London",
      "it": "Londra",
      "ja": "シティ・オブ・ロンドン",
      "la": "Civitas Londinium",
      "lt": "Londono Sitis",
      "pt": "Cidade de Londres",
      "ru": "Сити",
      "sr": "Сити",
      "th": "นครลอนดอน",
      "tr": "Londra Şehri",
      "vi": "Thành phố Luân Đôn",
      "zu": "Idolobha weLondon"
    },
    "lat": 51.5128,
    "lon": -0.0918,
    "country": "GB"
  },
  {
    "name": "London",
    "local_names": {
      "af": "Londen",
      "ar": "لندن",
      "ascii": "London",
      "az": "London",
      "bg": "Лондон",
      "ca": "Londres",
      "da": "London",
      "de": "London",
      "el": "Λονδίνο",
      "en": "London",
      "eu": "Londres",
      "fa": "لندن",
      "feature_name": "London",
      "fi": "Lontoo",
      "fr": "Londres",
      "gl": "Londres",
      "he": "לונדון",
      "hi": "लंदन",
      "hr": "London",
      "hu": "London",
      "id": "London",
      "it": "Londra",
      "ja": "ロンドン",
      "la": "Londinium",
      "lt": "Londonas",
      "mk": "Лондон",
      "nl": "Londen",
      "no": "London",
      "pl": "Londyn",
      "pt": "Londres",
      "ro": "Londra",
      "ru": "Лондон",
      "sk": "Londýn",
      "sl": "London",
      "sr": "Лондон",
      "th": "ลอนดอน",
      "tr": "Londra",
      "vi": "Luân Đôn",
      "zu": "ILondon"
    },
    "lat": 51.5085,
    "lon": -0.1257,
    "country": "GB"
  },
  {
    "name": "Islington",
    "local_names": {
      "ascii": "Islington",
      "az": "İslinqton",
      "fa": "ایزلینتن",
      "feature_name": "Islington",
      "fr": "District londonien d'Islington",
      "he": "איזלינגטון",
      "ja": "イズリントン",
      "ru": "Ислингтон"
    },
    "lat": 51.5362,
    "lon": -0.103,
    "country": "GB"
  },
  {
    "name": "Lewisham",
    "local_names": {
      "ascii": "Lewisham",
      "de": "London Borough of Lewisham",
      "en": "Lewisham",
      "feature_name": "Lewisham",
      "fi": "Lewisham",
      "fr": "Lewisham",
      "hu": "Lewisham kerület",
      "nl": "Lewisham",
      "no": "Lewisham",
      "ro": "Lewisham"
    },
    "lat": 51.4535,
    "lon": -0.018,
    "country": "GB"
  },
  {
    "name": "Islington",
    "local_names": {
      "ascii": "Islington",
      "de": "London Borough of Islington",
      "en": "Islington",
      "feature_name": "Islington",
      "fr": "Islington",
      "nl": "Islington",
      "no": "Islington",
      "ro": "Islington"
    },
    "lat": 51.547,
    "lon": -0.1094,
    "country": "GB"
  }
]
                   

                 

*/

export const DUMMY_GEOCODING_RESPONSE = [
  {
    name: "City of London",
    local_names: {
      ar: "مدينة لندن",
      ascii: "City of London",
      bg: "Сити",
      ca: "La City",
      de: "London City",
      el: "Σίτι του Λονδίνου",
      en: "City of London",
      fa: "سیتی لندن",
      feature_name: "City of London",
      fi: "Lontoon City",
      fr: "Cité de Londres",
      gl: "Cidade de Londres",
      he: "הסיטי של לונדון",
      hi: "सिटी ऑफ़ लंदन",
      id: "Kota London",
      it: "Londra",
      ja: "シティ・オブ・ロンドン",
      la: "Civitas Londinium",
      lt: "Londono Sitis",
      pt: "Cidade de Londres",
      ru: "Сити",
      sr: "Сити",
      th: "นครลอนดอน",
      tr: "Londra Şehri",
      vi: "Thành phố Luân Đôn",
      zu: "Idolobha weLondon",
    },
    lat: 51.5128,
    lon: -0.0918,
    country: "GB",
  },
  {
    name: "London",
    local_names: {
      af: "Londen",
      ar: "لندن",
      ascii: "London",
      az: "London",
      bg: "Лондон",
      ca: "Londres",
      da: "London",
      de: "London",
      el: "Λονδίνο",
      en: "London",
      eu: "Londres",
      fa: "لندن",
      feature_name: "London",
      fi: "Lontoo",
      fr: "Londres",
      gl: "Londres",
      he: "לונדון",
      hi: "लंदन",
      hr: "London",
      hu: "London",
      id: "London",
      it: "Londra",
      ja: "ロンドン",
      la: "Londinium",
      lt: "Londonas",
      mk: "Лондон",
      nl: "Londen",
      no: "London",
      pl: "Londyn",
      pt: "Londres",
      ro: "Londra",
      ru: "Лондон",
      sk: "Londýn",
      sl: "London",
      sr: "Лондон",
      th: "ลอนดอน",
      tr: "Londra",
      vi: "Luân Đôn",
      zu: "ILondon",
    },
    lat: 51.5085,
    lon: -0.1257,
    country: "GB",
  },
  {
    name: "Islington",
    local_names: {
      ascii: "Islington",
      az: "İslinqton",
      fa: "ایزلینتن",
      feature_name: "Islington",
      fr: "District londonien d'Islington",
      he: "איזלינגטון",
      ja: "イズリントン",
      ru: "Ислингтон",
    },
    lat: 51.5362,
    lon: -0.103,
    country: "GB",
  },
  {
    name: "Lewisham",
    local_names: {
      ascii: "Lewisham",
      de: "London Borough of Lewisham",
      en: "Lewisham",
      feature_name: "Lewisham",
      fi: "Lewisham",
      fr: "Lewisham",
      hu: "Lewisham kerület",
      nl: "Lewisham",
      no: "Lewisham",
      ro: "Lewisham",
    },
    lat: 51.4535,
    lon: -0.018,
    country: "GB",
  },
  {
    name: "Islington",
    local_names: {
      ascii: "Islington",
      de: "London Borough of Islington",
      en: "Islington",
      feature_name: "Islington",
      fr: "Islington",
      nl: "Islington",
      no: "Islington",
      ro: "Islington",
    },
    lat: 51.547,
    lon: -0.1094,
    country: "GB",
  },
];

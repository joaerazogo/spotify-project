// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  BASE_URL_AUTH: 'https://accounts.spotify.com/',
  BASE_URL_INFO: 'https://api.spotify.com/',
  FEATURE_PLAYLIST: 'v1/browse/featured-playlists?timestamp=2022-05-31T19%3A40%3A31&offset=0&limit=30',
  LOCAL_STORAGE_SESSION: 'session',
  TOKEN_TYPE: 'token'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

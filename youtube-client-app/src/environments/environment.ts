// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL: 'https://www.googleapis.com/youtube/v3',
  API_KEY: 'AIzaSyCe6bJ9QcaWvMUrw6ptgtrFN2rMO97DaU0',
  SEARCH_URL: 'search',
  SEARCH_PART: 'snippet',
  SEARCH_TYPE: 'video',
  MAX_RESULTS: '15',
  VIDEOS_URL: 'videos',
  VIDEOS_PART: 'snippet, statistics',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

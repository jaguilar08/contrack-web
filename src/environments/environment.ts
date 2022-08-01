// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  dgSuite: 'http://dgsuite.dev.com/#/login/',
  // apiUrl: 'http://192.168.100.24:8000/',
  apiUrl: 'http://192.168.1.118:8000/',
  error403: 'http://dgsuite.dev.com/#/error/403',
  token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyMzI3LCJhbHRfY29kZSI6IiIsInVzZXJfbGV2ZWwiOjIsIm5hbWUiOiJEYW5pZWwgUGxpZWdvIiwiZW1haWwiOiJkcGxpZWdvQGRlYWxlcmdlZWsuY29tIiwidXNlcl9hcHBsaWNhdGlvbl9pZCI6MzYzNSwic2VjdXJpdHlfYWN0aW9ucyI6W10sImNyZWF0ZWQiOiIyMDIyLTA3LTI5IDE2OjM3OjQxIn0.LJmW6WqMMhECryeu-BwszRuh99bSm1ijFrR6FDU6sHQ'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

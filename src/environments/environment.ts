// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts`with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const mainUrl = 'https://plus.badmintonfamly.com/wp-json';

export const environment = {
  production: false,
  apiUrl: mainUrl + '/rest/',
  jwtUrl: mainUrl + '/api-bearer-auth/v1/',
  wpUrl: mainUrl + '/wp/v2/',
  loginImagesName: 'login-img',
  loginImagesLargeName: 'login-img-large',
  browseImagesName: 'browse-img',
  env: 'dev',
  mainUrl: mainUrl,
  vimeo: {
    clientId: '6ac44f58feb359d3ccf451a9a38156033d17017e',
    secret: '+UsHtYj/o0iVfHpdbBRhmMnUyfYhMMcrSPgyY4uC7wOF4njoh2uhLfHDDVu7BURkHoG8C056lLXoYttg2tAPY0ump4OAKlnLYfAsaePt+FrV/acg9K1pIksCBHKqFS7Z',
    token: 'acc79ad11cdb768748ce19f931ed1e91'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

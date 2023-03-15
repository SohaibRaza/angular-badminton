const mainUrl = 'https://plus.badmintonfamly.com/wp-json';

export const environment = {
  production: true,
  apiUrl: mainUrl + '/rest/',
  jwtUrl: mainUrl + '/api-bearer-auth/v1/',
  wpUrl: mainUrl + '/wp/v2/',
  loginImagesName: 'login-img',
  browseImagesName: 'browse-img',
  loginImagesLargeName: 'login-img-large',
  env: 'prod',
  vimeo: {
    clientId: '6ac44f58feb359d3ccf451a9a38156033d17017e',
    secret: '+UsHtYj/o0iVfHpdbBRhmMnUyfYhMMcrSPgyY4uC7wOF4njoh2uhLfHDDVu7BURkHoG8C056lLXoYttg2tAPY0ump4OAKlnLYfAsaePt+FrV/acg9K1pIksCBHKqFS7Z',
    token: 'acc79ad11cdb768748ce19f931ed1e91'
  }
};
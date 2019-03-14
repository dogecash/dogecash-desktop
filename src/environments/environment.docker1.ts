declare const require: any;

export const environment = {
  production: false,
  releasesUrl: 'https://api.github.com/repos/dogecash/dogecash-desktop/releases/latest',
  version: require('../../package.json').version,
  envName: 'docker1',
  dogecashHost: 'localhost',
  dogecashPort: 52935
};

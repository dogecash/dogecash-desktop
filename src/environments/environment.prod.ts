declare const require: any;

export const environment = {
  production: false,
  version: require('../../package.json').version,
  releasesUrl: 'https://api.github.com/repos/dogecash/dogecash/releases/latest',
  envName: 'prod',
  dogecashHost: 'localhost',
  dogecashPort: 38843
};

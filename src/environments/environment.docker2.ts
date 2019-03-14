declare const require: any;

export const environment = {
  production: false,
  releasesUrl: 'https://api.github.com/repos/dogecash/dogecash/releases/latest',
  version: require('../../package.json').version,
  envName: 'docker2',
  dogecashHost: 'localhost',
  dogecashPort: 53935
};

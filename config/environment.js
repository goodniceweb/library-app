/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'library-app',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    contentSecurityPolicy: {
      'connect-src': "*"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };
  ENV['simple-auth'] = {
    authorizer : 'authorizer:application' // 'simple-auth-authorizer:devise'
  };
  ENV['simple-auth'].crossOriginWhitelist = ['*'];

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
		// ENV['apiserver']   = 'localhost:3030';
		// ENV['simple-auth'] = {
		// 	authorizer           : 'devise',
		// 	crossOriginWhitelist : [
		// 		'http://localhost:3000',
		// 		ENV['apiserver']
		// 	]
		// };
		// ENV['simple-auth-devise'] = {
		// 	serverTokenEndpoint : ENV['apiserver'] + '/users/sign_in'
		// };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};

// import DeviseAuthorizer from 'ember-simple-auth/authorizers/devise';
import Ember from 'ember';
import BaseAuthorizer from 'ember-simple-auth/authorizers/base';
const { isEmpty  } = Ember;

// export default DeviseAuthorizer.extend();
export default BaseAuthorizer.extend({
  // tokenAttributeName: 'token',
  // identificationAttributeName: 'email',
  authorize(data, block) {
    // const { tokenAttributeName, identificationAttributeName  } = this.getProperties('tokenAttributeName', 'identificationAttributeName');
    // const userToken          = data[tokenAttributeName];
    // const userIdentification = data[identificationAttributeName];
    const accessToken = data['accessToken'];
    const expiry = data['expiry'];
    const tokenType = data['tokenType'];
    const uid = data['uid'];
    const client = data['client'];

    if (!isEmpty(accessToken) && !isEmpty(expiry) && !isEmpty(tokenType) && !isEmpty(uid) && !isEmpty(client)) {
      block('access-token', accessToken);
      block('expiry', expiry);
      block('token-type', tokenType);
      block('uid', uid);
      block('client', client);
    }
  }
});

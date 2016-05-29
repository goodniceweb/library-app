import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress: '',
  message: '',

  isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isValidMessage: Ember.computed.gte('message.length', 5),
  isValid: Ember.computed.and('isValidEmail', 'isValidMessage'),
  isDisabled: Ember.computed.not('isValid'),

  actions: {
    sendFeedback() {
      alert(`Saving of the following email address is in progress: ${this.get('emailAddress')} with text: ${this.get('message')}`);
      this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }
});

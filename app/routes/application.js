import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  session: Ember.inject.service(),
  beforeModel: function () {
    return this.get('session').fetch().catch(function () {
    });
  },
  model() {
    return this.get('store').findAll('channel'); //Returns all channel models as an array, stored in the context var 'model'
  },
  actions: {
    signIn: function (provider) {
      this.get('session').open('firebase', {provider: provider}).then(function (data) {
        console.log(data.currentUser);
      });
    },
    signOut: function () {
      this.get('session').close();
    }
  }

});

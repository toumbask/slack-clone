import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.get('store').findAll('channel'); //Returns all channel models as an array, stored in the context var 'model'
  }
});

import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.get('store').peekAll('channel'); //Returns all channel models as an array, stored in the context var 'model'
  }
});

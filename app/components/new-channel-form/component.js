import Component from '@ember/component';
import {inject as service} from '@ember/service';

export default Component.extend({
  store: service(),
  newChannelName: "",
  status: "",
  actions: {
    createChannel() {
      var name = this.get('newChannelName');
      if (name.length < 3) {
        this.set('status', 'Channel name is too short!');
      } else {
        this.get('store').createRecord('channel', {title: name});
        this.set('newChannelName', '');
      }
    }
  }
});

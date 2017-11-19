import Component from '@ember/component';
import {inject as service} from "@ember/service";

export default Component.extend({
  store: service(),
  text: "",
  channel: null,
  actions: {
    createMessage() {
      var text = this.get('text');
      var channel = this.get('channel');
      var message = this.get('store').createRecord('message', {
        text: text,
        channel: channel,
      });
      message.save().then(()=>{
        channel.save();
      });
    }
  }
});

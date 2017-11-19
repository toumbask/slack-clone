import Component from '@ember/component';
import {inject as service} from "@ember/service";

export default Component.extend({
  store: service(),

  newChannelName: "demo val",
  actions:{
    createChannel(){
      var name = this.get('newChannelName');
      var channel= this.get('store').createRecord('channel',{title:name});
      channel.save();
    }
  }
});

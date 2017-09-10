import Vue from 'vue';
import store from './store';
import App from './app.vue';

export default new Vue({
  el: '#app',
  components: {
    App,
  },
  render: h => h(App),
  store
});

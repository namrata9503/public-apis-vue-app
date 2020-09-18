import Vue from 'vue';
import './plugins/bootstrap-vue';
import App from './App.vue';

import 'animate.css';
import router from './router';


//font awesome icons
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';


Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
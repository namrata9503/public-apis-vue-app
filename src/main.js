import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue';

import 'animate.css';
import router from './router'
// bootstrap-vue pligin for bootstrap with vue which supports more classes for responsiveness
import {
  BootstrapVue
} from 'bootstrap-vue';

//font awesome icons
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

// Install BootstrapVue
Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
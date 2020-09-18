import Vue from 'vue'

import App from '../App.vue';
import VueRouter from 'vue-router';

import Homepage from '../views/Homepage';
import Detailpage from '../views/Detailpage';
import Randomizer from '../views/Randomizer';
import Categories from '../views/Categories';
import Category from "../views/Category";

Vue.use(VueRouter);

// routes for navigationg to diff pages with props if required
const routes = [{
    path: '/',
    component: Homepage
  },
  {
    path: '/details/:id',
    component: Detailpage,
    name: "Detailpage",
    props: true
  },
  {
    path: '/random',
    component: Randomizer
  },
  {
    path: '/categories',
    component: Categories
  },
  {
    path: '/categories/:category',
    component: Category,
    name: "Category",
    props: true
  },
]

const router = new VueRouter({
  routes
});

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')

export default router;
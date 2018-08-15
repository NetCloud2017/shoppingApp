// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import './mock/mockServer'
import vueLazyLoad from 'vue-lazyload'
import loading from './common/img/loading.gif'
Vue.config.productionTip = false
Vue.use(vueLazyLoad,{
  loading
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})

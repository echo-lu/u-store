// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueLazyLoad from 'vue-lazyload'
import VRouter from 'vue-router'


Vue.config.productionTip = false

Vue.use(VueLazyLoad, {
	loading:"/static/loading/loading-bars.svg"
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "u-reset.css";
import VueGoodTablePlugin from 'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
Vue.use(VueGoodTablePlugin)
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

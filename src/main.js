import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

// this will be used as the event bus
export const appEventBus = new Vue();

new Vue({
    render: h => h(App),
}).$mount('#app');

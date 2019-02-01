// Import VueJS
import Vue from 'vue'
// Import App.vue
import App from './App.vue'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;

// Vue instance
new Vue({
  render: h => h(App),
}).$mount('#app');
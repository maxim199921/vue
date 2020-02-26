import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';

Vue.use(VueResource);
// Vue.http.options.root = './src/assets/codes.json';
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  request.headers.set('x-access-token', 'accessToken')
});

new Vue({
  el: '#app',
  render: h => h(App)
});

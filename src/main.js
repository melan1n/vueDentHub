import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './plugins/router.js'; //path to router
import store from './store';
import firebase from 'firebase';
import moment from 'moment';


Vue.config.productionTip = false

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('DD-MM-YYYY hh:mm:ss');
  }
});

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')


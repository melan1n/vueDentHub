import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './plugins/router.js'; //path to router
import * as firebase from 'firebase'

Vue.config.productionTip = false

const configOptions = {
  apiKey: "AIzaSyCttTh1Gct2Yd1Vm2S5YNOxKLvcPfwFHjw",
  authDomain: "denthub-19cfe.firebaseapp.com",
  databaseURL: "https://denthub-19cfe.firebaseio.com",
  projectId: "denthub-19cfe",
  storageBucket: "denthub-19cfe.appspot.com",
  messagingSenderId: "304563626947",
  appId: "1:304563626947:web:d4bdddc07dcdbaca075376"
};

firebase.initializeApp(configOptions);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
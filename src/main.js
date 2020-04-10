import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './plugins/router.js'; //path to router
//import * as firebase from 'firebase'
import store from './store';
//import { firestorePlugin } from 'vuefire';
import firebase from 'firebase';
//import vuefire from 'vuefire';
//require 'firebase/firestore';
//import firebase from 'firebase/app'
//import 'firebase/firestore'

//Vue.use(firestorePlugin);
Vue.config.productionTip = false

// const configOptions = {
//   apiKey: "AIzaSyCttTh1Gct2Yd1Vm2S5YNOxKLvcPfwFHjw",
//   authDomain: "denthub-19cfe.firebaseapp.com",
//   databaseURL: "https://denthub-19cfe.firebaseio.com",
//   projectId: "denthub-19cfe",
//   storageBucket: "denthub-19cfe.appspot.com",
//   messagingSenderId: "304563626947",
//   appId: "1:304563626947:web:d4bdddc07dcdbaca075376"
// };


// export const db = firebase
// .initializeApp({ projectId: 'denthub-19cfe' })
// .firestore();
// Get a Firestore instance

/* Bind firebase to your Vue instance */
//Vue.prototype.$firebase = firebase;

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

// Vue.use(firebase);
// Vue.use(vuefire);

// export const appFirestore = firebase.initializeApp(configOptions).firestore();

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from "firebase/app";

var firebaseConfig = {
  apiKey: "Firebase data",
  authDomain: "Firebase data",
  projectId: "Firebase data",
  storageBucket: "Firebase data",
  messagingSenderId: "Firebase data",
  appId: "Firebase data",
  measurementId: "Firebase data"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyBDepWRx-2QiNriZif3dGmLm1CNfvk0b_k',
  authDomain: 'play-vue-201911.firebaseapp.com',
  databaseURL: 'https://play-vue-201911.firebaseio.com',
  projectId: 'play-vue-201911',
  storageBucket: 'play-vue-201911.appspot.com',
  messagingSenderId: '783440684054'
}
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

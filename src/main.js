//  Vue Intance
import Vue from 'vue'
import App from './App.vue'
//  Vue Router
import VueRouter from 'vue-router'
//  Router Config
import router from './router'
//  Scroll package
import VueChatScroll from 'vue-chat-scroll'
//  Vuex Store
import store from './store'
//  Google map package
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyA6_9edTGKTwzcIDFFhTCBnjBbgR3Q3h5k",
    libraries: "places" // necessary for places input
  }
});
Vue.use(VueRouter)
Vue.use(VueChatScroll)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

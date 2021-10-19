import Vue from "vue";
import Home from "./view/Home.vue";
import test from "./view/Test.vue";
import Admin from "./view/Admin.vue";
import VueRouter from "vue-router";
import firebase from "firebase";
import Auth from "./view/Firebaseauth.vue";
import store from './store'

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes: [
    // dynamic segments start with a colon
    {
      path: "/",
      component: Home,
    },
    {
      path: "/admin",
      component: Admin,
      beforeEnter: (to, from, next) => {
        firebase.auth().onAuthStateChanged(function(user) {

          firebase.firestore().collection("adminUser").doc();
          if (user) {

              store.dispatch("Login"); 
              next();
          } else {
              next("/");
          }
        });
      }
    },
    {
      path: "/test",
      component: test,
    },
    {
      path: "/auth",
      component: Auth,
     
    }

  ],
});

export default router;

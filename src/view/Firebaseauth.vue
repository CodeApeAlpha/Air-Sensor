<template>
  <div>
    <Nav />
    <div class="container mt-5">
      <section id="firebaseui-auth-container"></section>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import Nav from "../components/NavBar.vue";
export default {
  mounted() {
    // Firebase Auth UI Config
    let ui = firebaseui.auth.AuthUI.getInstance();
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth());
    }
    let uiConfig = {
      signInSuccessUrl: "/admin",
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      ],
    };
    ui.start("#firebaseui-auth-container", uiConfig);
  },
  components: {
    Nav,
  },
  computed: {
    path() {
      return this.$router.currentRoute.fullPath;
    },
  },
};
</script>

<style></style>

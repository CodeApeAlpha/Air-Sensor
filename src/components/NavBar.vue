<template>
  <nav class="navbar navbar-dark bg-primary navbar-expand-sm">
    <router-link class="navbar-brand" to="/"
      >Air-Sensor<i class="fab fa-cloudsmith fa-lg"></i
    ></router-link>
    <button 
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbar-list-2"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbar-list-2">
      <ul class="navbar-nav" v-if="currentPath != path">
        <li class="nav-item" v-if="userLog">
          <router-link class="nav-link" to="/admin" href>
            <div class="row">
              <div class="col-1">
                <i class="fas fa-chevron-left"></i>
              </div>
              <div class="col-2">
                DashBoard
              </div>
            </div>
          </router-link>
        </li>
        <li class="nav-item" v-if="userLog">
          <div class="nav-link">
            <div class="row">
              <div class="col-1">
                <i class="fas fa-sign-out-alt"></i>
              </div>
              <div class="col-2">
                <a @click="Logout" href>Logout</a>
              </div>
            </div>
          </div>
        </li>
        <li class="nav-item" v-else>
          <div class="nav-link">
            <div class="row">
              <div class="col-1">
                <i class="fas fa-sign-in-alt"></i>
              </div>
              <div class="col-2">
                <a @click="Login" href>Login</a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      currentPath: this.$router.currentRoute.fullPath,
      path: "/auth",
    };
  },
  methods: {
    Logout() {
      this.$store.dispatch("Logout");
    },
    Login() {
      this.$store.dispatch("Login");
    },
    Admin() {
      this.$store.dispatch("Admin");
    },
  },
  computed: {
    userLog() {
      return this.$store.getters.User.userLog;
    },
    // CurrrentPath(){
    //   return this.currentPath= ;
    // }
  },
};
</script>

<style scoped>
.bg-custom-1 {
  background-color: #85144b;
}

.bg-custom-2 {
  background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);
}
.navbar {
  margin-bottom: 0px;
}
i {
  font-size: 20px;
}
</style>

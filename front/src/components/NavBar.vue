<template>
  <div id="nav">
   |
    <span v-if="isLoggedIn">
        <router-link to="/validation">validation</router-link>|
      <a @click="logout">Logout</a>|
    </span>
    <span v-else>
      <router-link to="/">Login</router-link>
    </span>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    async logout() {
      await this.$store.dispatch("LogOut");
      this.$router.push("/");
    },
  },
};
</script>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

a:hover {
  cursor: pointer;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

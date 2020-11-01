<template>
  <header class="bg-gray-800 sticky top-0 px-8 py-6 text-white">
    <span class="font-bold">Biduwe</span>
    <span class="float-right text-white">
      <span v-show="user.name"
        >Hey {{ user.name }},
        <a href="logout" @click.prevent="logout" class="font-semibold"
          >Signout</a
        ></span
      >
    </span>
  </header>
</template>

<script>
import AuthService from "../services/AuthService";

export default {
  name: "Navbar",
  methods: {
    async logout() {
      const auth = new AuthService();
      const status = await auth.logout();
      if (status) {
        return this.$router.push({ name: "Home" });
      }
    },
  },
  computed: {
    user() {
      const data = localStorage.getItem("user");
      return data ? JSON.parse(data) : {};
    },
  },
};
</script>

<style>
</style>
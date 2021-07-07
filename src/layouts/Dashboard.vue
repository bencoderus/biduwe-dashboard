<template>
  <div>
    <div class="w-full">
      <div
        class="md:w-64 fixed invisible md:visible bg-gray-200 text-sm font-semibold h-screen text-dark p-8"
      >
        <router-link :to="{ name: 'Dashboard' }">
          <div class="px-8 mt-2 py-4">
            <span class="hover:text-blue-700"> Home </span>
            <span class="float-right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="w-2 mt-2"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </div>
        </router-link>

        <router-link :to="{ name: 'Project' }">
          <div class="px-8 mt-2 py-4">
            <span class="hover:text-blue-700"> Works </span>
            <span class="float-right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="w-2 mt-2"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </div>
        </router-link>

        <router-link :to="{ name: 'Article' }">
          <div class="px-8 mt-2 py-4">
            <span class="hover:text-blue-700"> Articles </span>
            <span class="float-right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="w-2 mt-2"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </div>
        </router-link>

        <router-link :to="{ name: 'Message' }">
          <div class="px-8 mt-2 py-4">
            <span class="hover:text-blue-700"> Messages </span>
            <span class="float-right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="w-2 mt-2"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </div>
        </router-link>

        <a href="logout" @click.prevent="logout">
          <div class="px-8 mt-2 py-4">
            <span class="hover:text-blue-700"> Logout </span>
            <span class="float-right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="w-2 mt-2"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </div>
        </a>
      </div>
      <div class="md:ml-64 p-4">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import AuthService from "../services/AuthService";

export default {
  name: "DashboardLayout",
  methods: {
    async logout() {
      const auth = new AuthService();
      const status = await auth.logout();
      if (status) {
        return this.$router.push({ name: "Home" });
      }
    },
  },
};
</script>

<style>
</style>
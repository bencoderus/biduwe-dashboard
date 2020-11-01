<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
    <router-link :to="{ name: 'Project' }">
      <div
        class="bg-blue-900 hover:bg-blue-700 shadow-lg text-white rounded m-2"
      >
        <div class="p-8">
          <span class="font-semibold">Works</span>
          <span
            class="font-semibold visible md:invisible lg:visible xl:visible float-right"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-10 opacity-50 text-white"
            >
              <path
                fill-rule="evenodd"
                d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
              <path
                d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
              /></svg
          ></span>
        </div>
        <div class="px-8 py-4 border-red-600 text-sm">
          View
          <span class="float-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="text-white w-3"
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
      </div>
    </router-link>
    <router-link :to="{ name: 'Article' }">
      <div
        class="bg-blue-900 hover:bg-blue-700 shadow-lg text-white rounded m-2"
      >
        <div class="p-8">
          <span class="font-semibold">Articles</span>
          <span
            class="font-semibold visible md:invisible lg:visible xl:visible float-right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-10 opacity-50 text-white"
            >
              <path
                fill-rule="evenodd"
                d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </div>
        <div class="px-6 py-4 border-red-600 text-sm">
          View
          <span class="float-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="text-white w-3"
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
      </div>
    </router-link>
    <router-link :to="{ name: 'Message' }">
      <div
        class="bg-blue-900 hover:bg-blue-700 shadow-lg text-white rounded m-2"
      >
        <div class="p-8">
          <span class="font-semibold">Messages</span>
          <span
            class="font-semibold visible md:invisible lg:visible xl:visible float-right"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="opacity-50 text-white w-10"
            >
              <path
                fill-rule="evenodd"
                d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                clip-rule="evenodd"
              /></svg
          ></span>
        </div>
        <div class="px-6 py-4 border-red-600 text-sm">
          View
          <span class="float-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="text-white w-3"
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
      </div>
    </router-link>
    <a href="logout" @click.prevent="logout">
      <div
        class="bg-blue-900 hover:bg-blue-700 shadow-lg text-white rounded m-2"
      >
        <div class="p-8">
          <p class="font-semibold">
            <span>Logout</span>
            <span class="float-right visible md:invisible lg:visible xl:visible"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="opacity-50 text-white w-10"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                /></svg
            ></span>
          </p>
        </div>
        <div class="px-6 py-4 border-red-600 text-sm">
          View
          <span class="float-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="text-white w-3"
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
      </div>
    </a>
  </div>
</template>

<script>
import AuthService from "../../services/AuthService";

export default {
  name: "DashboardMenu",
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
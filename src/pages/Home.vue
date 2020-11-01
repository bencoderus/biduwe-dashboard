<template>
  <div class="flex items-center justify-center h-screen">
    <div class="max-w-sm mx-auto overflow-hidden rounded shadow-lg">
      <div class="px-6 py-4">
        <div class="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            class="text-blue-800 text-sm w-24"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="font-bold text-xl flex justify-center mb-2">Login</div>
      </div>
      <form @submit.prevent="login">
        <div class="px-6">
          <div class="mb-2">
            <label for="email">Email Address</label>
            <input
              v-model="user.email"
              type="email"
              name="email"
              autocomplete="email"
              class="px-4 py-2 w-full m-2 border border-bg-gray-100 text-black"
              placeholder="Email"
              required
            />
          </div>

          <div class="mb-3">
            <label for="email" class="float-left">Password</label>
            <input
              v-model="user.password"
              type="password"
              name="password"
              autocomplete="current-password"
              class="px-4 py-2 w-full tracking-wide m-2 border border-bg-gray-100 text-black"
              placeholder="Password"
              required
            />
          </div>
        </div>

        <div class="flex justify-center mb-6 mt-2 display-block">
          <button
            :disabled="sending"
            type="submit"
            class="shadow-md rounded-full bg-blue-800 text-white py-3 px-10 hover:bg-blue-700"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import RequestService from "../services/RequestService";
export default {
  name: "Home",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      sending: false,
    };
  },
  methods: {
    async login() {
      NProgress.start();
      this.sending = true;

      const request = new RequestService();
      const response = await request.post(
        this.$config.api.url + "/auth/login",
        this.user
      );

      NProgress.done();
      this.sending = false;

      if (!response.status) {
        return this.$toast.error(response.message);
      }

      this.authUser(request, response.data);
      this.$toast.success(response.message);
      return this.$router.push({ name: "Dashboard" });
    },

    authUser(request, data) {
      const token = "Bearer " + data.token;
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", token);
      request.setAuthorizationToken(token);
    },
  },
};
</script>
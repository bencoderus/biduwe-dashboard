import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from "axios";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import "./filters";

import Config from "../src/config";

axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");

Vue.use(Toast, {});

Vue.config.productionTip = false;

Vue.prototype.$config = Config;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

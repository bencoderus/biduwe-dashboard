import Vue from "vue";
import VueRouter from "vue-router";
import routes from "../router/routes";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  scrollBehavior() {
    return {
      x: 0,
      y: 0,
    };
  },
  routes,
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});

router.afterEach((to, from) => {
  NProgress.done();
});

// Router middleware
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requireGuest)) {
    if (!localStorage.getItem("token")) {
      next();
    } else {
      next({ name: "Dashboard" });
    }
  } else if (to.matched.some((record) => record.meta.requireAuth)) {
    if (localStorage.getItem("token")) {
      next();
    } else {
      next({ name: "Home" });
    }
  } else {
    next();
  }
});

export default router;

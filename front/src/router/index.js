import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

import Login from "../views/Login";
import Validation from "../views/Validation";

Vue.use(VueRouter);

const routes = [
  
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: { guest: true },
  },
  {
    path: "/Validation",
    name: "Validation",
    component: Validation,
    meta: { requiresAuth: true },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.guest)) {
    if (store.getters.isAuthenticated) {
      next("/validation");
      return;
    }
    next();
  } else {
    next();
  }
});

export default router;

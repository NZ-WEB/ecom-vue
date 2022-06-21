import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Analitics from "../views/AnaliticsView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "analitics",
    component: Analitics,
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LoginView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

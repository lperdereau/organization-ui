import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./views/Home.vue";
import Partners from "./views/resources/Partners.vue";
import Customers from "./views/resources/Customers.vue";
import Users from "./views/resources/Users.vue";
import Applications from "./views/resources/Applications.vue";
import About from "./views/About.vue";

export const routes_resources = [
  {
    path: "/apps",
    component: Applications,
    icon: "mdi-home",
    title: "Applications",
  },
  { path: "/users", component: Users, icon: "mdi-home", title: "Users" },
  {
    path: "/customers",
    component: Customers,
    icon: "mdi-home",
    title: "Customers",
  },
  {
    path: "/partners",
    component: Partners,
    icon: "mdi-home",
    title: "Partners",
  },
];

export const routes = [
  { path: "/", component: Home, icon: "mdi-home", title: "Home" },
  { path: "/about", component: About, icon: "mdi-information", title: "About" },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...routes, ...routes_resources],
});

export default router;

import { createRouter, createWebHistory } from "vue-router";

import ContactPage from "@/view/ContactPage.vue";
import HeaderPage from "@/view/HeaderPage.vue";

const routes = [
  {
    path: '/',
    component: HeaderPage
  },
  {
    path: '/contact',
    component: ContactPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

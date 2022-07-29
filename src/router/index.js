import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home.vue";
import Data from "../components/MasterData.vue";
import Detail from "@/components/DetailData";
import Edit from "@/components/EditData";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/detail/:id",
    component: Detail,
  },
  {
    path: "/edit/:id",
    component: Edit,
  },
  {
    path: "/data",
    component: Data,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw,
  RouterOptions,
} from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/map",
  },
  {
    path: "/map",
    component: () => import("../views/MapView.vue"),
  },
  {
    path:"/chat",
    component:() => import("../views/Chat.vue")
  }
];
const routerOptions: RouterOptions = {
  history: createWebHashHistory(),
  routes,
};

export const router = createRouter(routerOptions);

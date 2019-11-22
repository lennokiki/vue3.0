import Vue from "vue";
import VueRouter from "vue-router";
import { constantRoutes } from "./routes";
import store from '@/store';

Vue.use(VueRouter);

const createRouter = () => new VueRouter({
  mode: "history",
  routes: constantRoutes,
  scrollBehavior: () => ({ y: 0 }),
})
let hasAddRoutes = false;
const router = createRouter();
// export function resetRouter() {
//   const newRouter = createRouter();
//   router.matcher = newRouter.matcher;
// }

router.beforeEach(async (to, from, next) => {
  if (!hasAddRoutes) {
    try {
      const routes = await store.dispatch('permission/generateRoutes');
      hasAddRoutes = true;
      router.addRoutes(routes);
      next({ ...to, replace: true })
    } catch (err) {
      next('/dashboard');
    }
  } else {
    next();
  }
})

router.afterEach(() => {
  // finish progress bar
})

export default router;

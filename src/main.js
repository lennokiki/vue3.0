import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import directives from './directives';
import filters from './filters';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css/normalize.css';
import '@/assets/styles/index.scss';

Vue.config.productionTip = false;
Vue.use(ElementUI);

/* 自定义指令 */
directives(Vue);

/* 自定义过滤器 */
filters(Vue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

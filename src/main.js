import Vue from "vue";
import App from "./App.vue";
import VueRouter from 'vue-router';

Vue.use(VueRouter);
import AOS from 'aos'
import 'aos/dist/aos.css'
Vue.config.productionTip = false;

const router = new VueRouter({
  routes: []
})

new Vue({
  render: (h) => h(App),
  mounted() {
    AOS.init({
      once: true
    })
  },
  router
}).$mount("#app");

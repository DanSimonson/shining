import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import VueScrollReveal from "vue-scroll-reveal";

Vue.component("Header", Header);
Vue.component("Footer", Footer);
Vue.use(VueScrollReveal, {
  duration: 800,
  scale: 1,
  distance: "50px"
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

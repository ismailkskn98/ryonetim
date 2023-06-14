import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import './assets/css/styles.scss'
import VueAgile from 'vue-agile'
import {MotionPlugin} from "@vueuse/motion";
import appHeader from "@/components/Shared/appHeader.vue";
import appFooter from "@/components/Shared/appFooter.vue";
import BannerHeader from "@/components/HizmetlerPageElements/BannerHeader.vue";
import SideBar from "@/components/HizmetlerPageElements/SideBar.vue";
const app = createApp(App)
app.use(router);
app.use(VueAgile);
app.use(MotionPlugin);
app.component("appHeader", appHeader);
app.component("appFooter", appFooter);
app.component("BannerHeader", BannerHeader);
app.component("SideBar", SideBar);
app.mount('#app');

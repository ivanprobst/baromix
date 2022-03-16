import { createApp } from "vue";
import VCalendar from "v-calendar";
import "v-calendar/dist/style.css";
import { createPinia } from "pinia";
import { createRouter, createWebHashHistory } from "vue-router";

import App from "./App.vue";
import Form from "./components/PageForm.vue";
import Summary from "./components/PageSummary.vue";

const routes = [
  { path: "/", component: Form },
  { path: "/summary", component: Summary },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(VCalendar, {});
app.use(createPinia());
app.use(router);
app.mount("#app");

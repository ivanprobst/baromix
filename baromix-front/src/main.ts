import { createApp } from "vue";
import VCalendar from "v-calendar";
import { createPinia } from "pinia";
import "v-calendar/dist/style.css";

import App from "./App.vue";

const app = createApp(App);
app.use(VCalendar, {});
app.use(createPinia());
app.mount("#app");

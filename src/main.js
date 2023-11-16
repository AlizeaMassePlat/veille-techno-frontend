import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.mount("#app");

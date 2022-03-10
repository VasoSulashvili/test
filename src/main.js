import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import Store from "./store/Store";
import router from "./router";
import "./assets/css/index.css";

const app = createApp(App);
const store = createStore(Store);
app.use(router);
app.use(store);

app.mount("#app");

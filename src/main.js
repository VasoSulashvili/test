import { createApp } from "vue";
// import { createStore } from "vuex";
import App from "./App.vue";
import { store } from "./store/Store";
import router from "./router/index";
import BaseLayout from "./components/layouts/BaseLayout.vue";
import "./assets/css/index.css";
import TestView from "./views/TestView.vue";

const app = createApp(App);
// const store = createStore(Store);

app.component("BaseLayout", BaseLayout);
app.component("TestView", TestView);
app.use(router);
app.use(store);

app.mount("#app");

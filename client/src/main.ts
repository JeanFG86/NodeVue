import { createApp } from "vue";
import BoardServiceHttp from "./services/BoardServiceHttp";
//@ts-ignore
import App from "./App.vue";

const app = createApp(App);
app.provide("boardService", new BoardServiceHttp());
app.mount("#app");

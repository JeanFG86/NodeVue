import { createApp } from "vue";
import BoardServiceHttp from "./services/BoardServiceHttp";
//@ts-ignore
import App from "./App.vue";
import AxiosAdapter from "./infra/http/AxiosAdapter";

const app = createApp(App);
const httpClient = new AxiosAdapter();
//const httpClient = new FetchAdapter();
const baseUrl = "http://localhost:3000";
app.provide("boardService", new BoardServiceHttp(httpClient, baseUrl));
app.mount("#app");

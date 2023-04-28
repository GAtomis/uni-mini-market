import { createSSRApp } from "vue";
import App from "./App.vue";
import '@/styles/global.scss'
import uviewPlus from 'uview-plus'

export function createApp() {
  const app = createSSRApp(App);
  app.use(uviewPlus)
  return {
    app,
  };
}

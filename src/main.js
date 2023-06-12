import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { registerGlobalAsyncComponents } from '../utils/imports.js'
import router from '../routers/index.js'
import './assets/style.css'
import App from './App.vue'



var app = createApp(App);
var pinia = createPinia();
app.use(pinia);
app.use(router);
registerGlobalAsyncComponents(app);
app.mount('#app');


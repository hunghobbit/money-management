import { createApp } from 'vue'
import { registerGlobalAsyncComponents } from '../utils/imports.js'
import router from '../routers/index.js'
import './assets/style.css'
import App from './App.vue'



var app = createApp(App);
app.use(router);
registerGlobalAsyncComponents(app);
app.mount('#app');


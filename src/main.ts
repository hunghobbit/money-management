
import { onAuthStateChanged } from "firebase/auth"
import { createPinia } from 'pinia'
import { registerGlobalAsyncComponents } from '../utils/imports.js'
import { auth } from '../configs/firebase'
import router from '../routers'
import './assets/style.css'
import App from './App.vue'
import { createApp } from "vue"
import globalComponents from '~/plugins/globalComponents';


var app;

onAuthStateChanged(auth, (_user) => {
    if (!app) {
        app = createApp(App)
        app.use(router)
        app.use(createPinia())
        registerGlobalAsyncComponents(app)
        app.use(globalComponents)
        app.mount('#app')
    }
});
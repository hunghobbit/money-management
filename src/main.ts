
import { onAuthStateChanged } from "firebase/auth"
import { createPinia } from 'pinia'
import { registerGlobalAsyncComponents } from '../utils/imports.js'
import { auth } from '../configs/firebase.js'
import router from '../routers/index.js'
import './assets/style.css'
import App from './App.vue'
import { createApp} from "vue"



var app;

onAuthStateChanged(auth, (_user) => {
    if(!app) {
        app = createApp(App)
        app.use(router)
        app.use(createPinia())
        registerGlobalAsyncComponents(app)
        app.mount('#app')
    }
});
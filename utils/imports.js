import { defineAsyncComponent } from 'vue'

export function registerGlobalAsyncComponents(app) {
    app.component('common-layout', defineAsyncComponent(() => import('../src/layouts/CommonLayout.vue')));
    app.component('authentication-layout', defineAsyncComponent(() => import('../src/layouts/AuthenticationLayout.vue')));
}
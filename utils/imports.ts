import { defineAsyncComponent, App } from 'vue'

export function registerGlobalAsyncComponents(app: App) {
    app.component('common-layout', defineAsyncComponent(() => import('../src/layouts/CommonLayout.vue')));
    app.component('authentication-layout', defineAsyncComponent(() => import('../src/layouts/AuthenticationLayout.vue')));
}

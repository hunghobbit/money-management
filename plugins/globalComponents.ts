import type { App } from "vue"
import SimpleDropdown from "~/src/components/SimpleDropdown.vue"
export default {
    install : (app: App, options: any) => {
        app.component(SimpleDropdown.name, SimpleDropdown);
    }
}
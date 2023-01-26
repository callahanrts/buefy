
export const use = (plugin) => {
    if (typeof window !== 'undefined' && window.Vue) {
        window.Vue.use(plugin)
    }
}

export const registerComponent = (Vue, component) => {
    Vue.component(component.name, component)
}

export const registerComponentProgrammatic = (app, property, component) => {
    if (!app.config.globalProperties.$buefy) app.config.globalProperties.$buefy = {}
    app.config.globalProperties.$buefy[property] = component
}

import YButton from './components/YButton.vue'

export default {
    install: (app, options) => {
        app.component('yButton', YButton)
    }
}
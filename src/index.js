import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'

import slider from './components/slider.vue'
import toast from './components/toast.vue'
import uploader from './components/uploader.vue'
import popbox from './components/popbox.vue'
import icon from './components/icon.vue'

import './app.scss'

// global registration components
Vue.component('slider', slider)
Vue.component('toast', toast)
Vue.component('uploader', uploader)
Vue.component('popbox', popbox)
Vue.component('icon', icon)

Vue.use(VueI18n)

export default App

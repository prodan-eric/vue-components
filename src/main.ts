import { createApp } from 'vue'
import App from './App.vue'
import Slider from './components/slider/SliderConfig.vue'
import DatePicker from './components/date-picker/DatePickerConfig.vue'
import RenderButton from './components/render-button/RenderButtonConfig.vue'
import PanelContainer from './components/panel-container/PanelContainerConfig.vue'
import {createRouter, createWebHashHistory} from 'vue-router'


const routes = [
  { path: '/', component: App },
  { path: '/slider', component: Slider },
  { path: '/panel-container', component: PanelContainer},
  { path: '/render-button', component: RenderButton},
  { path: '/date-picker', component: DatePicker}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

createApp(App).use(router).mount('#app')
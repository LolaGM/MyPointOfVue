import { createApp } from 'vue'
import { createPinia } from 'pinia'
//anotamos aquí en main los import de BOOTSTRAP para usarlos en todo el proyecto:
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

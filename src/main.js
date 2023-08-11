import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import i18next from './components/language/language.js';

import 'bootstrap-icons/font/bootstrap-icons.css'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

var app = createApp(App);
app.use(router)
app.use(i18next)

i18next.initializei18next().then(() =>
{
    app.mount('#app');
});

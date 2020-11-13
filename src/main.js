import { createApp } from 'vue'
import App from './App.vue'
import './assets/global.css'
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const app = createApp(App);

// The following setting enables animations for PrimeVue.
app.config.globalProperties.$primevue = { ripple: true };

app.mount('#app');


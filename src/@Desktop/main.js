import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/index.js';
import stores from '@/stores/index.js';
import 'element-plus/es/hooks/use-locale/index';
import 'uno.css';

const app = createApp(App);

app.use(router);
app.use(stores);
app.mount('#app');

export default app;

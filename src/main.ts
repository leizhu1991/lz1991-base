import { createApp } from 'vue'
import InlineSvg from 'vue-inline-svg';
import './style.css'
import App from './App.vue'
import components from './components';

const app = createApp(App)
  .use({
    install(app) {
      for (const key in components) {
        app.component(key, components[key]);
      }
    },
  })
  .component('inline-svg', InlineSvg);

app.mount('#app');

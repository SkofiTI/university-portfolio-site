import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';

router.beforeEach((to, from, next) => {
    const pageTitle = to.meta.title;

    if (pageTitle) {
        document.title = `Персональный сайт Аракеляна Сурена. ${pageTitle}`;
    } else {
        document.title = 'Персональный сайт Аракеляна Сурена';
    }
    
    next();
});

const app = createApp(App);
app.use(router);
app.mount('#app');
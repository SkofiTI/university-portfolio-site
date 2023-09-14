import { createRouter, createWebHistory } from 'vue-router';
import Navbar from '../components/Navbar.vue';
import Home from '../views/HomeComponent.vue';
import About from '../views/AboutComponent.vue';
import Interest from '../views/InterestComponent.vue';
import Education from '../views/EducationComponent.vue';
import PhotoAlbum from '../views/PhotoAlbumComponent.vue';
import Contact from '../views/ContactComponent.vue';
import Test from '../views/TestComponent.vue';


const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default: Home,
      navbar: Navbar,
    },
    meta: { title: 'Главная страница' }
  },
  {
    path: '/about',
    name: 'about',
    components: {
      default: About,
      navbar: Navbar,
    },
    meta: { title: 'Обо мне' }
  },
  {
    path: '/interests',
    name: 'interests',
    components: {
      default: Interest,
      navbar: Navbar,
    },
    meta: { title: 'Мои интересы' }
  },
  {
    path: '/education',
    name: 'education',
    components: {
      default: Education,
      navbar: Navbar,
    },
    meta: { title: 'Учёба' }
  },
  {
    path: '/photo-album',
    name: 'photo-album',
    components: {
      default: PhotoAlbum,
      navbar: Navbar,
    },
    meta: { title: 'Фотоальбом' }
  },
  {
    path: '/contact',
    name: 'contact',
    components: {
      default: Contact,
      navbar: Navbar,
    },
    meta: { title: 'Контакт' }
  },
  {
    path: '/test',
    name: 'test',
    components: {
      default: Test,
      navbar: Navbar,
    },
    meta: { title: 'Тест по БЖД' }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});


export default router;
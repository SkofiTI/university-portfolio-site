import { createRouter, createWebHistory } from 'vue-router';
import Navbar from '../components/Navbar.vue';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Interest from '../views/Interest.vue';
import Education from '../views/Education.vue';
import PhotoAlbum from '../views/PhotoAlbum.vue';
import Contact from '../views/Contact.vue';
import Test from '../views/Test.vue';


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
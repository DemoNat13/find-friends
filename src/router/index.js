import Vue from 'vue';
import VueRouter from 'vue-router';
import FriendsSearch from '../components/FriendsSearch.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'friendssearch',
    component: FriendsSearch,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

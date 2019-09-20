import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import NotFound from './views/NotFound.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/grid',
      name: 'grid',
      component: () => import('./views/Grid.vue'),
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('./views/Test.vue'),
    },
    {
      path: '/bag',
      name: 'bag',
      component: () => import('./views/Bag.vue'),
    },
    {
      path: '/user-list',
      name: 'userList',
      component: () => import('./views/UserList.vue'),
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound
    }
  ],
});

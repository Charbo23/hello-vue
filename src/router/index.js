import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import NotFound from '@/views/NotFound.vue';

Vue.use(Router);
const About = () => import('@/views/About.vue');
const Grid = () => import('@/views/Grid.vue');
const Test = () => import('@/views/Test.vue');
const Bag = () => import('@/views/Bag.vue');
const UserList = () => import('@/views/UserList.vue');
const UserInfo = () => import('@/views/UserInfo.vue');
const HomeNews = () => import('@/components/HomeNews.vue');
const HomeMessage = () => import('@/components/HomeMessage.vue');
const Profile = () => import('@/components/Profile.vue');

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      children: [{
        path: '',
        name: 'home',
        redirect: 'news'
      }, {
        path: 'news',
        name: 'homeNews',
        component: HomeNews
      }, {
        path: 'message',
        name: 'homeMessage',
        component: HomeMessage
      }]
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/grid',
      name: 'grid',
      component: Grid,
    },
    {
      path: '/test',
      name: 'test',
      component: Test,
    },
    {
      path: '/bag',
      name: 'bag',
      component: Bag,
    },
    {
      path: '/user-list',
      name: 'userList',
      component: UserList,
    },
    {
      path: '/user-info/:userId',
      name: 'userInfo',
      component: UserInfo,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound
    }
  ],
});

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
      meta: { title: '首页' },
      children: [{
        path: '',
        name: 'home',
        redirect: 'news',
      }, {
        path: 'news',
        name: 'homeNews',
        component: HomeNews,
      }, {
        path: 'message',
        name: 'homeMessage',
        component: HomeMessage,
        meta: { title: '消息' },
      }]
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: { title: '关于' }
    },
    {
      path: '/grid',
      name: 'grid',
      component: Grid,
      meta: { title: 'Grid' }
    },
    {
      path: '/test',
      name: 'test',
      component: Test,
      meta: { title: 'Test' }
    },
    {
      path: '/bag',
      name: 'bag',
      component: Bag,
      meta: { title: '打气小游戏' }
    },
    {
      path: '/user-list',
      name: 'userList',
      component: UserList,
      meta: { title: '用户列表' }
    },
    {
      path: '/user-info/:userId',
      name: 'userInfo',
      component: UserInfo,
      meta: { title: '用户信息' }
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: { title: '用户资料' }
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound,
      meta: { title: '页面未找到' }
    }
  ],
});

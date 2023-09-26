import { createRouter, createWebHistory } from 'vue-router';
import useUserStore from '@/stores/modules/user.js';

// 导入路由模块
const modules = import.meta.glob('@/router/modules/*.js', { eager: true, import: 'default' });
const routes = Object.values(modules).flat();

// 创建 Router 实例
const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: (to, from, position) => (position || { left: 0, top: 0 }),
  routes: [
    ...routes,
    {
      path: '/index',
      redirect: '/',
    },
    {
      path: '/:pathMatch(.*)',
      redirect: '/'
    },
  ],
});

// 全局前置守卫
router.beforeEach(async (to, from) => {
  const userStore = useUserStore();

  // auth = 1 表示该页面需要登录才能访问
  if (to.meta.auth === 1 && to.name !== 'Login' && !userStore.isLogin) {
    return { name: 'Login' };
  }

  // auth = 2 表示该页面登录后不能访问
  if (to.meta.auth === 2 && userStore.isLogin) {
    return { name: 'Home' };
  }
});

export default router;

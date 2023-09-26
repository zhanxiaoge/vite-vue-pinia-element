import { clearRoutes, getRouter } from '@/router/utils.js';

export default clearRoutes([
  // 首页
  {
    path: '/',
    name: 'Home',
    component: getRouter(({ Desktop: 'DHome', Mobile: 'MHome' })[import.meta.env.DEVICE]),
  },
  // 登录
  {
    path: '/login',
    name: 'Login',
    component: getRouter(({ Desktop: 'DLogin', Mobile: 'MLogin' })[import.meta.env.DEVICE]),
    meta: { auth: 2 },
  },
  // 登出
  {
    path: '/logout',
    name: 'Logout',
    component: getRouter(({ Desktop: 'DLogout', Mobile: 'MLogout' })[import.meta.env.DEVICE]),
    meta: { auth: 1 },
  },
]);

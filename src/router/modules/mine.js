import { clearRoutes, getRouter } from '@/router/utils.js';

export default clearRoutes([
  // 我的
  {
    path: '/mine',
    name: 'Mine',
    component: getRouter(({ Desktop: 'DMine', Mobile: 'MMine' })[import.meta.env.DEVICE]),
    meta: { auth: 1 },
  },
  // 主页
  {
    path: '/mine/page',
    name: 'MinePage',
    component: getRouter(({ Desktop: 'DMinePage', Mobile: 'MMinePage' })[import.meta.env.DEVICE]),
  },
]);

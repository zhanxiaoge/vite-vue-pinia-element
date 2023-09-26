// 获取单个路由
export function getRouter (route) {
  if (route) {
    return () => {
      return import(`@/@${import.meta.env.DEVICE}/${route}/${route}.vue`);
    };
  }
};

// 清理路由列表
export function clearRoutes (routes) {
  return routes.filter(item => item.component);
};

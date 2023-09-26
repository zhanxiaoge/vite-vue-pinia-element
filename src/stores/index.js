import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

export default {
  install: app => {
    // 创建 Pinia 实例
    const pinia = createPinia();

    // 安装数据持久化
    pinia.use(piniaPluginPersistedstate);

    // 安装 Pinia 实例
    app.use(pinia);
  },
};

import axios from 'axios';
import router from '@/router/index.js';
import useUserStore from '@/stores/modules/user.js';

const service = axios.create({ baseURL: import.meta.env.VITE_BASE_APIHOST });
const userStore = useUserStore();

service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

service.interceptors.response.use(
  response => {
    // 请求成功
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    }
    // 请求需要授权
    else if (response.status === 401) {
      userStore.doLogout();
      router.push({ name: 'Login', replace: true });
    }
    // 未知错误
    else {
      ElMessage({
        message: response.statusText || '系统出错',
        type: 'error',
      });
    }

    return Promise.reject(response);
  },
  error => {
    return Promise.reject(error);
  },
);

export default service;

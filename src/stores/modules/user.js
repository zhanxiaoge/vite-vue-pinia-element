// 用户状态管理
const store = defineStore('user', {
  state: () => ({
    token: '',
  }),

  getters: {
    // 是否登录
    isLogin () {
      return !!this.token;
    },
  },

  actions: {
    // 登录成功
    doLogin (data) {
      this.token = data;
    },

    // 退出登录
    doLogout () {
      this.token = '';
    },
  },

  persist: true,
});

import.meta.hot && import.meta.hot.accept(acceptHMRUpdate(store, import.meta.hot));

export default store;

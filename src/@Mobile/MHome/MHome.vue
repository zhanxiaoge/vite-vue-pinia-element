<script setup>
import useUserStore from '@/stores/modules/user.js';
import service from '@/utils/request';

const userStore = useUserStore();

// 发起一个网络请求
service({ method: 'get', url: '/api/timezone/Asia/Shanghai' }).then(console.log);
</script>

<template>
  <div class="home">
    <div class="rectangle1">100*100</div>
    <div class="rectangle2">375*100</div>
    <MTitle title="Mobile 首页" />
    <router-link to="/mine/page">
      <el-button type="primary" :link="true">Mobile 主页</el-button>
    </router-link>
    <template v-if="userStore.token">
      <router-link to="/mine">
        <el-button type="primary" :link="true">Mobile 我的</el-button>
      </router-link>
      <router-link to="/logout">
        <el-button type="danger" :link="true">Mobile 退出</el-button>
      </router-link>
    </template>
    <template v-else>
      <router-link to="/login">
        <el-button type="primary" :link="true">Mobile 登录</el-button>
      </router-link>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  line-height: 2;
}
.rectangle1 {
  margin: 10px auto;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  color: #ffffff;
  background: #000000;
}
.rectangle2 {
  margin: 10px auto;
  width: 375px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  color: #ffffff;
  background: #000000;
}
</style>

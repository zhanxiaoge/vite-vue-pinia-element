<script setup>
import useUserStore from '@/stores/modules/user.js';

const userStore = useUserStore();
</script>

<template>
  <div class="mine-page">
    <DTitle title="Mobile 主页" />
    <router-link to="/home">
      <el-button type="primary" :link="true">Mobile 首页</el-button>
    </router-link>
    <template v-if="userStore.token">
      <router-link to="/mine">
        <el-button type="primary" :link="true">Mobile 我的</el-button>
      </router-link>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.mine-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  line-height: 2;
}
</style>

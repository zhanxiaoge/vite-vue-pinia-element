<script setup></script>

<template>
  <div class="mine">
    <DTitle title="Desktop 我的" />
    <router-link to="/home">
      <el-button type="primary" :link="true">Desktop 首页</el-button>
    </router-link>
    <router-link to="/mine/page">
      <el-button type="primary" :link="true">Desktop 主页</el-button>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.mine {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  line-height: 2;
}
</style>

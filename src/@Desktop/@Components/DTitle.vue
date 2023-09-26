<script setup>
// 接收参数
const props = defineProps({
  // 标题
  title: { type: String, default: '' },
});
</script>

<template>
  <div class="title">
    <el-icon>
      <i-ep-location />
    </el-icon>
    <span>当前位置: {{title}}</span>
  </div>
</template>

<style lang="scss">
.title {
  display: flex;
  align-items: center;
  font-size: 18px;
}
</style>

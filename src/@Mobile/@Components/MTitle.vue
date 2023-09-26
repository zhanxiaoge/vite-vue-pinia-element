<script setup>
// 接收参数
const props = defineProps({
  // 标题
  title: { type: String, default: '' },
});
</script>

<template>
  <div class="title">当前位置: {{title}}</div>
</template>

<style lang="scss">
.title {
  font-size: 18px;
}
</style>

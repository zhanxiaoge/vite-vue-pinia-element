<script setup>
import useUserStore from '@/stores/modules/user.js';

const userStore = useUserStore();

userStore.doLogin('123456');

useRouter().push({ name: 'Home', replace: true });
</script>

<template>
  <div class="login"></div>
</template>

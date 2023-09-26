<script setup>
import useUserStore from '@/stores/modules/user.js';

const userStore = useUserStore();

userStore.doLogout();

useRouter().push({ name: 'Home', replace: true });
</script>

<template>
  <div class="logout"></div>
</template>

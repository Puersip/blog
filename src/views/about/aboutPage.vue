<template>
  <div>{{ userInfo.username }}</div>
  <div>{{ userInfo.age }}</div>
</template>

<script setup>
import { ref, onActivated } from 'vue';
import { getUserInfo } from '@/api/user.js';

const userInfo = ref({});

onActivated(() => {
  console.log('onActivated');
  getData();
});

function getData() {
  getUserInfo().then((res) => {
    userInfo.value = res.data;
  });
}
</script>

<style lang="scss" scoped></style>

<template>
  <NavBar></NavBar>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script setup>
import NavBar from '@/components/layout/NavBar.vue';
</script>

<style lang="scss" scoped></style>

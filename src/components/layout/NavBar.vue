<template>
  <div class="navbar">
    <div class="navbar-left">{{ baseTitle }}</div>
    <div class="navbar-center">
      <router-link to="/"
        ><TheIcon icon="iconamoon:home-fill" />首页</router-link
      >
      <router-link to="/category"
        ><TheIcon icon="tabler:category-filled" />分类</router-link
      >
      <router-link to="/archives"
        ><TheIcon icon="ic:round-view-timeline" />归档</router-link
      >
      <router-link to="/links"
        ><TheIcon icon="ri:links-line" />友人帐</router-link
      >
    </div>
    <div class="navbar-right">
      <a :href="githubAddress" target="_blank" rel="noopener noreferrer">
        <TheIcon icon="akar-icons:github-fill" />
      </a>
    </div>
  </div>
</template>

<script setup>
import { defineOptions } from 'vue';

defineOptions({ name: 'NavBar' });

const baseTitle = import.meta.env.VITE_TITLE;
const githubAddress = import.meta.env.VITE_GITHUB;
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  overflow: hidden;
  text-align: center; /* 文字居中 */
  background-color: #333;
}

.navbar-left {
  flex: 0.2;
  font-weight: bold;
  color: #f2f2f2;
}

.navbar-center {
  display: flex;
  flex: 0.6;
  justify-content: center;
}

.navbar-right {
  flex: 0.2;
}

.navbar a,
.navbar-right a {
  display: inline-block;
  padding: 14px 16px;
  line-height: 21px;
  color: #f2f2f2;
  text-decoration: none;
  transition: background-color 0.3s;
}

.navbar a:hover,
.navbar-right a:hover {
  color: black;
  background-color: #ddd;
}

/* 添加一些顶部间距，以避免页面内容被导航栏遮挡 */
body {
  margin-top: 60px; /* 导航栏的高度 */
}
</style>

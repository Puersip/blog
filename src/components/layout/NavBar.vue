<template>
  <div class="container">
    <div class="navbar">
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
        ><TheIcon icon="ri:links-line" />友链</router-link
      >
    </div>
  </div>
</template>

<script setup>
import { defineOptions } from 'vue';

defineOptions({ name: 'NavBar' });
</script>

<style scoped>
.container {
  padding: 20px;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0; /* 设置一个较大的 z-index 值，确保导航栏位于其他页面元素之上 */
  z-index: 1000; /* 确保 navbar 在页面上其他元素的前面 */
  width: 100%;
  overflow: hidden;
  text-align: center; /* 文字居中 */
  background-color: #333;
}

.navbar a {
  display: inline-block;
  padding: 14px 16px;
  line-height: 21px;
  color: #f2f2f2;
  text-decoration: none;
  transition: background-color 0.3s; /* 添加选择特效 */
}

.navbar a:hover {
  color: black;
  background-color: #ddd;
}

/* 添加一些顶部间距，以避免页面内容被导航栏遮挡 */
body {
  margin-top: 60px; /* 导航栏的高度 */
}
</style>

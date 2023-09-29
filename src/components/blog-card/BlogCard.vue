<template>
  <div class="blog-card">
    <h2>{{ props.blog.title }}</h2>
    <p>{{ props.blog.summary }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  blog: {
    type: Object,
    default: null,
  },
});
</script>

<style lang="scss" scoped>
.blog-card {
  // border: 1px solid #ccc;
  border-radius: 10px;
  padding: 15px;
  margin: 15px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column; /* 将卡片竖直排列 */
  width: 50vw; /* 占整个屏幕的三分之一 */
  height: 25vh; /* 占四分之一的屏幕高度 */
  box-sizing: border-box; /* 包含内边距和边框在内的盒模型 */
  transition: box-shadow 0.5s ease; /* 添加阴影变化的过渡效果，持续时间为0.5秒 */
}

.blog-card h2 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.blog-card p {
  color: #555;
}

.blog-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* 悬停时的阴影效果 */
  cursor: pointer; /* 鼠标悬停时变成手形状 */
}
</style>

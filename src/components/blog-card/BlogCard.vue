<template>
  <div :class="{ 'blog-card': true }">
    <router-link :to="'/blog/' + props.blog.id">
      <h2>{{ props.blog.title }}</h2>
    </router-link>
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
  padding: 15px 25px;
  margin: 15px;
  align-items: center;
  // background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column; /* 将卡片竖直排列 */
  width: 50vw; /* 占整个屏幕的二分之一 */
  min-width: 250px; /* 固定最小的宽度 */
  height: 25vh; /* 占四分之一的屏幕高度 */
  min-height: 200px; /* 固定最小的高度 */
  box-sizing: border-box; /* 包含内边距和边框在内的盒模型 */
  transition: box-shadow 0.5s ease; /* 添加阴影变化的过渡效果，持续时间为0.5秒 */
}

.blog-card h2 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  text-align: left; /* 文字靠左对齐 */
  transition:
    font-size 0.3s,
    margin-bottom 0.3s,
    color 0.3s; /* 添加过渡效果，时长为0.3秒 */
}

.blog-card h2:hover {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #287ec9;
  cursor: pointer; /* 鼠标悬停时变成手形状 */
}

.blog-card p {
  height: 100%;
  // color: #555;
  text-align: left; /* 文字靠左对齐 */
}

.blog-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* 悬停时的阴影效果 */
}

.blog-card p {
  font-size: 14px;
  margin: 10px;
  padding: 10px;
}
</style>

<template>
  <div :class="{ 'blog-card': true, 'dark-mode': props.isDarkMode }">
    <router-link :to="'/blog/' + props.blog.id">
      <h2>{{ props.blog.title }}</h2>
    </router-link>
    <div class="icon">
      <TheIcon
        icon="material-symbols:calendar-month"
        style="font-size: 13px"
      ></TheIcon
      ><span>发表于 {{ props.blog.createTime }}</span>
    </div>
    <p>{{ props.blog.summary }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  blog: {
    type: Object,
    default: null,
  },
  isDarkMode: {
    type: Boolean,
    default: true,
  },
});
</script>

<style lang="scss" scoped>
.blog-card {
  border-radius: 10px;
  padding: 15px 25px;
  margin: 15px;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  background-color: #fbfbfb;
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
  color: #242424;
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

.blog-card .icon {
  line-height: 13px;
}

.blog-card .icon span {
  margin-left: 5px;
  font-size: 12px;
}

.blog-card p {
  height: 100%;
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

/* 夜间模式 */
.blog-card.dark-mode {
  background-color: #242424;
  color: #fff;
  transition: box-shadow 0.5s ease; /* 添加阴影变化的过渡效果，持续时间为0.5秒 */
}

.blog-card.dark-mode:hover {
  box-shadow: 0 4px 8px rgba(162, 158, 158, 0.796);
}

.blog-card.dark-mode h2 {
  color: #fff;
}

.blog-card.dark-mode h2:hover {
  color: #3fc0f0;
}

.blog-card.dark-mode p {
  color: #ccc;
}
</style>

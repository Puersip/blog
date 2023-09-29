<template>
  <div class="home">
    <div class="blog-list">
      <BlogCard
        v-for="blog in blogs"
        :key="blog.id"
        :blog="blog"
        :is-night-mode="DarkMode"
      />
    </div>
    <!-- 返回顶部按钮 -->
    <button class="scroll-top-btn" @click="scrollToTop">UP</button>
  </div>
</template>

<script setup>
import { defineOptions, ref, onActivated } from 'vue';
import BlogCard from '@/components/blog-card/BlogCard.vue';
import { getBlogList } from '@/api/blog.js';
import { isDarkMode } from '@/utils/common/isDarkMode.js';

defineOptions({ name: 'HomePage' });

const blogs = ref([]);
const DarkMode = ref();

onActivated(() => {
  console.log('onActivated');
  getData();
  DarkMode.value = isDarkMode();
});

function getData() {
  getBlogList().then((res) => {
    blogs.value = res.data;
  });
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
</script>

<style scoped>
.home {
  padding: 20px;
}

.blog-list {
  display: flex;
  flex-direction: column; /* 将卡片竖直排列 */
  align-items: center; /* 在水平方向上居中显示卡片 */
  justify-content: center;
}

/* 使用 @media 查询，根据屏幕宽度动态调整卡片的宽度 */
@media (max-width: 768px) {
  .blog-card {
    width: 100%; /* 当屏幕宽度小于等于 768px 时，卡片占据整个屏幕宽度 */
  }
}

.scroll-top-btn {
  position: fixed;
  right: 40px;
  bottom: 40px;
  padding: 20px;
  color: white;
  cursor: pointer;
  background-color: #007bff;
  border: none;
  border-radius: 50%; /* 将按钮变成圆形 */
  transition: background-color 0.3s ease;
}

.scroll-top-btn:hover {
  background-color: #0056b3; /* 悬停时的背景色 */
}
</style>

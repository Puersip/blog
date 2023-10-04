<template>
  <div class="page">
    <h1>{{ route.params.id }}</h1>
    <div class="blog-list">
      <BlogCard
        v-for="blog in blogs"
        :key="blog.id"
        :blog="blog"
        :is-dark-mode="isDarkMode()"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import BlogCard from '@/components/blog-card/BlogCard.vue';
import { getBlogByCategory } from '@/api/category.js';
import { isDarkMode } from '@/utils/common/isDarkMode';

defineOptions({ name: 'CateGorys' });

const blogs = ref([]);
const route = useRoute();

onMounted(async () => {
  console.log('onMounted');
  await getData(route.params.id);
});

function getData(id) {
  getBlogByCategory(id).then((res) => {
    blogs.value = res.data;
  });
}
</script>

<style scoped>
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
</style>

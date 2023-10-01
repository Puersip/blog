<template>
  <div class="categories">
    <h1>分类</h1>
    <div>
      <ul>
        <li v-for="(category, index) in categories" :key="index">
          <span class="dot"></span> {{ category.key }} ({{ category.value }})
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onActivated, ref } from 'vue';
import { getCategory } from '@/api/category';

defineOptions({ name: 'CateGoryPage' });

const categories = ref();

onActivated(() => {
  console.log('onActivated');
  getData();
});

function getData() {
  getCategory().then((res) => {
    categories.value = res.data;
  });
}
</script>

<style lang="scss" scoped>
.categories {
  margin: 0 auto;
  padding: 20px;
  width: 40vw;
  text-align: center;
}
.categories ul {
  list-style: none;
  padding: 20px;
}

.categories li {
  font-size: 16px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
}

.dot {
  width: 8px;
  height: 8px;
  border: 3px solid rgb(86, 86, 160);
  border-radius: 50%;
  margin-right: 10px;
  transition: background-color 1s ease;
}

.categories li:hover .dot {
  border-color: rgb(212, 165, 79); /* 鼠标悬停时，小黑点变色 */
}
</style>

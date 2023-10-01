<template>
  <div class="categories">
    <ul>
      <li v-for="(category, index) in categories" :key="index">
        {{ category.key }} ({{ category.value }})
      </li>
    </ul>
  </div>
</template>

<script setup>
const categories = [
  { key: 'java', value: 10 },
  { key: 'javascript', value: 2 },
  { key: 'vue', value: 3 },
];
</script>

<style lang="scss" scoped>
.categories ul {
  list-style: none;
  padding: 0;
}

.categories li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  list-style-type: disc; /* 设置列表项前面的标志为小黑点 */
}
</style>

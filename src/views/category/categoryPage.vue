<template>
  <div class="categories">
    <div v-for="(category, index) in categories" :key="index" class="category">
      <span class="dot"></span>
      {{ category.key }} ({{ category.value }})
    </div>
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
.categories {
  display: flex;
  flex-direction: column;
}

.category {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: gray;
  margin-right: 10px;
}
</style>

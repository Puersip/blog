<template>
  <div class="page">
    <v-md-preview :text="md"></v-md-preview>
  </div>
</template>

<script setup>
import { getBlogDetails } from '@/api/blog.js';

const route = useRoute();
const md = ref('');

defineOptions({ name: 'BlogPage' });

onMounted(async () => {
  console.log('onMounted');
  await getData(route.params.id);
});

async function getData(id) {
  getBlogDetails(id).then((res) => {
    md.value = res.data.content;
  });
}
</script>

<style lang="scss" scoped>
.page {
  width: 60vw;
}
</style>

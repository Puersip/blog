<template>
  <div>
    <v-md-preview :text="md"></v-md-preview>
  </div>
</template>

<script setup>
import { onMounted, ref, defineOptions } from 'vue';
import { useRoute } from 'vue-router';
import { getBlogDetails } from '@/api/blog.js';

const route = useRoute();
const md = ref('');

defineOptions({ name: 'BlogPage' });

onMounted(async () => {
  console.log('onMounted');
  await getData(route.params.id);
});

async function getData(id) {
  console.log(id);
  getBlogDetails(id).then((res) => {
    console.log(res.data);
    md.value = res.data.content;
  });
}
</script>

<style lang="scss" scoped></style>

<template>
  <div class="container">
    <h1>归档</h1>
    <div class="archive">
      <div
        v-for="(entry, archiveIndex) in archive"
        :key="archiveIndex"
        class="entry"
      >
        <h2>{{ entry.date }}</h2>
        <ul v-for="(title, titleIndex) in entry.titles" :key="titleIndex">
          <li><span class="dot"></span> {{ title }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onActivated, ref } from 'vue';
import { getArchives } from '@/api/archives';

defineOptions({ name: 'ArchivesPage' });

const archive = ref();

onActivated(() => {
  console.log('onActivated');
  getData();
});

function getData() {
  getArchives().then((res) => {
    archive.value = res.data;
  });
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  padding: 20px;
  width: 40vw;
  text-align: center;
}

.archive {
  text-align: left;
  align-items: flex-start;
  margin-bottom: 20px;
}

.entry {
  margin-top: 40px;
}

.archive ul {
  list-style: none;
  padding: 0;
}

.archive li {
  font-size: 16px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
}

.archive li:hover {
  text-decoration: underline;
}

.dot {
  width: 8px;
  height: 8px;
  border: 2px solid rgb(86, 86, 160);
  border-radius: 50%;
  margin-right: 10px;
  transition: background-color 1s ease;
}

.archive li:hover .dot {
  border-color: rgb(212, 165, 79); /* 鼠标悬停时，小黑点变色 */
}
</style>

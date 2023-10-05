<template>
  <div class="page">
    <h1>友链</h1>
    <div class="links-container">
      <a
        v-for="link in links"
        :key="link.id"
        class="link-card"
        :href="link.url"
        target="_blank"
        :style="{ backgroundColor: getRandomColor() }"
      >
        <img class="avatar" :src="link.avatar" alt="Avatar" />
        <span class="name">{{ link.name }}</span>
      </a>
    </div>
  </div>
</template>

<script setup>
import { onActivated } from 'vue';
import { getLinks } from '@/api/links';

onActivated(() => {
  console.log('onActivated');
  getData();
});

const colors = [
  '#e4735c',
  '#D27992',
  '#39A328',
  '#406F95',
  '#6c5b7b',
  '#c06c84',
];

const links = ref();

function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function getData() {
  getLinks().then((res) => {
    links.value = res.data;
  });
}
</script>

<style lang="scss" scoped>
.page {
  width: 70vw;
}

.links-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  justify-content: center;
}

.link-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center; /* 将内容水平居中 */
  width: 100%;
  min-width: 200px;
  border: 1px solid #ccc;
  border-radius: 10px;
  transition: transform 0.5s ease;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-top: 20px;
  margin-bottom: 15px;
  transition: transform 0.5s ease; /* 添加头像的过渡效果 */
}

.link-card:hover .avatar {
  transform: scale(1.1); /* 悬停时头像放大至1.1倍 */
}

.name {
  font-size: 20px;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
  max-width: 100%; /* 确保名称不会超出卡片的宽度 */
}

/* 如果卡片数量小于或等于2，采用单列布局 */
@media screen and (max-width: 200px) {
  .link-card {
    width: 100%;
  }
}
</style>

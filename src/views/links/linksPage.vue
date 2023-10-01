<template>
  <div class="container">
    <h1>友链</h1>
    <div class="links-container">
      <div
        v-for="link in links"
        :key="link.id"
        class="link-card"
        :style="{ backgroundColor: getRandomColor() }"
      >
        <img class="avatar" :src="link.avatar" alt="Avatar" />
        <span class="name">{{ link.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const colors = [
  '#e4735c',
  '#D27992',
  '#39A328',
  '#406F95',
  '#6c5b7b',
  '#c06c84',
];

function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

const links = [
  {
    id: 1,
    name: 'Friend 1',
    avatar:
      'https://khighness-blog.oss-cn-shanghai.aliyuncs.com/avatar/Khighness.jpg',
  },
  {
    id: 2,
    name: 'Friend 2',
    avatar:
      'https://khighness-blog.oss-cn-shanghai.aliyuncs.com/avatar/Khighness.jpg',
  },
  {
    id: 3,
    name: 'Friend 3',
    avatar:
      'https://khighness-blog.oss-cn-shanghai.aliyuncs.com/avatar/Khighness.jpg',
  },
  {
    id: 4,
    name: 'Friend 4',
    avatar:
      'https://khighness-blog.oss-cn-shanghai.aliyuncs.com/avatar/Khighness.jpg',
  },
  {
    id: 5,
    name: 'Friend 5',
    avatar:
      'https://khighness-blog.oss-cn-shanghai.aliyuncs.com/avatar/Khighness.jpg',
  },
  {
    id: 6,
    name: 'Friend 6',
    avatar:
      'https://khighness-blog.oss-cn-shanghai.aliyuncs.com/avatar/Khighness.jpg',
  },
  {
    id: 7,
    name: 'Friend 7',
    avatar:
      'https://khighness-blog.oss-cn-shanghai.aliyuncs.com/avatar/Khighness.jpg',
  },
  // ... 可以添加更多的友链数据
];
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  padding: 20px;
  width: 70vw;
  text-align: center;
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
  opacity: 0;
  transform: translateY(-20px); /* 初始位置上移 20 像素 */
  /* 添加动画 */
  animation: fadeInUp 1s ease forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(-20px); /* 初始位置上移 20 像素 */
  }
  to {
    opacity: 1;
    transform: translateY(0); /* 最终位置为原始位置 */
  }
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 10px;
  transition: transform 0.5s ease; /* 添加头像的过渡效果 */
}

.link-card:hover .avatar {
  transform: scale(1.1); /* 悬停时头像放大至1.1倍 */
}

.name {
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
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

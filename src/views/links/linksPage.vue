<template>
  <div class="container">
    <h1>友链</h1>
    <div class="links-container">
      <div v-for="link in links" :key="link.id" class="link-card">
        <img class="avatar" :src="link.avatar" alt="Avatar" />
        <span class="name">{{ link.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
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
  padding: 0 20px;
  text-align: center;
}

.links-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

// .links-container:after {
//   content: '';
//   flex: auto;
// }

.link-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px 15px 10px; /* 使用固定的像素值作为外边距 */
  padding: 15px;
  width: 20%;
  border: 1px solid #ccc;
  height: 140px;
  border-radius: 10px;
  transition: transform 0.5s ease;
}

// .link-card:nth-child(4n) {
//   margin-right: 0;
// }

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
  transition: transform 0.5s ease; /* 添加头像的过渡效果 */
}

.link-card:hover .avatar {
  transform: scale(1.1); /* 悬停时头像放大至1.1倍 */
}

.name {
  font-size: 20px;
  color: #333;
  text-align: center;
  max-width: 100%; /* 确保名称不会超出卡片的宽度 */
}

/* 如果卡片数量小于或等于2，采用单列布局 */
@media screen and (max-width: 480px) {
  .single-column-layout .link-card {
    width: 100%;
  }
}
</style>

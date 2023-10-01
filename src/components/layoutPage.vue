<template>
  <NavBar></NavBar>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <!-- 返回顶部按钮 -->
  <TheIcon
    v-show="showScrollBtn"
    icon="icon-park-twotone:up-two"
    class="scroll-top-btn"
    @click="scrollToTop"
  ></TheIcon>
</template>

<script setup>
import NavBar from '@/components/layout/NavBar.vue';
import { scrollToTop } from '@/utils/common/';

const SCROLL_THRESHOLD = 200; // 滚动超过200px时显示返回顶部按钮
const showScrollBtn = ref(false);

window.addEventListener('scroll', () => {
  showScrollBtn.value = window.scrollY > SCROLL_THRESHOLD;
});
</script>

<style lang="scss" scoped>
.scroll-top-btn {
  position: fixed;
  right: 40px;
  bottom: 40px;
  padding: 10px;
  color: white;
  cursor: pointer;
  background-color: #b8aebb;
  border: none;
  border-radius: 50%; /* 将按钮变成圆形 */
  transition: background-color 1s ease;
}

.scroll-top-btn:hover {
  background-color: #1778d9; /* 悬停时的背景色 */
}
</style>

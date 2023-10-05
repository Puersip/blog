<template>
  <Icon class="custom-icon" :style="props.style"></Icon>
</template>

<script setup>
import { Icon } from '@iconify/vue';

const props = defineProps({
  style: {
    type: Object,
    default: null,
  },
});
</script>

<style lang="scss" scoped>
.custom-icon {
  font-size: 20px;
  vertical-align: bottom;
}
</style>

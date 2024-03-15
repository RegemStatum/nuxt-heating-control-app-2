<script setup lang="ts">
interface Props {
  title?: string;
}
defineProps<Props>();
</script>

<template>
  <div class="section">
    <h2 v-if="title" class="title">{{ title }}</h2>
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.section {
  padding-top: getInd(600);
  padding-bottom: getInd(600);

  .title {
    padding-bottom: getInd(400);
    font-size: getFontSize(500);
    line-height: getLineHeight(500);
    font-weight: 800;
    text-transform: uppercase;
    color: getColor("nt-5");
  }
}
</style>

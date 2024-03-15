<script setup lang="ts">
interface Props {
  headingText: string;
  headingHelperText: string;
}
defineProps<Props>();
</script>

<template>
  <hgroup class="heading-container">
    <h1 class="heading">{{ headingText }}</h1>
    <p class="heading-helper-text">{{ headingHelperText }}</p>
  </hgroup>
</template>

<style scoped lang="scss">
.heading-container {
  text-align: center;

  .heading {
    padding: getInd(200) 0;
    font-size: getFontSize(700);
  }
}
</style>

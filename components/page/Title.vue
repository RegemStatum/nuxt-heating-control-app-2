<script setup lang="ts">
interface Props {
  title: string;
}

defineProps<Props>();
</script>

<template>
  <h1 class="heading">{{ title }}</h1>
</template>

<style scoped lang="scss">
.heading {
  padding-top: getInd(600);
  padding-bottom: getInd(300);
  font-size: getFontSize(700);
  line-height: getLineHeight(700);
}

@include lg {
  .heading {
    padding-top: 0;
    line-height: getLineHeight(600);
  }
}
</style>

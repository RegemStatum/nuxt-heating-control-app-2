<script setup lang="ts">
definePageMeta({
  layout: "auth",
});
</script>

<template>
  <div class="page">
    <AuthResetPassword />
  </div>
</template>

<style scoped lang="scss">
.page {
  $width: 100vw;
  $height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  width: $width;
  height: $height;
}
</style>

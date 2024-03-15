<script setup lang="ts">
import LogoFullIcon from "@/assets/svg/logo/LogoFullIcon.svg";
</script>

<template>
  <NuxtLink to="/">
    <LogoFullIcon class="logo" />
  </NuxtLink>
</template>

<style scoped lang="scss">
.logo {
  $logoHeight: 30px;
  height: $logoHeight;
}
</style>

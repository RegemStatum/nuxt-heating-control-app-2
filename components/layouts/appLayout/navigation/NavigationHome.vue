<script setup lang="ts">
import { HomeIcon as HomeIconSolid } from "@heroicons/vue/24/solid";
import { HomeIcon as HomeIconOutline } from "@heroicons/vue/24/outline";

interface Props {
  isActive: boolean;
}
defineProps<Props>();
</script>

<template>
  <NuxtLink to="/" class="link">
    <div class="control-item">
      <HomeIconSolid v-if="isActive" class="icon" />
      <HomeIconOutline v-else class="icon" />
      <p class="text" :class="{ active: isActive }">Home</p>
    </div>
  </NuxtLink>
</template>

<style scoped lang="scss"></style>

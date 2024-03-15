<script setup lang="ts">
import { ChartPieIcon as ChartPieIconSolid } from "@heroicons/vue/24/solid";
import { ChartPieIcon as ChartPieIconOutline } from "@heroicons/vue/24/outline";

interface Props {
  isActive: boolean;
}
defineProps<Props>();
</script>

<template>
  <NuxtLink to="/charts" class="link">
    <div class="control-item">
      <ChartPieIconSolid v-if="isActive" class="icon" />
      <ChartPieIconOutline v-else class="icon" />
      <p class="text" :class="{ active: isActive }">Charts</p>
    </div>
  </NuxtLink>
</template>

<style scoped lang="scss"></style>

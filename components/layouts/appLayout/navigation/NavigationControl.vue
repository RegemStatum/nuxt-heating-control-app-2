<script setup lang="ts">
import { Cog6ToothIcon as Cog6ToothIconSolid } from "@heroicons/vue/24/solid";
import { Cog6ToothIcon as Cog6ToothIconOutline } from "@heroicons/vue/24/outline";

interface Props {
  isActive: boolean;
}
defineProps<Props>();
</script>

<template>
  <NuxtLink to="/control" class="link">
    <div class="control-item">
      <Cog6ToothIconSolid v-if="isActive" class="icon" />
      <Cog6ToothIconOutline v-else class="icon" />
      <p class="text" :class="{ active: isActive }">Control</p>
    </div>
  </NuxtLink>
</template>

<style scoped lang="scss"></style>

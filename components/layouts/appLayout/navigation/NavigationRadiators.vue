<script setup lang="ts">
import { ViewColumnsIcon as ViewColumnsIconSolid } from "@heroicons/vue/24/solid";
import { ViewColumnsIcon as ViewColumnsIconOutline } from "@heroicons/vue/24/outline";

interface Props {
  isActive: boolean;
}
defineProps<Props>();
</script>

<template>
  <NuxtLink to="/radiators" class="link">
    <div class="control-item">
      <ViewColumnsIconSolid v-if="isActive" class="icon" />
      <ViewColumnsIconOutline v-else class="icon" />
      <p class="text" :class="{ active: isActive }">Radiators</p>
    </div>
  </NuxtLink>
</template>

<style scoped lang="scss"></style>

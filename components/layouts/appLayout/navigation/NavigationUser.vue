<script setup lang="ts">
import { UserIcon as UserIconSolid } from "@heroicons/vue/24/solid";
import { UserIcon as UserIconOutline } from "@heroicons/vue/24/outline";

interface Props {
  isActive: boolean;
}
defineProps<Props>();
</script>

<template>
  <NuxtLink to="/user" class="link">
    <div class="control-item">
      <UserIconSolid v-if="isActive" class="icon" />
      <UserIconOutline v-else class="icon" />
      <p class="text" :class="{ active: isActive }">User</p>
    </div>
  </NuxtLink>
</template>

<style scoped lang="scss"></style>

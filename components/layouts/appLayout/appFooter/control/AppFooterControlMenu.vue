<script setup lang="ts">
import { Bars3Icon } from "@heroicons/vue/24/outline";

const appStore = useAppStore();
const { isSidebarOpen } = storeToRefs(appStore);
const { openSidebar, closeSidebar } = useAppStore();

const toggleSidebar = () => {
  isSidebarOpen.value ? closeSidebar() : openSidebar();
};
</script>

<template>
  <button type="button" @click="toggleSidebar" class="button">
    <div class="control-item">
      <Bars3Icon class="icon" />
      <p class="text" :class="{ active: isSidebarOpen }">Menu</p>
    </div>
  </button>
</template>

<style scoped lang="scss"></style>

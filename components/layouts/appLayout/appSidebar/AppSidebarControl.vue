<script setup lang="ts">
import { XMarkIcon } from "@heroicons/vue/24/solid";

const appStore = useAppStore();
const { closeSidebar } = appStore;
</script>

<template>
  <div class="control">
    <button type="button" class="close-button" @click="closeSidebar">
      <XMarkIcon class="close-icon" />
    </button>
  </div>
</template>

<style scoped lang="scss">
.control {
  display: flex;
  justify-content: flex-end;
  padding: getInd(400) 0;

  .close-button {
    .close-icon {
      $iconSize: 30px;

      width: $iconSize;
      height: $iconSize;
      color: getColor("nt-4");
    }
  }
}
</style>

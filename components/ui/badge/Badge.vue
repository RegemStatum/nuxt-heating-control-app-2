<script setup lang="ts">
type BadgeType = "info" | "warning" | "error" | "success";

interface Props {
  type: BadgeType;
  text: string;
}
const props = defineProps<Props>();
</script>

<template>
  <div class="container" :class="type">
    <p class="info-message">{{ text }}</p>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: max-content;
  padding: getInd(200);
  border-radius: getBorderRadius(400);

  // Different colors on different badge types
  &.info {
    color: getColor("sp-ble-3");
    background-color: getColor("sp-ble-10");
  }

  &.warning {
    color: getColor("sp-ylw-3");
    background-color: getColor("sp-ylw-10");
  }

  &.error {
    color: getColor("sp-red-3");
    background-color: getColor("sp-red-10");
  }

  &.success {
    color: getColor("sp-grn-3");
    background-color: getColor("sp-grn-10");
  }

  .info-message {
    $fontWeight: 500;

    font-size: getFontSize(300);
    font-weight: $fontWeight;
    line-height: getLineHeight(300);

    &::first-letter {
      text-transform: uppercase;
    }
  }
}
</style>

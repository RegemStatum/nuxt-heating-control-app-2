<script setup lang="ts">
import {
  QuestionMarkCircleIcon,
  ExclamationTriangleIcon,
  ExclamationCircleIcon,
  CheckIcon,
} from "@heroicons/vue/24/outline";

type MessageType = "info" | "warning" | "error" | "success";

interface Props {
  type: MessageType;
  text: string;
}
const props = defineProps<Props>();

const getIcon = () => {
  switch (props.type) {
    case "info":
      return QuestionMarkCircleIcon;
    case "warning":
      return ExclamationTriangleIcon;
    case "error":
      return ExclamationCircleIcon;
    case "success":
      return CheckIcon;
  }
};
const icon = getIcon();
</script>

<template>
  <div class="container" :class="type">
    <component :is="icon" class="icon"></component>
    <p class="info-message">{{ text }}</p>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  gap: getInd(200);
  padding: getInd(200);
  border-radius: getBorderRadius(400);

  // Different colors on different message types
  &.info {
    background-color: getColor("sp-ble-10");

    .icon {
      color: getColor("sp-ble-3");
    }
  }

  &.warning {
    background-color: getColor("sp-ylw-10");

    .icon {
      color: getColor("sp-ylw-3");
    }
  }

  &.error {
    background-color: getColor("sp-red-10");

    .icon {
      color: getColor("sp-red-3");
    }
  }

  &.success {
    background-color: getColor("sp-grn-10");

    .icon {
      color: getColor("sp-grn-3");
    }
  }

  .icon {
    $size: 30px;
    width: $size;
    height: $size;
    flex: 0 0 auto;
  }

  .info-message {
    $fontWeight: 600;

    font-size: getFontSize(300);
    font-weight: $fontWeight;
    line-height: getLineHeight(300);

    &::first-letter {
      text-transform: uppercase;
    }
  }
}
</style>

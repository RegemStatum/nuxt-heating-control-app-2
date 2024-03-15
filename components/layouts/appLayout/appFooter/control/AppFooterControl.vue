<script setup lang="ts">
import AppFooterControlMenu from "./AppFooterControlMenu.vue";
import AppFooterControlHome from "../../navigation/NavigationHome.vue";
import AppFooterControlControl from "../../navigation/NavigationControl.vue";
import AppFooterControlRadiators from "../../navigation/NavigationRadiators.vue";

const route = useRoute();

const appStore = useAppStore();
const { closeSidebar } = appStore;
</script>

<template>
  <nav class="control">
    <AppFooterControlMenu />
    <AppFooterControlHome
      :isActive="route.path === '/'"
      @click="closeSidebar"
    />
    <AppFooterControlRadiators
      :isActive="route.path === '/radiators'"
      @click="closeSidebar"
    />
    <AppFooterControlControl
      :isActive="route.path === '/control'"
      @click="closeSidebar"
    />
  </nav>
</template>

<style scoped lang="scss">
.control {
  $itemsInControl: 4;

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat($itemsInControl, 1fr);
  justify-content: space-around;
}

:deep(.link),
:deep(.button) {
  flex: 1 0 auto;

  .control-item {
    display: flex;
    flex-direction: column;
    align-items: center;

    .icon {
      $iconSize: 30px;
      width: $iconSize;
      height: $iconSize;
    }

    .text {
      font-size: getFontSize(300);
      line-height: getLineHeight(1000);

      &.active {
        $activeLinkFontWeight: 600;
        font-weight: $activeLinkFontWeight;
      }
    }
  }
}

:deep(.link) {
  color: inherit;
  text-decoration: none;
}
</style>

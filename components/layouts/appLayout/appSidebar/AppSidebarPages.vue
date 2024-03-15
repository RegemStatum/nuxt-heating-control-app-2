<script setup lang="ts">
import NavigationHome from "../navigation/NavigationHome.vue";
import NavigationCharts from "../navigation/NavigationCharts.vue";
import NavigationUser from "../navigation/NavigationUser.vue";
import NavigationRadiators from "../navigation/NavigationRadiators.vue";

const route = useRoute();

const appStore = useAppStore();
const { closeSidebar } = appStore;
</script>

<template>
  <div class="container">
    <h5 class="heading">Pages</h5>
    <div class="pages">
      <NavigationHome :isActive="route.path === '/'" @click="closeSidebar" />
      <NavigationRadiators
        :isActive="route.path === '/radiators'"
        @click="closeSidebar"
      />
      <NavigationCharts
        :isActive="route.path === '/charts'"
        @click="closeSidebar"
      />
      <NavigationUser
        :isActive="route.path === '/user'"
        @click="closeSidebar"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  .heading {
    $headingFontWeight: 500;

    font-size: getFontSize(500);
    font-weight: $headingFontWeight;
  }
}

:deep(.link) {
  color: inherit;
  text-decoration: none;

  .control-item {
    display: flex;
    align-items: center;
    gap: getInd(400);
    padding: getInd(400) getInd(200);

    .icon {
      $iconSize: 30px;
      width: $iconSize;
      height: $iconSize;
    }

    .text {
      &.active {
        $activeLinkFontWeight: 600;
        font-weight: $activeLinkFontWeight;
      }
    }
  }
}
</style>

<script setup lang="ts">
const appStore = useAppStore();
const { isSidebarOpen } = storeToRefs(appStore);
</script>

<template>
  <div class="layout-container">
    <LayoutsAppLayoutAppHeader />
    <div class="sidebar-main-container">
      <LayoutsAppLayoutAppSidebar
        class="sidebar"
        :class="{ shown: isSidebarOpen }"
      />
      <main class="main">
        <slot></slot>
      </main>
    </div>
    <LayoutsAppLayoutAppFooter />
  </div>
</template>

<style scoped lang="scss">
.layout-container {
  $containerHeight: 100vh;

  position: relative;
  display: flex;
  flex-direction: column;
  min-height: $containerHeight;

  .sidebar-main-container {
    .sidebar {
      display: none;
      &.shown {
        display: block;
      }
    }
    .main {
      $footerHeight: 50px;
      @include container;

      flex: 1 0 auto;
      padding-top: getInd(400);
      padding-bottom: calc($footerHeight + getInd(600));
    }
  }
}

@include lg {
  .layout-container {
    .sidebar-main-container {
      $sidebarWidth: 250px;
      $mainContentWidth: 4fr;
      $sidebarMainContainerMarginTop: getInd(900);
      @include container;

      display: grid;
      grid-template-columns: $sidebarWidth $mainContentWidth;
      gap: getInd(900);
      margin-top: $sidebarMainContainerMarginTop;

      .sidebar {
        $sidebarHeight: 259px;
        $headerHeight: 46px;

        position: sticky;
        top: calc($sidebarMainContainerMarginTop + $headerHeight);
        left: 0;
        display: block;
        height: $sidebarHeight;
      }

      .main {
        @include sectionContainer;

        margin-bottom: getInd(1400);
      }
    }
  }
}
</style>

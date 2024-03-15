<script setup lang="ts">
import AppHeader from "../appHeader/AppHeader.vue";
import AppSidebarControl from "./AppSidebarControl.vue";
import AppSidebarPages from "./AppSidebarPages.vue";
</script>

<template>
  <aside class="sidebar">
    <AppHeader class="header" />
    <div class="inner-container">
      <AppSidebarControl class="control" />
      <AppSidebarPages class="pages" />
    </div>
  </aside>
</template>

<style scoped lang="scss">
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: getColor("nt-12");

  .inner-container {
    @include container;
  }
}

@include lg {
  .sidebar {
    @include sectionContainer;

    position: static;

    .header {
      display: none;
    }

    .inner-container {
      .control {
        display: none;
      }
    }
  }
}
</style>

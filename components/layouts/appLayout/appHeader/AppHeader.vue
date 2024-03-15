<script setup lang="ts">
import AppHeaderLogo from "./AppHeaderLogo.vue";
import AppHeaderUser from "./AppHeaderUser.vue";
</script>

<template>
  <header class="header">
    <div class="inner-container">
      <AppHeaderLogo />
      <AppHeaderUser />
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  @include boxShadow1;

  position: sticky;
  top: 0;
  left: 0;
  padding: getInd(400) 0;
  background-color: getColor("nt-12");

  .inner-container {
    $containerHeight: 30px;
    @include container;

    display: flex;
    justify-content: space-between;
    height: $containerHeight;
  }
}
</style>

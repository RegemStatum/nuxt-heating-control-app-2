<script setup lang="ts">
import AppFooterControl from "./control/AppFooterControl.vue";
</script>

<template>
  <footer class="footer">
    <div class="inner-container">
      <AppFooterControl class="control" />
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  $footerWidth: 100vw;

  position: fixed;
  bottom: 0;
  left: 0;
  width: $footerWidth;
  padding: getInd(100) 0 getInd(200) 0;
  background-color: getColor("nt-9");

  .inner-container {
    $containerWidth: 100vw;
    @include container;

    width: $containerWidth;
  }
}

@include lg {
  .footer {
    padding: 0;
    .inner-container {
      .control {
        display: none;
      }
    }
  }
}
</style>

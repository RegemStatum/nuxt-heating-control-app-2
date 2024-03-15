<script setup lang="ts"></script>

<template>
  <div class="skeleton">
    <div class="head">
      <div class="head-item">
        <div class="data"></div>
      </div>
      <div class="head-item"><div class="data"></div></div>
      <div class="head-item"><div class="data"></div></div>
    </div>
    <div class="body">
      <div class="body-item">
        <div class="data"></div>
      </div>
      <div class="body-item"><div class="data"></div></div>
      <div class="body-item"><div class="data"></div></div>
    </div>
  </div>
</template>

<style lang="scss">
.skeleton {
  @include animationSkeletonLoading();
  $skeletonLoadingAnimation: skeleton-loading 1.5s linear infinite alternate;
  $dataCellHeight: 40px;

  .head {
    $headWidth: 100%;

    display: flex;
    width: $headWidth;

    .head-item {
      height: $dataCellHeight;
      padding: getInd(400);
      flex: 1 0 auto;

      .data {
        $dataWidth: 100%;
        $dataHeight: 100%;

        width: $dataWidth;
        height: $dataHeight;
        border-radius: getBorderRadius(400);
        animation: $skeletonLoadingAnimation;
      }
    }
  }

  .body {
    .body-item {
      height: $dataCellHeight;
      padding: getInd(400);
      flex: 1 0 auto;

      .data {
        $bodyItemWidth: 100%;
        $bodyItemHeight: 100%;

        width: $bodyItemWidth;
        height: $bodyItemHeight;
        padding: getInd(400);
        flex: 1 0 auto;
        border-radius: getBorderRadius(400);
        animation: $skeletonLoadingAnimation;
      }
    }
  }
}
</style>

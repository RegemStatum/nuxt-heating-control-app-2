<template>
  <div class="loader-container">
    <UiLoadersSectionLoader />
  </div>
</template>

<style lang="scss">
.loader-container {
  $height: 200px;

  height: $height;
  display: flex;
  justify-content: center;
  align-items: center;
}

@include md {
  .loader-container {
    $height: 384px;
    height: $height;
  }
}

@include xl {
  .loader-container {
    $height: 481px;
    height: $height;
  }
}
</style>

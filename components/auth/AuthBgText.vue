<template>
  <p class="text">heatup</p>
</template>

<style scoped lang="scss">
.text {
  $fontWeight: 900;

  position: absolute;
  bottom: getInd(300);
  right: getInd(300);
  font-family: "Playfair Display", sans-serif;
  font-size: getFontSize(600);
  font-weight: $fontWeight;
  line-height: getLineHeight(1000);
  color: getColor("nt-6");
}
</style>

<script setup lang="ts">
interface Props {
  icon: Component;
  heading: string;
  text: string;
}
defineProps<Props>();
</script>

<template>
  <article class="card">
    <component :is="icon" class="icon"></component>
    <div class="info">
      <h3 class="heading">{{ heading }}</h3>
      <p class="text">{{ text }}</p>
    </div>
  </article>
</template>

<style lang="scss">
.card {
  @include boxShadow1;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: getInd(200);
  padding: getInd(600) getInd(600) getInd(900) getInd(600);
  border-radius: getBorderRadius(600);
  text-align: center;
  background-color: getColor("nt-10");

  .icon {
    $size: 40px;
    width: $size;
    height: $size;
  }

  .info {
    .heading {
      $fontWeight: 500;

      padding-bottom: getInd(500);
      font-weight: $fontWeight;
    }
  }
}
</style>

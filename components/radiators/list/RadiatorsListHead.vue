<script setup lang="ts"></script>

<template>
  <thead class="table-head">
    <tr>
      <th scope="col" class="header name">Name</th>
      <th scope="col" class="header temperature">Temperature, °C</th>
      <th scope="col" class="header status">Status</th>
    </tr>
  </thead>
</template>

<style scoped lang="scss">
.header {
  $fontWeight: 600;

  min-width: max-content;
  font-weight: $fontWeight;
  text-align: center;

  &.name {
    width: 33.3333%;
  }

  &.status {
    width: 33.3333%;
  }

  &.temperature {
    width: 33.3333%;
  }
}
</style>

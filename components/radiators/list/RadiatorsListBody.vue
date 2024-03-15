<script setup lang="ts">
import type { Radiator } from "~/composables/useFirestoreRadiators";

interface Props {
  radiators: Record<string, Radiator> | null;
}
defineProps<Props>();
</script>

<template>
  <tbody class="table-body">
    <tr
      v-for="({ name, temperature, status }, index) of radiators"
      :key="index"
      class="table-row"
    >
      <th scope="row" class="name">{{ name }}</th>
      <td class="temperature">
        {{ temperature }}
      </td>
      <td class="status">
        <UiBadge v-if="status" text="on" type="success" />
        <UiBadge v-else text="off" type="error" />
      </td>
    </tr>
  </tbody>
</template>

<style scoped lang="scss">
.table-row {
  &:nth-child(2n + 1) {
    background-color: getColor("nt-10");
  }

  .name {
    padding-left: getInd(400);
    text-transform: capitalize;
  }

  .temperature {
    text-align: center;
  }

  .status {
    width: 100%;
    display: inline-flex;
    justify-content: center;
  }
}
</style>

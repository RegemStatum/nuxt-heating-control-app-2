<script setup lang="ts">
interface RadiatorHourData {
  status: boolean;
  temperature: number;
}

interface Props {
  hours: Record<string, RadiatorHourData>;
}
defineProps<Props>();

const formatHour = (hour: string) => {
  if (hour.length === 1) {
    hour = "0" + hour;
  }
  return hour;
};
</script>

<template>
  <tbody class="table-body">
    <tr
      v-for="({ status, temperature }, hour) of hours"
      :key="hour"
      class="table-row"
    >
      <th scope="row" class="hour">{{ formatHour(hour) }}:00</th>
      <td class="temperature">{{ temperature }}</td>
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

  .hour,
  .temperature {
    text-align: center;
  }

  .hour {
    padding-left: getInd(300);
    text-transform: capitalize;
  }

  .status {
    $width: 100%;

    width: $width;
    display: inline-flex;
    justify-content: center;
  }
}
</style>

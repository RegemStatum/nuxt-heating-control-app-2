<script setup lang="ts">
import { DATE } from "@/constants/mock/radiators";

const { getHistoryByDate } = useFirestoreRadiators();

const {
  pending,
  data: radiatorsHistory,
  refresh,
} = await useAsyncData("radiatorsHistory", () => getHistoryByDate(DATE), {
  lazy: true,
});

onMounted(() => {
  refresh();
});
</script>

<template>
  <p class="date">Date: {{ DATE }}</p>
  <RadiatorsHistorySkeleton v-if="pending || !radiatorsHistory" />
  <div
    v-else
    v-for="(radiator, radiatorIndex) of radiatorsHistory"
    :key="radiatorIndex"
  >
    <div class="radiator-name-container">
      <div class="accent"></div>
      <p class="radiator-name">
        {{ radiator.name }}
      </p>
    </div>
    <table class="history-table">
      <RadiatorsHistoryHead />
      <RadiatorsHistoryBody :hours="radiator.hours" />
    </table>
  </div>
</template>

<style scoped lang="scss">
.date {
  padding-top: getInd(400);
}

.radiator-name-container {
  display: flex;
  gap: getInd(400);
  padding-top: getInd(800);
  padding-bottom: getInd(200);
  .accent {
    $accentWidth: 5px;

    width: $accentWidth;
    border-radius: getBorderRadius(400);
    background-color: getColor("nt-5");
  }

  .radiator-name {
    text-transform: capitalize;
    font-size: getFontSize(500);
    font-weight: 500;
  }
}

.history-table {
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;

  :deep(.table-body),
  :deep(.table-head) {
    th,
    td {
      padding-top: getInd(300);
      padding-bottom: getInd(300);
    }

    th[scope="col"] {
      padding-top: getInd(400);
      padding-bottom: getInd(400);
    }
  }
}
</style>

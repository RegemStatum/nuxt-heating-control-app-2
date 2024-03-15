<script setup lang="ts">
const { getRadiators } = useFirestoreRadiators();

const {
  data: radiators,
  pending,
  refresh,
} = await useAsyncData("radiators", () => getRadiators(), {
  lazy: true,
});

onMounted(() => {
  refresh();
});
</script>

<template>
  <RadiatorsListSkeleton v-if="pending || !radiators" />
  <div class="container" v-else>
    <table class="table">
      <RadiatorsListHead />
      <RadiatorsListBody :radiators="radiators" />
    </table>
  </div>
</template>

<style scoped lang="scss">
.table {
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

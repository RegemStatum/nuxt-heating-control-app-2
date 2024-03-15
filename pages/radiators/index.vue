<script setup lang="ts"></script>

<template>
  <PageTitle title="Radiators" />
  <PageSection title="Radiators list">
    <RadiatorsList />
  </PageSection>
  <PageSection title="History" class="history-section">
    <RadiatorsHistory />
  </PageSection>
</template>

<style scoped lang="scss">
.history-section {
  padding-bottom: 0;
}
</style>

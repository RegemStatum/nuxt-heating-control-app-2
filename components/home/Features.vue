<script setup lang="ts">
import {
  CircleStackIcon,
  ChartBarIcon,
  Cog6ToothIcon,
} from "@heroicons/vue/24/outline";
</script>

<template>
  <PageSection title="Features">
    <article class="features">
      <HomeFeatureCard
        :icon="CircleStackIcon"
        heading="Radiators data"
        text="You can as well check out previous radiators data on radiators page"
      />
      <HomeFeatureCard
        :icon="Cog6ToothIcon"
        heading="Control radiators"
        text="You can control the radiators, if you are logged in as an
          administrator"
      />
      <HomeFeatureCard
        :icon="ChartBarIcon"
        heading="Charts"
        text="Illustrative and easy to understand information in form of charts"
      />
    </article>
  </PageSection>
</template>

<style lang="scss">
.features {
  display: grid;
  grid-template-columns: 1fr;
  gap: getInd(600);
}

@include sm {
  .features {
    grid-template-columns: 1fr 1fr;
  }
}

@include md {
  .features {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>

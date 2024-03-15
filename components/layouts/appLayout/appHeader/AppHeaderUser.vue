<script setup lang="ts">
const { user } = useFirebaseAuth();

const DEFAULT_USERNAME = "Us";
const userEmail = useState("userEmail", () => DEFAULT_USERNAME);

onMounted(() => {
  userEmail.value =
    user?.value?.email?.trim().substring(0, 2) || DEFAULT_USERNAME;
});
</script>

<template>
  <NuxtLink to="/user" class="container">
    <p class="text">{{ userEmail }}</p>
  </NuxtLink>
</template>

<style scoped lang="scss">
.container {
  padding: getInd(200) getInd(300);
  border-radius: getBorderRadius(400);
  background-color: getColor("nt-9");
  text-transform: capitalize;
  text-decoration: none;
  color: inherit;

  .text {
    $fontWeight: 500;
    font-weight: $fontWeight;
  }
}
</style>

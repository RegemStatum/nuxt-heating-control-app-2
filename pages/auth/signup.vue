<script setup lang="ts">
definePageMeta({
  layout: "auth",
});

const authStore = useAuthStore();
const { setAuthTypeToSignup } = authStore;
onMounted(() => {
  setAuthTypeToSignup();
});
</script>

<template>
  <AuthFormContainer />
</template>

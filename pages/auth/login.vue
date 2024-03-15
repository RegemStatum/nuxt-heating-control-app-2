<script setup lang="ts">
definePageMeta({
  layout: "auth",
});

const authStore = useAuthStore();
const { setAuthTypeToLogin } = authStore;
onMounted(() => {
  setAuthTypeToLogin();
});
</script>

<template>
  <AuthFormContainer />
</template>

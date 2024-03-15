<script setup lang="ts">
const { user } = useFirebaseAuth();
</script>

<template>
  <div class="container">
    <p>User: {{ user?.email }}</p>
    <div>
      <NuxtLink to="/auth/resetPassword">Reset password</NuxtLink>
    </div>
    <UserLogout />
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  gap: getInd(200);
}
</style>

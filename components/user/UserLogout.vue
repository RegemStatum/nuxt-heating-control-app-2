<script setup lang="ts">
const { logoutUser } = useFirebaseAuth();

const handleUserLogout = async () => {
  try {
    await logoutUser();
    navigateTo("/auth/login");
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <button type="button" @click="handleUserLogout" class="logout-btn">
    Log out
  </button>
</template>

<style scoped lang="scss">
.logout-btn {
  @include primaryButton;

  width: max-content;
}
</style>

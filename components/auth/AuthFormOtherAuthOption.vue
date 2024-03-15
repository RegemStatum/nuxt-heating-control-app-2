<script setup lang="ts">
interface Props {
  hintText: string;
  linkText: string;
  linkTo: string;
}
defineProps<Props>();
</script>

<template>
  <div>
    <p class="hint">
      {{ hintText }}
      <NuxtLink :to="linkTo" class="link">{{ linkText }}</NuxtLink>
    </p>
    <p class="hint">
      I have forgotten password:
      <NuxtLink to="/auth/resetPassword" class="hint">Reset password</NuxtLink>
    </p>
  </div>
</template>

<style scoped lang="scss">
.hint {
  font-size: getFontSize(300);
  line-height: getLineHeight(300);
}
</style>

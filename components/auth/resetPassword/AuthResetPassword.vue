<script setup lang="ts"></script>

<template>
  <div class="container">
    <AuthFormHeading
      headingText="Password reset"
      headingHelperText="Instructions will be sent on your email"
      class="heading"
    />
    <AuthResetPasswordForm />
    <NuxtLink to="/auth/login" class="link">Go back</NuxtLink>
  </div>
</template>

<style scoped lang="scss">
.container {
  $width: 100%;
  $maxWidth: 390px;
  @include sectionContainer;
  @include boxShadow3;

  width: $width;
  max-width: $maxWidth;

  .heading {
    padding-bottom: getInd(1000);
  }

  .link {
    display: block;
    padding-top: getInd(700);
    font-size: getFontSize(300);
    line-height: getLineHeight(300);
  }
}
</style>

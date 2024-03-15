<script setup lang="ts">
const authStore = useAuthStore();
const { authType } = storeToRefs(authStore);

// Different template info on signup and login
interface TemplateInfo {
  heading: {
    mainText: string;
    helperText: string;
  };
  submitButtonText: string;
  otherAuthPage: {
    hintText: string;
    linkText: string;
    linkTo: string;
  };
}
const signupTemplateInfo: TemplateInfo = {
  heading: {
    mainText: "Sign up",
    helperText: "Please sign up to start using app",
  },
  submitButtonText: "Sign up",
  otherAuthPage: {
    hintText: "I have an account already: ",
    linkText: "Log in",
    linkTo: "/auth/login",
  },
};
const loginTemplateInfo: TemplateInfo = {
  heading: {
    mainText: "Log in",
    helperText: "Please log in to start using app",
  },
  submitButtonText: "Log in",
  otherAuthPage: {
    hintText: "I am not registered yet: ",
    linkText: "Sign up",
    linkTo: "/auth/signup",
  },
};
const templateInfo = computed(() =>
  authType.value === "signup" ? signupTemplateInfo : loginTemplateInfo
);
</script>

<template>
  <div class="container">
    <div class="form-container">
      <AuthFormHeading
        :heading-text="templateInfo.heading.mainText"
        :heading-helper-text="templateInfo.heading.helperText"
        class="heading"
      />
      <AuthForm :submitButtonText="templateInfo.submitButtonText" />
      <AuthFormOtherAuthOption
        :hint-text="templateInfo.otherAuthPage.hintText"
        :link-text="templateInfo.otherAuthPage.linkText"
        :link-to="templateInfo.otherAuthPage.linkTo"
        class="other-auth-option"
      />
    </div>
    <AuthBgText />
  </div>
</template>

<style scoped lang="scss">
.container {
  $pageWidth: 100vw;
  $pageHeight: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  width: $pageWidth;
  height: $pageHeight;
}
.form-container {
  $containerMaxWidth: 390px;
  @include sectionContainer;
  @include boxShadow3;

  max-width: $containerMaxWidth;

  .heading {
    padding-bottom: getInd(1000);
  }

  .other-auth-option {
    padding-top: getInd(700);
  }
}
</style>

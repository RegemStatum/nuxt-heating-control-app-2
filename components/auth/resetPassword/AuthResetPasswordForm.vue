<script setup lang="ts">
const { logoutUser } = useFirebaseAuth();
const { resetPassword } = useFirebaseAuth();

const email = useState("email", () => "");
const isLoading = useState("isLoading", () => false);
const isEmailSent = useState("isEmailSent", () => false);

interface InvalidEmailError {
  message: string;
  inputName: string;
}
const emptyError = {
  message: "",
  inputName: "",
};
const error = useState<InvalidEmailError>("error", () => ({ ...emptyError }));

const handleEmailChange = (newEmail: string) => {
  email.value = newEmail;
};

const handleResetPassword = async () => {
  try {
    isLoading.value = true;

    await logoutUser();
    validateAuthEmail(email.value, "email");
    await resetPassword(email.value);

    error.value = { ...emptyError };
    email.value = "";
    isEmailSent.value = true;
    isLoading.value = false;
  } catch (err: any) {
    console.error(err);

    // Error has error code if it comes from firebase
    const errCode = err.code;
    if (errCode) {
      error.value = {
        message: getErrorMessageFromErrorCode(errCode),
        inputName: err?.inputName || "",
      };
    } else {
      error.value = {
        message: err.message,
        inputName: err?.inputName || "",
      };
    }

    isLoading.value = false;
  }
};

onBeforeUnmount(() => {
  isEmailSent.value = false;
});
</script>

<template>
  <form @submit.prevent="handleResetPassword" class="form">
    <AuthResetPasswordEmailInput
      :email="email"
      @update:email="handleEmailChange"
      :isLoading="isLoading"
      :error="error"
    />
    <UiInfoMessage
      v-if="error.message && !error.inputName"
      type="error"
      :text="error.message"
      class="info-message"
    />
    <UiInfoMessage
      v-if="isEmailSent"
      type="success"
      text="Email has been sent on provided email"
      class="info-message"
    />
    <button type="submit" class="submit-btn" :disabled="isLoading">
      <p>Reset password</p>
      <UiLoadersButtonLoader v-if="isLoading" />
    </button>
  </form>
</template>

<style scoped lang="scss">
.form {
  .submit-btn {
    @include primaryButton;

    display: flex;
    justify-content: center;
    gap: getInd(200);
    margin-top: getInd(400);
  }

  .info-message {
    margin-top: getInd(400);
  }
}
</style>

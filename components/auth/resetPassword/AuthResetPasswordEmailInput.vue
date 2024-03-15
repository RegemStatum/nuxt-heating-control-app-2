<script setup lang="ts">
import {
  EMAIL_LENGTH_MIN,
  EMAIL_LENGTH_MAX,
} from "~/constants/validation/auth/email";

interface InvalidEmailError {
  message: string;
  inputName: string;
}
interface Props {
  email: string;
  isLoading: boolean;
  error: InvalidEmailError;
}
defineProps<Props>();

const emits = defineEmits(["update:email"]);

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const newEmail = target.value;
  emits("update:email", newEmail);
};
</script>

<template>
  <div class="input-container">
    <div class="input-label-container">
      <input
        :value="email"
        @input="handleInput"
        :disabled="isLoading"
        type="email"
        name="email"
        id="email"
        placeholder=""
        :minlength="EMAIL_LENGTH_MIN"
        :maxlength="EMAIL_LENGTH_MAX"
        class="input"
        :class="{ error: error.inputName === 'email' }"
      />
      <label for="email" class="label">Email</label>
    </div>
    <p v-if="error?.inputName === 'email'" class="error-text">
      {{ error.message }}
    </p>
  </div>
</template>

<style scoped lang="scss">
.input-container {
  @include inputContainer;
}
</style>

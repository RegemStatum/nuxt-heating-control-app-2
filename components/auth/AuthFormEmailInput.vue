<script setup lang="ts">
import {
  EMAIL_LENGTH_MIN,
  EMAIL_LENGTH_MAX,
} from "@/constants/validation/auth/email";

const authStore = useAuthStore();
const { user, isLoading, error } = storeToRefs(authStore);
</script>

<template>
  <div class="input-container">
    <div class="input-label-container">
      <input
        v-model="user.email"
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
    <p v-if="error.inputName === 'email'" class="error-text">
      {{ error.message }}
    </p>
  </div>
</template>

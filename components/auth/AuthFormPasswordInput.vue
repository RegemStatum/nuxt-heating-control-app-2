<script setup lang="ts">
import { EyeIcon, EyeSlashIcon } from "@heroicons/vue/24/outline";
import {
  PASSWORD_MIN_LENGTH,
  PASSWORD_MAX_LENGTH,
} from "@/constants/validation/auth/password";

const authStore = useAuthStore();
const { user, isLoading, error } = storeToRefs(authStore);

const isPasswordShown = useState("isPasswordShown", () => false);
const showPassword = () => {
  isPasswordShown.value = true;
};
const hidePassword = () => {
  isPasswordShown.value = false;
};
</script>

<template>
  <div class="input-container">
    <div class="input-label-container">
      <input
        v-model="user.password"
        :disabled="isLoading"
        :type="isPasswordShown ? 'text' : 'password'"
        name="password"
        id="password"
        placeholder=""
        :minlength="PASSWORD_MIN_LENGTH"
        :maxlength="PASSWORD_MAX_LENGTH"
        class="input"
        :class="{ error: error.inputName === 'password' }"
      />
      <label for="password" class="label">Password</label>
      <button type="button" class="toggle-password-visibility-btn">
        <EyeSlashIcon
          v-if="isPasswordShown"
          @click="hidePassword"
          class="icon"
        />
        <EyeIcon v-else @click="showPassword" class="icon" />
      </button>
    </div>
    <p v-if="error.inputName === 'password'" class="error-text">
      {{ error.message }}
    </p>
    <p class="hint-text">
      * Password must contain from {{ PASSWORD_MIN_LENGTH }} to
      {{ PASSWORD_MAX_LENGTH }} characters
    </p>
    <p class="hint-text">
      * Password must contain at least one special character
    </p>
  </div>
</template>

<style scoped lang="scss">
.toggle-password-visibility-btn {
  $size: 25px;

  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  width: $size;
  height: $size;
}
</style>

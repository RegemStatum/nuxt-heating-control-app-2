import { defineStore } from "pinia";
import StoreName from "./storeName";

enum AuthType {
  SIGN_UP = "signup",
  LOG_IN = "login",
}

const emptyError = {
  type: "",
  inputName: "",
  message: "",
};

const emptyUser = {
  email: "",
  password: "",
};

const useAuthStore = defineStore(StoreName.AUTH, {
  state: () => ({
    authType: AuthType.SIGN_UP,
    user: {
      ...emptyUser,
    },
    isLoading: false,
    error: { ...emptyError },
  }),
  actions: {
    setAuthTypeToSignup() {
      this.authType = AuthType.SIGN_UP;
    },
    setAuthTypeToLogin() {
      this.authType = AuthType.LOG_IN;
    },
    beginLoading() {
      this.isLoading = true;
    },
    endLoading() {
      this.isLoading = false;
    },
    setError(type: string, message: string, inputName = "") {
      this.error = {
        type,
        message,
        inputName,
      };
    },
    clearError() {
      this.error = { ...emptyError };
    },
    clearUser() {
      this.user = { ...emptyUser };
    },
  },
});

export default useAuthStore;

export { AuthType };

import { InvalidInputError } from "~/errors/client";
import {
  PASSWORD_MIN_LENGTH,
  PASSWORD_MAX_LENGTH,
} from "@/constants/validation/auth/password";

const checkIsAtLeastOneSpecialCharacter = (password: string) => {
  const regex = /[!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]/;
  return regex.test(password);
};

const validateAuthPassword = (password: string, passwordInputName?: string) => {
  if (!password || password === "" || password.trim() === "") {
    throw new InvalidInputError(
      "Password must not be empty",
      passwordInputName
    );
  }

  if (password.length < PASSWORD_MIN_LENGTH) {
    throw new InvalidInputError(
      `Password must contain at least ${PASSWORD_MIN_LENGTH} characters`,
      passwordInputName
    );
  }

  if (password.length > PASSWORD_MAX_LENGTH) {
    throw new InvalidInputError(
      `Password must contain  at most ${PASSWORD_MAX_LENGTH} characters`,
      passwordInputName
    );
  }

  const isAtLeastOneSpecialCharacter =
    checkIsAtLeastOneSpecialCharacter(password);
  if (!isAtLeastOneSpecialCharacter) {
    throw new InvalidInputError(
      "Password must contain at least one special character",
      passwordInputName
    );
  }
};

export default validateAuthPassword;

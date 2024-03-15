import { InvalidInputError } from "@/errors/client";
import {
  EMAIL_LENGTH_MIN,
  EMAIL_LENGTH_MAX,
} from "~/constants/validation/auth/email";

const checkIsValidEmail = (email: string) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email.toLowerCase());
};

const validateAuthEmail = (email: string, emailInputName?: string) => {
  if (!email || email === "" || email.trim() === "") {
    throw new InvalidInputError("Email must not be empty", emailInputName);
  }

  if (email.length < EMAIL_LENGTH_MIN) {
    throw new InvalidInputError(
      `Email must contain at least ${EMAIL_LENGTH_MIN} characters`,
      emailInputName
    );
  }

  if (email.length > EMAIL_LENGTH_MAX) {
    throw new InvalidInputError(
      `Email must contain at most ${EMAIL_LENGTH_MAX} characters`,
      emailInputName
    );
  }

  const isValidEmail = checkIsValidEmail(email);
  if (!isValidEmail) {
    throw new InvalidInputError(
      "Email must be valid. Please try again",
      emailInputName
    );
  }
};

export default validateAuthEmail;

import ClientError from "./clientError";

class InvalidInputError extends Error {
  inputName?: string;

  constructor(message: string, inputName?: string) {
    super(message);
    this.name = ClientError.INVALID_INPUT;
    this.inputName = inputName || "";
  }
}

export default InvalidInputError;

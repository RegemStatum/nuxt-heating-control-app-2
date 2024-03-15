const getErrorMessageFromErrorCode = (errorCode: string) => {
  return errorCode.split("/")[1].split("-").join(" ");
};

export default getErrorMessageFromErrorCode;
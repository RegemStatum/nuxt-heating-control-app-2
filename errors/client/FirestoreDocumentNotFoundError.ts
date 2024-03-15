import ClientError from "./clientError";

class FirestoreDocumentNotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = ClientError.FIRESTORE_DOCUMENT_NOT_FOUND;
  }
}

export default FirestoreDocumentNotFoundError;

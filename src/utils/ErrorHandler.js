export class ErrorHandler extends Error {
  constructor(
    message,
    httpStatus,
  ) {
    super();
    this.message = message;
    this.httpStatus = httpStatus;
  }
}

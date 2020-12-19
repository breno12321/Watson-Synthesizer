export class ErrorHandler extends Error {
  constructor(
    message,
    title,
    httpStatus,
  ) {
    super();
    this.message = message;
    this.title = title;
    this.httpStatus = httpStatus;
  }
}

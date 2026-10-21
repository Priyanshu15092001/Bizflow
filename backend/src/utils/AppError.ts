export class AppError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public code: string = 'ERROR'
  ) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
  }
}

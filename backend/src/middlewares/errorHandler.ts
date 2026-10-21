import type { NextFunction, Request, Response } from 'express';
import { AppError } from '../utils/AppError.js';

export function notFoundHandler(
  req: Request,
  _res: Response,
  next: NextFunction
) {
  next(
    new AppError(
      404,
      `Route ${req.method} ${req.originalUrl} not found`,
      'NOT_FOUND'
    )
  );
}

export function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      code: err.code,
    });
  }
  console.error(err);
  return res.status(500).json({
    success: false,
    message: 'Something went wrong',
    code: 'INTERNAL_ERROR',
  });
}

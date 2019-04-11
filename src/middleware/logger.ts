import {Request, Response} from 'express';
import {Logger} from '@nestjs/common';

export function logger(req: Request, res: Response, next) {
  let startTime = Date.now();

  next();

  let endTime = Date.now();

  Logger.warn(`${req.url} ${endTime - startTime}`, req.method, true);
}

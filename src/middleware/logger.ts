import {Request, Response} from 'express';
import {Logger} from '@nestjs/common';

export function logger(req: Request, res: Response, next) {
  let startTime = Date.now();

  console.log('大中间件 Before...');
  next();
  console.log('大中间件 After...');

  let endTime = Date.now();

  // Logger.warn(`${req.url} ${endTime - startTime}`, req.method, true);
}

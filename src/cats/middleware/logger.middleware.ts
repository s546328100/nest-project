import {Injectable, NestMiddleware} from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.log('中间件 Before...');
    next();
    console.log('中间件 After...');
  }
}

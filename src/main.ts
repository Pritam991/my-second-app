/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { NextFunction, Request, Response} from 'express';
import { AppModule } from './app.module';

function globalMiddleWareOne(req: Request, res: Response, next: NextFunction){
  console.log('this is the global middlleware number 1 ');
  next();
}
function globalMiddleWareTwo(req: Request, res: Response, next: NextFunction){
  console.log('this is the global middlleware number 2 ');
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(globalMiddleWareOne);
  app.use(globalMiddleWareTwo);
  await app.listen(3010);
}
bootstrap();

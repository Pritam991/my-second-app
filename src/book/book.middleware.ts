/* eslint-disable prettier/prettier */
import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";
import { Request, Response} from "express"

@Injectable()
export class BookMiddleWare implements NestMiddleware {
use(req: Request, res: Response, next: NextFunction) {
  const protocol = req.protocol; //http https
  const host = req.get('host'); // localhost
  const url = req.originalUrl; // /users
  const method = req.method; // get post
  const date = new Date().toDateString();

  console.log(protocol + "://" + host + url + " " + method + " " + date );
  
    
    next();
    
 
 } 
}
